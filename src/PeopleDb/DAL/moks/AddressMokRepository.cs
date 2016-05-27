using Microsoft.Data.Entity;
using PeopleDb.DAL.Interfaces;
using PeopleDb.Models;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PeopleDb.DAL.Repositories
{

    public class addressMokRepository :EntityBaseRepository<Address>, IAddressRepository
    {
        List<Address> list { get; set; }
        public addressMokRepository (PeopleDBContext context)
            : base(context)
        {
            list = new List<Address> {
                new Address { Id=1,Appartment=23,City="tel aviv",HouseNumber=12, IsPrimary=true,PeopleId=1,Street="bosem"}
            };
        }

        public override Address GetSingle (int id)
        {
            return list.FirstOrDefault(p => p.Id == id);
        }

        public override async Task<Address> GetSingleAsync (int id)
        {
            return await Task.Run(() => { return list.FirstOrDefault(p => p.Id == id); });
        }
    }

}
