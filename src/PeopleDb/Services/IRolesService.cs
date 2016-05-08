

using PeopleDb.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace PeopleDb.Services
{
    public interface IRolesService
    {
        Task<IEnumerable<Roles>> GetAll ();

        Task<Roles> Get (int id);

        Task<int> Create (Roles model);

        Task<IEnumerable<int>> Create (List<Roles> model);
    }
}
