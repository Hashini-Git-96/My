using Microsoft.EntityFrameworkCore;
using StudentFullstackApp.Models;

namespace StudentFullstackApp.Data
{
    public class StudentDbContext: DbContext
    {
        public StudentDbContext(DbContextOptions options) : base(options) { }

        public DbSet<Student> Students { get; set; }
    }
}
