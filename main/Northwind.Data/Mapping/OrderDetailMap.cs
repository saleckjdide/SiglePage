#region

using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity.ModelConfiguration;
using Northwind.Entity.Models;

#endregion

namespace Northwind.Data.Mapping
{
    public class OrderDetailMap : EntityTypeConfiguration<OrderDetail>
    {
        public OrderDetailMap()
        {
            // Primary Key
            HasKey(t => new {t.OrderID, t.ProductID});

            // Properties
            Property(t => t.OrderID)
                .HasDatabaseGeneratedOption(DatabaseGeneratedOption.None);

            Property(t => t.ProductID)
                .HasDatabaseGeneratedOption(DatabaseGeneratedOption.None);

            // Table & Column Mappings
            ToTable("OrderDetails");
            Property(t => t.OrderID).HasColumnName("OrderID");
            Property(t => t.ProductID).HasColumnName("ProductID");
            Property(t => t.UnitPrice).HasColumnName("UnitPrice");
            Property(t => t.Quantity).HasColumnName("Quantity");
            Property(t => t.Discount).HasColumnName("Discount");

            // Relationships
            HasRequired(t => t.Order)
                .WithMany(t => t.OrderDetails)
                .HasForeignKey(d => d.OrderID);
            HasRequired(t => t.Product)
                .WithMany(t => t.OrderDetails)
                .HasForeignKey(d => d.ProductID);
        }
    }
}