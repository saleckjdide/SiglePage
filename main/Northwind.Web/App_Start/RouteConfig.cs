﻿#region

using System.Web.Mvc;
using System.Web.Routing;

#endregion

namespace Northwind.Web
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.MapRoute("Default", "{controller}/{action}/{id}", new {controller = "Home", action = "spa", id = UrlParameter.Optional}
                );
        }
    }
}