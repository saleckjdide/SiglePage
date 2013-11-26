#region

using System.Collections.Generic;

#endregion

namespace Northwind.Entity.Models
{
    public class Region
    {
        public Region()
        {
            Territories = new List<Territory>();
        }

        public int RegionID { get; set; }
        public string RegionDescription { get; set; }
        public virtual ICollection<Territory> Territories { get; set; }
    }
}