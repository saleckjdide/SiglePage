#region

using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity.ModelConfiguration;
using Northwind.Entity.Models;

#endregion

namespace Northwind.Data.Mapping
{
    public class SalesTotalsByAmountMap : EntityTypeConfiguration<SalesTotalsByAmount>
    {
        public SalesTotalsByAmountMap()
        {
            // Primary Key
            HasKey(t => new {t.OrderID, t.CompanyName});

            // Properties
            Property(t => t.OrderID)
                .HasDatabaseGeneratedOption(DatabaseGeneratedOption.None);

            Property(t => t.CompanyName)
                .IsRequired()
                .HasMaxLength(40);

            // Table & Column Mappings
            ToTable("SalesTotalsByAmount");
            Property(t => t.SaleAmount).HasColumnName("SaleAmount");
            Property(t => t.OrderID).HasColumnName("OrderID");
            Property(t => t.CompanyName).HasColumnName("CompanyName");
            Property(t => t.ShippedDate).HasColumnName("ShippedDate");
        }
    }
}