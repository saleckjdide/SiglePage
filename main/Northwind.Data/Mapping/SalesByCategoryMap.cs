#region

using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity.ModelConfiguration;
using Northwind.Entity.Models;

#endregion

namespace Northwind.Data.Mapping
{
    public class SalesByCategoryMap : EntityTypeConfiguration<SalesByCategory>
    {
        public SalesByCategoryMap()
        {
            // Primary Key
            HasKey(t => new {t.CategoryID, t.CategoryName, t.ProductName});

            // Properties
            Property(t => t.CategoryID)
                .HasDatabaseGeneratedOption(DatabaseGeneratedOption.None);

            Property(t => t.CategoryName)
                .IsRequired()
                .HasMaxLength(15);

            Property(t => t.ProductName)
                .IsRequired()
                .HasMaxLength(40);

            // Table & Column Mappings
            ToTable("SalesByCategory");
            Property(t => t.CategoryID).HasColumnName("CategoryID");
            Property(t => t.CategoryName).HasColumnName("CategoryName");
            Property(t => t.ProductName).HasColumnName("ProductName");
            Property(t => t.ProductSales).HasColumnName("ProductSales");
        }
    }
}