# Coffee Labs — Specialty Coffee Brewing Labs

<div align="center">
  <img src="./public/icon.png" alt="Coffee Labs Logo" width="100" style="border-radius: 24px;" />
  <h3>Master Your Brew — Panduan Seduh Kopi Manual Presisi</h3>
  <p>159+ Resep Barista Dunia • Guided Timer Interaktif • Koreksi Sensori Brew Doctor • Multi-Platform</p>

  [![CI & Build](https://github.com/rusdifn08/Coffe-Labs/actions/workflows/ci.yml/badge.svg)](https://github.com/rusdifn08/Coffe-Labs/actions/workflows/ci.yml)
  [![Multi-Platform](https://img.shields.io/badge/Platform-iOS%20%7C%20Android%20%7C%20Web-6B4423)](https://github.com/rusdifn08/Coffe-Labs)
  [![Astro](https://img.shields.io/badge/Framework-Astro%205-ECA400)](https://astro.build)
  [![Tailwind CSS](https://img.shields.io/badge/CSS-Tailwind%20v4-38BDF8)](https://tailwindcss.com)
</div>

---

## ☕ Tentang Coffee Labs

**Coffee Labs** adalah ekosistem aplikasi panduan seduh kopi manual presisi terlengkap di Indonesia. Dirancang khusus untuk home brewer, barista kompetisi, hingga slow bar café komersial yang menginginkan konsistensi rasa kopi terbaik di setiap cangkir tanpa tebakan.

Tersedia secara resmi sebagai aplikasi **Multi-Platform**:
- 🍏 **iOS (iPhone & iPad)**: [Download Build Artifact](https://github.com/rusdifn08/coffe-labs-mobile/actions/runs/39809056131/artifacts/12439017056)
- 🤖 **Android (Google Play & APK)**: [Download Build APK Artifact](https://github.com/rusdifn08/coffe-labs-mobile/actions/runs/39809056131/artifacts/12439526766)
- 🌐 **Web App Live Trial**: Akses uji coba langsung tanpa instalasi di `/trial`

---

## 🌟 Fitur Utama

- **Pustaka 159+ Resep Juara Dunia**: Metode resmi dari Tetsu Kasuya (4:6 Method), James Hoffmann (Ultimate V60), Mikael Jasin (WBC 2024), Du Jianing, Chad Wang, Carlos Medina, dll.
- **Guided Brew Stopwatch Interaktif**: Pengukur waktu presisi tahap-per-tahap dengan target gramasi timbangan real-time dan audio efek suara (*chime*, *ticks*, dan musik santai *Chill Coffee Lounge*).
- **Brew Doctor & Sensory Diagnosis**: Sistem diagnosis rasa cerdas berbasis radar rasa lidah (*Sweetness*, *Acidity*, *Bitterness*, *Body*) untuk merekomendasikan koreksi klik grinder dan suhu air.
- **29 Model Konverter Grinder**: Kalkulasi klik otomatis antar merk terkemuka (Comandante C40, Timemore Chestnut, Vesper VS-3 Fold, MHW-3BOMBER, DF64, Fellow Ode, dll).
- **Direktori 50 Roastery & Beans Radar GPS**: Temukan kedai dan roastery kopi lokal nusantara terdekat dengan stok biji kopi segar.
- **Form Cupping SCA & 92 Flavor Notes**: Pencatatan profil sensori standar internasional.
- **Cetak Struk Resep Thermal Bluetooth**: Integrasi printer kasir portable 58mm/80mm standar ESC/POS untuk slow bar kedai kopi.

---

## 📚 Dokumentasi Proyek

- 📄 [**Product Requirement Document (PRD)**](./Product%20Requirement%20Document.md): Analisis kebutuhan produk, arsitektur, spesifikasi teknis, model data, dan struktur navigasi.
- 🎨 [**Design Rules & Guidelines (Design.md)**](./Design.md): Aturan palet warna kopi (*Espresso*, *Amber*, *Cream*), tipografi Poppins, radius komponen, micro-interactions, dan aturan asset visual.

---

## 🛠️ Tech Stack

- **Framework**: [Astro 5](https://astro.build/) (Static Site Generation yang ultra-cepat, hemat memori, dan zero JS by default)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Audio Engine**: HTML5 Audio + Web Audio API synthesizer fallback
- **Icons**: Custom Clean SVG Icons (Accessible & Crisp)
- **Deployment**: Static output siap dideploy ke Vercel, Netlify, Cloudflare Pages, atau GitHub Pages

---

## 🚀 Memulai (Local Development)

### Prasyarat
- [Node.js](https://nodejs.org/) v18+ atau v20+
- [pnpm](https://pnpm.io/) v9+ (atau npm/yarn)

### Langkah Instalasi
```bash
# Clone repository
git clone https://github.com/rusdifn08/Coffe-Labs.git
cd Coffe-Labs

# Install dependencies
pnpm install

# Jalankan development server
pnpm dev
```

Buka browser di `http://localhost:4321/` untuk melihat Landing Page dan `http://localhost:4321/trial` untuk mencoba Web App Trial.

### Build untuk Produksi
```bash
pnpm build
```
Hasil build static akan berada di direktori `dist/` dan siap dideploy ke CDN/hosting pilihan Anda.

---

## 📄 Lisensi & Hak Cipta

© 2026 Coffee Labs by [rusdifn08](https://github.com/rusdifn08). Seluruh hak cipta dilindungi undang-undang.
