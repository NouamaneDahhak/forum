using Microsoft.EntityFrameworkCore.Migrations;

namespace FORUM.Migrations
{
    public partial class mig251 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "filePost",
                table: "Posts",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "imgCatalogPost",
                table: "Posts",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "txtPost",
                table: "Posts",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "filePost",
                table: "Posts");

            migrationBuilder.DropColumn(
                name: "imgCatalogPost",
                table: "Posts");

            migrationBuilder.DropColumn(
                name: "txtPost",
                table: "Posts");
        }
    }
}
