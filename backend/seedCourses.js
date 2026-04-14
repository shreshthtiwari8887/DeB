require("dotenv").config();
const mongoose = require("mongoose");
const Course = require("./models/course");
const { User } = require("./models/user");
const connection = require("./db");

const seedCourses = async () => {
  await connection();

  try {
    // Check if we already have a dummy teacher
    let teacher = await User.findOne({ role: "teacher", email: "dummyteacher@deb.com" });
    if (!teacher) {
      teacher = new User({
        firstName: "Anjali",
        lastName: "Sharma",
        email: "dummyteacher@deb.com",
        password: "hashedpassword123", // dummy
        role: "teacher",
        expertise: "Indian Classical Dance",
        experience: "15 Years"
      });
      await teacher.save();
      console.log("Created dummy teacher: Anjali Sharma");
    }

    const dummyCourses = [
      {
        courseName: "Introduction to Bharatanatyam",
        category: "Dance",
        duration: "4 Weeks",
        price: 999,
        description: "Learn the foundational steps of Bharatanatyam, the classical dance form of South India.",
        learningPoints: ["Basic postures", "Alarippu sequence", "Hand gestures (Mudras)"],
        teacher: teacher._id,
        isPublished: true,
        publishDate: new Date(),
        accessDuration: 60,
        thumbnail: "http://localhost:8080/uploads/dummy_bharatanatyam.jpg"
      },
      {
        courseName: "Mastering Indian Classical Music",
        category: "Music",
        duration: "8 Weeks",
        price: 1499,
        description: "A comprehensive course to understand ragas and rhythmic patterns in Hindustani classical music.",
        learningPoints: ["Understanding the basics of Ragas", "Vocal exercises", "Introduction to Tabla accompaniment"],
        teacher: teacher._id,
        isPublished: true,
        publishDate: new Date(),
        accessDuration: 180,
        thumbnail: "http://localhost:8080/uploads/dummy_music.jpg"
      },
      {
        courseName: "Madhubani Painting Basics",
        category: "Art",
        duration: "2 Weeks",
        price: 499,
        description: "Discover the vibrant world of Madhubani art, native to the Mithila region of India.",
        learningPoints: ["Drawing natural motifs", "Color mixing techniques", "Creating your first masterpiece"],
        teacher: teacher._id,
        isPublished: true,
        publishDate: new Date(),
        accessDuration: 30,
        thumbnail: "http://localhost:8080/uploads/dummy_art.jpg"
      }
    ];

    const result = await Course.insertMany(dummyCourses);
    console.log(`Successfully seeded ${result.length} dummy courses!`);

  } catch (error) {
    console.error("Error seeding courses:", error);
  } finally {
    mongoose.connection.close();
  }
};

seedCourses();
