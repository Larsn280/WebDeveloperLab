using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace LNSchoolAPI.Data.Migrations
{
    /// <inheritdoc />
    public partial class addedImagesToTable : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "ProfileImg",
                table: "AspNetUsers",
                type: "TEXT",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ProfileImg",
                table: "AspNetUsers");
        }
    }
}
