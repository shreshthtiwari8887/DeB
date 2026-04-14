const axios = require('axios');

const statesData = [
  { name: "Andhra Pradesh", description: "Land of Kuchipudi dance, Tirupati temple, and rich temple architecture." },
  { name: "Arunachal Pradesh", description: "Home to 26 tribes, vibrant festivals, and scenic Himalayan beauty." },
  { name: "Assam", description: "Famous for Bihu festival, Assam tea, silk, and the Brahmaputra River." },
  { name: "Bihar", description: "Cradle of Buddhism, home to Nalanda University and ancient heritage." },
  { name: "Chhattisgarh", description: "Known for tribal art, Chitrakote falls, and unique cultural traditions." },
  { name: "Goa", description: "Blend of Indian and Portuguese cultures, known for beaches and churches." },
  { name: "Gujarat", description: "Famous for Garba dance, Gir lions, and vibrant handicrafts." },
  { name: "Haryana", description: "Land of Mahabharata’s Kurukshetra and rich Haryanvi traditions." },
  { name: "Himachal Pradesh", description: "Abode of snow-capped peaks, Buddhist monasteries, and apple orchards." },
  { name: "Jharkhand", description: "Land of forests, tribal festivals, and ancient rock art." },
  { name: "Karnataka", description: "Home to Hampi ruins, Carnatic music, and classical dance forms." },
  { name: "Kerala", description: "God's own country with Kathakali, backwaters, and Ayurvedic heritage." },
  { name: "Madhya Pradesh", description: "Heart of India with Khajuraho temples and tribal richness." },
  { name: "Maharashtra", description: "Known for Ganesh Chaturthi, forts of Shivaji, and vibrant folk arts." },
  { name: "Manipur", description: "Land of Ras Lila dance, Loktak Lake, and rich Manipuri culture." },
  { name: "Meghalaya", description: "Land of clouds, living root bridges, and unique Khasi traditions." },
  { name: "Mizoram", description: "Land of bamboo dance (Cheraw) and vibrant tribal culture." },
  { name: "Nagaland", description: "Land of festivals, warrior tribes, and Hornbill celebration." },
  { name: "Odisha", description: "Famous for Odissi dance, Jagannath temple, and tribal crafts." },
  { name: "Punjab", description: "Land of Bhangra, Golden Temple, and rich Sikh heritage." },
  { name: "Rajasthan", description: "The land of Maharajas, forts, desert, and vibrant folk traditions." },
  { name: "Sikkim", description: "Scenic beauty, monasteries, and blend of Buddhist and Nepali culture." },
  { name: "Tamil Nadu", description: "Home to Bharatanatyam, ancient temples, and classical Carnatic music." },
  { name: "Telangana", description: "Blend of Telugu and Persian cultures, known for Charminar and festivals." },
  { name: "Tripura", description: "Land of tribal diversity, temples, and traditional bamboo crafts." },
  { name: "Uttar Pradesh", description: "Spiritual heart of India with Ganga, Varanasi, and Taj Mahal." },
  { name: "Uttarakhand", description: "Land of the gods with Char Dham, Himalayas, and spiritual retreats." },
  { name: "West Bengal", description: "Cultural capital with Durga Puja, Kolkata, and literary heritage." },
  { name: "Delhi", description: "Capital city blending ancient history with modern India." },
  { name: "Jammu and Kashmir", description: "Paradise on earth with Kashmir Valley and Jammu heritage." },
  { name: "Ladakh", description: "High-altitude desert with monasteries and stunning landscapes." },
  { name: "Puducherry", description: "French colonial charm and spiritual ashram of Sri Aurobindo." }
];

const addStates = async () => {
  for (const state of statesData) {
    try {
      const response = await axios.post('http://localhost:8080/api/states', state);
      console.log(`Added ${state.name}`);
    } catch (error) {
      console.error(`Error adding ${state.name}:`, error.response?.data || error.message);
    }
  }
};

addStates();