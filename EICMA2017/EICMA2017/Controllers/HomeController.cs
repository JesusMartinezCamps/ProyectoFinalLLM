using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace EICMA2017.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Qué es esta página.";

            return View();
        }

        public ActionResult InformacionSalon()
        {
            ViewBag.Message = "Historia del salón de Milán.";

            return View();
        }

        public ActionResult News()
        {
            ViewBag.Message = "Noticias.";

            return View();
        }
    }
}