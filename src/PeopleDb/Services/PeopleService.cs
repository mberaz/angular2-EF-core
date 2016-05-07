using PeopleDb.DAL.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PeopleDb.Services
{
    public class PeopleService:IPeopleService
    {
        private readonly IRolesRepository _roleRepository;
        private readonly IPeopleRepository _peopleRoleRepository;
        private readonly IAddressRepository _addressRoleRepository;

        public PeopleService (IRolesRepository roleRepository,IPeopleRepository peopleRoleRepository,IAddressRepository addressRoleRepository)
        {
            _roleRepository = roleRepository;
            _peopleRoleRepository = peopleRoleRepository;
            _addressRoleRepository = addressRoleRepository;

        }
    }
}
