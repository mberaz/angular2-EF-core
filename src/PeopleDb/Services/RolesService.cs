using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using PeopleDb.Models;
using PeopleDb.Services;
using PeopleDb.DAL.Interfaces;

namespace RoleDb.Services
{
    public class RolesService:IRolesService
    {
        private readonly IRolesRepository _roleRepository;

        public RolesService (IRolesRepository roleRepository)
        {
            _roleRepository = roleRepository;
        }

        public async Task<IEnumerable<Roles>> GetAll()
        {
            return await _roleRepository.GetAllAsync();
        }


        public async Task<Roles> Get (int id)
        {
            return await _roleRepository.GetSingleAsync(id);
        }

        public async Task<int> Create(Roles model)
        {
            _roleRepository.Add(model);

            await _roleRepository.CommitAsync();
            
            return model.Id;
        }

        public async Task<IEnumerable<int>> Create (List<Roles> model)
        {
            _roleRepository.AddRange(model);

            await _roleRepository.CommitAsync();

            return model.Select(m => m.Id);
        }
    }
}
