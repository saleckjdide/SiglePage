#region

using System;

#endregion

namespace Northwind.Entity.Models
{
    public class SalesTotalsByAmount
    {
        public decimal? SaleAmount { get; set; }
        public int OrderID { get; set; }
        public string CompanyName { get; set; }
        public DateTime? ShippedDate { get; set; }
    }
}