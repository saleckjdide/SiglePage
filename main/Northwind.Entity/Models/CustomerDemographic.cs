#region

using System.Collections.Generic;

#endregion

namespace Northwind.Entity.Models
{
    public class CustomerDemographic
    {
        public CustomerDemographic()
        {
            Customers = new List<Customer>();
        }

        public string CustomerTypeID { get; set; }
        public string CustomerDesc { get; set; }
        public virtual ICollection<Customer> Customers { get; set; }
    }
}