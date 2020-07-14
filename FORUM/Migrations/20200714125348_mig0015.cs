using Microsoft.EntityFrameworkCore.Migrations;

namespace FORUM.Migrations
{
    public partial class mig0015 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "postId",
                table: "Posts",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Posts_postId",
                table: "Posts",
                column: "postId");

            migrationBuilder.AddForeignKey(
                name: "FK_Posts_Posts_postId",
                table: "Posts",
                column: "postId",
                principalTable: "Posts",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Posts_Posts_postId",
                table: "Posts");

            migrationBuilder.DropIndex(
                name: "IX_Posts_postId",
                table: "Posts");

            migrationBuilder.DropColumn(
                name: "postId",
                table: "Posts");
        }
    }
}
