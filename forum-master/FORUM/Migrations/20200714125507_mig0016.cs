using Microsoft.EntityFrameworkCore.Migrations;

namespace FORUM.Migrations
{
    public partial class mig0016 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Posts_Posts_postId",
                table: "Posts");

            migrationBuilder.DropIndex(
                name: "IX_Posts_postId",
                table: "Posts");

            migrationBuilder.AlterColumn<int>(
                name: "postId",
                table: "Posts",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AddColumn<int>(
                name: "postId1",
                table: "Posts",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Posts_postId1",
                table: "Posts",
                column: "postId1");

            migrationBuilder.AddForeignKey(
                name: "FK_Posts_Posts_postId1",
                table: "Posts",
                column: "postId1",
                principalTable: "Posts",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Posts_Posts_postId1",
                table: "Posts");

            migrationBuilder.DropIndex(
                name: "IX_Posts_postId1",
                table: "Posts");

            migrationBuilder.DropColumn(
                name: "postId1",
                table: "Posts");

            migrationBuilder.AlterColumn<int>(
                name: "postId",
                table: "Posts",
                type: "int",
                nullable: true,
                oldClrType: typeof(int));

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
    }
}
