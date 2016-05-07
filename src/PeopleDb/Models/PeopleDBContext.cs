using Microsoft.Data.Entity;
using Microsoft.Data.Entity.Metadata;

namespace PeopleDb.Models
{
    public partial class PeopleDBContext : DbContext
    {
        protected override void OnConfiguring(DbContextOptionsBuilder options)
        {
            options.UseSqlServer(@"data source=.\baron2016;initial catalog=PeopleDB;user id=sa;password=sNET135!;MultipleActiveResultSets=True;");
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Address>(entity =>
            {
                entity.Property(e => e.City).HasMaxLength(50);

                entity.Property(e => e.Street).HasMaxLength(50);

                entity.HasOne(d => d.People).WithMany(p => p.Address).HasForeignKey(d => d.PeopleId);
            });

            modelBuilder.Entity<People>(entity =>
            {
                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.FirstName).HasMaxLength(50);

                entity.Property(e => e.LastName).HasMaxLength(50);

                entity.HasOne(d => d.Role).WithMany(p => p.People).HasForeignKey(d => d.RoleId).OnDelete(DeleteBehavior.Restrict);
            });

            modelBuilder.Entity<Roles>(entity =>
            {
                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(50);
            });

            modelBuilder.Entity<sysdiagrams>(entity =>
            {
                entity.HasKey(e => e.diagram_id);

                entity.Property(e => e.definition).HasColumnType("varbinary");
            });
        }

        public virtual DbSet<Address> Address { get; set; }
        public virtual DbSet<People> People { get; set; }
        public virtual DbSet<Roles> Roles { get; set; }
        public virtual DbSet<sysdiagrams> sysdiagrams { get; set; }
    }
}