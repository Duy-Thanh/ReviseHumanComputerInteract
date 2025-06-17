using System.Runtime.InteropServices;
using System.Security.Cryptography;
using System.Text;

namespace CloudIDE_
{
    internal static class Program
    {
        /// <summary>
        ///  The main entry point for the application.
        /// </summary>
        [DllImport("kernel32.dll", SetLastError = true)]
        [return: MarshalAs(UnmanagedType.Bool)]
        static extern bool AllocConsole();

        [DllImport("kernel32.dll", SetLastError = true)]
        [return: MarshalAs(UnmanagedType.Bool)]
        static extern bool FreeConsole();

        [MTAThread]
        static void Main()
        {
            //AllocConsole();
            // To customize application configuration such as set high DPI settings or default font,
            // see https://aka.ms/applicationconfiguration.
            if (!File.Exists("data.dll"))
            {
                MessageBox.Show("Important DLL not found, please reinstall the application!", "Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
                Environment.FailFast("data.dll not found");
            }
            ApplicationConfiguration.Initialize();
            Application.Run(new Form1());
            //FreeConsole();
        }
    }
}