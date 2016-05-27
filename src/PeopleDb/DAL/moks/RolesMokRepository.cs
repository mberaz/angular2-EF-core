using Microsoft.Data.Entity;
using PeopleDb.DAL.Interfaces;
using PeopleDb.Models;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PeopleDb.DAL.Repositories
{

    public class RolesMokRepository :EntityBaseRepository<Roles>, IRolesRepository
    {
        List<Roles> list { get; set; }
        public RolesMokRepository (PeopleDBContext context)
            : base(context)
        {
            list = new List<Roles> {
                new Roles { Id=1, Name="Admin" },
                new Roles { Id=2, Name="User"},
                new Roles { Id=3, Name="Qa"  },
              
            };
        }

        public override async Task<IEnumerable<Roles>> GetAllAsync ()
        {
            return await Task.Run(() => { return list; });
        }

        public override Roles GetSingle (int id)
        {
            return list.FirstOrDefault(p => p.Id == id);
        }

        public override async Task<Roles> GetSingleAsync (int id)
        {
            return await Task.Run(() => { return list.FirstOrDefault(p => p.Id == id); });
        }
    }

}
