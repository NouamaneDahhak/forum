using Microsoft.EntityFrameworkCore.Migrations;

namespace FORUM.Migrations
{
    public partial class em04 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "epingler",
                table: "Posts",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "epingler",
                table: "Posts");
        }
    }
}
