using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using Microsoft.AspNet.SignalR;
using Microsoft.Owin.Security.OAuth;
using Newtonsoft.Json.Serialization;
using Unity;
using Unity.Lifetime;
using WebApp.App_Start;

namespace WebApp
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            var container = new UnityContainer();
            var resolver = new UnityResolver(container);
            resolver.RegisterTypes();
            config.DependencyResolver = resolver;

			//config.EnableCors(new EnableCorsAttribute("http://localhost:4200", headers:"*", methods:"*"));
			config.EnableCors();

			GlobalHost.DependencyResolver = new SignalRUnityDependencyResolver(container);

            // Web API configuration and services
            // Configure Web API to use only bearer token authentication.
            config.SuppressDefaultHostAuthentication();
            config.Filters.Add(new HostAuthenticationFilter(OAuthDefaults.AuthenticationType));

            // Web API routes
            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );


			//Customized ROute
			config.Routes.MapHttpRoute(
				name: "Lines",
				routeTemplate: "api/{controller}/{day}/{lineName}/{newDepartures}",
				defaults: new { day = RouteParameter.Optional, lineName = RouteParameter.Optional, newDepartures = RouteParameter.Optional }
			);

		}
    }
}
