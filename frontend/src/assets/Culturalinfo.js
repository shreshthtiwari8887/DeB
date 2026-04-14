import rajasthan from './Rajasthan.jpg'
import rajasthan2 from './rajasthan2.webp'
import madhyapradesh from './madhyapradesh.jpg'
import madhyapradesh2 from './madhyapradesh2.jpg'
import kerela from './kerela.gif'
import kerela2 from './kerela2.jpeg'
import meghalaya from './meghalaya.jpeg'
import meghalaya2 from './meghalaya2.gif'
import himanchal from './himanchal.gif'
import himanchal2 from './himanchal2.gif'
import uttrakhand from './uttrakhand.gif'
import kedarnath from './kedarnath.jpg'
import art from './Art.jpg'
import artCulture from './Artculture.jpg'
import culture from './culture.jpg'
import dance from './dance.jpg'
import festival from './festival.jpeg'
import food from './Food1.jpg'
import ganesh from './ganesh.jpg'
import gangaArti from './GangaArti.jpg'
import durga from './durga.jpg'
import history from './history.png'
import indianHistory from './Indianhistory1.jpg'
import keralaMural from './Kerala-Mural 1.png'
import handicraft from './handicraft_clg 1.png'
import tajMahal from './taj-mahal.png'
import literature from './literature.webp'
import cultureDance from './culture-dance.svg'
import cultureFestival from './culture-festival.svg'
import cultureHeritage from './culture-heritage.svg'
import cultureArtisan from './culture-artisan.svg'
import cultureMountain from './culture-mountain.svg'
import cultureSilk from './culture-silk.svg'
import cultureBoat from './culture-boat.svg'
import cultureTemple from './culture-temple.svg'
import cultureMusic from './culture-music.svg'
import cultureRoyal from './culture-royal.svg'



const stateCulturalData = {
  "Andhra Pradesh": {
    name: 'Andhra Pradesh',
    description:
      'Andhra Pradesh is known for Kuchipudi dance, Tirupati temple, spicy cuisine, and coastal traditions.',
    images: [food, cultureTemple, cultureDance],
  },
  "Arunachal Pradesh": {
    name: 'Arunachal Pradesh',
    description:
      'Arunachal Pradesh is home to 26 tribes, vibrant festivals, and scenic Himalayan beauty.',
    images: [festival, culture, cultureMountain],
  },
  "Assam": {
    name: 'Assam',
    description:
      'Assam is famous for Bihu, tea gardens, silk weaving, and the Brahmaputra River.',
    images: [cultureSilk, festival, gangaArti],
  },
  "Bihar": {
    name: 'Bihar',
    description:
      'Bihar is the cradle of Buddhism, home to Nalanda University, Chhath Puja, and ancient heritage.',
    images: [history, cultureFestival, culture],
  },
  "Chhattisgarh": {
    name: 'Chhattisgarh',
    description:
      'Chhattisgarh is known for tribal art, forest festivals, ancient temples, and rich folk culture.',
    images: [cultureArtisan, festival, history],
  },
  "Goa": {
    name: 'Goa',
    description:
      'Goa blends Indian and Portuguese cultures, famous for beaches, seafood, churches, and Carnival.',
    images: [cultureFestival, cultureBoat, food],
  },
  "Gujarat": {
    name: 'Gujarat',
    description:
      'Gujarat is famous for Garba dance, Dandiya, the Rann of Kutch, and colourful handicrafts.',
    images: [cultureDance, handicraft, festival],
  },
  "Haryana": {
    name: 'Haryana',
    description:
      'Haryana is known for rural fairs, wrestling traditions, hearty cuisine, and folk dance.',
    images: [cultureDance, history, culture],
  },
  "Himachal Pradesh": {
    name: 'Himachal Pradesh',
    description:
      'Himachal Pradesh is celebrated for Himalayan landscapes, hill temples, and apple orchards.',
    images: [himanchal, himanchal2, cultureMountain],
  },
  "Jharkhand": {
    name: 'Jharkhand',
    description:
      'Jharkhand is known for tribal festivals, waterfalls, handicrafts, and mineral-rich forests.',
    images: [cultureArtisan, cultureMountain, culture],
  },
  "Karnataka": {
    name: 'Karnataka',
    description:
      'Karnataka celebrates Hampi ruins, Carnatic music, sandalwood, and classical dance traditions.',
    images: [art, cultureHeritage, cultureMusic],
  },
  "Kerala": {
    name: 'Kerala',
    description:
      'Kerala is known for backwaters, Kathakali, Ayurveda, spices, and temple festivals.',
    images: [kerela, kerela2, keralaMural],
  },
  "Madhya Pradesh": {
    name: 'Madhya Pradesh',
    description:
      'Madhya Pradesh is the heart of India with Khajuraho temples, wildlife parks, and tribal art.',
    images: [madhyapradesh, madhyapradesh2, history],
  },
  "Maharashtra": {
    name: 'Maharashtra',
    description:
      'Maharashtra is home to Bollywood, forts, Ganesh Chaturthi celebrations, and rich folk arts.',
    images: [ganesh, artCulture, cultureFestival],
  },
  "Manipur": {
    name: 'Manipur',
    description:
      'Manipur is famous for Ras Lila dance, Loktak Lake, and Meitei culture.',
    images: [cultureDance, festival, culture],
  },
  "Meghalaya": {
    name: 'Meghalaya',
    description:
      'Meghalaya is the land of clouds, living root bridges, Khasi traditions, and monsoon festivals.',
    images: [meghalaya, meghalaya2, cultureMountain],
  },
  "Mizoram": {
    name: 'Mizoram',
    description:
      'Mizoram is known for bamboo dance, colorful festivals, and vibrant tribal culture.',
    images: [cultureDance, festival, culture],
  },
  "Nagaland": {
    name: 'Nagaland',
    description:
      'Nagaland is celebrated for its Hornbill Festival, warrior heritage, and tribal crafts.',
    images: [festival, cultureArtisan, culture],
  },
  "Odisha": {
    name: 'Odisha',
    description:
      'Odisha is famous for Odissi dance, Jagannath Temple, silver filigree, and temple rituals.',
    images: [artCulture, cultureTemple, festival],
  },
  "Punjab": {
    name: 'Punjab',
    description:
      'Punjab is known for Bhangra, Golden Temple, hearty cuisine, and Sikh heritage.',
    images: [food, cultureDance, festival],
  },
  "Rajasthan": {
    name: 'Rajasthan',
    description:
      'Rajasthan is the land of maharajas, desert forts, royal festivals, and vibrant folk traditions.',
    images: [rajasthan, rajasthan2, cultureRoyal],
  },
  "Sikkim": {
    name: 'Sikkim',
    description:
      'Sikkim is known for Buddhist monasteries, alpine landscapes, and Nepali cultural blend.',
    images: [history, festival, culture],
  },
  "Tamil Nadu": {
    name: 'Tamil Nadu',
    description:
      'Tamil Nadu is home to Bharatanatyam, Dravidian temples, Carnatic music, and silk weaving.',
    images: [cultureDance, cultureTemple, cultureSilk],
  },
  "Telangana": {
    name: 'Telangana',
    description:
      'Telangana blends Charminar heritage, pearl crafts, rich festivals, and spicy cuisine.',
    images: [cultureArtisan, cultureFestival, history],
  },
  "Tripura": {
    name: 'Tripura',
    description:
      'Tripura celebrates tribal diversity, bamboo crafts, temples, and regional dance forms.',
    images: [artCulture, festival, culture],
  },
  "Uttar Pradesh": {
    name: 'Uttar Pradesh',
    description:
      'Uttar Pradesh is the spiritual heartland with the Ganges, Varanasi, and the Taj Mahal.',
    images: [gangaArti, tajMahal, history],
  },
  "Uttaranchal": {
    name: 'Uttarakhand',
    description:
      'Uttarakhand is revered as Devbhoomi, with mountain temples, yoga retreats, and sacred pilgrimages.',
    images: [uttrakhand, kedarnath, cultureTemple],
  },
  "West Bengal": {
    name: 'West Bengal',
    description:
      'West Bengal is famous for Durga Puja, Bengali literature, classical music, and terracotta artistry.',
    images: [durga, literature, cultureFestival],
  },
  "Delhi": {
    name: 'Delhi',
    description:
      'Delhi is the capital where Mughal monuments, colonial architecture, markets, and cultural fusion meet.',
    images: [history, artCulture, culture],
  },
  "Ladakh": {
    name: 'Ladakh',
    description:
      'Ladakh is known for high-altitude deserts, Buddhist monasteries, and nomadic mountain culture.',
    images: [kedarnath, himanchal, cultureMountain],
  },
  "Jammu and Kashmir": {
    name: 'Jammu and Kashmir',
    description:
      'Jammu and Kashmir is celebrated for scenic valleys, houseboats, saffron fields, and rich traditions.',
    images: [kedarnath, gangaArti, culture],
  },
  "Puducherry": {
    name: 'Puducherry',
    description:
      'Puducherry blends French colonial charm, coastal serenity, yoga retreats, and local crafts.',
    images: [indianHistory, artCulture, culture],
  },
  "default": {
    name: 'India',
    description:
      'India is rich in cultural diversity, with traditions spanning art, music, festivals, food, and spirituality.',
    images: [culture, history, festival],
  },
};
export default stateCulturalData