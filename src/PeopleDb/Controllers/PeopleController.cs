using Microsoft.AspNet.Mvc;
using PeopleDb.Models;
using System.Linq;
using System.Threading.Tasks;
using PeopleDb.DAL.Interfaces;
using System.Collections.Generic;

namespace PeopleDb.Controllers
{
    [Route("api/[controller]")]
    public class PeopleController :Controller
    {
        private IPeopleRepository service;
        public PeopleController (IPeopleRepository _service)
        {
            service = _service;
        }

        [HttpGet]
        public async Task<IActionResult> Get ()
        {
            return Ok( await service.GetAllAsync());
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> Get (int id)
        {
            return Ok(await service.GetSingleAsync(id));
        }

        [HttpPost]
        public async Task<IActionResult> Post ([FromBody]People model)
        {
            service.Add(model);

            await service.CommitAsync();
            var url = Request.IsHttps ? "https" : "http" + $"//:{Request.Host}{Request.Path}/{model.Id}";
            return Created(url,model.Id);
        }

        [HttpPost("List")]
        public async Task<IActionResult> CrateList ([FromBody] List<People> model)
        {
            service.AddRange(model);

            await service.CommitAsync();
            var url = Request.IsHttps ? "https" : "http" + $"//:{Request.Host}{Request.Path}";
            return Created(url,model.Select(m=>m.Id));
        }
    }
}
