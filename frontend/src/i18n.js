import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// the translations
// (tip: move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      "Welcome to DeB": "Welcome to DeB",
      "Home": "Home",
      "About": "About",
      "Contact": "Contact",
      "Courses": "Courses",
      "Marketplace": "Marketplace",
      "Login": "Login",
      "Signup": "Signup",
      "Profile": "Profile",
      "Logout": "Logout",
      "Cultural information coming soon.": "Cultural information coming soon.",
      "Back to Home": "Back to Home",
      "Description": "Description",
      "Images": "Images",
      "Reset View": "Reset View",
      "Sign Up": "Sign Up",
      "My Profile": "My Profile",
      "Admin Dashboard": "Admin Dashboard",
      "Discover India's Cultural Tapestry": "Discover India's Cultural Tapestry",
      "Journey through India's diverse heritage with an immersive digital experience. Explore traditional arts, historic landmarks, and cultural stories that define the soul of the nation.": "Journey through India's diverse heritage with an immersive digital experience. Explore traditional arts, historic landmarks, and cultural stories that define the soul of the nation.",
      "Explore Now": "Explore Now",
      "India's Heartbeat, Through Every Frame": "India's Heartbeat, Through Every Frame",
      "Quiz...": "Quiz...",
      "🎯 Quiz & Puzzle Arena – Play, Learn & Win! 🏆": "🎯 Quiz & Puzzle Arena – Play, Learn & Win! 🏆",
      "Dive into a world of exciting challenges that celebrate India's rich culture and heritage! Engage in interactive quizzes and mind-bending puzzles designed to test your knowledge while keeping the fun alive. Win coins, badges, and exclusive rewards as you explore the diverse traditions, art forms, and history of India. Every challenge brings you closer to becoming a true cultural champion! 🚀": "Dive into a world of exciting challenges that celebrate India's rich culture and heritage! Engage in interactive quizzes and mind-bending puzzles designed to test your knowledge while keeping the fun alive. Win coins, badges, and exclusive rewards as you explore the diverse traditions, art forms, and history of India. Every challenge brings you closer to becoming a true cultural champion! 🚀",
      "Let's Start": "Let's Start",
      "Courses...": "Courses...",
      "🎯 Learn from the Masters: Explore India's Timeless Art, Dance & Music Online!": "🎯 Learn from the Masters: Explore India's Timeless Art, Dance & Music Online!",
      "Immerse yourself in the vibrant heritage of India by enrolling in expert-led courses on traditional arts 🎭, crafts, dance 💃, and music 🎶. Learn from master artisans and renowned performers, refine your skills, and keep India's cultural legacy alive—all while earning rewards that unlock even more enriching experiences!": "Immerse yourself in the vibrant heritage of India by enrolling in expert-led courses on traditional arts 🎭, crafts, dance 💃, and music 🎶. Learn from master artisans and renowned performers, refine your skills, and keep India's cultural legacy alive—all while earning rewards that unlock even more enriching experiences!",
      "Let's Explore": "Let's Explore",
      "Market Place...": "Market Place...",
      "Shop 🛍️ UniqueHandmade Items from India 🇮🇳": "Shop 🛍️ UniqueHandmade Items from India 🇮🇳",
      "Step into our vibrant online marketplace, where tradition meets craftsmanship! Explore a curated collection of authentic handcrafted items, created by skilled tribal artists from across India. Every purchase not only brings home a piece of India's rich cultural heritage but also directly supports the artisans, empowering them to sustain their craft and livelihoods.": "Step into our vibrant online marketplace, where tradition meets craftsmanship! Explore a curated collection of authentic handcrafted items, created by skilled tribal artists from across India. Every purchase not only brings home a piece of India's rich cultural heritage but also directly supports the artisans, empowering them to sustain their craft and livelihoods.",
      "Welcome to Darshan-E-Bharat": "Welcome to Darshan-E-Bharat",
      "Explore India's Rich Cultural Heritage": "Explore India's Rich Cultural Heritage",
      "Discover India's Culture": "Discover India's Culture",
      "India is a land of diverse traditions, art forms, and rich history. Our platform brings the beauty of Indian culture to your fingertips, making it easy for you to explore, learn, and engage.": "India is a land of diverse traditions, art forms, and rich history. Our platform brings the beauty of Indian culture to your fingertips, making it easy for you to explore, learn, and engage.",
      "Our Mission": "Our Mission",
      "At Darshan-E-Bharat, we aim to make India's vibrant culture accessible to the world. Our mission is to:": "At Darshan-E-Bharat, we aim to make India's vibrant culture accessible to the world. Our mission is to:",
      "Empower Tribal Artisans": "Empower Tribal Artisans",
      "We provide a platform for tribal artists to sell their handcrafted items directly to the world, promoting fair trade and economic independence.": "We provide a platform for tribal artists to sell their handcrafted items directly to the world, promoting fair trade and economic independence.",
      "Preserve Traditional Arts": "Preserve Traditional Arts",
      "We offer courses to preserve and pass on traditional art forms, ensuring future generations have access to these valuable skills.": "We offer courses to preserve and pass on traditional art forms, ensuring future generations have access to these valuable skills.",
      "Promote Cultural Awareness": "Promote Cultural Awareness",
      "Our platform promotes awareness and appreciation of Indian culture by showcasing various art forms, music, dance, and history from different regions of India.": "Our platform promotes awareness and appreciation of Indian culture by showcasing various art forms, music, dance, and history from different regions of India.",
      "Start Exploring": "Start Exploring",
      "Meet Our Team": "Meet Our Team",
      "Web Developer": "Web Developer",
      "Frontend Developer": "Frontend Developer",
      "AI Developer": "AI Developer",
      "Marketing Manager": "Marketing Manager",
      "Contact Us": "Contact Us",
      "Full Name": "Full Name",
      "Enter your name": "Enter your name",
      "Email Address": "Email Address",
      "Enter your email": "Enter your email",
      "Your message": "Your message",
      "Enter your message": "Enter your message",
      "Send Message": "Send Message",
      "Quick Links": "Quick Links",
      "Follow Us": "Follow Us",
      "© 2025 Darshan-E-Bharat. All Rights Reserved.": "© 2025 Darshan-E-Bharat. All Rights Reserved.",
      "Email": "Email",
      "Password": "Password",
      "Sign In": "Sign In",
      "New Here?": "New Here?",
      "Welcome Back": "Welcome Back",
      "Create Account": "Create Account",
      "First Name": "First Name",
      "Last Name": "Last Name",
      "Expertise": "Expertise",
      "Experience": "Experience",
      "Shop Name": "Shop Name",
      "Phone": "Phone",
      "Upload Aadhar or Shop License(mandatory)": "Upload Aadhar or Shop License(mandatory)",
      "Uploading...": "Uploading...",
      "Quiz": "Quiz",
      // State descriptions
      "Andhra Pradesh": {
        name: "Andhra Pradesh",
        description: "Andhra Pradesh is known for Kuchipudi dance, Tirupati temple, spicy cuisine, and coastal traditions."
      },
      "Arunachal Pradesh": {
        name: "Arunachal Pradesh",
        description: "Arunachal Pradesh is home to 26 tribes, vibrant festivals, and scenic Himalayan beauty."
      },
      "Assam": {
        name: "Assam",
        description: "Assam is famous for Bihu, tea gardens, silk weaving, and the Brahmaputra River."
      },
      "Bihar": {
        name: "Bihar",
        description: "Bihar is the cradle of Buddhism, home to Nalanda University, Chhath Puja, and ancient heritage."
      },
      "Chhattisgarh": {
        name: "Chhattisgarh",
        description: "Chhattisgarh is known for tribal art, forest festivals, ancient temples, and rich folk culture."
      },
      "Goa": {
        name: "Goa",
        description: "Goa blends Indian and Portuguese cultures, famous for beaches, seafood, churches, and Carnival."
      },
      "Gujarat": {
        name: "Gujarat",
        description: "Gujarat is famous for Garba dance, Dandiya, the Rann of Kutch, and colourful handicrafts."
      },
      "Haryana": {
        name: "Haryana",
        description: "Haryana is known for rural fairs, wrestling traditions, hearty cuisine, and folk dance."
      },
      "Himachal Pradesh": {
        name: "Himachal Pradesh",
        description: "Himachal Pradesh is celebrated for Himalayan landscapes, hill temples, and apple orchards."
      },
      "Jharkhand": {
        name: "Jharkhand",
        description: "Jharkhand is known for tribal festivals, waterfalls, handicrafts, and mineral-rich forests."
      },
      "Karnataka": {
        name: "Karnataka",
        description: "Karnataka celebrates Hampi ruins, Carnatic music, sandalwood, and classical dance traditions."
      },
      "Kerala": {
        name: "Kerala",
        description: "Kerala is known for backwaters, Kathakali, Ayurveda, spices, and temple festivals."
      },
      "Madhya Pradesh": {
        name: "Madhya Pradesh",
        description: "Madhya Pradesh is the heart of India with Khajuraho temples, wildlife parks, and tribal art."
      },
      "Maharashtra": {
        name: "Maharashtra",
        description: "Maharashtra is home to Bollywood, forts, Ganesh Chaturthi celebrations, and rich folk arts."
      },
      "Manipur": {
        name: "Manipur",
        description: "Manipur is famous for Ras Lila dance, Loktak Lake, and Meitei culture."
      },
      "Meghalaya": {
        name: "Meghalaya",
        description: "Meghalaya is the land of clouds, living root bridges, Khasi traditions, and monsoon festivals."
      },
      "Mizoram": {
        name: "Mizoram",
        description: "Mizoram is known for bamboo dance, colorful festivals, and vibrant tribal culture."
      },
      "Nagaland": {
        name: "Nagaland",
        description: "Nagaland is celebrated for its Hornbill Festival, warrior heritage, and tribal crafts."
      },
      "Odisha": {
        name: "Odisha",
        description: "Odisha is famous for Odissi dance, Jagannath Temple, silver filigree, and temple rituals."
      },
      "Punjab": {
        name: "Punjab",
        description: "Punjab is known for Bhangra, Golden Temple, hearty cuisine, and Sikh heritage."
      },
      "Rajasthan": {
        name: "Rajasthan",
        description: "Rajasthan is the land of maharajas, desert forts, royal festivals, and vibrant folk traditions."
      },
      "Sikkim": {
        name: "Sikkim",
        description: "Sikkim is known for Buddhist monasteries, alpine landscapes, and Nepali cultural blend."
      },
      "Tamil Nadu": {
        name: "Tamil Nadu",
        description: "Tamil Nadu is home to Bharatanatyam, Dravidian temples, Carnatic music, and silk weaving."
      },
      "Telangana": {
        name: "Telangana",
        description: "Telangana blends Charminar heritage, pearl crafts, rich festivals, and spicy cuisine."
      },
      "Tripura": {
        name: "Tripura",
        description: "Tripura celebrates tribal diversity, bamboo crafts, temples, and regional dance forms."
      },
      "Uttar Pradesh": {
        name: "Uttar Pradesh",
        description: "Uttar Pradesh is the spiritual heartland with the Ganges, Varanasi, and the Taj Mahal."
      },
      "Uttarakhand": {
        name: "Uttarakhand",
        description: "Uttarakhand is revered as Devbhoomi, with mountain temples, yoga retreats, and sacred pilgrimages."
      },
      "West Bengal": {
        name: "West Bengal",
        description: "West Bengal is famous for Durga Puja, Bengali literature, classical music, and terracotta artistry."
      },
      "Delhi": {
        name: "Delhi",
        description: "Delhi is the capital where Mughal monuments, colonial architecture, markets, and cultural fusion meet."
      },
      "Ladakh": {
        name: "Ladakh",
        description: "Ladakh is known for high-altitude deserts, Buddhist monasteries, and nomadic mountain culture."
      },
      "Jammu and Kashmir": {
        name: "Jammu and Kashmir",
        description: "Jammu and Kashmir is celebrated for scenic valleys, houseboats, saffron fields, and rich traditions."
      },
      "Puducherry": {
        name: "Puducherry",
        description: "Puducherry blends French colonial charm, coastal serenity, yoga retreats, and local crafts."
      },
      "default": {
        name: "India",
        description: "India is rich in cultural diversity, with traditions spanning art, music, festivals, food, and spirituality."
      }
    }
  },
  hi: {
    translation: {
      "Welcome to DeB": "DeB में आपका स्वागत है",
      "Home": "होम",
      "About": "हमारे बारे में",
      "Contact": "संपर्क",
      "Courses": "कोर्स",
      "Marketplace": "बाजार",
      "Login": "लॉग इन",
      "Signup": "साइन अप",
      "Profile": "प्रोफाइल",
      "Logout": "लॉग आउट",
      "Cultural information coming soon.": "सांस्कृतिक जानकारी जल्द आ रही है।",
      "Back to Home": "होम पर वापस जाएं",
      "Description": "विवरण",
      "Images": "छवियाँ",
      "Reset View": "दृश्य रीसेट करें",
      "Sign Up": "साइन अप",
      "My Profile": "मेरी प्रोफाइल",
      "Admin Dashboard": "एडमिन डैशबोर्ड",
      "Discover India's Cultural Tapestry": "भारत की सांस्कृतिक टेपेस्ट्री की खोज करें",
      "Journey through India's diverse heritage with an immersive digital experience. Explore traditional arts, historic landmarks, and cultural stories that define the soul of the nation.": "भारत की विविध विरासत के माध्यम से यात्रा करें एक immersive डिजिटल अनुभव के साथ। पारंपरिक कला, ऐतिहासिक स्थलों और सांस्कृतिक कहानियों का पता लगाएं जो राष्ट्र की आत्मा को परिभाषित करती हैं।",
      "Explore Now": "अभी एक्सप्लोर करें",
      "India's Heartbeat, Through Every Frame": "हर फ्रेम के माध्यम से भारत की धड़कन",
      "Quiz...": "क्विज़...",
      "🎯 Quiz & Puzzle Arena – Play, Learn & Win! 🏆": "🎯 क्विज़ और पहेली एरिना – खेलें, सीखें और जीतें! 🏆",
      "Dive into a world of exciting challenges that celebrate India's rich culture and heritage! Engage in interactive quizzes and mind-bending puzzles designed to test your knowledge while keeping the fun alive. Win coins, badges, and exclusive rewards as you explore the diverse traditions, art forms, and history of India. Every challenge brings you closer to becoming a true cultural champion! 🚀": "भारत की समृद्ध संस्कृति और विरासत का जश्न मनाने वाली रोमांचक चुनौतियों की दुनिया में गोता लगाएं! अपने ज्ञान का परीक्षण करते हुए इंटरैक्टिव क्विज़ और दिमाग घुमाने वाली पहेलियों में शामिल हों। भारत की विविध परंपराओं, कला रूपों और इतिहास का पता लगाते हुए सिक्के, बैज और विशेष पुरस्कार जीतें। हर चुनौती आपको एक सच्चे सांस्कृतिक चैंपियन बनने के करीब लाती है! 🚀",
      "Let's Start": "शुरू करें",
      "Courses...": "कोर्स...",
      "🎯 Learn from the Masters: Explore India's Timeless Art, Dance & Music Online!": "🎯 मास्टर्स से सीखें: भारत की समयहीन कला, नृत्य और संगीत ऑनलाइन एक्सप्लोर करें!",
      "Immerse yourself in the vibrant heritage of India by enrolling in expert-led courses on traditional arts 🎭, crafts, dance 💃, and music 🎶. Learn from master artisans and renowned performers, refine your skills, and keep India's cultural legacy alive—all while earning rewards that unlock even more enriching experiences!": "मास्टर कलाकारों और प्रसिद्ध कलाकारों से पारंपरिक कला 🎭, शिल्प, नृत्य 💃 और संगीत 🎶 पर विशेषज्ञ-नेतृत्व वाले कोर्स में दाखिला लेकर भारत की जीवंत विरासत में डूब जाएं। अपने कौशल को परिष्कृत करें और भारत की सांस्कृतिक विरासत को जीवित रखें - सभी पुरस्कार अर्जित करते हुए जो और भी समृद्ध अनुभवों को अनलॉक करते हैं!",
      "Let's Explore": "एक्सप्लोर करें",
      "Market Place...": "मार्केट प्लेस...",
      "Shop 🛍️ UniqueHandmade Items from India 🇮🇳": "भारत 🇮🇳 से अनोखी हस्तनिर्मित वस्तुएं खरीदें 🛍️",
      "Step into our vibrant online marketplace, where tradition meets craftsmanship! Explore a curated collection of authentic handcrafted items, created by skilled tribal artists from across India. Every purchase not only brings home a piece of India's rich cultural heritage but also directly supports the artisans, empowering them to sustain their craft and livelihoods.": "हमारे जीवंत ऑनलाइन बाजार में प्रवेश करें, जहां परंपरा शिल्प कौशल से मिलती है! भारत भर के कुशल जनजातीय कलाकारों द्वारा बनाई गई प्रामाणिक हस्तनिर्मित वस्तुओं के क्यूरेटेड संग्रह का पता लगाएं। हर खरीदारी न केवल घर भारत की समृद्ध सांस्कृतिक विरासत का एक टुकड़ा लाती है बल्कि कलाकारों का सीधे समर्थन करती है, उन्हें अपने शिल्प और आजीविका को बनाए रखने के लिए सशक्त बनाती है।",
      "Welcome to Darshan-E-Bharat": "दर्शन-ई-भारत में आपका स्वागत है",
      "Explore India's Rich Cultural Heritage": "भारत की समृद्ध सांस्कृतिक विरासत का पता लगाएं",
      "Discover India's Culture": "भारत की संस्कृति की खोज करें",
      "India is a land of diverse traditions, art forms, and rich history. Our platform brings the beauty of Indian culture to your fingertips, making it easy for you to explore, learn, and engage.": "भारत विविध परंपराओं, कला रूपों और समृद्ध इतिहास की भूमि है। हमारा प्लेटफॉर्म भारतीय संस्कृति की सुंदरता को आपके उंगलियों पर लाता है, जिससे आपको एक्सप्लोर करना, सीखना और जुड़ना आसान हो जाता है।",
      "Our Mission": "हमारा मिशन",
      "At Darshan-E-Bharat, we aim to make India's vibrant culture accessible to the world. Our mission is to:": "दर्शन-ई-भारत में, हम भारत की जीवंत संस्कृति को दुनिया के लिए सुलभ बनाने का लक्ष्य रखते हैं। हमारा मिशन है:",
      "Empower Tribal Artisans": "जनजातीय कलाकारों को सशक्त बनाएं",
      "We provide a platform for tribal artists to sell their handcrafted items directly to the world, promoting fair trade and economic independence.": "हम जनजातीय कलाकारों को अपनी हस्तनिर्मित वस्तुएं सीधे दुनिया को बेचने के लिए एक प्लेटफॉर्म प्रदान करते हैं, निष्पक्ष व्यापार और आर्थिक स्वतंत्रता को बढ़ावा देते हैं।",
      "Preserve Traditional Arts": "पारंपरिक कला को संरक्षित करें",
      "We offer courses to preserve and pass on traditional art forms, ensuring future generations have access to these valuable skills.": "हम पारंपरिक कला रूपों को संरक्षित और पारित करने के लिए कोर्स प्रदान करते हैं, यह सुनिश्चित करते हुए कि भविष्य की पीढ़ियों को इन मूल्यवान कौशल तक पहुंच हो।",
      "Promote Cultural Awareness": "सांस्कृतिक जागरूकता को बढ़ावा दें",
      "Our platform promotes awareness and appreciation of Indian culture by showcasing various art forms, music, dance, and history from different regions of India.": "हमारा प्लेटफॉर्म भारत के विभिन्न क्षेत्रों से विभिन्न कला रूपों, संगीत, नृत्य और इतिहास को प्रदर्शित करके भारतीय संस्कृति की जागरूकता और सराहना को बढ़ावा देता है।",
      "Start Exploring": "एक्सप्लोर करना शुरू करें",
      "Meet Our Team": "हमारी टीम से मिलें",
      "Web Developer": "वेब डेवलपर",
      "Frontend Developer": "फ्रंटएंड डेवलपर",
      "AI Developer": "एआई डेवलपर",
      "Marketing Manager": "मार्केटिंग मैनेजर",
      "Contact Us": "हमसे संपर्क करें",
      "Full Name": "पूरा नाम",
      "Enter your name": "अपना नाम दर्ज करें",
      "Email Address": "ईमेल पता",
      "Enter your email": "अपना ईमेल दर्ज करें",
      "Your message": "आपका संदेश",
      "Enter your message": "अपना संदेश दर्ज करें",
      "Send Message": "संदेश भेजें",
      "Quick Links": "त्वरित लिंक",
      "Follow Us": "हमारे पीछे आएं",
      "© 2025 Darshan-E-Bharat. All Rights Reserved.": "© 2025 दर्शन-ई-भारत। सभी अधिकार सुरक्षित।",
      "Email": "ईमेल",
      "Password": "पासवर्ड",
      "Sign In": "साइन इन",
      "New Here?": "नए हैं?",
      "Welcome Back": "वापसी पर स्वागत है",
      "Create Account": "खाता बनाएं",
      "First Name": "पहला नाम",
      "Last Name": "अंतिम नाम",
      "Expertise": "विशेषज्ञता",
      "Experience": "अनुभव",
      "Shop Name": "दुकान का नाम",
      "Phone": "फोन",
      "Upload Aadhar or Shop License(mandatory)": "आधार या दुकान लाइसेंस अपलोड करें (अनिवार्य)",
      "Uploading...": "अपलोड हो रहा है...",
      "Quiz": "क्विज़",
      // State descriptions in Hindi
      "Andhra Pradesh": {
        name: "आंध्र प्रदेश",
        description: "आंध्र प्रदेश कुचिपुड़ी नृत्य, तिरुपति मंदिर, मसालेदार व्यंजन और तटीय परंपराओं के लिए जाना जाता है।"
      },
      "Arunachal Pradesh": {
        name: "अरुणाचल प्रदेश",
        description: "अरुणाचल प्रदेश 26 जनजातियों का घर है, जीवंत त्योहार और हिमालयी सुंदरता।"
      },
      "Assam": {
        name: "असम",
        description: "असम बिहू, चाय बागान, रेशम बुनाई और ब्रह्मपुत्र नदी के लिए प्रसिद्ध है।"
      },
      "Bihar": {
        name: "बिहार",
        description: "बिहार बौद्ध धर्म की जन्मभूमि है, नालंदा विश्वविद्यालय, छठ पूजा और प्राचीन विरासत का घर।"
      },
      "Chhattisgarh": {
        name: "छत्तीसगढ़",
        description: "छत्तीसगढ़ जनजातीय कला, वनोत्सव, प्राचीन मंदिर और समृद्ध लोक संस्कृति के लिए जाना जाता है।"
      },
      "Goa": {
        name: "गोवा",
        description: "गोवा भारतीय और पुर्तगाली संस्कृतियों का मिश्रण है, समुद्र तट, समुद्री भोजन, चर्च और कार्निवल के लिए प्रसिद्ध।"
      },
      "Gujarat": {
        name: "गुजरात",
        description: "गुजरात गरबा नृत्य, डांडिया, रण ऑफ कच्छ और रंगीन हस्तशिल्प के लिए प्रसिद्ध है।"
      },
      "Haryana": {
        name: "हरियाणा",
        description: "हरियाणा ग्रामीण मेले, कुश्ती परंपराएं, हार्दिक व्यंजन और लोक नृत्य के लिए जाना जाता है।"
      },
      "Himachal Pradesh": {
        name: "हिमाचल प्रदेश",
        description: "हिमाचल प्रदेश हिमालयी परिदृश्य, पहाड़ी मंदिर और सेब के बागों के लिए मनाया जाता है।"
      },
      "Jharkhand": {
        name: "झारखंड",
        description: "झारखंड जनजातीय त्योहार, झरने, हस्तशिल्प और खनिज-समृद्ध वन के लिए जाना जाता है।"
      },
      "Karnataka": {
        name: "कर्नाटक",
        description: "कर्नाटक हम्पी अवशेष, कर्नाटक संगीत, चंदन और शास्त्रीय नृत्य परंपराओं का जश्न मनाता है।"
      },
      "Kerala": {
        name: "केरल",
        description: "केरल बैकवाटर, कथकली, आयुर्वेद, मसाले और मंदिर त्योहारों के लिए जाना जाता है।"
      },
      "Madhya Pradesh": {
        name: "मध्य प्रदेश",
        description: "मध्य प्रदेश भारत का दिल है खजुराहो मंदिर, वन्यजीव पार्क और जनजातीय कला के साथ।"
      },
      "Maharashtra": {
        name: "महाराष्ट्र",
        description: "महाराष्ट्र बॉलीवुड, किले, गणेश चतुर्थी उत्सव और समृद्ध लोक कला का घर है।"
      },
      "Manipur": {
        name: "मणिपुर",
        description: "मणिपुर रास लीला नृत्य, लोकतक झील और मैतेई संस्कृति के लिए प्रसिद्ध है।"
      },
      "Meghalaya": {
        name: "मेघालय",
        description: "मेघालय बादलों की भूमि है, जीवित जड़ पुल, खासी परंपराएं और मानसून त्योहार।"
      },
      "Mizoram": {
        name: "मिजोरम",
        description: "मिजोरम बांस नृत्य, रंगीन त्योहार और जीवंत जनजातीय संस्कृति के लिए जाना जाता है।"
      },
      "Nagaland": {
        name: "नागालैंड",
        description: "नागालैंड अपने हॉर्नबिल फेस्टिवल, योद्धा विरासत और जनजातीय शिल्प के लिए मनाया जाता है।"
      },
      "Odisha": {
        name: "ओडिशा",
        description: "ओडिशा ओडिसी नृत्य, जगन्नाथ मंदिर, चांदी की नक्काशी और मंदिर अनुष्ठान के लिए प्रसिद्ध है।"
      },
      "Punjab": {
        name: "पंजाब",
        description: "पंजाब भांगड़ा, स्वर्ण मंदिर, हार्दिक व्यंजन और सिख विरासत के लिए जाना जाता है।"
      },
      "Rajasthan": {
        name: "राजस्थान",
        description: "राजस्थान महाराजाओं की भूमि है, रेगिस्तान किले, राजसी त्योहार और जीवंत लोक परंपराएं।"
      },
      "Sikkim": {
        name: "सिक्किम",
        description: "सिक्किम बौद्ध मठ, अल्पाइन परिदृश्य और नेपाली सांस्कृतिक मिश्रण के लिए जाना जाता है।"
      },
      "Tamil Nadu": {
        name: "तमिलनाडु",
        description: "तमिलनाडु भरतनाट्यम, द्रविड़ मंदिर, कर्नाटक संगीत और रेशम बुनाई का घर है।"
      },
      "Telangana": {
        name: "तेलंगाना",
        description: "तेलंगाना चारमीनार विरासत, मोती शिल्प, समृद्ध त्योहार और मसालेदार व्यंजन का मिश्रण है।"
      },
      "Tripura": {
        name: "त्रिपुरा",
        description: "त्रिपुरा जनजातीय विविधता, बांस शिल्प, मंदिर और क्षेत्रीय नृत्य रूपों का जश्न मनाता है।"
      },
      "Uttar Pradesh": {
        name: "उत्तर प्रदेश",
        description: "उत्तर प्रदेश गंगा, वाराणसी और ताज महल के साथ आध्यात्मिक हृदय भूमि है।"
      },
      "Uttarakhand": {
        name: "उत्तराखंड",
        description: "उत्तराखंड देवभूमि के रूप में पूजनीय है, पर्वतीय मंदिर, योग रिट्रीट और पवित्र तीर्थयात्राएं।"
      },
      "West Bengal": {
        name: "पश्चिम बंगाल",
        description: "पश्चिम बंगाल दुर्गा पूजा, बंगाली साहित्य, शास्त्रीय संगीत और टेराकोटा कला के लिए प्रसिद्ध है।"
      },
      "Delhi": {
        name: "दिल्ली",
        description: "दिल्ली राजधानी है जहां मुगल स्मारक, औपनिवेशिक वास्तुकला, बाजार और सांस्कृतिक मिश्रण मिलते हैं।"
      },
      "Ladakh": {
        name: "लद्दाख",
        description: "लद्दाख उच्च-ऊंचाई रेगिस्तान, बौद्ध मठ और खानाबदोश पर्वतीय संस्कृति के लिए जाना जाता है।"
      },
      "Jammu and Kashmir": {
        name: "जम्मू और कश्मीर",
        description: "जम्मू और कश्मीर दृश्य घाटियों, हाउसबोट, केसर के खेत और समृद्ध परंपराओं के लिए मनाया जाता है।"
      },
      "Puducherry": {
        name: "पुडुचेरी",
        description: "पुडुचेरी फ्रेंच औपनिवेशिक आकर्षण, तटीय शांति, योग रिट्रीट और स्थानीय शिल्प का मिश्रण है।"
      },
      "default": {
        name: "भारत",
        description: "भारत सांस्कृतिक विविधता से समृद्ध है, जिसमें कला, संगीत, त्योहार, भोजन और आध्यात्मिकता फैली हुई है।"
      }
    }
  }
};

i18n
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    resources,
    lng: 'en', // language to use, more info here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already does escaping
    }
  });

export default i18n;
