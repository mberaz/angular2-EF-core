using Microsoft.AspNet.Mvc;
using PeopleDb.Models;
using System.Linq;
using System.Threading.Tasks;
using PeopleDb.DAL.Interfaces;
using System.Collections.Generic;
using PeopleDb.Services;

namespace PeopleDb.Controllers
{
    [Route("api/[controller]")]
    public class RolesController :Controller
    {
        private IRolesService service;
        public RolesController (IRolesService _service)
        {
            service = _service;
        }

        [HttpGet]
        public async Task<IActionResult> Get ()
        {
            return Ok(await service.GetAll());
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> Get (int id)
        {
            return Ok(await service.Get(id));
        }

        [HttpPost]
        public async Task<IActionResult> Post ([FromBody]Roles model)
        {
            await service.Create(model);
            var url = Request.IsHttps ? "https" : "http" + $"//:{Request.Host}{Request.Path}/{model.Id}";
            return Created(url,model.Id);
        }

        [HttpPost("List")]
        public async Task<IActionResult> CrateList ([FromBody] List<Roles> model)
        {
            var result=await service.Create(model);
            var url = Request.IsHttps ? "https" : "http" + $"//:{Request.Host}{Request.Path}";
            return Created(url,result);
        }
    }
}
