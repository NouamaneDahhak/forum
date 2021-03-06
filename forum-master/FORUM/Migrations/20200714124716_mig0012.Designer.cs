﻿// <auto-generated />
using System;
using FORUM.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace FORUM.Migrations
{
    [DbContext(typeof(ForumContext))]
    [Migration("20200714124716_mig0012")]
    partial class mig0012
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "3.1.5")
                .HasAnnotation("Relational:MaxIdentifierLength", 64);

            modelBuilder.Entity("FORUM.Models.Category", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<string>("img")
                        .HasColumnType("longtext CHARACTER SET utf8mb4");

                    b.Property<string>("value")
                        .HasColumnType("longtext CHARACTER SET utf8mb4");

                    b.HasKey("Id");

                    b.ToTable("Category");
                });

            modelBuilder.Entity("FORUM.Models.Comment", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<string>("content")
                        .HasColumnType("longtext CHARACTER SET utf8mb4");

                    b.Property<string>("date")
                        .HasColumnType("longtext CHARACTER SET utf8mb4");

                    b.Property<string>("img")
                        .HasColumnType("longtext CHARACTER SET utf8mb4");

                    b.Property<int>("postId")
                        .HasColumnType("int");

                    b.Property<int>("userId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("postId");

                    b.HasIndex("userId");

                    b.ToTable("Comments");
                });

            modelBuilder.Entity("FORUM.Models.Group", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<string>("date")
                        .HasColumnType("longtext CHARACTER SET utf8mb4");

                    b.Property<bool>("title")
                        .HasColumnType("tinyint(1)");

                    b.Property<int?>("userId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("userId");

                    b.ToTable("Group");
                });

            modelBuilder.Entity("FORUM.Models.Post", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<int>("categoryId")
                        .HasColumnType("int");

                    b.Property<string>("content")
                        .HasColumnType("longtext CHARACTER SET utf8mb4");

                    b.Property<string>("date")
                        .HasColumnType("longtext CHARACTER SET utf8mb4");

                    b.Property<bool>("epingler")
                        .HasColumnType("tinyint(1)");

                    b.Property<string>("img")
                        .HasColumnType("longtext CHARACTER SET utf8mb4");

                    b.Property<string>("nbComment")
                        .HasColumnType("longtext CHARACTER SET utf8mb4");

                    b.Property<int>("nbdislike")
                        .HasColumnType("int");

                    b.Property<int>("nblike")
                        .HasColumnType("int");

                    b.Property<string>("title")
                        .HasColumnType("longtext CHARACTER SET utf8mb4");

                    b.Property<int>("userId")
                        .HasColumnType("int");

                    b.Property<string>("views")
                        .HasColumnType("longtext CHARACTER SET utf8mb4");

                    b.HasKey("Id");

                    b.HasIndex("categoryId");

                    b.HasIndex("userId");

                    b.ToTable("Posts");
                });

            modelBuilder.Entity("FORUM.Models.Reaction", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<string>("date")
                        .HasColumnType("longtext CHARACTER SET utf8mb4");

                    b.Property<bool>("like")
                        .HasColumnType("tinyint(1)");

                    b.Property<int>("postId")
                        .HasColumnType("int");

                    b.Property<int>("userId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("postId");

                    b.HasIndex("userId");

                    b.ToTable("Reaction");
                });

            modelBuilder.Entity("FORUM.Models.User", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<string>("Nom")
                        .HasColumnType("longtext CHARACTER SET utf8mb4");

                    b.Property<string>("Region")
                        .HasColumnType("longtext CHARACTER SET utf8mb4");

                    b.Property<string>("Usertype")
                        .HasColumnType("longtext CHARACTER SET utf8mb4");

                    b.Property<string>("adresse")
                        .HasColumnType("longtext CHARACTER SET utf8mb4");

                    b.Property<string>("codePostal")
                        .HasColumnType("longtext CHARACTER SET utf8mb4");

                    b.Property<string>("email")
                        .HasColumnType("longtext CHARACTER SET utf8mb4");

                    b.Property<string>("emailSecondaire")
                        .HasColumnType("longtext CHARACTER SET utf8mb4");

                    b.Property<string>("img")
                        .HasColumnType("longtext CHARACTER SET utf8mb4");

                    b.Property<string>("metier")
                        .HasColumnType("longtext CHARACTER SET utf8mb4");

                    b.Property<string>("nomEntreprise")
                        .HasColumnType("longtext CHARACTER SET utf8mb4");

                    b.Property<string>("password")
                        .HasColumnType("longtext CHARACTER SET utf8mb4");

                    b.Property<string>("pays")
                        .HasColumnType("longtext CHARACTER SET utf8mb4");

                    b.Property<string>("prenom")
                        .HasColumnType("longtext CHARACTER SET utf8mb4");

                    b.Property<string>("telephone1")
                        .HasColumnType("longtext CHARACTER SET utf8mb4");

                    b.Property<string>("telephone2")
                        .HasColumnType("longtext CHARACTER SET utf8mb4");

                    b.Property<string>("username")
                        .HasColumnType("longtext CHARACTER SET utf8mb4");

                    b.Property<string>("ville")
                        .HasColumnType("longtext CHARACTER SET utf8mb4");

                    b.HasKey("Id");

                    b.ToTable("User");
                });

            modelBuilder.Entity("FORUM.Models.Comment", b =>
                {
                    b.HasOne("FORUM.Models.Post", "post")
                        .WithMany("comments")
                        .HasForeignKey("postId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("FORUM.Models.User", "user")
                        .WithMany()
                        .HasForeignKey("userId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("FORUM.Models.Group", b =>
                {
                    b.HasOne("FORUM.Models.User", "user")
                        .WithMany()
                        .HasForeignKey("userId");
                });

            modelBuilder.Entity("FORUM.Models.Post", b =>
                {
                    b.HasOne("FORUM.Models.Category", "category")
                        .WithMany("posts")
                        .HasForeignKey("categoryId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("FORUM.Models.User", "user")
                        .WithMany("Posts")
                        .HasForeignKey("userId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("FORUM.Models.Reaction", b =>
                {
                    b.HasOne("FORUM.Models.Post", "post")
                        .WithMany()
                        .HasForeignKey("postId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("FORUM.Models.User", "user")
                        .WithMany()
                        .HasForeignKey("userId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });
#pragma warning restore 612, 618
        }
    }
}
