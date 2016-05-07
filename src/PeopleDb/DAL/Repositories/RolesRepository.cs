using Microsoft.Data.Entity;
using PeopleDb.DAL.Interfaces;
using PeopleDb.Models;
using System.Linq;
using System.Threading.Tasks;

namespace PeopleDb.DAL.Repositories
{

    public class RolesRepository :EntityBaseRepository<Roles>, IRolesRepository
    {
        private PeopleDBContext _context;
        public RolesRepository (PeopleDBContext context)
            : base(context)
        {
            _context = context;
        }
        public override Roles GetSingle (int id)
        {
            return _context.Set<Roles>().FirstOrDefault(x => x.Id == id);
        }

        public override async Task<Roles> GetSingleAsync (int id)
        {
            return await _context.Set<Roles>().FirstOrDefaultAsync(e => e.Id == id);
        }
    }

}
