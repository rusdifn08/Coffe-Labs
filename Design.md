# Coffee Labs Landing Page — Design System (Design.md)

> **Versi:** 1.0 · **Tanggal:** 23 Oktober 2026 · **Status:** Draft untuk implementasi
> **Dokumen pendamping:** [Product Requirement Document.md](./Product%20Requirement%20Document.md)
> **Sumber kebenaran visual:** tema aplikasi mobile `coffe-labs-mobile/lib/theme/app_theme.dart` (palet "Coffee inspired"), Toolkit cards, dan Splash screen ("Coffee Labs — *Master Your Brew*").

---

## 1. Prinsip Desain

| # | Prinsip | Arti di Landing Page |
|---|---------|----------------------|
| 1 | **Konsisten dengan aplikasi** | Warna, font (Poppins), radius, dan gaya kartu **wajib identik** dengan app Flutter agar screenshot di dalam mockup HP terasa "menyatu" dengan halaman. |
| 2 | **Hangat & Premium** | Nuansa kafe specialty: krem lembut, espresso pekat, aksen emas/amber. Tidak "tech-neon". |
| 3 | **Presisi** | Angka (gram, °C, detik, rasio 1:15) adalah bahasa visual utama. Gunakan *tabular numbers* dan data chip. |
| 4 | **Ringan secara default** | Semua efek visual diutamakan **CSS-only** (tanpa library animasi JS). Gambar AVIF/WebP, font di-subset. |
| 5 | **Aksesibel** | Kontras minimal WCAG 2.2 AA, fokus keyboard terlihat, menghormati `prefers-reduced-motion`. |
| 6 | **Mobile-first** | > 80% traffic diperkirakan dari HP (target user = home brewer & barista). Desain dimulai dari 360 px. |

---

## 2. Brand Identity

- **Nama produk:** Coffee Labs (nama package app: `coffee_hub_mobile`; positioning onboarding: *"Specialty Coffee Brewing Hub"*)
- **Tagline utama:** *Master Your Brew*
- **Tagline ID:** *Seduh presisi, rasa juara — setiap hari.*
- **Logo:** gunakan `coffe-labs-mobile/assets/icon.png` (ekspor ulang ke SVG bila memungkinkan). Clear-space minimal = tinggi huruf "C" pada wordmark di semua sisi.
- **Wordmark:** "Coffee Labs" — Poppins 700, `letter-spacing: -0.02em`. Kata "Labs" boleh diberi warna `--color-amber-500` pada latar gelap.

### 2.1 Voice & Tone

| Atribut | Lakukan | Hindari |
|---------|---------|---------|
| Ramah-ahli | "Under-extracted? Brew Doctor kasih tahu harus ubah apa." | Bahasa kaku/akademis berlebihan |
| Bilingual natural | Istilah kopi tetap Inggris (bloom, pour, body, clean cup) | Menerjemahkan istilah teknis secara paksa |
| Spesifik | "159 resep dari 97 barista & brewer dunia" | "Banyak resep" |
| Mengajak | "Mulai seduh gratis" | "Klik di sini" |

---

## 3. Color Palette

### 3.1 Core Palette (diambil 1:1 dari `AppTheme`)

| Token | Hex | Nama di App | Peran |
|-------|-----|-------------|-------|
| `--color-espresso-600` | `#6B4423` | `primaryBrown` (Espresso) | Warna brand utama, heading aksen, tombol sekunder, ikon aktif |
| `--color-latte-400` | `#9A7B4F` | `lightBrown` (Latte) | Elemen dekoratif, ilustrasi, border aksen (**bukan** untuk body text) |
| `--color-amber-500` | `#ECA400` | `accentAmber` | CTA utama (background), highlight, badge "Popular" |
| `--color-gold-500` | `#D4AF37` | `accentGold` | Badge premium ("PROFESSIONAL SUITE"), aksen di latar gelap, ikon bintang |
| `--color-cream-50` | `#F9F6F0` | `bgCream` | Background halaman default |
| `--color-white` | `#FFFFFF` | `surfaceWhite` | Card, navbar, surface |
| `--color-ink-900` | `#332B25` | `textDark` | Heading & body text utama |
| `--color-ink-400` | `#8F857D` | `textMuted` | Caption besar, placeholder, ikon non-aktif (**hanya ≥ 18 px**) |
| `--color-sand-200` | `#E8DFD8` | `dividerColor` / `borderWarm` | Divider, border kartu, garis tabel |

### 3.2 Extended Palette (tambahan khusus web)

| Token | Hex | Peran |
|-------|-----|-------|
| `--color-roast-950` | `#1E1612` | Background section gelap (Hero alternatif, Pricing, Final CTA, Footer) |
| `--color-roast-900` | `#2A1F19` | Card di atas section gelap |
| `--color-roast-800` | `#3A2B22` | Border/divider di section gelap |
| `--color-ink-600` | `#6F655D` | **Body text muted** yang lolos AA (pengganti `#8F857D` untuk teks kecil) |
| `--color-espresso-700` | `#563519` | Hover tombol espresso |
| `--color-espresso-100` | `#F1E8E0` | Tint lembut: background chip, ikon container |
| `--color-amber-600` | `#C98C00` | Hover/pressed CTA amber |
| `--color-amber-100` | `#FFF4D6` | Background highlight / badge lembut |
| `--color-cream-100` | `#F3EDE3` | Section alternatif (zebra) |

### 3.3 Semantic & Feature Accent (dari Toolkit Screen)

Warna ini **hanya** dipakai untuk ikon fitur di Toolkit/Feature grid agar sama persis dengan app.

| Fitur | Primary | Secondary | Gradient (bg ikon) |
|-------|---------|-----------|--------------------|
| Favorite | `#D32F2F` | `#FF8A80` | `#FFEBEE → #FFCDD2` |
| Cupping Flavour | `#E65100` | `#FFB74D` | `#FFF3E0 → #FFE0B2` |
| Coffee Roastery | `#5D4037` | `#BCAAA4` | `#EFEBE9 → #D7CCC8` |
| Beans Radar | `#00796B` | `#80CBC4` | `#E0F2F1 → #B2DFDB` |
| Jurnal Brew | `#303F9F` | `#9FA8DA` | `#E8EAF6 → #C5CAE9` |
| Social Coffee | `#E91E63` | `#FF80AB` | `#FCE4EC → #F8BBD0` |

| Semantic | Hex | Contoh |
|----------|-----|--------|
| Success | `#2E7D32` | "Sweet Spot! Ekstraksi Seimbang 🎯" |
| Warning | `#E65100` | "Under-Extracted" |
| Danger | `#C62828` | "Over-Extracted" |
| Info | `#1565C0` | Mode Japanese Iced |

### 3.4 Aturan Kontras (WCAG 2.2) — WAJIB

| Kombinasi | Rasio | Status | Aturan |
|-----------|-------|--------|--------|
| `#332B25` di `#F9F6F0` | ≈ 13 : 1 | ✅ AAA | Body text default |
| `#6B4423` di `#F9F6F0` | ≈ 7.9 : 1 | ✅ AAA | Heading aksen, link |
| `#FFFFFF` di `#6B4423` | ≈ 8.5 : 1 | ✅ AAA | Tombol espresso |
| `#332B25` di `#ECA400` | ≈ 6.5 : 1 | ✅ AA | **Tombol CTA amber → teks WAJIB gelap** |
| `#FFFFFF` di `#ECA400` | ≈ 2.1 : 1 | ❌ | **DILARANG** (beda dari app, demi aksesibilitas web) |
| `#D4AF37` di `#1E1612` | ≈ 8.5 : 1 | ✅ AAA | Aksen gold di section gelap |
| `#6F655D` di `#F9F6F0` | ≈ 5.3 : 1 | ✅ AA | Body text muted |
| `#8F857D` di `#F9F6F0` | ≈ 3.3 : 1 | ⚠️ | Hanya teks ≥ 18 px / bold ≥ 14 px atau ikon |
| `#9A7B4F` di `#F9F6F0` | ≈ 3.7 : 1 | ⚠️ | Dekoratif / teks besar saja |

### 3.5 Proporsi Penggunaan (60-30-10)

- **60%** Cream `#F9F6F0` + White
- **30%** Espresso / Roast (teks, section gelap)
- **10%** Amber + Gold (CTA, badge, highlight angka)

### 3.6 Gradient Resmi

```css
--gradient-espresso: linear-gradient(135deg, #6B4423 0%, rgba(107,68,35,.9) 100%); /* = header Toolkit app */
--gradient-roast:    radial-gradient(120% 80% at 50% 0%, #3A2B22 0%, #1E1612 60%);
--gradient-crema:    linear-gradient(180deg, #F9F6F0 0%, #F3EDE3 100%);
--gradient-amber-glow: radial-gradient(50% 50% at 50% 50%, rgba(236,164,0,.35) 0%, rgba(236,164,0,0) 100%); /* glow di belakang mockup HP */
```

---

## 4. Typography

### 4.1 Font Family

| Peran | Font | Bobot | Alasan |
|-------|------|-------|--------|
| **Primary (UI + Body + Heading)** | **Poppins** | 400, 500, 600, 700 | Sama dengan `GoogleFonts.poppinsTextTheme()` di app |
| **Accent (opsional, 1 kata di hero)** | **Fraunces Variable — Italic** | 400–600 | Nuansa "craft coffee/editorial"; dipakai max 1–2 kata per section |
| **Numeric/Data** | Poppins + `font-variant-numeric: tabular-nums` | 600 | Angka gram/detik sejajar |

**Aturan loading font (performa):**
- Self-host via `@fontsource/poppins` & `@fontsource-variable/fraunces` (tanpa request ke Google Fonts).
- Format **WOFF2 only**, subset `latin` + `latin-ext`.
- `font-display: swap`; **preload** hanya Poppins 600 & 700 (dipakai di hero).
- Total budget font: **≤ 90 KB**.
- Fallback stack: `Poppins, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif` dengan `size-adjust` metric override untuk mencegah CLS.

### 4.2 Type Scale (fluid, `clamp()`)

| Token | Mobile (360) | Desktop (1440) | Line-height | Weight | Tracking | Penggunaan |
|-------|--------------|----------------|-------------|--------|----------|------------|
| `display` | 40 px | 72 px | 1.05 | 700 | -0.03em | Headline Hero |
| `h1` | 34 px | 56 px | 1.1 | 700 | -0.02em | Judul halaman/section utama |
| `h2` | 28 px | 44 px | 1.15 | 700 | -0.02em | Judul section |
| `h3` | 22 px | 28 px | 1.25 | 600 | -0.01em | Judul card besar |
| `h4` | 18 px | 20 px | 1.3 | 600 | 0 | Judul card kecil |
| `body-lg` | 17 px | 19 px | 1.6 | 400 | 0 | Sub-headline |
| `body` | 16 px | 16 px | 1.65 | 400 | 0 | Paragraf |
| `body-sm` | 14 px | 14 px | 1.55 | 400 | 0 | Deskripsi kartu |
| `caption` | 12 px | 13 px | 1.4 | 500 | 0.01em | Label, meta |
| `overline` | 11 px | 12 px | 1.2 | 800 | 0.12em, UPPERCASE | Eyebrow section ("PROFESSIONAL SUITE") |
| `stat` | 36 px | 56 px | 1 | 700 | -0.02em, tabular | Angka statistik |

Contoh token:
```css
--text-display: clamp(2.5rem, 1.7rem + 3.6vw, 4.5rem);
--text-h2:      clamp(1.75rem, 1.35rem + 1.8vw, 2.75rem);
```

### 4.3 Aturan Teks
- Panjang baris paragraf maks **65ch**.
- Heading maks 2–3 baris; gunakan `text-wrap: balance` untuk heading, `text-wrap: pretty` untuk paragraf.
- Jangan memakai lebih dari 2 weight dalam satu kartu.

---

## 5. Spacing, Layout & Grid

### 5.1 Spacing Scale (basis 4 px)

`0, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128, 160`

| Konteks | Mobile | Desktop |
|---------|--------|---------|
| Padding vertikal section | 64–80 px | 112–144 px |
| Jarak eyebrow → judul | 12 px | 16 px |
| Jarak judul → deskripsi | 16 px | 20 px |
| Jarak header section → konten | 40 px | 64 px |
| Gap grid kartu | 12–16 px | 24 px |
| Padding kartu | 20 px | 28–32 px |

### 5.2 Breakpoints

| Nama | Min-width | Kolom | Gutter | Margin |
|------|-----------|-------|--------|--------|
| `base` | 0 | 4 | 16 | 20 |
| `sm` | 640 px | 8 | 20 | 32 |
| `md` | 768 px | 8 | 24 | 40 |
| `lg` | 1024 px | 12 | 24 | 48 |
| `xl` | 1280 px | 12 | 32 | auto |
| `2xl` | 1536 px | 12 | 32 | auto |

- **Container max-width:** `1200px` (konten), `1320px` (bento grid), `720px` (FAQ/teks).
- Gunakan **container queries** (`@container`) untuk kartu fitur agar responsif terhadap lebar parent, bukan viewport.

---

## 6. Shape, Elevation & Effects

### 6.1 Border Radius (selaras app)

| Token | Nilai | Sumber di App | Penggunaan |
|-------|-------|---------------|------------|
| `--radius-xs` | 6 px | Badge "PROFESSIONAL SUITE" | Badge, tag |
| `--radius-sm` | 12 px | `ElevatedButton` | Tombol, input |
| `--radius-md` | 16 px | Toolkit card, history tile | Card kecil |
| `--radius-lg` | 20 px | `CardTheme` | Card standar |
| `--radius-xl` | 24 px | Recipe card, dialog | Card besar, pricing |
| `--radius-2xl` | 32 px | — | Bento tile, section panel |
| `--radius-phone` | 48 px (scaled) | — | Bingkai mockup HP |
| `--radius-full` | 9999 px | Avatar barista | Pill, avatar, chip |

### 6.2 Shadow (warm-tinted, bukan abu-abu)

```css
--shadow-xs: 0 1px 2px rgba(51,43,37,.06);
--shadow-sm: 0 3px 8px rgba(107,68,35,.10);          /* = Toolkit header */
--shadow-md: 0 8px 15px rgba(107,68,35,.05), 0 2px 4px rgba(51,43,37,.04); /* = recipe card */
--shadow-lg: 0 24px 48px -12px rgba(107,68,35,.18);
--shadow-phone: 0 40px 80px -20px rgba(30,22,18,.45), 0 0 0 1px rgba(255,255,255,.06) inset;
--shadow-cta-glow: 0 10px 30px -8px rgba(236,164,0,.55);
```

### 6.3 Border
- Default card: `1px solid rgba(107,68,35,.10)` (sama dengan app `primaryBrown.withValues(alpha: 0.1)`).
- Card di section gelap: `1px solid #3A2B22`.
- Kartu "Popular" di pricing: `2px solid #ECA400`.

### 6.4 Efek Khusus
- **Glassmorphism navbar:** `background: rgba(249,246,240,.72); backdrop-filter: blur(14px) saturate(140%);` — fallback solid cream jika `backdrop-filter` tidak didukung.
- **Grain/noise texture:** SVG noise inline 3% opacity di section gelap (≤ 1 KB) untuk kesan kertas/kopi.
- **Coffee steam:** 3 path SVG dengan animasi CSS `translateY + opacity` di Hero (dimatikan saat reduced motion).

---

## 7. Iconography

- **Library:** **Lucide** via `astro-icon` + `@iconify-json/lucide` → di-render sebagai **inline SVG saat build (0 KB JS)**.
- Ukuran: 16 / 20 / 24 / 32 px; stroke `1.75`.
- Ikon fitur Toolkit **wajib** pakai ulang desain `ToolkitVectorIcon` app (ekspor ulang ke SVG) agar identik.
- Ikon container: kotak `36–48 px`, radius 11–14 px, background gradient sesuai tabel 3.3.
- Mapping ikon app (Cupertino) → web (Lucide):

| App (Cupertino) | Web (Lucide) | Konteks |
|-----------------|--------------|---------|
| `house_fill` | `house` | Home |
| `book_fill` | `book-open` | Recipes |
| `timer_fill` | `timer` | Brew |
| `wrench_fill` | `wrench` | Toolkit |
| `person_solid` | `user-round` | Profile |
| `heart_fill` | `heart` | Favorite |
| `thermometer` | `thermometer` | Suhu air |
| `drop` | `droplet` | TDS/air |
| `lab_flask_solid` | `flask-conical` | Hybrid |
| `sparkles` | `sparkles` | Premium |
| `lock_shield_fill` | `shield-check` | Trial lock / keamanan |

---

## 8. Komponen UI

### 8.1 Button

| Varian | Background | Teks | Border | Hover | Penggunaan |
|--------|-----------|------|--------|-------|------------|
| **Primary (CTA)** | `#ECA400` | `#332B25` 600 | — | `#C98C00` + `--shadow-cta-glow` | "Download Gratis", "Mulai Trial" |
| **Secondary** | `#6B4423` | `#FFFFFF` 600 | — | `#563519` | "Lihat Fitur" |
| **Outline** | transparan | `#6B4423` | `1.5px #6B4423` | bg `#F1E8E0` | Aksi tersier |
| **Ghost (dark)** | `rgba(255,255,255,.06)` | `#F9F6F0` | `1px rgba(255,255,255,.14)` | bg `.12` | Di section gelap |
| **Store Badge** | `#000` | white | — | scale 1.02 | Google Play / App Store / APK |

- Ukuran: `sm` 36 px · `md` 44 px · `lg` 52 px (tinggi). Padding horizontal 16/20/24 px. Radius 12 px.
- **Touch target minimum 44×44 px.**
- Focus: `outline: 3px solid #ECA400; outline-offset: 3px;`
- Ikon panah di kanan bergeser `translateX(3px)` saat hover (CSS transition 200 ms).

### 8.2 Badge / Chip
- **Eyebrow badge:** bg `rgba(212,175,55,.22)`, teks `#D4AF37` (di gelap) atau `#6B4423` (di terang), 11 px 800 uppercase tracking 0.12em, radius 6 px — mereplikasi badge "PROFESSIONAL SUITE".
- **Data chip:** bg white, border sand, ikon 14 px + angka tabular. Contoh: `🌡 93°C` `⚖ 15g` `⏱ 2:30`.
- **Category chip** (resep): V60 = oranye (`flame`), Hybrid/Origami = biru (`flask`), Flat Bottom = hijau (`box`) — sama dengan logika `_buildRecipeCard`.

### 8.3 Card
- **Feature Card:** white, radius 20, border 1px brown/10%, padding 28, ikon container 48 px di atas, judul h4, deskripsi body-sm `#6F655D`. Hover: `translateY(-4px)` + `--shadow-lg`.
- **Bento Tile:** radius 32, bisa berisi screenshot app terpotong (crop) di bagian bawah, padding 32.
- **Recipe Card (replika app):** lebar 170–220 px, radius 24, gambar cover radius 16 tinggi 100, judul 2 baris, nama barista 10–12 px bold muted, chip kategori.
- **Testimonial Card:** avatar 44 px, kutipan body, nama + peran caption, rating bintang gold.
- **Pricing Card:** lihat 8.6.

### 8.4 Phone Mockup (komponen paling penting)

| Properti | Nilai |
|----------|-------|
| Rasio layar | 9 : 19.5 (screenshot 1080×2340 atau 1290×2796) |
| Bingkai | CSS murni (`border: 10px solid #1E1612; border-radius: 48px`) + dynamic island pill `#000` 30% lebar — **tanpa gambar frame PNG** |
| Lebar | Hero: 300 px (mobile 240 px) · Showcase: 260 px · Kecil: 200 px |
| Shadow | `--shadow-phone` + glow `--gradient-amber-glow` di belakang |
| Konten | `<picture>` AVIF → WebP → PNG; `loading="lazy"` kecuali Hero (`fetchpriority="high"`) |
| Variasi | `tilt-left` (rotate -6°), `tilt-right` (+6°), `flat`, `stack` (3 HP bertumpuk dengan offset) |
| Status bar | Bagian dari screenshot; pastikan jam **9:41**, baterai penuh, sinyal penuh |

**Aturan screenshot:** ambil dari app versi release, bahasa sesuai locale halaman (ID/EN), nama user contoh "Rusdi", data dummy rapi (tanpa error/loading state).

### 8.5 Navbar
- Tinggi 64 px (mobile 56 px), sticky, glass effect (6.4). Muncul border bawah `#E8DFD8` setelah scroll > 8 px (CSS scroll-driven atau 1 IntersectionObserver kecil).
- Kiri: logo + wordmark. Tengah (≥ lg): Fitur · Cara Kerja · Harga · FAQ. Kanan: toggle bahasa `ID | EN` + tombol Primary `sm`.
- Mobile: hamburger → drawer full-height memakai elemen `<dialog>` native (tanpa library).

### 8.6 Pricing Card
- Grid 3 kolom (desktop), stack/carousel snap (mobile).
- Card standar: bg `#2A1F19` di section gelap, border `#3A2B22`, radius 24, padding 32.
- **Card Popular:** border 2px amber, badge "Paling Populer" di atas (bg amber, teks ink), sedikit `scale(1.03)` di desktop.
- Struktur: nama paket (h4) → deskripsi singkat → harga (`stat`, tabular) + periode (caption) → CTA → divider → checklist fitur (ikon `check` amber; fitur tidak tersedia pakai `minus` abu & teks dicoret 60% opacity).
- **Toggle Bulanan / Tahunan:** segmented control (radio input + CSS `:has()`), label "Hemat 28%" badge hijau.

### 8.7 FAQ Accordion
- Gunakan `<details name="faq">` native (exclusive accordion, 0 JS). Ikon `plus` berotasi 45° saat `[open]`. Animasi tinggi via `interpolate-size: allow-keywords` (progressive enhancement).

### 8.8 Form (Newsletter / Waitlist)
- Input tinggi 48 px, radius 12, border sand, focus border amber + ring `0 0 0 4px rgba(236,164,0,.2)`.
- Label selalu terlihat (bukan placeholder-only). Pesan error `#C62828` dengan ikon.

### 8.9 Stats Strip
- 4 angka: **159+** Resep Dunia · **97** Barista & Brewer · **50** Roastery Indonesia · **29** Model Grinder. Angka `stat` warna espresso (terang) / gold (gelap), label caption muted.

---

## 9. Motion & Interaction

| Token | Nilai | Penggunaan |
|-------|-------|------------|
| `--ease-out` | `cubic-bezier(.22,1,.36,1)` | Masuk elemen |
| `--ease-in-out` | `cubic-bezier(.65,0,.35,1)` | Toggle, tab |
| `--dur-fast` | 150 ms | Hover, fokus |
| `--dur-base` | 250 ms | Tombol, chip, accordion |
| `--dur-slow` | 500 ms | Fade-in section (sama dengan `FadeTransition` 500 ms di Home app) |

**Aturan:**
1. **CSS-first:** reveal-on-scroll pakai `animation-timeline: view()` (scroll-driven animations). Fallback: elemen langsung terlihat (tanpa JS polyfill).
2. Hanya animasikan `transform` dan `opacity` (GPU-friendly, tanpa layout thrash).
3. Reveal: `opacity 0→1`, `translateY 24px→0`, stagger 60 ms antar kartu.
4. **App Tour (scrollytelling):** pergantian screenshot dalam mockup memakai crossfade 400 ms.
5. **Hero micro-animation:** timer brew berdetak (angka 00:30 → 02:30) dan "water ring" progress — CSS `@property` + `conic-gradient`.
6. `@media (prefers-reduced-motion: reduce)` → semua animasi non-esensial **mati**, transisi ≤ 1 ms.
7. Tidak ada autoplay audio. Video (jika ada) `muted playsinline`, poster AVIF, dimuat saat terlihat.

---

## 10. Imagery & Ilustrasi

- **Fotografi:** close-up seduhan manual (V60, kettle gooseneck, timbangan), warm tone, depth-of-field dangkal. Grade: shadows kecokelatan, highlight krem. Hindari foto stok "orang tersenyum memegang cangkir".
- **Avatar barista:** gunakan aset `assets/images/avatars/portraits/*` dalam lingkaran (radius full) dengan ring 2 px cream — hanya untuk "Barista Spotlight" dengan **disclaimer** (lihat PRD §Risiko).
- **Grinder:** aset `assets/images/grinders/*` untuk visual "Grinder Converter 29 model".
- **Ilustrasi:** line-art SVG sederhana (dripper, biji kopi, flavor wheel) stroke `#6B4423` 1.5 px, isi aksen amber 20%.
- **Format:** AVIF (utama) → WebP (fallback). Lebar responsif `srcset` 320/640/960/1280. Kualitas AVIF 55–62.
- **Background pattern:** pola biji kopi tipis (SVG, 4% opacity) untuk section krem alternatif.

---

## 11. Dark Sections

Section berikut memakai tema gelap `--color-roast-950` untuk ritme visual: **Brew Doctor**, **Pricing**, **Final CTA**, **Footer** (Hero tetap terang/krem agar konsisten dengan app).

| Elemen | Warna di Dark |
|--------|---------------|
| Heading | `#F9F6F0` |
| Body | `rgba(249,246,240,.72)` (≈ 9 : 1) |
| Muted | `rgba(249,246,240,.55)` (hanya ≥ 14 px) |
| Aksen | `#D4AF37` (gold), `#ECA400` (CTA) |
| Card | `#2A1F19`, border `#3A2B22` |

> Mode gelap sistem (`prefers-color-scheme: dark`) **tidak** diimplementasikan pada v1 — brand mengikuti app yang light-only.

---

## 12. Aksesibilitas (Checklist Desain)

- [ ] Semua kombinasi warna teks lolos tabel §3.4.
- [ ] Fokus terlihat pada semua elemen interaktif (outline amber 3 px).
- [ ] Screenshot app punya `alt` deskriptif (contoh: "Layar Guided Brew Coffee Labs menampilkan tahap Blooming 30 detik dengan 30 g air").
- [ ] Heading hierarki berurutan (1× `h1` di Hero).
- [ ] Target sentuh ≥ 44 px; jarak antar target ≥ 8 px.
- [ ] Tidak ada informasi yang hanya disampaikan lewat warna (status ekstraksi selalu disertai label teks).
- [ ] Toggle bahasa memakai `lang` & `hreflang` yang benar.
- [ ] Skip link "Langsung ke konten" di awal halaman.

---

## 13. Design Tokens — Implementasi Tailwind CSS v4

Letakkan di `src/styles/global.css`:

```css
@import "tailwindcss";

@theme {
  /* Colors — core (AppTheme) */
  --color-espresso-100: #F1E8E0;
  --color-espresso-600: #6B4423;
  --color-espresso-700: #563519;
  --color-latte-400:    #9A7B4F;
  --color-amber-100:    #FFF4D6;
  --color-amber-500:    #ECA400;
  --color-amber-600:    #C98C00;
  --color-gold-500:     #D4AF37;
  --color-cream-50:     #F9F6F0;
  --color-cream-100:    #F3EDE3;
  --color-sand-200:     #E8DFD8;
  --color-ink-400:      #8F857D;
  --color-ink-600:      #6F655D;
  --color-ink-900:      #332B25;
  --color-roast-800:    #3A2B22;
  --color-roast-900:    #2A1F19;
  --color-roast-950:    #1E1612;

  /* Typography */
  --font-sans:    "Poppins", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  --font-display: "Fraunces Variable", Georgia, serif;
  --text-display: clamp(2.5rem, 1.7rem + 3.6vw, 4.5rem);
  --text-h1:      clamp(2.125rem, 1.6rem + 2.4vw, 3.5rem);
  --text-h2:      clamp(1.75rem, 1.35rem + 1.8vw, 2.75rem);
  --text-h3:      clamp(1.375rem, 1.2rem + .7vw, 1.75rem);

  /* Radius */
  --radius-xs: 6px;  --radius-sm: 12px; --radius-md: 16px;
  --radius-lg: 20px; --radius-xl: 24px; --radius-2xl: 32px;

  /* Shadows */
  --shadow-warm-sm: 0 3px 8px rgba(107,68,35,.10);
  --shadow-warm-md: 0 8px 15px rgba(107,68,35,.05), 0 2px 4px rgba(51,43,37,.04);
  --shadow-warm-lg: 0 24px 48px -12px rgba(107,68,35,.18);
  --shadow-phone:   0 40px 80px -20px rgba(30,22,18,.45);
  --shadow-cta:     0 10px 30px -8px rgba(236,164,0,.55);

  /* Motion */
  --ease-out-expo: cubic-bezier(.22,1,.36,1);
}

@layer base {
  html { background: var(--color-cream-50); color: var(--color-ink-900); font-family: var(--font-sans); }
  :focus-visible { outline: 3px solid var(--color-amber-500); outline-offset: 3px; }
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after { animation-duration: 1ms !important; transition-duration: 1ms !important; scroll-behavior: auto !important; }
  }
}
```

---

## 14. Do & Don't

| ✅ Do | ❌ Don't |
|-------|---------|
| Teks gelap di atas tombol amber | Teks putih di atas amber |
| Screenshot asli app dalam mockup CSS | Mockup PNG berat / screenshot buram |
| Maks. 1 kata Fraunces italic per heading | Seluruh heading memakai serif |
| Angka spesifik & tabular | Klaim kosong ("terbaik", "nomor 1") tanpa data |
| Shadow kecokelatan lembut | Shadow hitam pekat |
| Animasi transform/opacity, CSS-only | Library animasi JS berat (GSAP full, Lottie besar) untuk efek sederhana |
| Satu CTA primer per viewport | Banyak tombol amber berdampingan |
