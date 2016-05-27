using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Builder;
using Microsoft.AspNet.Hosting;
using Microsoft.AspNet.Http;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.AspNet.StaticFiles;
using Microsoft.AspNet.FileProviders;
using PeopleDb.DAL.Interfaces;
using PeopleDb.DAL.Repositories;
using PeopleDb.Services;
using Microsoft.Data.Entity;
using PeopleDb.Models;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.PlatformAbstractions;
using RoleDb.Services;

namespace PeopleDb
{
    public class Startup
    {
        public IConfigurationRoot Configuration { get; set; }
        private IHostingEnvironment _env;
        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit http://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices (IServiceCollection services)
        {
            services.AddEntityFramework()
               .AddSqlServer()
               .AddDbContext<PeopleDBContext>(options =>
                   options.UseSqlServer(Configuration["Data:PeopleConnection:ConnectionString"]));

            // Repositories
            //services.AddScoped<IPeopleRepository,PeopleRepository>();
            //services.AddScoped<IRolesRepository,RolesRepository>();
            //services.AddScoped<IAddressRepository,addressRepository>();

            services.AddScoped<IPeopleRepository,PeopleMokRepository>();
            services.AddScoped<IRolesRepository,RolesMokRepository>();
            services.AddScoped<IAddressRepository,addressMokRepository>();

            // Services
            services.AddScoped<IPeopleService,PeopleService>();
            services.AddScoped<IRolesService,RolesService>();
            services.AddMvc();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure (IApplicationBuilder app,IHostingEnvironment env,IApplicationEnvironment appEnv)
        {
            var builder = new ConfigurationBuilder()
            .SetBasePath(appEnv.ApplicationBasePath)
            .AddJsonFile("appsettings.json")
            .AddJsonFile($"appsettings.{env.EnvironmentName}.json",optional: true);

            builder.AddEnvironmentVariables();
            Configuration = builder.Build();

            app.UseIISPlatformHandler();

            app.UseDefaultFiles();
            app.UseStaticFiles();

            var mappedPath = env.WebRootPath.Replace("wwwroot","") + "\\scripts";
            app.UseFileServer(new FileServerOptions()
            {
                FileProvider = new PhysicalFileProvider(mappedPath),
                RequestPath = new PathString("/scripts"),
            });

            app.UseMvc();
        }

        // Entry point for the application.
        public static void Main (string[] args) => WebApplication.Run<Startup>(args);
    }
}
