using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace LNSchoolAPI.Data.Migrations
{
    /// <inheritdoc />
    public partial class AreasOfExpertise : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "AreasOfExpertise",
                table: "AspNetUsers",
                type: "TEXT",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "AreasOfExpertise",
                table: "AspNetUsers");
        }
    }
}
