using CefSharp;
using CefSharp.WinForms;
using CloudIDE_.Properties;
using System.Diagnostics;
using System.Runtime.InteropServices;
using System.Text;
using System.Windows.Forms;

namespace CloudIDE_
{
    public partial class Form1 : Form
    {
        private Rectangle previousBounds;
        private bool isMaximized = false;
        private ContextMenuStrip customMenu;

        // Constants for window messages
        private const int WM_NCLBUTTONDOWN = 0xA1;
        private const int HTCAPTION = 0x2;

        private ChromiumWebBrowser browser;

        private static int LastMessageId = 600000;

        // Add this field to your existing fields
        private EmbeddedWebServer _embeddedServer;
        private readonly int _serverPort = 3000;

        [DllImport("user32.dll")]
        public static extern bool ReleaseCapture();

        [DllImport("user32.dll")]
        public static extern int SendMessage(IntPtr hWnd, int Msg, int wParam, int lParam);

        [DllImport("data.dll", CallingConvention = CallingConvention.Cdecl)]
        public static extern IntPtr dat0();

        [DllImport("kernel32.dll", SetLastError = true)]
        public static extern IntPtr GetModuleHandle(string lpModuleName);

        [DllImport("kernel32.dll", SetLastError = true)]
        public static extern IntPtr LoadLibrary(string lpFileName);

        [DllImport("kernel32.dll", SetLastError = true)]
        public static extern bool FreeLibrary(IntPtr hModule);

        private static IntPtr dllHandle = IntPtr.Zero;

        public static bool IsDllLoaded()
        {
            IntPtr handle = GetModuleHandle("data.dll");
            return handle != IntPtr.Zero;
        }

        public static bool LoadDll()
        {
            try
            {
                if (!IsDllLoaded())
                {
                    dllHandle = LoadLibrary("data.dll");
                    return dllHandle != IntPtr.Zero;
                }
                return true;
            }
            catch
            {
                return false;
            }
        }

        public static IntPtr SafeCallDat0()
        {
            try
            {
                // Check if DLL is loaded before calling
                if (!IsDllLoaded())
                {
                    ShowErrorAndRestart("Application memory corrupted");
                    return IntPtr.Zero;
                }

                return dat0();
            }
            catch (DllNotFoundException)
            {
                ShowErrorAndRestart("Important DLL was not found");
                return IntPtr.Zero;
            }
            catch (EntryPointNotFoundException)
            {
                ShowErrorAndRestart("DLL file was damaged");
                return IntPtr.Zero;
            }
            catch (Exception ex)
            {
                ShowErrorAndRestart($"Error calling DLL function: {ex.Message}");
                return IntPtr.Zero;
            }
        }

        private static void ShowErrorAndRestart(string message)
        {
            DialogResult result = MessageBox.Show(
                $"{message}\n\nThe application will restart to recover.",
                "Fatal Error",
                MessageBoxButtons.OKCancel,
                MessageBoxIcon.Error);

            if (result == DialogResult.OK)
            {
                RestartApplication();
            }
            else
            {
                Environment.Exit(1);
            }
        }

        private static void RestartApplication()
        {
            try
            {
                // Get current executable path
                string exePath = Application.ExecutablePath;

                // Start new instance
                Process.Start(exePath);

                // Exit current instance
                Environment.Exit(0);
            }
            catch (Exception ex)
            {
                MessageBox.Show($"Failed to restart application: {ex.Message}", "Restart Error",
                              MessageBoxButtons.OK, MessageBoxIcon.Error);
                Environment.Exit(1);
            }
        }

        private async void StartEmbeddedWebServer()
        {
            try
            {
                // Start the embedded resource server
                _embeddedServer = new EmbeddedWebServer(_serverPort, "CloudIDE_.WebFiles");
                await _embeddedServer.StartAsync();

                // Get URL from server or fallback to DLL
                string url = GetBrowserUrl();

                // Initialize browser
                browser = new ChromiumWebBrowser(url);
                browser.Dock = DockStyle.Fill;
                browser.MenuHandler = new CustomContextMenuHandler();
                panel2.Controls.Add(browser);

                // Add your existing browser event handlers
                browser.IsBrowserInitializedChanged += OnIsBrowserInitializedChanged;
                browser.LoadingStateChanged += OnLoadingStateChanged;
                browser.ConsoleMessage += OnBrowserConsoleMessage;
                browser.StatusMessage += OnBrowserStatusMessage;
                browser.TitleChanged += OnBrowserTitleChanged;
                browser.AddressChanged += OnBrowserAddressChanged;
                browser.LoadError += OnBrowserLoadError;

                Console.WriteLine($"✅ Embedded web server started successfully at http://localhost:{_serverPort}");
            }
            catch (Exception ex)
            {
                Console.WriteLine($"❌ Failed to start embedded server: {ex.Message}");
                MessageBox.Show($"Server startup failed: {ex.Message}\nFalling back to DLL data.",
                               "Server Warning", MessageBoxButtons.OK, MessageBoxIcon.Warning);

                // Fallback to DLL data
                InitializeBrowserWithDllData();
            }
        }

        private string GetBrowserUrl()
        {
            // Priority: 1. Embedded resources, 2. DLL data, 3. Fallback

            // Check if embedded server is running (give it a moment to start)
            if (_embeddedServer != null)
            {
                return $"http://localhost:{_serverPort}";
            }

            // Fallback to DLL data
            if (!LoadDll())
            {
                return "about:blank";
            }

            IntPtr ptr = SafeCallDat0();
            if (ptr != IntPtr.Zero)
            {
                string dllUrl = Marshal.PtrToStringAnsi(ptr);
                if (!string.IsNullOrEmpty(dllUrl))
                {
                    return dllUrl;
                }
            }

            // Final fallback
            return "about:blank";
        }

        private void InitializeBrowserWithDllData()
        {
            // Your existing DLL fallback logic
            if (!LoadDll())
            {
                MessageBox.Show("Critical system files are missing. Please reinstall the application.",
                               "Startup Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
                Environment.Exit(1);
                return;
            }

            IntPtr ptr = SafeCallDat0();
            string url = "about:blank";

            if (ptr != IntPtr.Zero)
            {
                url = Marshal.PtrToStringAnsi(ptr) ?? "about:blank";
            }

            browser = new ChromiumWebBrowser(url);
            browser.Dock = DockStyle.Fill;
            browser.MenuHandler = new CustomContextMenuHandler();
            panel2.Controls.Add(browser);

            // Add event handlers
            browser.IsBrowserInitializedChanged += OnIsBrowserInitializedChanged;
            browser.LoadingStateChanged += OnLoadingStateChanged;
            browser.ConsoleMessage += OnBrowserConsoleMessage;
            browser.StatusMessage += OnBrowserStatusMessage;
            browser.TitleChanged += OnBrowserTitleChanged;
            browser.AddressChanged += OnBrowserAddressChanged;
            browser.LoadError += OnBrowserLoadError;
        }

        // **IMPORTANT: Clean up server when form closes**
        protected override void OnFormClosed(FormClosedEventArgs e)
        {
            try
            {
                _embeddedServer?.Stop();
                Console.WriteLine("🛑 Embedded web server stopped");
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error stopping server: {ex.Message}");
            }

            base.OnFormClosed(e);
        }

        private void DebugEmbeddedResources()
        {
            var assembly = System.Reflection.Assembly.GetExecutingAssembly();
            var allResources = assembly.GetManifestResourceNames();

            Console.WriteLine("🔍 ALL EMBEDDED RESOURCES:");
            foreach (var resource in allResources)
            {
                Console.WriteLine($"  - {resource}");
            }

            Console.WriteLine($"\n🎯 LOOKING FOR RESOURCES STARTING WITH: CloudIDE_.WebFiles");
            var webResources = allResources.Where(r => r.StartsWith("CloudIDE_.WebFiles")).ToArray();

            if (webResources.Length == 0)
            {
                Console.WriteLine("❌ NO WEB RESOURCES FOUND!");
                Console.WriteLine("💡 Make sure files are set to 'Embedded Resource' build action");
            }
            else
            {
                Console.WriteLine($"✅ Found {webResources.Length} web resources:");
                foreach (var resource in webResources)
                {
                    Console.WriteLine($"  - {resource}");
                }
            }
        }

        public Form1()
        {
            InitializeComponent();

            this.SetStyle(ControlStyles.ResizeRedraw, true);

            close.Image = Resources.CloseNormal;
            maximize.Image = Resources.MaximizeNormal;
            minimize.Image = Resources.MinimizeNormal;
            badge.Image = Resources.BadgeNormal;

            close.MouseEnter += (s, e) => close.Image = Resources.CloseHover;
            close.MouseLeave += (s, e) => close.Image = Resources.CloseNormal;

            maximize.MouseEnter += maximize_MouseEnter;
            maximize.MouseLeave += maximize_MouseLeave;

            minimize.MouseEnter += (s, e) => minimize.Image = Resources.MinimizeHover;
            minimize.MouseLeave += (s, e) => minimize.Image = Resources.MinimizeNormal;

            panel1.MouseDown += Panel1_MouseDown;

            // Create the context menu
            customMenu = new ContextMenuStrip();
            customMenu.BackColor = Color.White;
            customMenu.Font = new Font("Segoe UI", 9);

            panel2.Controls.Clear();

            // CefSharp settings
            var settings = new CefSettings();
            settings.CefCommandLineArgs.Add("disable-gpu-compositing", "1");
            Cef.Initialize(settings);

            DebugEmbeddedResources();

            // **FIX: Start the embedded web server instead of the old DLL-only logic**
            StartEmbeddedWebServer();

            // Add custom menu items
            customMenu.Items.Add("Back", null, (s, e) => browser?.Back());
            customMenu.Items.Add("Forward", null, (s, e) => browser?.Forward());
            customMenu.Items.Add("Reload", null, (s, e) => browser?.Reload());
            customMenu.Items.Add("Stop", null, (s, e) => browser?.Stop());
            customMenu.Items.Add(new ToolStripSeparator());

            customMenu.Items.Add("Home", null, (s, e) =>
            {
                if (browser != null)
                {
                    string homeUrl = GetBrowserUrl();
                    browser.Load(homeUrl);
                }
            });

            customMenu.Items.Add(new ToolStripSeparator());
            customMenu.Items.Add("Clear Cache", null, async (s, e) =>
            {
                if (browser == null) return;

                if (MessageBox.Show("Are you sure you want to clear the cache?", "Clear Cache", MessageBoxButtons.YesNo, MessageBoxIcon.Question) == DialogResult.Yes)
                {
                    Cef.GetGlobalCookieManager().DeleteCookies("", "");
                    var host = browser.GetBrowserHost();
                    var msgId = Interlocked.Increment(ref LastMessageId);
                    var observer = new TaskMethodDevToolsMessageObserver(msgId);
                    using (var observerRegistration = host.AddDevToolsMessageObserver(observer))
                    {
                        int id = 0;
                        const string methodName = "Network.clearBrowserCache";

                        if (Cef.CurrentlyOnThread(CefThreadIds.TID_UI))
                        {
                            id = host.ExecuteDevToolsMethod(msgId, methodName);
                        }
                        else
                        {
                            id = await Cef.UIThreadTaskFactory.StartNew(() =>
                            {
                                return host.ExecuteDevToolsMethod(msgId, methodName);
                            });
                        }

                        var result = await observer.Task;
                        var success = result.Item1;

                        if (success)
                        {
                            MessageBox.Show("Cache cleared successfully.", "Clear cache", MessageBoxButtons.OK, MessageBoxIcon.Information);
                        }
                        else
                        {
                            MessageBox.Show("Failed to clear cache.", "Clear cache", MessageBoxButtons.OK, MessageBoxIcon.Error);
                        }
                    }
                }
            });

            customMenu.Items.Add("Development Mode", null, (s, e) =>
            {
                if (browser == null) return;

                Password passwordDialog = new Password();
                if (passwordDialog.ShowDialog() == DialogResult.OK)
                {
                    browser.ShowDevTools();
                }
                else
                {
                    MessageBox.Show("Password denied. Access is restricted.", "Access Denied", MessageBoxButtons.OK, MessageBoxIcon.Error);
                }
            });

            customMenu.Items.Add(new ToolStripSeparator());
            customMenu.Items.Add("Server Status", null, async (s, e) =>
            {
                bool isRunning = await IsServerRunningAsync();
                string status = isRunning ? "✅ Running" : "❌ Stopped";
                MessageBox.Show($"Embedded Web Server: {status}\nURL: http://localhost:{_serverPort}",
                               "Server Status", MessageBoxButtons.OK, MessageBoxIcon.Information);
            });

            customMenu.Items.Add(new ToolStripSeparator());
            customMenu.Items.Add("About...", null, (s, e) =>
            {
                MessageBox.Show("CloudIDE+\n\nVersion: 1.0.0\n\nDeveloped by Duy Thanh (Nekkochan), La Van Hop (hopphong716)", "About CloudIDE+", MessageBoxButtons.OK, MessageBoxIcon.Information);
            });

            customMenu.Items.Add(new ToolStripSeparator());
            customMenu.Items.Add("Close this menu", null, (s, e) => customMenu.Close());
            customMenu.Items.Add("Exit", null, (s, e) => this.Close());

            this.StartPosition = FormStartPosition.CenterScreen;
        }

        // Add server status check method
        private async Task<bool> IsServerRunningAsync()
        {
            try
            {
                using var client = new System.Net.Http.HttpClient();
                client.Timeout = TimeSpan.FromSeconds(1);
                var response = await client.GetAsync($"http://localhost:{_serverPort}/");
                return response.IsSuccessStatusCode;
            }
            catch
            {
                return false;
            }
        }

        private const int cGrip = 16;
        private const int cCaption = 32;

        protected override void WndProc(ref Message m)
        {
            if (m.Msg == 0x84)
            {
                Point pos = new Point(m.LParam.ToInt32());
                pos = this.PointToClient(pos);
                if (pos.Y < cCaption)
                {
                    m.Result = (IntPtr)2;
                    return;
                }

                if (pos.X >= this.ClientSize.Width - cGrip && pos.Y >= this.ClientSize.Height - cGrip)
                {
                    m.Result = (IntPtr)17;
                    return;
                }
            }
            base.WndProc(ref m);
        }

        private void OnBrowserLoadError(object? sender, LoadErrorEventArgs e)
        {
            if (e.ErrorCode == CefErrorCode.Aborted)
            {
                return;
            }
        }

        private void OnBrowserAddressChanged(object? sender, AddressChangedEventArgs e)
        {
            var b = ((ChromiumWebBrowser)sender);
            b.Focus();
        }

        private void OnBrowserTitleChanged(object? sender, TitleChangedEventArgs e)
        {
            return;
        }

        private void OnBrowserStatusMessage(object? sender, StatusMessageEventArgs e)
        {
            return;
        }

        private void OnBrowserConsoleMessage(object? sender, ConsoleMessageEventArgs e)
        {
            Console.WriteLine(string.Format("Line: {0}, Source: {1}, Message: {2}", e.Line, e.Source, e.Message));
        }

        private void OnLoadingStateChanged(object? sender, LoadingStateChangedEventArgs e)
        {
            return;
        }

        private void OnIsBrowserInitializedChanged(object? sender, EventArgs e)
        {
            return;
        }

        private void Panel1_MouseDown(object? sender, MouseEventArgs e)
        {
            if (e.Button == MouseButtons.Left)
            {
                Point mouseScreenPos = Cursor.Position;

                if (isMaximized)
                {
                    double percentX = (double)mouseScreenPos.X / this.Width;
                    double percentY = (double)mouseScreenPos.Y / this.Height;

                    this.Bounds = previousBounds;
                    isMaximized = false;

                    int newX = mouseScreenPos.X - (int)(this.Width * percentX);
                    int newY = mouseScreenPos.Y - (int)(this.Height * percentY);
                    this.Location = new Point(newX, newY);

                    maximize.Image = Resources.MaximizeNormal;
                }

                ReleaseCapture();
                SendMessage(this.Handle, WM_NCLBUTTONDOWN, HTCAPTION, 0);
            }
        }

        private void maximize_MouseLeave(object? sender, EventArgs e)
        {
            if (isMaximized)
            {
                maximize.Image = Resources.MaximizedNormal;
            }
            else
            {
                maximize.Image = Resources.MaximizeNormal;
            }
        }

        private void maximize_MouseEnter(object? sender, EventArgs e)
        {
            if (isMaximized)
            {
                maximize.Image = Resources.MaximizedHover;
            }
            else
            {
                maximize.Image = Resources.MaxmizeHover;
            }
        }

        protected override void OnResize(EventArgs e)
        {
            base.OnResize(e);

            if (this.WindowState == FormWindowState.Maximized)
            {
                this.Bounds = Screen.FromHandle(this.Handle).WorkingArea;
            }
        }

        private void close_Click(object sender, EventArgs e)
        {
            this.Close();
        }

        private void maximize_Click(object sender, EventArgs e)
        {
            if (!isMaximized)
            {
                previousBounds = this.Bounds;
                this.Bounds = Screen.FromHandle(this.Handle).WorkingArea;
                isMaximized = true;
            }
            else
            {
                this.Bounds = previousBounds;
                maximize.Image = Resources.MaximizedNormal;
                isMaximized = false;
            }
        }

        private void minimize_Click(object sender, EventArgs e)
        {
            this.WindowState = FormWindowState.Minimized;
        }

        private void badge_Click(object sender, EventArgs e)
        {
            Point menuLocation = badge.PointToScreen(new Point(0, badge.Height));
            customMenu.Show(menuLocation);
        }
    }
}