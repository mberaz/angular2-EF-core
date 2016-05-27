using Microsoft.Data.Entity;
using PeopleDb.DAL.Interfaces;
using PeopleDb.Models;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


namespace PeopleDb.DAL.Repositories
{

    public class PeopleMokRepository :EntityBaseRepository<People>, IPeopleRepository
    {
        List<People> list { get; set; }
        public PeopleMokRepository (PeopleDBContext context)
            : base(context)
        {
            list = new List<People> {
                new People { Id=1, FirstName="michael", LastName="berezin", Email="michael.berezin@email.com", RoleId=1},
                new People { Id=2, FirstName="test", LastName="testy", Email="testuser@email.com", RoleId=1},
                new People { Id=3, FirstName="the ", LastName="user", Email="doomguy@email.com", RoleId=2},
                new People { Id=4, FirstName="user", LastName="rrrr", Email="userrrr@email.com", RoleId=3}
            };
        }

        public override async Task<IEnumerable<People>> GetAllAsync ()
        {
            return await Task.Run(() => { return list; });
        }

        public override People GetSingle (int id)
        {
            return list.FirstOrDefault(p=>p.Id==id);
        }

        public override async Task<People> GetSingleAsync (int id)
        {
            return await Task.Run(() => { return list.FirstOrDefault(p => p.Id == id); }); 
        }
    }

}
