

using PeopleDb.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace PeopleDb.Services
{
    public interface IPeopleService
    {
        Task<IEnumerable<People>> GetAll ();

        Task<People> Get (int id);

        Task<int> Create (People model);

        Task<IEnumerable<int>> Create (List<People> model);
    }
}
