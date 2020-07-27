using Microsoft.EntityFrameworkCore.Migrations;

namespace FORUM.Migrations
{
    public partial class mig003 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "postIdId",
                table: "Posts",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Posts_postIdId",
                table: "Posts",
                column: "postIdId");

        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
 

            migrationBuilder.DropIndex(
                name: "IX_Posts_postIdId",
                table: "Posts");

            migrationBuilder.DropColumn(
                name: "postIdId",
                table: "Posts");
        }
    }
}
