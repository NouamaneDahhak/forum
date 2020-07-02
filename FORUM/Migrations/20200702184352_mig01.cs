using Microsoft.EntityFrameworkCore.Migrations;

namespace FORUM.Migrations
{
    public partial class mig01 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Usertype",
                table: "User",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "nbdislike",
                table: "Posts",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "nblike",
                table: "Posts",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Usertype",
                table: "User");

            migrationBuilder.DropColumn(
                name: "nbdislike",
                table: "Posts");

            migrationBuilder.DropColumn(
                name: "nblike",
                table: "Posts");
        }
    }
}
