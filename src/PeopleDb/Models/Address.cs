using System;
using System.Collections.Generic;

namespace PeopleDb.Models
{
    public partial class Address
    {
        public int Id { get; set; }
        public int? Appartment { get; set; }
        public string City { get; set; }
        public int? HouseNumber { get; set; }
        public bool IsPrimary { get; set; }
        public int PeopleId { get; set; }
        public string Street { get; set; }

        public virtual People People { get; set; }
    }
}
