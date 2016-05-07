using PeopleDb.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace PeopleDb.DAL.Interfaces
{
    public interface IEntityBaseRepository<T> where T : class , new()
    {
        IEnumerable<T> AllIncluding (params Expression<Func<T,object>>[] includeProperties);
        Task<IEnumerable<T>> AllIncludingAsync (params Expression<Func<T,object>>[] includeProperties);

        IEnumerable<T> GetAll ();
        Task<IEnumerable<T>> GetAllAsync ();

        T GetSingle (int id);
        T GetSingle (Expression<Func<T,bool>> predicate);
        T GetSingle (Expression<Func<T,bool>> predicate,params Expression<Func<T,object>>[] includeProperties);
        Task<T> GetSingleAsync (int id);

        IEnumerable<T> Where (Expression<Func<T,bool>> predicate);
        Task<IEnumerable<T>> WhereAsync (Expression<Func<T,bool>> predicate);

        void Add (T entity);
        void AddRange (List<T> entities);
        void Delete (T entity);
        void DeleteRange (List<T> entities);
        void Edit (T entity);
        void Commit ();

        Task<int> CommitAsync ();
    }
}
