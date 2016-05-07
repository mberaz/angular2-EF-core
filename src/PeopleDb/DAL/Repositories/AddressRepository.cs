using Microsoft.Data.Entity;
using PeopleDb.DAL.Interfaces;
using PeopleDb.Models;
using System.Linq;
using System.Threading.Tasks;

namespace PeopleDb.DAL.Repositories
{

    public class addressRepository :EntityBaseRepository<Address>, IAddressRepository
    {
        private PeopleDBContext _context;
        public addressRepository (PeopleDBContext context)
            : base(context)
        {
            _context = context;
        }

        public override Address GetSingle (int id)
        {
            return _context.Set<Address>().FirstOrDefault(x => x.Id == id);
        }

        public override async Task<Address> GetSingleAsync (int id)
        {
            return await _context.Set<Address>().FirstOrDefaultAsync(e => e.Id == id);
        }
    }

}
