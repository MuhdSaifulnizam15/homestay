import { AttractionCategory } from "@/types";
import {
  PersonIcon,
  HomeIcon,
  VideoIcon,
  CameraIcon,
  GlobeIcon,
  LockClosedIcon,
  LightningBoltIcon,
  RowsIcon,
} from "@radix-ui/react-icons";
import {
  Flame,
  GlassWater,
  Snowflake,
  SquareParking,
  WashingMachine,
  WavesLadder,
  Wifi
} from "lucide-react";

export const SUPPORTED_LOCALES = ["en", "ms", "cn"];
export const DEFAULT_LOCALE = "en";

export const HOLIDAYS = [
  // Public Holidays 2025
  { date: '2025-04-26', type: 'public', name: { en: "Sultan of Terengganu's Birthday", ms: "Hari Keputeraan Sultan Terengganu" } },
  { date: '2025-05-01', type: 'public', name: { en: "Labour Day", ms: "Hari Pekerja" } },
  { date: '2025-05-12', type: 'public', name: { en: "Wesak Day", ms: "Hari Wesak" } },
  { date: '2025-06-02', type: 'public', name: { en: "Agong's Birthday", ms: "Hari Keputeraan Agong" } },
  { date: '2025-06-06', type: 'public', name: { en: "Arafat Day", ms: "Hari Arafah" } },
  { date: '2025-06-07', type: 'public', name: { en: "Hari Raya Haji", ms: "Hari Raya Haji" } },
  { date: '2025-06-08', type: 'public', name: { en: "Hari Raya Haji Holiday", ms: "Cuti Hari Raya Haji" } },
  { date: '2025-06-27', type: 'public', name: { en: "Awal Muharram", ms: "Awal Muharram" } },
  { date: '2025-08-31', type: 'public', name: { en: "National Day", ms: "Hari Kebangsaan" } },
  { date: '2025-09-05', type: 'public', name: { en: "Maulidur Rasul", ms: "Maulidur Rasul" } },
  { date: '2025-09-16', type: 'public', name: { en: "Malaysia Day", ms: "Hari Malaysia" } },

  // Public Holidays 2026
  { date: '2026-01-17', type: 'public', name: { en: "Israk and Mikraj", ms: "Israk dan Mikraj" } },
  { date: '2026-01-18', type: 'public', name: { en: "Israk and Mikraj Holiday", ms: "Cuti Israk dan Mikraj" } },
  { date: '2026-02-17', type: 'public', name: { en: "Chinese New Year", ms: "Tahun Baru Cina" } },
  { date: '2026-02-18', type: 'public', name: { en: "Chinese New Year Day 2", ms: "Hari Kedua Tahun Baru Cina" } },
  { date: '2026-03-04', type: 'public', name: { en: "Sultan of Terengganu’s Coronation Anniversary", ms: "Ulang Tahun Pertabalan Sultan Terengganu" } },
  { date: '2026-03-07', type: 'public', name: { en: "Nuzul Al-Quran", ms: "Nuzul Al-Quran" } },
  { date: '2026-03-08', type: 'public', name: { en: "Nuzul Al-Quran Holiday", ms: "Cuti Nuzul Al-Quran" } },
  { date: '2026-03-21', type: 'public', name: { en: "Hari Raya Puasa", ms: "Hari Raya Puasa" } },
  { date: '2026-03-22', type: 'public', name: { en: "Hari Raya Puasa Holiday", ms: "Cuti Hari Raya Puasa" } },
  { date: '2026-03-23', type: 'public', name: { en: "Hari Raya Puasa Holiday", ms: "Cuti Hari Raya Puasa" } },
  { date: '2026-04-26', type: 'public', name: { en: "Sultan of Terengganu’s Birthday", ms: "Hari Keputeraan Sultan Terengganu" } },
  { date: '2026-05-01', type: 'public', name: { en: "Labour Day", ms: "Hari Pekerja" } },
  { date: '2026-05-26', type: 'public', name: { en: "Arafat Day", ms: "Hari Arafah" } },
  { date: '2026-05-27', type: 'public', name: { en: "Hari Raya Haji", ms: "Hari Raya Haji" } },
  { date: '2026-05-28', type: 'public', name: { en: "Hari Raya Haji Holiday", ms: "Cuti Hari Raya Haji" } },
  { date: '2026-06-01', type: 'public', name: { en: "Agong’s Birthday", ms: "Hari Keputeraan Agong" } },
  { date: '2026-06-17', type: 'public', name: { en: "Awal Muharram", ms: "Awal Muharram" } },
  { date: '2026-08-31', type: 'public', name: { en: "National Day", ms: "Hari Kebangsaan" } },
  { date: '2026-09-16', type: 'public', name: { en: "Malaysia Day", ms: "Hari Malaysia" } },
  { date: '2026-11-08', type: 'public', name: { en: "Deepavali", ms: "Deepavali" } },
  { date: '2026-12-25', type: 'public', name: { en: "Christmas Day", ms: "Hari Krismas" } },

  // School Holidays Terengganu 2025
  // End-of-Year school holiday: 19 Dec – 31 Dec
  { date: '2025-12-19', type: 'school', name: { en: "End-of-Year School Holiday", ms: "Cuti Akhir Tahun Sekolah" } },
  { date: '2025-12-20', type: 'school', name: { en: "End-of-Year School Holiday", ms: "Cuti Akhir Tahun Sekolah" } },
  { date: '2025-12-21', type: 'school', name: { en: "End-of-Year School Holiday", ms: "Cuti Akhir Tahun Sekolah" } },
  { date: '2025-12-22', type: 'school', name: { en: "End-of-Year School Holiday", ms: "Cuti Akhir Tahun Sekolah" } },
  { date: '2025-12-23', type: 'school', name: { en: "End-of-Year School Holiday", ms: "Cuti Akhir Tahun Sekolah" } },
  { date: '2025-12-24', type: 'school', name: { en: "End-of-Year School Holiday", ms: "Cuti Akhir Tahun Sekolah" } },
  { date: '2025-12-25', type: 'school', name: { en: "End-of-Year School Holiday", ms: "Cuti Akhir Tahun Sekolah" } },
  { date: '2025-12-26', type: 'school', name: { en: "End-of-Year School Holiday", ms: "Cuti Akhir Tahun Sekolah" } },
  { date: '2025-12-27', type: 'school', name: { en: "End-of-Year School Holiday", ms: "Cuti Akhir Tahun Sekolah" } },
  { date: '2025-12-28', type: 'school', name: { en: "End-of-Year School Holiday", ms: "Cuti Akhir Tahun Sekolah" } },
  { date: '2025-12-29', type: 'school', name: { en: "End-of-Year School Holiday", ms: "Cuti Akhir Tahun Sekolah" } },
  { date: '2025-12-30', type: 'school', name: { en: "End-of-Year School Holiday", ms: "Cuti Akhir Tahun Sekolah" } },
  { date: '2025-12-31', type: 'school', name: { en: "End-of-Year School Holiday", ms: "Cuti Akhir Tahun Sekolah" } },
];

export const FAQS_BY_CATEGORY = [
  {
    category: { en: "Booking & Check-In", ms: "Tempahan & Daftar Masuk" },
    items: [
      {
        question: { en: "What is the check-in and check-out time?", ms: "Apakah waktu daftar masuk dan daftar keluar?" },
        answer: { en: "Check-in is from 3:00 PM and check-out is by 12:00 PM.", ms: "Daftar masuk bermula jam 3:00 petang dan daftar keluar sebelum jam 12:00 tengah hari." },
      },
      {
        question: { en: "Is early check-in or late check-out available?", ms: "Adakah daftar masuk awal atau daftar keluar lewat boleh dilakukan?" },
        answer: { en: "Early check-in and late check-out are subject to availability and may incur additional charges.", ms: "Daftar masuk awal dan daftar keluar lewat bergantung pada ketersediaan dan mungkin dikenakan caj tambahan." },
      },
      {
        question: { en: "Can I extend my stay?", ms: "Bolehkah saya melanjutkan tempoh penginapan?" },
        answer: { en: "Extensions are subject to availability and must be arranged in advance.", ms: "Lanjutan penginapan bergantung pada ketersediaan dan mesti diatur terlebih dahulu." },
      },
      {
        question: { en: "What payment methods are accepted?", ms: "Apakah kaedah pembayaran yang diterima?" },
        answer: { en: "Currently, we accept bank transfer and e-wallet payments.", ms: "Sekarang, kami menerima pembayaran melalui pemindahan bank dan e-wallet." },
      },
      {
        question: { en: "Are extra beds available?", ms: "Adakah katil tambahan disediakan?" },
        answer: { en: "Yes, extra beds can be requested for an additional fee.", ms: "Ya, katil tambahan boleh diminta dengan caj tambahan." },
      },
    ],
  },
  {
    category: { en: "Facilities & Amenities", ms: "Kemudahan & Fasiliti" },
    items: [
      {
        question: { en: "Is Wi-Fi available?", ms: "Adakah Wi-Fi disediakan?" },
        answer: { en: "Yes, high-speed Wi-Fi is available throughout the property.", ms: "Ya, Wi-Fi berkelajuan tinggi disediakan di seluruh premis." },
      },
      {
        question: { en: "Are toiletries provided?", ms: "Adakah peralatan mandian disediakan?" },
        answer: { en: "Basic toiletries like soap, shampoo, and towels are provided.", ms: "Peralatan mandian asas seperti sabun, syampu, dan tuala disediakan." },
      },
      {
        question: { en: "Is the swimming pool available?", ms: "Adakah kolam renang disediakan?" },
        answer: { en: "The pool is subject to availability and additional charges may apply.", ms: "Kolam renang bergantung pada ketersediaan dan mungkin dikenakan caj tambahan." },
      },
      {
        question: { en: "Is BBQ allowed?", ms: "Adakah BBQ dibenarkan?" },
        answer: { en: "Yes, BBQ is allowed in the designated outdoor BBQ area.", ms: "Ya, BBQ dibenarkan di kawasan BBQ luar yang disediakan." },
      },
      {
        question: { en: "What is 'Soopa Doopa' and is it available?", ms: "Apakah 'Soopa Doopa' dan adakah ia tersedia?" },
        answer: { en: "The 'Soopa Doopa' facility is subject to availability and may incur extra charges.", ms: "'Soopa Doopa' bergantung pada ketersediaan dan mungkin dikenakan caj tambahan." },
      },
      {
        question: { en: "Is there a garden or outdoor seating?", ms: "Adakah taman atau tempat duduk luar?" },
        answer: { en: "Yes, there is a small garden and outdoor seating area.", ms: "Ya, terdapat taman kecil dan kawasan tempat duduk luar." },
      },
    ],
  },
  {
    category: { en: "Safety & Rules", ms: "Keselamatan & Peraturan" },
    items: [
      {
        question: { en: "Is there security on the premises?", ms: "Adakah keselamatan disediakan di premis?" },
        answer: { en: "The premises are monitored with outdoor CCTV cameras for safety.", ms: "Premis dipantau dengan CCTV luar untuk keselamatan." },
      },
      {
        question: { en: "Are pets allowed?", ms: "Adakah haiwan peliharaan dibenarkan?" },
        answer: { en: "No, pets are not allowed inside the homestay.", ms: "Maaf, haiwan peliharaan tidak dibenarkan di homestay." },
      },
      {
        question: { en: "Is smoking allowed?", ms: "Adakah merokok dibenarkan?" },
        answer: { en: "No, smoking is strictly prohibited inside the homestay.", ms: "Tidak, merokok tidak dibenarkan di dalam homestay." },
      },
      {
        question: { en: "Can I host small events or gatherings?", ms: "Bolehkah saya menganjurkan acara kecil atau perjumpaan?" },
        answer: { en: "Small gatherings are allowed but must not disturb neighbors.", ms: "Perjumpaan kecil dibenarkan tetapi tidak boleh mengganggu jiran." },
      },
    ],
  },
  {
    category: { en: "Family & Children", ms: "Keluarga & Kanak-Kanak" },
    items: [
      {
        question: { en: "Is the homestay suitable for families with children?", ms: "Adakah homestay sesuai untuk keluarga dengan kanak-kanak?" },
        answer: { en: "Yes, the homestay is family-friendly and has safe spaces for children.", ms: "Ya, homestay ini mesra keluarga dan mempunyai kawasan selamat untuk kanak-kanak." },
      },
      {
        question: { en: "Is the property child-friendly?", ms: "Adakah premis ini mesra kanak-kanak?" },
        answer: { en: "Yes, the homestay has child-friendly spaces and furniture.", ms: "Ya, homestay ini mempunyai kawasan dan perabot mesra kanak-kanak." },
      },
      {
        question: { en: "Is there a nearby playground?", ms: "Adakah taman permainan berdekatan?" },
        answer: { en: "Yes, there is a small playground within walking distance.", ms: "Ya, terdapat taman permainan kecil dalam jarak berjalan kaki." },
      },
    ],
  },
  {
    category: { en: "Facilities for Guests", ms: "Kemudahan Untuk Tetamu" },
    items: [
      {
        question: { en: "Are kitchen utensils provided?", ms: "Adakah perkakas dapur disediakan?" },
        answer: { en: "Yes, basic kitchen utensils are available for guests.", ms: "Ya, perkakas dapur asas disediakan untuk tetamu." },
      },
      {
        question: { en: "Is there a washing machine?", ms: "Adakah mesin basuh disediakan?" },
        answer: { en: "Yes, a washing machine is available for guest use.", ms: "Ya, mesin basuh disediakan untuk kegunaan tetamu." },
      },
      {
        question: { en: "Are towels and linens provided?", ms: "Adakah tuala dan linen disediakan?" },
        answer: { en: "Yes, fresh towels and bed linens are provided for all guests.", ms: "Ya, tuala dan linen segar disediakan untuk semua tetamu." },
      },
      {
        question: { en: "Is there air-conditioning in the rooms?", ms: "Adakah penghawa dingin disediakan di bilik?" },
        answer: { en: "Yes, all bedrooms have air-conditioning.", ms: "Ya, semua bilik tidur mempunyai penghawa dingin." },
      },
      {
        question: { en: "Is there a TV or entertainment system?", ms: "Adakah TV atau sistem hiburan disediakan?" },
        answer: { en: "Yes, there is a TV with basic channels available.", ms: "Ya, terdapat TV dengan saluran asas disediakan." },
      },
      {
        question: { en: "Is cleaning equipment available if I want to clean?", ms: "Adakah peralatan pembersihan disediakan jika saya mahu membersih?" },
        answer: { en: "Yes, basic cleaning supplies are available upon request.", ms: "Ya, bekalan pembersihan asas disediakan atas permintaan." },
      },
    ],
  },
  {
    category: { en: "Nearby & Convenience", ms: "Berhampiran & Kemudahan" },
    items: [
      {
        question: { en: "Are there grocery stores nearby?", ms: "Adakah kedai runcit berdekatan?" },
        answer: { en: "Yes, there are several grocery stores within 5–10 minutes by car.", ms: "Ya, terdapat beberapa kedai runcit dalam 5–10 minit dengan kereta." },
      },
      {
        question: { en: "Is the homestay near public transportation?", ms: "Adakah homestay berdekatan dengan pengangkutan awam?" },
        answer: { en: "Yes, the homestay is accessible by bus and taxi within 10 minutes.", ms: "Ya, homestay boleh diakses dengan bas dan teksi dalam masa 10 minit." },
      },
      {
        question: { en: "Are there nearby restaurants or cafes?", ms: "Adakah restoran atau kafe berdekatan?" },
        answer: { en: "Yes, there are several dining options within a short drive.", ms: "Ya, terdapat beberapa pilihan makan dalam jarak pemanduan yang singkat." },
      },
    ],
  },
  {
  category: { en: "Policies & Charges", ms: "Polisi & Caj" },
  items: [
    {
      question: { en: "Is there a charge for late check-out?", ms: "Adakah caj untuk daftar keluar lewat?" },
      answer: { en: "Yes, late check-out is subject to availability and may incur additional charges.", ms: "Ya, daftar keluar lewat bergantung pada ketersediaan dan mungkin dikenakan caj tambahan." },
    },
    {
      question: { en: "What happens if an item is broken or damaged?", ms: "Apa yang berlaku jika sesuatu barang rosak atau pecah?" },
      answer: { en: "Guests are responsible for any damage caused during their stay and may be charged for repairs or replacement.", ms: "Tetamu bertanggungjawab atas sebarang kerosakan semasa penginapan dan mungkin dikenakan caj untuk pembaikan atau penggantian." },
    },
    {
      question: { en: "What is considered a breach of contract?", ms: "Apa yang dianggap sebagai pelanggaran kontrak?" },
      answer: { en: "Violating house rules, causing damage, or engaging in illegal activities constitutes a breach of contract.", ms: "Melanggar peraturan rumah, menyebabkan kerosakan, atau terlibat dalam aktiviti haram dianggap pelanggaran kontrak." },
    },
    {
      question: { en: "What happens if I breach the contract?", ms: "Apa yang berlaku jika saya melanggar kontrak?" },
      answer: { en: "Breaching the contract may result in fines, immediate termination of stay, or legal action depending on the severity of the violation.", ms: "Melanggar kontrak boleh mengakibatkan denda, pengakhiran penginapan serta-merta, atau tindakan undang-undang bergantung pada tahap pelanggaran." },
    },
    {
      question: { en: "Is a refund available if I cancel my booking?", ms: "Adakah bayaran balik tersedia jika saya membatalkan tempahan?" },
      answer: { en: "Refunds are subject to our cancellation policy and booking terms.", ms: "Bayaran balik bergantung pada polisi pembatalan dan terma tempahan kami." },
    },
    {
      question: { en: "Can I get a partial refund if I leave early?", ms: "Bolehkah saya mendapat bayaran balik separa jika saya pergi awal?" },
      answer: { en: "Partial refunds depend on the remaining nights and our booking policy.", ms: "Bayaran balik separa bergantung pada malam yang tinggal dan polisi tempahan kami." },
    },
    {
      question: { en: "Are there any fines for violating house rules?", ms: "Adakah denda dikenakan jika melanggar peraturan rumah?" },
      answer: { en: "Yes, fines may apply if house rules are violated.", ms: "Ya, denda mungkin dikenakan jika peraturan rumah dilanggar." },
    },
    {
      question: { en: "Who is responsible for lost items?", ms: "Siapa yang bertanggungjawab atas barang hilang?" },
      answer: { en: "Guests are responsible for their personal belongings. The homestay is not liable for lost items.", ms: "Tetamu bertanggungjawab terhadap barang peribadi mereka. Homestay tidak bertanggungjawab atas barang yang hilang." },
    },
  ],
}

];

export const FACILITIES = [
  {
    name: "Wi-Fi",
    icon: Wifi,
    description: "High-speed internet throughout the homestay.",
  },
  {
    name: "Swimming Pool",
    icon: WavesLadder,
    description: "Outdoor pool, subject to availability and extra charges.",
  },
  {
    name: "BBQ Area",
    icon: Flame,
    description: "BBQ is allowed in the outdoor designated area.",
  },
  {
    name: "Aircond",
    icon: Snowflake,
    description: "All bedrooms are equipped with air-conditioning.",
  },
  {
    name: "Kitchen",
    icon: HomeIcon,
    description: "Basic kitchen utensils and appliances available.",
  },
  {
    name: "Laundry",
    icon: WashingMachine,
    description: "Washing machine is available for guest use.",
  },
  {
    name: "Parking",
    icon: SquareParking,
    description: "Free parking available at the premises.",
  },
  {
    name: "TV",
    icon: VideoIcon,
    description: "TV with basic channels provided in the living room.",
  },
  {
    name: "CCTV",
    icon: CameraIcon,
    description: "Outdoor CCTV for monitoring and safety.",
  },
  {
    name: "Water Heater",
    icon: LightningBoltIcon,
    description: "Hot shower available in all bathrooms.",
  },
  {
    name: "Iron",
    icon: PersonIcon, // closest Radix option
    description: "Iron and ironing board provided for guest use.",
  },
  {
    name: "Prayer Mat",
    icon: GlobeIcon, // placeholder for sejadah
    description: "Prayer mats are available for Muslim guests.",
  },
  {
    name: "Private Gate",
    icon: LockClosedIcon,
    description: "Gated entrance for extra privacy and safety.",
  },
  {
    name: "Water Dispenser",
    icon: GlassWater,
    description: "Hot and cold water dispenser provided.",
  },
  {
    name: "Outdoor Seating",
    icon: RowsIcon,
    description: "Outdoor seating area available for BBQ and gatherings.",
  },
];

export const ATTRACTIONS: AttractionCategory[] = [
  {
    category: "Nature & Outdoor",
    items: [
      {
        name: "Pantai Air Tawar",
        location: "Besut, Terengganu",
        description:
          "A serene beach popular among locals for evening walks, fishing, and picnics. Clean sandy shore with calming sea breeze.",
        distance: "6 km",
        operationHours: "Open 24 hours",
        images: ["/images/attractions/pantai_air_tawar1.jpg", "/images/attractions/pantai_air_tawar2.jpg"],
      },
	    {
	      name: "Pantai Bukit Keluang",
	      location: "Besut, Terengganu",
	      description:
	        "Known for its scenic cliffs, caves, and boardwalk. A great spot for sunrise and sunset.",
	      distance: "10 km from Gong Medang (~12 min drive)",
	      operationHours: "Open 24 hours",
	      images: ["/images/attractions/pantai-bukit-keluang-1.jpg", "/images/attractions/pantai-bukit-keluang-2.jpg"],
	    },
      {
        name: "Lata Tembakah Waterfall",
        location: "Hulu Besut, Terengganu",
        description:
          "A lush rainforest waterfall with cool natural pools, perfect for hiking, swimming, and family picnics.",
        distance: "25 km",
        operationHours: "8:00 AM – 6:00 PM",
        images: [
          "/images/attractions/lata_tembakah1.jpg",
          "/images/attractions/lata_tembakah2.jpg",
        ],
      },
      {
        name: "Pulau Perhentian",
        location: "Kuala Besut Jetty (gateway)",
        description:
          "World-famous island with white sandy beaches, snorkeling, scuba diving, and island hopping experiences.",
        distance: "15 km to jetty + boat transfer",
        operationHours: "Day trips & overnight stays",
        images: [
          "/images/attractions/perhentian1.jpg",
          "/images/attractions/perhentian2.jpg",
          "/images/attractions/perhentian3.jpg",
        ],
      },
    ],
  },
  {
    category: "Cultural & Historical",
    items: [
      {
        name: "Masjid Ulul Albab (Masjid Kayu Seberang Jerteh)",
        location: "Seberang Jerteh, Terengganu",
        description:
          "Unique wooden mosque built using traditional Malay craftsmanship without nails. A cultural and architectural gem.",
        distance: "12 km",
        operationHours: "Open for prayers & visits",
        images: ["/images/attractions/masjid_kayu1.jpg"],
      },
      {
        name: "Kampung Benting Lintang",
        location: "Kampung Raja, Besut",
        description:
          "Pesona Kampung, Warisan Budaya Besut",
        distance: "10 km",
        operationHours: "9:00 AM – 5:00 PM (Closed Fridays)",
        images: ["/images/attractions/kampung_benting_lintang.jpg"],
      },
    ],
  },
  // {
  //   category: "Family & Leisure",
  //   items: [
  //     {
  //       name: "Mini Zoo Taman Teruntum",
  //       location: "Jeram, Besut",
  //       description:
  //         "A small family-friendly zoo and recreational park with various local animals and green spaces.",
  //       distance: "10 km",
  //       operationHours: "9:00 AM – 6:00 PM",
  //       images: ["/images/mini_zoo1.jpg", "/images/mini_zoo2.jpg"],
  //     },
  //     {
  //       name: "Bukit Keluang",
  //       location: "Besut, Terengganu",
  //       description:
  //         "Famous hiking spot with breathtaking sunrise and sea views. Offers both trekking trails and a beach area.",
  //       distance: "18 km",
  //       operationHours: "6:00 AM – 7:00 PM",
  //       images: [
  //         "/images/bukit_keluang1.jpg",
  //         "/images/bukit_keluang2.jpg",
  //         "/images/bukit_keluang3.jpg",
  //       ],
  //     },
  //     {
	//       name: "La Hot Spring",
	//       location: "Hulu Besut, Terengganu",
	//       description:
	//         "Natural hot spring with pools for relaxation. Popular with families and locals.",
	//       distance: "28 km from Gong Medang (~35 min drive)",
	//       operationHours: "8:00 AM – 6:00 PM",
	//       images: ["/images/attractions/la-hot-spring-1.jpg"],
	//     },
  //   ],
  // },
  // {
  //   category: "Shopping & Local Experience",
  //   items: [
  //     {
  //       name: "Pasar Jerteh",
  //       location: "Jerteh town",
  //       description:
  //         "Bustling local market selling fresh seafood, vegetables, and Terengganu delicacies. Best place for local snacks.",
  //       distance: "12 km",
  //       operationHours: "7:00 AM – 6:00 PM",
  //       images: ["/images/pasar_jerteh1.jpg", "/images/pasar_jerteh2.jpg"],
  //     },
  //     {
  //       name: "Pasar Payang 2 (Kuala Besut)",
  //       location: "Kuala Besut",
  //       description:
  //         "Popular spot for buying batik, keropok lekor, and local handicrafts. Great for souvenirs before visiting islands.",
  //       distance: "15 km",
  //       operationHours: "9:00 AM – 7:00 PM",
  //       images: ["/images/pasar_payang_besut1.jpg"],
  //     },
  //     {
  //       name: "Warung Ikan Celup Tepung (ICT) Kuala Besut",
  //       location: "Kuala Besut, Terengganu",
  //       description:
  //         "A must-try local food spot serving fried seafood dipped in flour batter, enjoyed with sea view.",
  //       distance: "15 km",
  //       operationHours: "3:00 PM – 11:00 PM",
  //       images: ["/images/ict_besut1.jpg", "/images/ict_besut2.jpg"],
  //     },
  //   ],
  // },
];
