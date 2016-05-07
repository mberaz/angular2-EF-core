using System;
using System.Collections.Generic;

namespace PeopleDb.Models
{
    public partial class People
    {
        public People()
        {
            Address = new HashSet<Address>();
        }

        public int Id { get; set; }
        public string Email { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public int RoleId { get; set; }

        public virtual ICollection<Address> Address { get; set; }
        public virtual Roles Role { get; set; }
    }
}
