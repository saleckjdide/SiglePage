#region

using System.Web.Mvc;

#endregion

namespace Northwind.Web.Controllers
{
public class CustomerController : Controller
{
    //
    // GET: /Customer/
    public ActionResult Index()
    {
        return View();
    }


    //
    // GET: /Customer/Edit/5
    public ActionResult Edit()
    {
        return View();
    }
}
}