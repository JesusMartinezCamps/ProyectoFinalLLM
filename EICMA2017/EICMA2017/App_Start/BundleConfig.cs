using System.Web;
using System.Web.Optimization;

namespace EICMA2017
{
    public class BundleConfig
    {
        // For more information on bundling, visit https://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery")
                        .Include("~/Scripts/customScript.js")
                        .Include("~/Scripts/jquery-{version}.js")
                        .Include("~/Scripts/jquery.validate*")
                        .Include("~/Scripts/modernizr-*")
                        );

            bundles.Add(new ScriptBundle("~/bundles/bootstrap")
                        .Include("~/Scripts/bootstrap.js")
                        .Include("~/Scripts/respond.js")
                        );

            bundles.Add(new StyleBundle("~/Content/css")
                        .Include("~/Content/indexstyle.css")
                        .Include("~/Content/newsstyle.css")
                        .Include("~/Content/site.css")
                        .Include("~/Content/bootstrap.css")
                        );
        }
    }
}
