using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CefSharp;

namespace CloudIDE_
{
    public class CustomContextMenuHandler : IContextMenuHandler
    {
        public void OnBeforeContextMenu(IWebBrowser browser, IBrowser chromiumBrowser, IFrame frame, IContextMenuParams parameters, IMenuModel model)
        {
            // Clear all context menu items
            model.Clear();
        }

        public bool OnContextMenuCommand(IWebBrowser browser, IBrowser chromiumBrowser, IFrame frame, IContextMenuParams parameters, CefMenuCommand commandId, CefEventFlags eventFlags)
        {
            return false;
        }

        public void OnContextMenuDismissed(IWebBrowser browser, IBrowser chromiumBrowser, IFrame frame)
        {
        }

        public bool RunContextMenu(IWebBrowser browser, IBrowser chromiumBrowser, IFrame frame, IContextMenuParams parameters,
            IMenuModel model, IRunContextMenuCallback callback)
        {
            // Optional: return false to show the (cleared) menu, or return true to suppress menu entirely
            return false;
        }
    }
}