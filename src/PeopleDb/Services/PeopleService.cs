using PeopleDb.DAL.Interfaces;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using PeopleDb.Models;

namespace PeopleDb.Services
{
    public class PeopleService :IPeopleService
    {
        private readonly IPeopleRepository _peopleRoleRepository;

        public PeopleService (IPeopleRepository peopleRoleRepository)
        {
            _peopleRoleRepository = peopleRoleRepository;
        }

        public async Task<IEnumerable<People>> GetAll ()
        {
            return await _peopleRoleRepository.GetAllAsync();
        }


        public async Task<People> Get (int id)
        {
            return await _peopleRoleRepository.GetSingleAsync(id);
        }

        public async Task<int> Create (People model)
        {
            _peopleRoleRepository.Add(model);

            await _peopleRoleRepository.CommitAsync();

            return model.Id;
        }

        public async Task<IEnumerable<int>> Create (List<People> model)
        {
            _peopleRoleRepository.AddRange(model);

            await _peopleRoleRepository.CommitAsync();

            return model.Select(m => m.Id);
        }

        public async Task<int> Update (People model)
        {
            var person = await _peopleRoleRepository.GetSingleAsync(model.Id);

            person.LastName = model.LastName;
            person.FirstName = model.FirstName;
            person.Email = model.Email;
            person.RoleId = model.RoleId;

            await _peopleRoleRepository.CommitAsync();
            return model.Id;
        }
    }
}
