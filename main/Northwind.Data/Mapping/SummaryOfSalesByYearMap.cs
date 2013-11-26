#region

using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity.ModelConfiguration;
using Northwind.Entity.Models;

#endregion

namespace Northwind.Data.Mapping
{
    public class SummaryOfSalesByYearMap : EntityTypeConfiguration<SummaryOfSalesByYear>
    {
        public SummaryOfSalesByYearMap()
        {
            // Primary Key
            HasKey(t => t.OrderID);

            // Properties
            Property(t => t.OrderID)
                .HasDatabaseGeneratedOption(DatabaseGeneratedOption.None);

            // Table & Column Mappings
            ToTable("SummaryOfSalesByYear");
            Property(t => t.ShippedDate).HasColumnName("ShippedDate");
            Property(t => t.OrderID).HasColumnName("OrderID");
            Property(t => t.Subtotal).HasColumnName("Subtotal");
        }
    }
}