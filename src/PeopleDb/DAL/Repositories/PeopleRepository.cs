using Microsoft.Data.Entity;
using PeopleDb.DAL.Interfaces;
using PeopleDb.Models;
using System.Linq;
using System.Threading.Tasks;


namespace PeopleDb.DAL.Repositories
{

    public class PeopleRepository :EntityBaseRepository<People>, IPeopleRepository
    {
        private PeopleDBContext _context;
        public PeopleRepository (PeopleDBContext context)
            : base(context)
        {
            _context = context;
        }

        public override People GetSingle (int id)
        {
            return _context.Set<People>().FirstOrDefault(x => x.Id == id);
        }

        public override async Task<People> GetSingleAsync (int id)
        {
            return await _context.Set<People>().FirstOrDefaultAsync(e => e.Id == id);
        }
    }

}
