using System;
using System.IO;
using System.Net;
using System.Text;
using System.Threading.Tasks;
using System.Reflection;
using System.Linq;

namespace CloudIDE_
{
    public class EmbeddedWebServer
    {
        private HttpListener _listener;
        private int _port;
        private bool _isRunning;
        private Assembly _assembly;
        private string _resourceNamespace;

        public EmbeddedWebServer(int port = 8080, string resourceNamespace = "CloudIDE_.WebFiles")
        {
            _port = port;
            _assembly = Assembly.GetExecutingAssembly();
            _resourceNamespace = resourceNamespace;
        }

        public async Task StartAsync()
        {
            if (_isRunning) return;

            _listener = new HttpListener();
            _listener.Prefixes.Add($"http://localhost:{_port}/");

            try
            {
                _listener.Start();
                _isRunning = true;

                Console.WriteLine($"Embedded resource server started at http://localhost:{_port}");
                Console.WriteLine($"Serving embedded resources from: {_resourceNamespace}");

                // Debug: List all available resources
                ListAvailableResources();

                // Handle requests asynchronously
                _ = Task.Run(async () => await HandleRequestsAsync());
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Failed to start server: {ex.Message}");
                throw;
            }
        }

        private void ListAvailableResources()
        {
            var resources = _assembly.GetManifestResourceNames();
            Console.WriteLine("🔍 Available embedded resources:");
            foreach (var resource in resources.Where(r => r.StartsWith(_resourceNamespace)))
            {
                Console.WriteLine($"  - {resource}");
            }
        }

        public void Stop()
        {
            if (!_isRunning) return;

            _isRunning = false;
            _listener?.Stop();
            _listener?.Close();
            Console.WriteLine("Embedded resource server stopped");
        }

        private async Task HandleRequestsAsync()
        {
            while (_isRunning)
            {
                try
                {
                    var context = await _listener.GetContextAsync();
                    _ = Task.Run(() => ProcessRequest(context));
                }
                catch (ObjectDisposedException)
                {
                    break;
                }
                catch (Exception ex)
                {
                    Console.WriteLine($"Error handling request: {ex.Message}");
                }
            }
        }

        private void ProcessRequest(HttpListenerContext context)
        {
            try
            {
                var request = context.Request;
                var response = context.Response;

                // Get the requested file path
                string requestedPath = request.Url.AbsolutePath;
                Console.WriteLine($"📝 Requested: {requestedPath}");

                if (requestedPath == "/") requestedPath = "/index.html";

                // Try multiple resource name patterns
                string[] possibleResourceNames = GetPossibleResourceNames(requestedPath);
                string foundResource = null;

                foreach (var resourceName in possibleResourceNames)
                {
                    if (ResourceExists(resourceName))
                    {
                        foundResource = resourceName;
                        break;
                    }
                }

                if (foundResource != null)
                {
                    Console.WriteLine($"✅ Found resource: {foundResource}");
                    ServeEmbeddedResource(response, foundResource);
                }
                else
                {
                    Console.WriteLine($"❌ Resource not found for: {requestedPath}");
                    Console.WriteLine($"🔍 Tried these names:");
                    foreach (var name in possibleResourceNames)
                    {
                        Console.WriteLine($"  - {name}");
                    }
                    Send404(response);
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error processing request: {ex.Message}");
                try
                {
                    context.Response.StatusCode = 500;
                    context.Response.Close();
                }
                catch { }
            }
        }

        private string[] GetPossibleResourceNames(string urlPath)
        {
            string cleanPath = urlPath.TrimStart('/');

            // Try different naming patterns
            return new string[]
            {
                // Pattern 1: Direct file name (e.g., "index.html")
                $"{_resourceNamespace}.{cleanPath}",
                
                // Pattern 2: Replace / with . (e.g., "css/style.css" -> "css.style.css")
                $"{_resourceNamespace}.{cleanPath.Replace('/', '.')}",
                
                // Pattern 3: Handle files in root (common pattern)
                $"{_resourceNamespace}.{Path.GetFileName(cleanPath)}",
                
                // Pattern 4: Handle special cases for your structure
                cleanPath == "index.html" ? $"{_resourceNamespace}.index.html" : null,
                cleanPath == "script.js" ? $"{_resourceNamespace}.script.js" : null,
                cleanPath == "style.css" ? $"{_resourceNamespace}.style.css" : null,
            }.Where(x => x != null).ToArray();
        }

        private bool ResourceExists(string resourceName)
        {
            using var stream = _assembly.GetManifestResourceStream(resourceName);
            return stream != null;
        }

        private void ServeEmbeddedResource(HttpListenerResponse response, string resourceName)
        {
            try
            {
                using var stream = _assembly.GetManifestResourceStream(resourceName);
                if (stream == null)
                {
                    Send404(response);
                    return;
                }

                byte[] resourceBytes = new byte[stream.Length];
                stream.Read(resourceBytes, 0, resourceBytes.Length);

                string contentType = GetContentType(resourceName);

                response.ContentType = contentType;
                response.ContentLength64 = resourceBytes.Length;
                response.StatusCode = 200;

                // Add CORS headers
                response.Headers.Add("Access-Control-Allow-Origin", "*");
                response.Headers.Add("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
                response.Headers.Add("Access-Control-Allow-Headers", "Content-Type");

                response.OutputStream.Write(resourceBytes, 0, resourceBytes.Length);
                response.OutputStream.Close();

                Console.WriteLine($"✅ Served: {resourceName} ({resourceBytes.Length} bytes)");
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error serving embedded resource {resourceName}: {ex.Message}");
                Send404(response);
            }
        }

        private void Send404(HttpListenerResponse response)
        {
            try
            {
                response.StatusCode = 404;
                string html = $@"
<!DOCTYPE html>
<html>
<head>
    <title>404 - Resource Not Found</title>
    <style>
        body {{ font-family: Arial, sans-serif; margin: 40px; }}
        .error {{ color: #d32f2f; }}
        .resources {{ background: #f5f5f5; padding: 15px; margin: 20px 0; }}
        .resources ul {{ margin: 0; }}
    </style>
</head>
<body>
    <h1 class='error'>404 - Embedded Resource Not Found</h1>
    <div class='resources'>
        <h3>Available resources:</h3>
        <ul>
            {GetAvailableResourcesList()}
        </ul>
    </div>
    <p><strong>Debug Info:</strong></p>
    <ul>
        <li>Namespace: {_resourceNamespace}</li>
        <li>Port: {_port}</li>
        <li>Assembly: {_assembly.GetName().Name}</li>
    </ul>
</body>
</html>";

                byte[] data = Encoding.UTF8.GetBytes(html);
                response.ContentType = "text/html";
                response.ContentLength64 = data.Length;
                response.OutputStream.Write(data, 0, data.Length);
                response.OutputStream.Close();
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error sending 404: {ex.Message}");
            }
        }

        private string GetAvailableResourcesList()
        {
            var resources = _assembly.GetManifestResourceNames();
            var webResources = new StringBuilder();

            foreach (var resource in resources.Where(r => r.StartsWith(_resourceNamespace)))
            {
                // Convert resource name back to URL path
                string urlPath = resource.Substring(_resourceNamespace.Length + 1);
                webResources.Append($"<li><a href=\"/{urlPath}\">/{urlPath}</a> (Resource: {resource})</li>");
            }

            return webResources.ToString();
        }

        private string GetContentType(string resourceName)
        {
            string extension = Path.GetExtension(resourceName).ToLowerInvariant();
            return extension switch
            {
                ".html" => "text/html",
                ".htm" => "text/html",
                ".css" => "text/css",
                ".js" => "application/javascript",
                ".json" => "application/json",
                ".png" => "image/png",
                ".jpg" => "image/jpeg",
                ".jpeg" => "image/jpeg",
                ".gif" => "image/gif",
                ".svg" => "image/svg+xml",
                ".ico" => "image/x-icon",
                ".txt" => "text/plain",
                ".xml" => "application/xml",
                _ => "application/octet-stream"
            };
        }
    }
}