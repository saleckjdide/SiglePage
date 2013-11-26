#region

using System.Collections.Generic;

#endregion

namespace Northwind.Entity.Models
{
    public class Shipper
    {
        public Shipper()
        {
            Orders = new List<Order>();
        }

        public int ShipperID { get; set; }
        public string CompanyName { get; set; }
        public string Phone { get; set; }
        public virtual ICollection<Order> Orders { get; set; }
    }
}