namespace StudentFullstackApp.Models
{
    public class Student
    {
        public Guid id { get; set; }
        public string ?firstName { get; set; }
        public string ?lastName { get; set; }
        public int mobile { get; set; }
        public string? email { get; set; }

        public string? nic { get; set; }
        public string ? dateOfBirth { get; set; }
        public string? address { get; set; }
    }
}
