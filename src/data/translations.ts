export interface TranslationDict {
  [key: string]: {
    id: string;
    en: string;
  };
}

export const translations: TranslationDict = {
  // META & SEO
  "meta.title": {
    id: "Coffee Labs — Specialty Coffee Brewing Labs & Panduan Seduh Presisi",
    en: "Coffee Labs — Specialty Coffee Brewing Labs & Precision Brew Guide",
  },
  "meta.desc": {
    id: "200+ resep seduh dari 100+ barista dunia, Guided Brew timer presisi, koreksi rasa Brew Doctor, cupping SCA & katalog 50 roastery. Multi-platform untuk iOS, Android & Web.",
    en: "200+ brew recipes from 100+ world champions, Guided Brew precision timer, Brew Doctor sensory diagnosis, SCA cupping & 50+ roastery catalog. Multi-platform for iOS, Android & Web.",
  },

  // NAVBAR
  "nav.brand_sub": {
    id: "Master Your Brew",
    en: "Master Your Brew",
  },
  "nav.fitur": {
    id: "Fitur",
    en: "Features",
  },
  "nav.fitur_sub": {
    id: "Fitur Unggulan",
    en: "Core Features",
  },
  "nav.aplikasi": {
    id: "Aplikasi",
    en: "App Tour",
  },
  "nav.aplikasi_sub": {
    id: "Simulasi Layar",
    en: "Screen Tour",
  },
  "nav.guided_brew": {
    id: "Guided Brew",
    en: "Guided Brew",
  },
  "nav.guided_brew_sub": {
    id: "Timer Presisi",
    en: "Precision Timer",
  },
  "nav.brew_doctor": {
    id: "Brew Doctor",
    en: "Brew Doctor",
  },
  "nav.brew_doctor_sub": {
    id: "Koreksi Sensori",
    en: "Sensory Diagnosis",
  },
  "nav.toolkit": {
    id: "Toolkit",
    en: "Toolkit",
  },
  "nav.toolkit_sub": {
    id: "Alat Barista",
    en: "Barista Tools",
  },
  "nav.harga": {
    id: "Harga",
    en: "Pricing",
  },
  "nav.harga_sub": {
    id: "Paket & Akun",
    en: "Plans & Lifetime",
  },
  "nav.faq": {
    id: "FAQ",
    en: "FAQ",
  },
  "nav.faq_sub": {
    id: "Tanya Jawab",
    en: "Questions & Answers",
  },
  "nav.coba_gratis": {
    id: "Coba Gratis",
    en: "Free Trial",
  },
  "nav.coba_gratis_mobile": {
    id: "Coba Gratis Sekarang",
    en: "Try Free Now",
  },
  "nav.app_lang": {
    id: "Bahasa Aplikasi:",
    en: "App Language:",
  },

  // HERO
  "hero.eyebrow": {
    id: "SPECIALTY COFFEE BREWING LABS",
    en: "SPECIALTY COFFEE BREWING LABS",
  },
  "hero.title_p1": {
    id: "Seduh Kopi Presisi,",
    en: "Precision Coffee Brewing,",
  },
  "hero.title_p2": {
    id: "Standar Barista Juara Dunia.",
    en: "World Champion Barista Standards.",
  },
  "hero.subheadline": {
    id: "Bukan sekadar stopwatch biasa. Panduan rasio baku, kalkulasi gramasi otomatis, 200+ resep resmi brewer juara dunia, dan evaluasi Brew Doctor untuk cangkir sempurna tanpa tebakan.",
    en: "Not just an ordinary stopwatch. Precise ratio guides, auto-gram calculation, 200+ official recipes from world champions, and Brew Doctor sensory diagnosis for the perfect cup without guesswork.",
  },
  "hero.cta_trial_mobile": {
    id: "Free Trial",
    en: "Free Trial",
  },
  "hero.cta_trial_desktop": {
    id: "Uji Coba Versi Web Gratis",
    en: "Try Free Web Version",
  },
  "hero.cta_explore": {
    id: "Lihat Aplikasi",
    en: "Explore App",
  },
  "hero.badge_free": {
    id: "Free Plan 10 Resep Gratis",
    en: "Free Plan: 10 Free Recipes",
  },
  "hero.badge_no_cc": {
    id: "Tanpa Kartu Kredit",
    en: "No Credit Card Required",
  },
  "hero.badge_platforms": {
    id: "iOS, Android & Web",
    en: "iOS, Android & Web",
  },
  "hero.download_ios": {
    id: "iOS",
    en: "iOS",
  },
  "hero.download_android": {
    id: "Android",
    en: "Android",
  },
  "hero.download_apk": {
    id: "APK",
    en: "APK",
  },
  "hero.proof": {
    id: "Dipercaya 10.000+ sesi seduhan di Indonesia",
    en: "Trusted across 10,000+ brewing sessions in Indonesia",
  },

  // TRUST BAR
  "trust.recipes_num": {
    id: "200+ Resep Juara Dunia",
    en: "200+ Champion Recipes",
  },
  "trust.recipes_sub": {
    id: "WBC, WBrC & Juara Nasional",
    en: "WBC, WBrC & National Champions",
  },
  "trust.baristas_num": {
    id: "100+ Barista Dunia",
    en: "100+ World Baristas",
  },
  "trust.baristas_sub": {
    id: "Kurasi parameter seduhan resmi",
    en: "Curated official brew parameters",
  },
  "trust.grinders_num": {
    id: "50+ Model Grinder",
    en: "50+ Grinder Models",
  },
  "trust.grinders_sub": {
    id: "Konversi klik & acuan mikron",
    en: "Click conversion & micron references",
  },
  "trust.sensory_num": {
    id: "9 Parameter Sensori",
    en: "9 Sensory Parameters",
  },
  "trust.sensory_sub": {
    id: "Wheel aroma & acuan rasa SCA",
    en: "Aroma wheel & SCA sensory standards",
  },

  // PROBLEM VS SOLUTION
  "problem.badge": {
    id: "MASALAH & SOLUSI",
    en: "PROBLEM & SOLUTION",
  },
  "problem.title": {
    id: "Kopi kafe selalu nikmat, di rumah sering gagal?",
    en: "Why does cafe coffee taste great, but home brews fail?",
  },
  "problem.desc": {
    id: "Perbedaan seduhan kafe dan seduhan rumah bukan pada hoki, melainkan sains ekstraksi yang konsisten.",
    en: "The difference between cafe coffee and home brewing isn't luck, it's consistent extraction science.",
  },
  "problem.before_label": {
    id: "Dulu (Manual Rumit)",
    en: "Before (Complex Manuals)",
  },
  "problem.after_label": {
    id: "Sekarang (Dengan Coffee Labs)",
    en: "Now (With Coffee Labs)",
  },

  // FEATURE BENTO
  "bento.badge": {
    id: "Fitur Unggulan",
    en: "Core Features",
  },
  "bento.title": {
    id: "Semua yang Anda butuhkan untuk seduhan sempurna di setiap cangkir.",
    en: "Everything you need for the perfect brew in every cup.",
  },
  "bento.desc": {
    id: "Studio seduhan presisi dengan algoritma kalkulasi rasio, 200+ resep juara, dan evaluasi sensori profesional.",
    en: "Precision brewing studio with ratio algorithms, 200+ champion recipes, and professional sensory evaluation.",
  },
  "bento.t1_badge": {
    id: "PANDUAN SEDUH",
    en: "BREW GUIDANCE",
  },
  "bento.t1_title": {
    id: "Guided Brew Timer",
    en: "Guided Brew Timer",
  },
  "bento.t1_desc": {
    id: "Mata tetap fokus pada timbangan. Layar memandu detik dan gramasi air target setiap tuangan secara otomatis.",
    en: "Keep eyes on the scale. The screen guides target seconds and water weight for every pour automatically.",
  },
  "bento.t1_sub": {
    id: "Timer Presisi",
    en: "Precision Timer",
  },
  "bento.t2_badge": {
    id: "200+ RESEP",
    en: "200+ RECIPES",
  },
  "bento.t2_title": {
    id: "Resep Barista Dunia",
    en: "World Barista Recipes",
  },
  "bento.t2_desc": {
    id: "Metode 4:6 Tetsu Kasuya, Single-Pour Hoffmann, racikan Mikael Jasin, hingga Japanese Iced.",
    en: "Tetsu Kasuya 4:6, Hoffmann Single-Pour, Mikael Jasin recipes, to Japanese Iced.",
  },
  "bento.t2_sub": {
    id: "Juara Dunia",
    en: "World Champions",
  },
  "bento.t3_badge": {
    id: "KOREKSI RASA",
    en: "TASTE CORRECTION",
  },
  "bento.t3_title": {
    id: "Brew Doctor",
    en: "Brew Doctor",
  },
  "bento.t3_desc": {
    id: "Kopi terlalu asam atau pahit? Evaluasi rasa sensori di lidah, sistem mendiagnosis dan memberi saran klik grinder & suhu.",
    en: "Coffee too sour or bitter? Evaluate tongue sensory, the system diagnoses and suggests grinder clicks & temp.",
  },
  "bento.t3_sub": {
    id: "Sweet Spot",
    en: "Sweet Spot",
  },
  "bento.t4_badge": {
    id: "EVALUASI SCA",
    en: "SCA EVALUATION",
  },
  "bento.t4_title": {
    id: "Cupping SCA",
    en: "SCA Cupping",
  },
  "bento.t4_desc": {
    id: "Form cupping standar Specialty Coffee Association. Skoring Clean Cup, Acidity, Sweetness, dan 92 flavor notes.",
    en: "Specialty Coffee Association standard cupping form. Scoring Clean Cup, Acidity, Sweetness, and 92 flavor notes.",
  },
  "bento.t4_sub": {
    id: "Flavor Wheel",
    en: "Flavor Wheel",
  },
  "bento.t5_badge": {
    id: "KOMUNITAS BARISTA",
    en: "BARISTA COMMUNITY",
  },
  "bento.t5_title": {
    id: "Social Coffee & Basecamp Grup",
    en: "Social Coffee & Basecamp Groups",
  },
  "bento.t5_desc": {
    id: "Unggah resep racikan Anda, beri ulasan beans roastery favorit, dan gunakan fitur satu-klik 'Copy Resep' untuk langsung menyeduh resep teman Anda di rumah.",
    en: "Post your custom recipes, review favorite roastery beans, and use the 1-click 'Copy Recipe' button to brew a friend's recipe at home.",
  },
  "bento.t6_badge": {
    id: "BAR & CAFÉ",
    en: "BAR & CAFÉ",
  },
  "bento.t6_title": {
    id: "Cetak Struk Bluetooth",
    en: "Bluetooth Thermal Receipt",
  },
  "bento.t6_desc": {
    id: "Terhubung ke printer thermal kasir 58mm/80mm standar POS untuk slow bar.",
    en: "Connects to standard 58mm/80mm POS thermal receipt printers for slow bar service.",
  },

  // GUIDED BREW
  "guided.badge": {
    id: "TIMER SEDUH PRESISI",
    en: "PRECISION BREW TIMER",
  },
  "guided.title": {
    id: "Setiap tuangan, tepat waktu & tepat gramasi.",
    en: "Every pour, perfectly timed & weighted.",
  },
  "guided.desc": {
    id: "Jangan biarkan air seduhan Anda mengalir sembarangan. Coffee Labs membagi setiap resep ke dalam tahapan presisi. Anda tahu persis kapan harus menuang, berapa gram air yang harus ditambahkan, dan kapan harus berhenti — langsung tersaji jernih di genggaman Anda.",
    en: "Don't pour blindly. Coffee Labs organizes each recipe into precision stages. You'll know exactly when to pour, how many grams of water to add, and when to stop — right in your hand.",
  },

  // BREW DOCTOR
  "doctor.badge": {
    id: "DIAGNOSIS SENSORI RASA",
    en: "SENSORY TASTE DIAGNOSIS",
  },
  "doctor.title": {
    id: "Kopi terlalu asam atau pahit? Brew Doctor tahu jawabannya.",
    en: "Coffee too sour or bitter? Brew Doctor has the answer.",
  },
  "doctor.desc": {
    id: "Jangan buang biji kopi Anda. Nilai sensori rasa di lidah, sistem langsung memberikan instruksi presisi klik grinder, suhu air, dan teknik tuang.",
    en: "Don't waste specialty beans. Evaluate taste on your palate, and the system instantly provides precision grinder click, temperature, and pouring instructions.",
  },
  "doctor.btn_sour": {
    id: "Terlalu Asam (Under-extracted)",
    en: "Too Sour (Under-extracted)",
  },
  "doctor.btn_sweet": {
    id: "Sweet Spot (Seimbang)",
    en: "Sweet Spot (Balanced)",
  },
  "doctor.btn_bitter": {
    id: "Terlalu Pahit (Over-extracted)",
    en: "Too Bitter (Over-extracted)",
  },

  // TOOLKIT
  "toolkit.badge": {
    id: "PERALATAN BARISTA",
    en: "BARISTA TOOLKIT",
  },
  "toolkit.title": {
    id: "Peralatan presisi barista, selalu siap di saku Anda.",
    en: "Precision barista tools, always ready in your pocket.",
  },
  "toolkit.desc": {
    id: "Dirancang khusus untuk home brewer, barista slow bar, hingga profesional coffee evaluator.",
    en: "Designed specifically for home brewers, slow bar baristas, and coffee evaluators.",
  },

  // RECIPES
  "recipes.badge": {
    id: "PERPUSTAKAAN RESEP LENGKAP",
    en: "COMPLETE RECIPE LIBRARY",
  },
  "recipes.title": {
    id: "200+ Resep dari 100+ Barista Dunia, termasuk juara World Brewers Cup.",
    en: "200+ Recipes from 100+ World Baristas, including World Brewers Cup champions.",
  },
  "recipes.desc": {
    id: "Tak perlu lagi mencatat acak dari video YouTube. Setiap resep telah diuji, memiliki dosis rasio baku, suhu air terukur, dan panduan klik grinder.",
    en: "No more messy notes from YouTube videos. Each recipe is tested, featuring calibrated ratios, water temperature, and grinder clicks.",
  },

  // COMMUNITY
  "community.badge": {
    id: "KOMUNITAS PENIKMAT SPESIALTI",
    en: "SPECIALTY COFFEE COMMUNITY",
  },
  "community.title_p1": {
    id: "Berbagi resep, diskusi beans,",
    en: "Share recipes, discuss beans,",
  },
  "community.title_p2": {
    id: "dan seduh bersama.",
    en: "and brew together.",
  },
  "community.desc": {
    id: "Kopi terasa lebih berharga saat dinikmati bersama komunitas. Social Coffee adalah wadah bagi home brewer dan barista di seluruh Indonesia untuk membagikan catatan rasa, eksplorasi beans nusantara, dan saling menduplikasi resep seduhan terbaik.",
    en: "Coffee is more meaningful when shared. Social Coffee connects home brewers and baristas across Indonesia to share taste notes, explore single origins, and clone award-winning recipes.",
  },
  "community.c1_title": {
    id: "Copy Resep",
    en: "Copy Recipe",
  },
  "community.c1_desc": {
    id: "Satu ketuk tombol 'Copy Resep' untuk otomatis menyimpan parameter seduhan teman ke HP Anda.",
    en: "One tap 'Copy Recipe' to automatically clone a friend's brewing parameters into your phone.",
  },
  "community.c2_title": {
    id: "Basecamp",
    en: "Basecamp",
  },
  "community.c2_desc": {
    id: "Kelompok slow bar privat untuk menyatukan SOP seduh antar barista secara rahasia dan aman.",
    en: "Private slow bar groups to standardize brewing SOPs across baristas securely.",
  },
  "community.c3_title": {
    id: "Topics",
    en: "Topics",
  },
  "community.c3_desc": {
    id: "Diskusi spesifik dripper dan beans: #V60, #Origami, #Aeropress, Kamojang, Puntang, & Gayo.",
    en: "Specific discussions by dripper and origin: #V60, #Origami, #Aeropress, Kamojang, Puntang, & Gayo.",
  },

  // COMPARISON
  "comparison.badge": {
    id: "MENGAPA COFFEE LABS",
    en: "WHY COFFEE LABS",
  },
  "comparison.title": {
    id: "Perbandingan jelas untuk penyeduh kopi berstandar tinggi.",
    en: "A clear comparison for high-standard coffee brewers.",
  },
  "comparison.desc": {
    id: "Bukan sekadar penunjuk waktu digital. Coffee Labs dirancang oleh barista untuk barista.",
    en: "Not just a digital stopwatch. Coffee Labs was built by baristas, for baristas.",
  },
  "comparison.col_feature": {
    id: "Fitur Utama",
    en: "Core Features",
  },
  "comparison.col_coffeelabs": {
    id: "Coffee Labs",
    en: "Coffee Labs",
  },
  "comparison.col_other": {
    id: "Aplikasi Lain",
    en: "Other Apps",
  },

  // PRICING
  "pricing.badge": {
    id: "INVESTASI RASA KOPI ANDA",
    en: "INVEST IN YOUR COFFEE TASTE",
  },
  "pricing.title": {
    id: "Pilihan paket fleksibel, mulai dari gratis selamanya.",
    en: "Flexible plans, starting free forever.",
  },
  "pricing.desc": {
    id: "Nikmati seluruh 200+ resep juara dunia dan diagnosis Brew Doctor dengan lisensi seumur hidup (Lifetime).",
    en: "Enjoy all 200+ world champion recipes and Brew Doctor diagnosis with a Lifetime license.",
  },
  "pricing.free_name": {
    id: "Free Plan",
    en: "Free Plan",
  },
  "pricing.free_badge": {
    id: "GRATIS SELAMANYA",
    en: "FREE FOREVER",
  },
  "pricing.free_desc": {
    id: "Ideal untuk pemula yang ingin mencicipi panduan seduhan presisi tanpa biaya sepeser pun.",
    en: "Ideal for beginners looking to taste precision brewing guides at zero cost.",
  },
  "pricing.free_period": {
    id: "Gratis Selamanya",
    en: "Free Forever",
  },
  "pricing.free_cta": {
    id: "Mulai Free Plan",
    en: "Start Free Plan",
  },
  "pricing.pro_name": {
    id: "Barista Pro",
    en: "Barista Pro",
  },
  "pricing.pro_badge": {
    id: "PALING POPULER • LIFETIME",
    en: "MOST POPULAR • LIFETIME",
  },
  "pricing.pro_discount": {
    id: "Diskon 100 Orang Pertama",
    en: "First 100 Buyers Discount",
  },
  "pricing.pro_desc": {
    id: "Untuk home brewer berdedikasi & barista yang menginginkan seduhan presisi seumur hidup tanpa biaya langganan.",
    en: "For dedicated home brewers & baristas who want lifelong precision without recurring subscriptions.",
  },
  "pricing.pro_period": {
    id: "Sekali Bayar (Lifetime)",
    en: "One-Time Payment (Lifetime)",
  },
  "pricing.pro_cta": {
    id: "Pilih Barista Pro (Rp99K)",
    en: "Get Barista Pro (Rp99K)",
  },
  "pricing.cafe_name": {
    id: "Cafe & Business",
    en: "Cafe & Business",
  },
  "pricing.cafe_badge": {
    id: "UNTUK COFFEE SHOP & ROASTERY",
    en: "FOR COFFEE SHOPS & ROASTERIES",
  },
  "pricing.cafe_discount": {
    id: "Diskon Launching Hemat Rp300K",
    en: "Launch Discount Save Rp300K",
  },
  "pricing.cafe_desc": {
    id: "Daftarkan coffee shop Anda di aplikasi, jual beans & produk langsung, serta masuk ke daftar Roastery resmi.",
    en: "Register your coffee shop in the app, sell beans & products directly, and join the official Roastery directory.",
  },
  "pricing.cafe_period": {
    id: "Sekali Bayar (Lifetime)",
    en: "One-Time Payment (Lifetime)",
  },
  "pricing.cafe_cta": {
    id: "Daftarkan Bisnis Anda",
    en: "Register Your Business",
  },
  "pricing.btn_prev": {
    id: "Sebelumnya",
    en: "Previous",
  },
  "pricing.btn_next": {
    id: "Berikutnya",
    en: "Next",
  },
  "pricing.guarantee_lifetime": {
    id: "Sekali Bayar • Lisensi Lifetime",
    en: "One-Time Payment • Lifetime License",
  },
  "pricing.guarantee_updates": {
    id: "Update Resep Gratis Selamanya",
    en: "Free Recipe Updates Forever",
  },
  "pricing.guarantee_support": {
    id: "Bantuan WhatsApp Barista",
    en: "Barista WhatsApp Support",
  },

  // TESTIMONIALS
  "testimonials.badge": {
    id: "ULASAN PENGGUNA",
    en: "USER REVIEWS",
  },
  "testimonials.title": {
    id: "Cerita dari mereka yang telah menemukan seduhan terbaiknya.",
    en: "Stories from those who unlocked their best brew.",
  },
  "testimonials.desc": {
    id: "Bergabung bersama ribuan home brewer dan barista yang mengandalkan Coffee Labs.",
    en: "Join thousands of home brewers and baristas who rely on Coffee Labs daily.",
  },

  // FAQ
  "faq.badge": {
    id: "FAQ",
    en: "FAQ",
  },
  "faq.title": {
    id: "Kerap ditanyakan seputar aplikasi Coffee Labs.",
    en: "Frequently asked questions about Coffee Labs.",
  },

  // FINAL CTA
  "final_cta.badge": {
    id: "UNDUH SEKARANG",
    en: "DOWNLOAD NOW",
  },
  "final_cta.title_p1": {
    id: "Siap menyeduh kopi terbaik Anda",
    en: "Ready to brew your best coffee",
  },
  "final_cta.title_p2": {
    id: "mulai hari ini?",
    en: "starting today?",
  },
  "final_cta.desc": {
    id: "Dapatkan akses instan ke 10 resep gratis di Free Plan. Tanpa kartu kredit, tanpa risiko. Rasakan perbedaannya sejak tetesan pertama.",
    en: "Get instant access to 10 free recipes on the Free Plan. No credit card, no risk. Taste the difference from the very first drop.",
  },
  "final_cta.download_ios": {
    id: "iOS (App Store)",
    en: "iOS (App Store)",
  },
  "final_cta.download_android": {
    id: "Android (Play Store)",
    en: "Android (Play Store)",
  },
  "final_cta.download_apk": {
    id: "Direct APK (Android)",
    en: "Direct APK (Android)",
  },

  // FOOTER
  "footer.desc": {
    id: "Aplikasi specialty coffee brewing labs terdepan di Indonesia. Multi-platform untuk iOS, Android, dan Web. Menggabungkan 200+ resep barista dunia, guided timer interaktif, diagnosis sensori Brew Doctor, dan direktori roastery nusantara.",
    en: "Indonesia's premier specialty coffee brewing labs application. Multi-platform for iOS, Android, and Web. Combining 200+ world barista recipes, interactive guided timer, Brew Doctor sensory diagnosis, and roastery directory.",
  },
  "footer.nav_title": {
    id: "Navigasi",
    en: "Navigation",
  },
  "footer.features_title": {
    id: "Fitur Unggulan",
    en: "Core Features",
  },
  "footer.copyright": {
    id: "Hak cipta dilindungi. Dibuat dengan presisi dan kecintaan pada kopi nusantara.",
    en: "All rights reserved. Crafted with precision and passion for specialty coffee.",
  },
};
