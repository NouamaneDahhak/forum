using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace FORUM.Migrations
{
    public partial class mig03 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Nom",
                table: "User",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Region",
                table: "User",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "adresse",
                table: "User",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "codePostal",
                table: "User",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "emailSecondaire",
                table: "User",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "metier",
                table: "User",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "nomEntreprise",
                table: "User",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "pays",
                table: "User",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "prenom",
                table: "User",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "telephone1",
                table: "User",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "telephone2",
                table: "User",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "ville",
                table: "User",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "Group",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    title = table.Column<bool>(nullable: false),
                    date = table.Column<string>(nullable: true),
                    userId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Group", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Group_User_userId",
                        column: x => x.userId,
                        principalTable: "User",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Group_userId",
                table: "Group",
                column: "userId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Group");

            migrationBuilder.DropColumn(
                name: "Nom",
                table: "User");

            migrationBuilder.DropColumn(
                name: "Region",
                table: "User");

            migrationBuilder.DropColumn(
                name: "adresse",
                table: "User");

            migrationBuilder.DropColumn(
                name: "codePostal",
                table: "User");

            migrationBuilder.DropColumn(
                name: "emailSecondaire",
                table: "User");

            migrationBuilder.DropColumn(
                name: "metier",
                table: "User");

            migrationBuilder.DropColumn(
                name: "nomEntreprise",
                table: "User");

            migrationBuilder.DropColumn(
                name: "pays",
                table: "User");

            migrationBuilder.DropColumn(
                name: "prenom",
                table: "User");

            migrationBuilder.DropColumn(
                name: "telephone1",
                table: "User");

            migrationBuilder.DropColumn(
                name: "telephone2",
                table: "User");

            migrationBuilder.DropColumn(
                name: "ville",
                table: "User");
        }
    }
}
