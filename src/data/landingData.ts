export interface RecipeShowcase {
  id: string;
  title: string;
  author: string;
  category: string;
  coffeeWeight: number;
  waterWeight: number;
  temp: number;
  ratio: string;
  grindNote: string;
  notes: string[];
  avatar: string;
  cover: string;
}

export interface BaristaSpotlight {
  name: string;
  country: string;
  title: string;
  avatar: string;
  recipesCount: number;
}

export const landingData = {
  brand: {
    name: "Coffee Labs",
    tagline: "Master Your Brew",
    subTagline: "Specialty Coffee Brewing Labs",
    description: "Aplikasi panduan seduh kopi manual presisi terlengkap di Indonesia. Multi-platform untuk iOS, Android & Web. 159 resep barista dunia, guided timer interaktif, diagnosis Brew Doctor, cupping SCA, dan 50 roastery lokal.",
    version: "1.0.0",
    downloadAndroid: "https://github.com/rusdifn08/coffe-labs-mobile/actions/runs/39809056131/artifacts/12439526766",
    downloadIos: "https://github.com/rusdifn08/coffe-labs-mobile/actions/runs/39809056131/artifacts/12439017056",
  },

  stats: [
    { value: "200+", label: "Resep Seduh Dunia", sub: "V60, Origami, Aeropress, Hybrid" },
    { value: "100+", label: "Barista & Juara Dunia", sub: "Dari Jepang, Norwegia hingga Indonesia" },
    { value: "50", label: "Roastery Indonesia", sub: "Katalog & lineup biji kopi nusantara" },
    { value: "50+", label: "Model Grinder", sub: "Konverter klik presisi real-time" },
  ],

  methods: [
    "Hario V60 02",
    "Origami Dripper",
    "Kalita Wave 185",
    "AeroPress",
    "Hario Switch",
    "Chemex",
    "Orea V4 / April",
    "Japanese Iced V60",
    "Clever Dripper",
    "French Press",
    "NextLevel Pulsar",
  ],

  problemSolution: [
    {
      tag: "Konsistensi",
      icon: "target",
      problem: "Rasa kopi tidak konsisten, sering terlalu asam atau pahit sepet.",
      solution: "Guided Brew memandu gram air dan detik tuangan secara presisi cangkir demi cangkir.",
    },
    {
      tag: "Koreksi Rasa",
      icon: "stethoscope",
      problem: "Bingung apa yang salah saat hasil seduhan gagal.",
      solution: "Brew Doctor menganalisis sensori lidah dan langsung merekomendasikan klik grinder & suhu air.",
    },
    {
      tag: "Resep Juara",
      icon: "book",
      problem: "Resep juara bertebaran di medsos dan catatan sering hilang.",
      solution: "200+ resep terkurasi dari 100+ brewer dunia tersusun rapi dengan parameter lengkap.",
    },
    {
      tag: "50+ Grinder",
      icon: "sliders",
      problem: "Resep memakai grinder berbeda dari alat di rumah.",
      solution: "Grinder Converter otomatis mengonversi klik antar 50+ tipe grinder berbeda.",
    },
    {
      tag: "Jurnal & SCA",
      icon: "disc",
      problem: "Catatan seduhan dan cupping tercecer tidak terorganisir.",
      solution: "Jurnal Brew & Cupping SCA digital terintegrasi langsung di smartphone Anda.",
    },
  ],

  features: [
    {
      id: "guided-brew",
      title: "Guided Brew Timer",
      badge: "INTI SEDUH",
      desc: "Timer interaktif tahap-demi-tahap (Blooming, Tuang 1, Tuang 2) dengan indikator berat target air dan panduan visual yang jernih.",
      highlight: "Hitung mundur 'Siap Seduh' & fleksibilitas +10 detik jika air lambat turun.",
      icon: "timer",
      color: "#6B4423",
    },
    {
      id: "brew-doctor",
      title: "Brew Doctor & Sensori",
      badge: "KOREKSI RASA",
      desc: "Lidah Anda mengevaluasi rasa (Acidity, Sweetness, Bitterness, Body). Sistem mendiagnosis Sweet Spot atau memberi rekomendasi klik & suhu.",
      highlight: "Tak ada lagi kopi mubazir karena gagal seduh.",
      icon: "sparkles",
      color: "#ECA400",
    },
    {
      id: "auto-scale-grinder",
      title: "Auto-Scale & Grinder Converter",
      badge: "FLEKSIBEL",
      desc: "Ubah dosis kopi dari 15g menjadi 18g atau 20g, semua gram tuangan dan rasio otomatis terskala. Dilengkapi konversi 29 model grinder populer.",
      highlight: "Comandante C40, Timemore C2/C3, 1Zpresso, Kingrinder, DF64, Fellow Ode.",
      icon: "sliders",
      color: "#00796B",
    },
    {
      id: "cupping-wheel",
      title: "Cupping SCA & Flavor Wheel",
      badge: "STANDAR INDUSTRI",
      desc: "Lembar penilaian cupping profesional berstandar SCA. Dilengkapi 92 flavor notes, 30+ varietas kopi, dan catatan aftertaste serta mouthfeel.",
      highlight: "Termasuk sampel skor demo 90.75 point kopi kelas dunia.",
      icon: "disc",
      color: "#E65100",
    },
    {
      id: "roastery-radar",
      title: "50 Roastery & Beans Radar",
      badge: "NUSANTARA",
      desc: "Jelajahi 50 roastery ternama Indonesia beserta profil sangrai & harga per 100g. Gunakan Beans Radar untuk cek beans terdekat dan buka rute Google Maps.",
      highlight: "Dukungan penuh untuk roaster lokal dan petani Indonesia.",
      icon: "map-pin",
      color: "#5D4037",
    },
    {
      id: "social-coffee",
      title: "Social Coffee & Basecamp",
      badge: "KOMUNITAS",
      desc: "Bagikan resep kustom, diskusikan beans terbaru, dan gunakan fitur satu-klik 'Copy Resep' untuk langsung menyeduh resep teman barista Anda.",
      highlight: "Fitur Basecamp grup privat untuk barista satu coffee shop.",
      icon: "users",
      color: "#E91E63",
    },
    {
      id: "thermal-receipt",
      title: "Thermal Receipt (Bluetooth)",
      badge: "BAR & CAFÉ",
      desc: "Cetak kartu resep atau sertifikat cupping ke printer thermal kasir Bluetooth standar ESC/POS. Cocok untuk barista coffee shop menyajikan info resep ke tamu.",
      highlight: "Struk seduhan profesional dengan catatan rasa dan rasio.",
      icon: "printer",
      color: "#303F9F",
    },
  ],

  appTourTabs: [
    {
      id: "home",
      label: "Home",
      icon: "home",
      subtitle: "Dashboard & Spotlight Barista",
      description: "Sapaan ramah sesuai waktu, 12 Barista Spotlight dengan avatar asli, resep yang paling sering diseduh, dan riwayat seduhan terakhir Anda dengan akses sekali ketuk.",
    },
    {
      id: "recipes",
      label: "Recipes",
      icon: "book-open",
      subtitle: "200+ Resep Dunia Terkurasi",
      description: "Eksplorasi resep seduh dalam 2 grid kolom berdasarkan dripper, metode, nama brewer, level gilingan, dan tasting notes. Tombol Surprise Me siap memilihkan resep acak.",
    },
    {
      id: "brew",
      label: "Brew",
      icon: "timer",
      subtitle: "Guided Timer & Custom Recipes",
      description: "Layar eksekusi seduhan presisi. Dilengkapi stopwatch tahapan, target gram timbangan, serta koleksi resep kustom kreasi Anda.",
    },
    {
      id: "toolkit",
      label: "Toolkit",
      icon: "wrench",
      subtitle: "Professional Suite Barista",
      description: "Kumpulan alat profesional: Cupping SCA 92 flavor notes, direktori 50 Roastery, Beans Radar lokasi peta, Jurnal Seduh harian, dan Social Coffee feed.",
    },
  ],

  guidedBrewStages: [
    { step: 1, name: "Blooming", time: "00:00 - 00:30", water: "+30g", target: "30g", note: "Pelepasan gas CO2 dari biji kopi sangrai segar. Aduk perlahan." },
    { step: 2, name: "Tuangan Pertama", time: "00:30 - 01:15", water: "+90g", target: "120g", note: "Tuang spiral melingkar dari tengah keluar secara stabil." },
    { step: 3, name: "Tuangan Kedua", time: "01:15 - 01:45", water: "+60g", target: "180g", note: "Menjaga ketinggian air di dripper agar ekstraksi merata." },
    { step: 4, name: "Tuangan Akhir & Drawdown", time: "01:45 - 02:30", water: "+60g", target: "240g", note: "Tuangan terakhir di titik tengah. Tunggu air turun sempurna." },
  ],

  brewDoctorCases: [
    {
      id: "sweet-spot",
      name: "Sweet Spot! Ekstraksi Seimbang",
      condition: "Acidity seimbang, rasa manis terasa jelas, aftertaste bersih panjang tanpa rasa pahit yang mengeringkan.",
      diagnosis: "Ekstraksi kopi berada pada persentase ideal (18% - 22% yield).",
      action: "Sempurna! Tekan tombol 'Simpan ke Jurnal' untuk merekam parameter seduhan ini sebagai acuan tetap.",
      color: "#2E7D32",
    },
    {
      id: "under-extracted",
      name: "Terlalu Asam / Sepat Tajam (Under-Extracted)",
      condition: "Rasa asam menusuk seperti lemon mentah, rasa kopi tipis/kosong, dan cepat hilang di lidah.",
      diagnosis: "Air belum sempat melarutkan senyawa manis dan aroma kompleks di dalam bubuk kopi.",
      action: "• Putar grinder 1-2 klik lebih halus (finer)\n• Naikkan suhu air +2°C (misal 91°C → 93°C)\n• Perpanjang waktu blooming +10 detik.",
      color: "#E65100",
    },
    {
      id: "over-extracted",
      name: "Terlalu Pahit / Kering di Tenggorokan (Over-Extracted)",
      condition: "Rasa gosong, pahit pekat, dan sensasi kering sepat di langit-langit mulut.",
      diagnosis: "Air mengekstrak terlalu banyak zat pahit berat dari bubuk kopi halus.",
      action: "• Putar grinder 1-2 klik lebih kasar (coarser)\n• Turunkan suhu air -2°C (misal 94°C → 92°C)\n• Tuang lebih tenang di bagian tengah, kurangi agitasi.",
      color: "#C62828",
    },
    {
      id: "low-body",
      name: "Under-Body / Terlalu Encer Seperti Air",
      condition: "Aroma harum tetapi tekstur di mulut sangat encer seperti teh bening (kurang bold).",
      diagnosis: "Rasio air terlalu banyak atau laju aliran air terlalu cepat melewati bubuk kopi.",
      action: "• Perkecil rasio seduh (misal dari 1:16 menjadi 1:14.5)\n• Tambah dosis bubuk kopi 1-2 gram\n• Tuang dengan debit air lebih pelan.",
      color: "#1565C0",
    },
  ],

  toolkitItems: [
    {
      title: "Favorite",
      subtitle: "Koleksi resep seduh favorit Anda",
      desc: "Simpan resep juara andalan Anda untuk diakses cepat tanpa perlu mencari dari awal.",
      icon: "heart",
      primaryColor: "#D32F2F",
      gradient: "from-[#FFEBEE] to-[#FFCDD2]",
    },
    {
      title: "Cupping Flavour",
      subtitle: "SCA wheel & profil sensorik rasa",
      desc: "Form standar Specialty Coffee Association: kebersihan cangkir, aroma, keasaman, dan 92 flavor notes.",
      icon: "disc",
      primaryColor: "#E65100",
      gradient: "from-[#FFF3E0] to-[#FFE0B2]",
    },
    {
      title: "Coffee Roastery",
      subtitle: "Katalog 50 roastery & lineup kopi",
      desc: "Daftar roastery independen di Jawa, Sumatra, Bali, Sulawesi, lengkap dengan profil biji sangrai.",
      icon: "store",
      primaryColor: "#5D4037",
      gradient: "from-[#EFEBE9] to-[#D7CCC8]",
    },
    {
      title: "Beans Radar",
      subtitle: "Cari biji kopi terdekat via lokasi",
      desc: "Fitur berbasis GPS untuk mendeteksi kedai dan roastery terdekat yang memiliki biji kopi segar siap seduh.",
      icon: "radar",
      primaryColor: "#00796B",
      gradient: "from-[#E0F2F1] to-[#B2DFDB]",
    },
    {
      title: "Jurnal Brew",
      subtitle: "Catatan ekstraksi & log seduh harian",
      desc: "Rekam setiap seduhan: tanggal, biji, klik grinder, suhu, dan rating bintang untuk memantau kemajuan seduhan Anda.",
      icon: "book",
      primaryColor: "#303F9F",
      gradient: "from-[#E8EAF6] to-[#C5CAE9]",
    },
    {
      title: "Social Coffee",
      subtitle: "Komunitas barista & bagikan resep",
      desc: "Tempat berkumpulnya penikmat specialty coffee. Berbagi tips ekstraksi, ulasan biji, dan duplikasi resep.",
      icon: "users",
      primaryColor: "#E91E63",
      gradient: "from-[#FCE4EC] to-[#F8BBD0]",
    },
  ],

  upcomingTools: [
    { name: "Kalkulator Dosis & Es", desc: "Perhitungan otomatis air vs es batu untuk Japanese Iced Coffee" },
    { name: "Taste Match Swipe", desc: "Swipe kartu resep berdasarkan profil rasa kopi yang Anda inginkan" },
    { name: "Smart Scale Bluetooth", desc: "Sinkronisasi bobot timbangan kopi pintar langsung ke timer aplikasi" },
    { name: "Marketplace Roastery", desc: "Pesan biji kopi segar langsung dari tangan artisan roaster terpercaya" },
  ],

  recipes: [
    {
      id: "tetsu-kasuya-46",
      title: "Metode 4:6 Multi-Pour (Juara Dunia)",
      author: "Tetsu Kasuya 🇯🇵",
      category: "V60",
      coffeeWeight: 20,
      waterWeight: 300,
      temp: 92,
      ratio: "1:15",
      grindNote: "Kasar",
      notes: ["Peach", "Bergamot", "Honey"],
      avatar: "/images/avatars/portraits/tetsu_kasuya.jpg",
      cover: "/images/avatars/covers/tetsu_kasuya.jpg",
    },
    {
      id: "james-hoffmann-better-v60",
      title: "The Ultimate 1-Cup V60 Technique",
      author: "James Hoffmann 🇬🇧",
      category: "V60",
      coffeeWeight: 15,
      waterWeight: 250,
      temp: 95,
      ratio: "1:16.7",
      grindNote: "Medium-Fine",
      notes: ["Jasmine", "Meyer Lemon", "Earl Grey"],
      avatar: "/images/avatars/portraits/james_hoffmann.jpg",
      cover: "/images/avatars/covers/james_hoffmann.jpg",
    },
    {
      id: "mikael-jasin-wbc",
      title: "WBC Championship Competition Profile",
      author: "Mikael Jasin 🇮🇩",
      category: "Origami",
      coffeeWeight: 18,
      waterWeight: 270,
      temp: 93,
      ratio: "1:15",
      grindNote: "Medium",
      notes: ["Tropical Fruit", "Passionfruit", "Cocoa"],
      avatar: "/images/avatars/portraits/mikael_jasin.jpg",
      cover: "/images/avatars/covers/mikael_jasin.jpg",
    },
    {
      id: "japanese-iced-summer",
      title: "Kyoto Style Flash-Chilled Japanese Iced",
      author: "Daiki Hatakeyama 🇯🇵",
      category: "Japanese",
      coffeeWeight: 18,
      waterWeight: 270,
      temp: 94,
      ratio: "1:15",
      grindNote: "Medium-Fine",
      notes: ["Crisp Apple", "Cranberry", "Sparkling"],
      avatar: "/images/avatars/portraits/daiki_hatakeyama.jpg",
      cover: "/images/avatars/covers/daiki_hatakeyama.jpg",
    },
  ],

  baristas: [
    { name: "Tetsu Kasuya", country: "Jepang 🇯🇵", title: "World Brewers Cup Champion", avatar: "/images/avatars/portraits/tetsu_kasuya.jpg", recipesCount: 8 },
    { name: "Chad Wang", country: "Taiwan 🇹🇼", title: "World Brewers Cup Champion", avatar: "/images/avatars/portraits/chad_wang.jpg", recipesCount: 5 },
    { name: "Du Jianing", country: "China 🇨🇳", title: "World Brewers Cup Champion", avatar: "/images/avatars/portraits/du_jianing.jpg", recipesCount: 4 },
    { name: "Emi Fukahori", country: "Swiss 🇨🇭", title: "World Brewers Cup Champion", avatar: "/images/avatars/portraits/emi_fukahori.jpg", recipesCount: 6 },
    { name: "Dody Samsura", country: "Indonesia 🇮🇩", title: "Indonesia Barista Champion", avatar: "/images/avatars/portraits/dody_samsura.jpg", recipesCount: 7 },
    { name: "Carlos Medina", country: "Chili 🇨🇱", title: "World Brewers Cup Champion", avatar: "/images/avatars/portraits/carlos_medina.jpg", recipesCount: 3 },
  ],

  grinderModels: [
    { name: "Timemore C2 / C3", image: "/images/grinders/timemore_c2_c3.png", clicksRange: "13-18 klik (Standar)" },
    { name: "Timemore C3 ESP Pro", image: "/images/grinders/timemore_c3_esp.png", clicksRange: "45-68 klik (Micro-step)" },
    { name: "Vesper Pro / VS-3", image: "/images/grinders/vesper_pro.png", clicksRange: "60-90 klik (48mm Titanium)" },
    { name: "MHW-3BOMBER Race M1", image: "/images/grinders/mhw_3bomber_race.png", clicksRange: "32-50 klik (CNC 38mm)" },
    { name: "MHW-3BOMBER Sonic S1", image: "/images/grinders/mhw_3bomber_sonic.png", clicksRange: "52-75 klik (Heptagonal)" },
    { name: "Comandante C40 MK4", image: "/images/grinders/comandante_c40.png", clicksRange: "22-28 klik (Nitro Blade)" },
  ],

  comparisonTable: [
    { feature: "Koleksi Resep Juara Dunia Terkurasi", coffeeLabs: "200+ Resep Lengkap", otherApp: "5 - 15 Resep Terbatas" },
    { feature: "Guided Brew dengan Target Gram & Detik", coffeeLabs: "Presisi Tahap per Tahap", otherApp: "Hanya Timer Garis" },
    { feature: "Diagnosis & Koreksi Rasa (Brew Doctor)", coffeeLabs: "Tersedia Otomatis", otherApp: "Tidak Ada" },
    { feature: "Konversi Klik Grinder Otomatis (50+ Model)", coffeeLabs: "Tersedia Real-time", otherApp: "Jarang / Tidak Ada" },
    { feature: "Cupping SCA & Flavor Wheel 92 Notes", coffeeLabs: "Lengkap Terintegrasi", otherApp: "Perlu App Berbeda" },
    { feature: "Direktori Roastery & Beans Radar Indonesia", coffeeLabs: "50 Roastery + Peta GPS", otherApp: "Hanya Luar Negeri" },
    { feature: "Cetak Struk Resep Thermal Bluetooth", coffeeLabs: "Tersedia (Siap Kafe)", otherApp: "Tidak Ada" },
    { feature: "Dukungan Penuh Bahasa Indonesia", coffeeLabs: "100% Bahasa Indonesia", otherApp: "Hanya Bahasa Inggris" },
  ],

  howItWorks: [
    {
      step: "01",
      title: "Unduh & Masuk Free Plan",
      desc: "Instal aplikasi dalam hitungan detik. Langsung nikmati 10 resep terbaik dan 10 kali seduhan gratis tanpa perlu kartu kredit.",
      mockupLabel: "Layar Onboarding & Karakter Barista",
    },
    {
      step: "02",
      title: "Pilih Resep & Sesuaikan Dosis",
      desc: "Pilih metode V60 atau Origami, ketik berapa gram kopi yang Anda punya, sistem otomatis menghitung air dan klik grinder Anda.",
      mockupLabel: "Layar Detail Resep & Auto-Scale",
    },
    {
      step: "03",
      title: "Seduh Dipandu & Sempurnakan Rasa",
      desc: "Mulai timer tahapan presisi. Setelah minum, evaluasi rasa di Brew Doctor untuk mendapatkan saran seduhan esok hari.",
      mockupLabel: "Layar Guided Brew & Sensory Wheel",
    },
  ],

  pricing: {
    lifetimeNotice: "⚡ Penawaran Spesial: Seluruh Paket Berlaku Seumur Hidup (Lifetime Access) — Sekali Bayar Selamanya Tanpa Biaya Berlangganan",
    plans: [
      {
        id: "free",
        name: "Free Plan",
        badge: "GRATIS SELAMANYA",
        popular: false,
        price: "Rp0",
        originalPrice: null,
        period: "Gratis Selamanya",
        discountBadge: null,
        desc: "Ideal untuk pemula yang ingin mencicipi panduan seduhan presisi tanpa biaya sepeser pun.",
        ctaText: "Mulai Free Plan",
        ctaHref: "/trial",
        ctaVariant: "secondary",
        features: [
          { text: "Akses 10 resep seduh terpopuler", included: true },
          { text: "10× sesi seduhan dengan Guided Timer", included: true },
          { text: "Siklus reset otomatis setiap 7 hari", included: true },
          { text: "Brew Doctor koreksi rasa dasar (acidity/bitter)", included: true },
          { text: "Akses seluruh 200+ resep barista dunia", included: false },
          { text: "Guided brew tanpa batasan kuota & jeda", included: false },
          { text: "Cetak struk resep kasir Bluetooth", included: false },
          { text: "Daftarkan Coffee Shop & Jual Beans", included: false },
        ],
      },
      {
        id: "pro",
        name: "Barista Pro",
        badge: "PALING POPULER • LIFETIME",
        popular: true,
        price: "Rp99.000",
        originalPrice: "Rp149.000",
        period: "Sekali Bayar (Lifetime)",
        discountBadge: "Diskon 100 Orang Pertama",
        desc: "Untuk home brewer berdedikasi & barista yang menginginkan seduhan presisi seumur hidup tanpa biaya langganan.",
        ctaText: "Pilih Barista Pro (Rp99K)",
        ctaHref: "#download",
        ctaVariant: "primary",
        features: [
          { text: "Akses tanpa batas ke seluruh 200+ resep barista dunia", included: true },
          { text: "Guided Brew timer tanpa kuota & tanpa jeda hari", included: true },
          { text: "Brew Doctor & Sensory Evaluator lengkap 9 parameter rasa", included: true },
          { text: "Auto-Scale gramasi & Grinder Converter 50+ tipe grinder", included: true },
          { text: "Jurnal Seduh digital & Form Evaluasi Cupping SCA", included: true },
          { text: "Buat resep kustom & posting ke komunitas Social Coffee", included: true },
          { text: "Cetak struk resep ke printer thermal kasir Bluetooth", included: true },
          { text: "Lisensi Lifetime: Sekali bayar, nikmati update gratis selamanya", included: true },
        ],
      },
      {
        id: "cafe",
        name: "Cafe & Business",
        badge: "UNTUK COFFEE SHOP & ROASTERY",
        popular: false,
        price: "Rp299.000",
        originalPrice: "Rp599.000",
        period: "Sekali Bayar (Lifetime)",
        discountBadge: "Diskon Launching Hemat Rp300K",
        desc: "Daftarkan coffee shop Anda di aplikasi, jual beans & produk langsung, serta masuk ke daftar Roastery resmi.",
        ctaText: "Daftarkan Bisnis Anda",
        ctaHref: "https://wa.me/6281234567890?text=Halo%20Coffee%20Labs,%20saya%20tertarik%20paket%20Cafe%20%26%20Business%20Lifetime",
        ctaVariant: "secondary",
        features: [
          { text: "Daftarkan profil Coffee Shop Anda di dalam direktori aplikasi", included: true, highlight: true },
          { text: "Bisa menjual beans dan produk merchandise di dalam aplikasi", included: true, highlight: true },
          { text: "Masuk ke list/daftar Roastery resmi (jika sekaligus roastery)", included: true, highlight: true },
          { text: "Semua fitur Barista Pro untuk 5 akun tim barista kafe", included: true },
          { text: "Basecamp privat untuk standarisasi SOP seduhan tim barista", included: true },
          { text: "Cetak kartu resep instruksi meja kasir via Bluetooth tanpa batas", included: true },
          { text: "Lisensi Lifetime: Sekali bayar tanpa biaya bulanan per outlet", included: true },
          { text: "Layanan onboarding tim & bantuan prioritas via WhatsApp", included: true },
        ],
      },
    ],
  },

  testimonials: [
    {
      name: "Dimas Prasetyo",
      role: "Home Brewer, Bandung",
      avatar: "/images/avatars/portraits/bayu_prawiro.jpg",
      quote: "Sebelumnya V60 saya sering asam sepet. Begitu pakai Brew Doctor di Coffee Labs, saya disarankan turunkan suhu dan haluskan 1 klik Comandante. Hasilnya langsung manis karamel!",
      stars: 5,
    },
    {
      name: "Rian Hendrawan",
      role: "Head Barista & Roaster, Jakarta",
      avatar: "/images/avatars/portraits/dody_samsura.jpg",
      quote: "Fitur thermal receipt Bluetooth sangat membantu operasional slow bar kami. Kami cetak resep dan profil rasa langsung untuk pelanggan di meja. Keren dan praktis!",
      stars: 5,
    },
    {
      name: "Sarah Wijaya",
      role: "Specialty Coffee Enthusiast, Surabaya",
      avatar: "/images/avatars/portraits/elysia_tan.jpg",
      quote: "Panduan detik dan gramasi air per tahapannya sangat presisi. Saya tidak perlu lagi menebak-nebak berapa gram air yang sudah tertuang di timbangan.",
      stars: 5,
    },
  ],

  faqs: [
    {
      q: "Apakah aplikasi Coffee Labs benar-benar bisa digunakan gratis?",
      a: "Ya! Anda dapat langsung menggunakan Free Plan gratis tanpa kartu kredit. Free Plan memberikan akses ke 10 resep terpopuler dan 10 sesi Guided Brew. Setelah batas 10 seduhan tercapai, sistem akan mengunci timer selama 7 hari lalu meresetnya kembali secara otomatis.",
    },
    {
      q: "Apakah aplikasi Coffee Labs tersedia untuk iPhone / iOS?",
      a: "Tentu saja! Coffee Labs mendukung penuh multi-platform: tersedia secara resmi untuk perangkat iOS (iPhone & iPad) melalui Apple App Store, Android via Google Play Store & unduhan langsung APK, serta Web Browser untuk akses dari laptop atau komputer tanpa instalasi. Semua data dan resep tersinkronisasi otomatis antar-perangkat Anda.",
    },
    {
      q: "Apakah aplikasi Coffee Labs bisa digunakan saat offline (tanpa sinyal internet)?",
      a: "Tentu bisa! Seluruh 200+ resep, panduan seduh, timer, dan konverter grinder tersimpan secara lokal di dalam aplikasi ponsel Anda. Anda hanya membutuhkan koneksi internet saat ingin membuka Social Coffee, melihat peta Beans Radar, atau sinkronisasi pembaruan.",
    },
    {
      q: "Bagaimana jika merk atau tipe grinder saya tidak ada di daftar 50+ grinder?",
      a: "Di dalam aplikasi tersedia opsi 'Universal Manual Grinder' dengan acuan mikron dan referensi klik Comandante C40. Anda juga bisa mengusulkan tipe grinder Anda melalui menu Beri Masukan (Feedback) agar kami tambahkan di pembaruan berikutnya.",
    },
    {
      q: "Bagaimana cara kerja fitur cetak struk resep Bluetooth?",
      a: "Aplikasi Coffee Labs dapat terhubung langsung ke printer thermal kasir portable Bluetooth 58mm/80mm standar ESC/POS. Anda dapat mencetak detail dosis, gram tuangan per tahap, rasio, dan catatan rasa kopi untuk diberikan kepada pelanggan kedai kopi Anda.",
    },
  ],
};
