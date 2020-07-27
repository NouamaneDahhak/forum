using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using FORUM.Data;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using Microsoft.AspNetCore.Http;

namespace FORUM
{
    public class Startup
    {
        readonly string MyAllowSpecificOrigins = "_myAllowSpecificOrigins";

        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
              services.AddCors(options =>
        {
            options.AddPolicy(name: MyAllowSpecificOrigins,
                              builder =>
                              {
                                  builder.WithOrigins("http://localhost:5000");
                              });
        });

   
        // services.AddCors(options =>
        // {
        //     options.AddPolicy("AllowAll", p =>
        //     {
        //         p.AllowAnyOrigin()
        //         .AllowAnyHeader()
        //         .AllowAnyMethod();
        //     });
        // });
    //   services.AddMvc(option => option.EnableEndpointRouting = false) .AddNewtonsoftJson();


            services.AddDbContext<ForumContext>(opt => opt.UseMySql(Configuration.GetConnectionString("PostConnection")));
            services.AddControllers();
            services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());
            services.AddScoped<IPostRepo,SqlForumRepo>();
            services.AddScoped<IUserRepo,SqlUserRepo>();
            services.AddScoped<ICommentRepo,SqlCommentRepo>();
            services.AddScoped<ICategoryRepo,SqlCategoryRepo>();
            services.AddScoped<IReactionRepo,SqlReactionRepo>();
            // services.AddScoped<IPostRepo,MockPostRepo>();
            services.AddControllersWithViews()
    .AddNewtonsoftJson(options =>
    options.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore
);

        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
           
            // app.UseCors("AllowAll");
            // app.UseMvc();

                          app.UseCors(MyAllowSpecificOrigins);

                          app.Run(async (context) =>
            {
                await context.Response.WriteAsync("MVC didn't find anything!");
            });

        }
    }
}
