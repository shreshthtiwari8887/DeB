require("dotenv").config();
const mongoose = require("mongoose");
const State = require("./models/state");

const connection = require("./db");

const seedStates = async () => {
  await connection();

  const statesData = [
    { name: "Andhra Pradesh", description: "Land of Kuchipudi dance, Tirupati temple, and rich temple architecture.", images: [] },
    { name: "Arunachal Pradesh", description: "Home to 26 tribes, vibrant festivals, and scenic Himalayan beauty.", images: [] },
    { name: "Assam", description: "Famous for Bihu festival, Assam tea, silk, and the Brahmaputra River.", images: [] },
    { name: "Bihar", description: "Cradle of Buddhism, home to Nalanda University and ancient heritage.", images: [] },
    { name: "Chhattisgarh", description: "Known for tribal art, Chitrakote falls, and unique cultural traditions.", images: [] },
    { name: "Goa", description: "Blend of Indian and Portuguese cultures, known for beaches and churches.", images: [] },
    { name: "Gujarat", description: "Famous for Garba dance, Gir lions, and vibrant handicrafts.", images: [] },
    { name: "Haryana", description: "Land of Mahabharata’s Kurukshetra and rich Haryanvi traditions.", images: [] },
    { name: "Himachal Pradesh", description: "Abode of snow-capped peaks, Buddhist monasteries, and apple orchards.", images: [] },
    { name: "Jharkhand", description: "Land of forests, tribal festivals, and ancient rock art.", images: [] },
    { name: "Karnataka", description: "Home to Hampi ruins, Carnatic music, and classical dance forms.", images: [] },
    { name: "Kerala", description: "God's own country with Kathakali, backwaters, and Ayurvedic heritage.", images: [] },
    { name: "Madhya Pradesh", description: "Heart of India with Khajuraho temples and tribal richness.", images: [] },
    { name: "Maharashtra", description: "Known for Ganesh Chaturthi, forts of Shivaji, and vibrant folk arts.", images: [] },
    { name: "Manipur", description: "Land of Ras Lila dance, Loktak Lake, and rich Manipuri culture.", images: [] },
    { name: "Meghalaya", description: "Land of clouds, living root bridges, and unique Khasi traditions.", images: [] },
    { name: "Mizoram", description: "Land of bamboo dance (Cheraw) and vibrant tribal culture.", images: [] },
    { name: "Nagaland", description: "Land of festivals, warrior tribes, and Hornbill celebration.", images: [] },
    { name: "Odisha", description: "Famous for Odissi dance, Jagannath temple, and tribal crafts.", images: [] },
    { name: "Punjab", description: "Land of Bhangra, Golden Temple, and rich Sikh heritage.", images: [] },
    { name: "Rajasthan", description: "The land of Maharajas, forts, desert, and vibrant folk traditions.", images: [] },
    { name: "Sikkim", description: "Scenic beauty, monasteries, and blend of Buddhist and Nepali culture.", images: [] },
    { name: "Tamil Nadu", description: "Home to Bharatanatyam, ancient temples, and classical Carnatic music.", images: [] },
    { name: "Telangana", description: "Blend of Telugu and Persian cultures, known for Charminar and festivals.", images: [] },
    { name: "Tripura", description: "Land of tribal diversity, temples, and traditional bamboo crafts.", images: [] },
    { name: "Uttar Pradesh", description: "Spiritual heart of India with Ganga, Varanasi, and Taj Mahal.", images: [] },
    { name: "Uttarakhand", description: "Land of the gods with Char Dham, Himalayas, and spiritual retreats.", images: [] },
    { name: "West Bengal", description: "Cultural capital with Durga Puja, Kolkata, and literary heritage.", images: [] },
    { name: "Delhi", description: "Capital city blending ancient history with modern India.", images: [] },
    { name: "Jammu and Kashmir", description: "Paradise on earth with Kashmir Valley and Jammu heritage.", images: [] },
    { name: "Ladakh", description: "High-altitude desert with monasteries and stunning landscapes.", images: [] },
    { name: "Puducherry", description: "French colonial charm and spiritual ashram of Sri Aurobindo.", images: [] }
  ];

  try {
    // await State.deleteMany(); // Clear existing
    const result = await State.insertMany(statesData);
    console.log(`Inserted ${result.length} states successfully!`);
  } catch (error) {
    console.error("Error seeding states:", error);
  } finally {
    mongoose.connection.close();
  }
};

seedStates();