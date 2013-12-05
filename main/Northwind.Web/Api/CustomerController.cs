#region

using System.Data.Entity.Migrations;
using System.Linq;
using System.Web.Http.OData;
using Northwind.Data;
using Northwind.Entity.Models;

#endregion

namespace Northwind.Web.Api
{
    public class CustomerController : EntitySetController<Customer, string>
    {
        private readonly NorthwindContext _northwindContext;

        public CustomerController()
        {
            _northwindContext = new NorthwindContext();
        }

        public override IQueryable<Customer> Get()
        {
            return _northwindContext.Customers;
        }

        protected override Customer GetEntityByKey(string key)
        {
            return _northwindContext.Customers.Find(key);
        }

        protected override Customer UpdateEntity(string key, Customer update)
        {
            _northwindContext.Customers.AddOrUpdate(update);
            _northwindContext.SaveChanges();
            return update;
        }

        public override void Delete(string key)
        {
            var customer = _northwindContext.Customers.Find(key);
            _northwindContext.Customers.Remove(customer);
            _northwindContext.SaveChanges();
        }
    }
}