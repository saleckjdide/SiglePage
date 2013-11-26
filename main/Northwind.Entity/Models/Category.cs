#region

using System.Collections.Generic;

#endregion

namespace Northwind.Entity.Models
{
    public class Category
    {
        public Category()
        {
            Products = new List<Product>();
        }

        public int CategoryID { get; set; }
        public string CategoryName { get; set; }
        public string Description { get; set; }
        public byte[] Picture { get; set; }
        public virtual ICollection<Product> Products { get; set; }
    }
}