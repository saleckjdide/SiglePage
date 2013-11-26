#region

using System;

#endregion

namespace Northwind.Entity.Models
{
    public class SummaryOfSalesByQuarter
    {
        public DateTime? ShippedDate { get; set; }
        public int OrderID { get; set; }
        public decimal? Subtotal { get; set; }
    }
}