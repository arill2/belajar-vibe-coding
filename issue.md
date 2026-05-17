# Rencana Implementasi: Backend API dengan Bun, Elysia JS, Drizzle ORM, dan MySQL

Dokumen ini berisi panduan tingkat tinggi (high-level planning) untuk menginisialisasi dan membangun fondasi proyek backend baru di repositori `belajar_vibe_code`. Panduan ini dirancang agar dapat diimplementasikan dengan mudah oleh programmer atau AI agent.

---

## 🛠️ Stack Teknologi
*   **Runtime & Package Manager**: [Bun](https://bun.sh/)
*   **Web Framework**: [Elysia JS](https://elysiajs.com/) (Framework cepat & ramah TypeScript)
*   **ORM**: [Drizzle ORM](https://orm.drizzle.team/)
*   **Database**: MySQL
*   **Driver & Tooling**: `mysql2` (driver) dan `drizzle-kit` (migration & prototyping tool)

---

## 📋 Langkah-Langkah Implementasi (High-Level Checklist)

### 1. Inisialisasi Proyek Baru
*   [ ] Buat struktur folder proyek di dalam direktori `belajar_vibe_code`.
*   [ ] Jalankan perintah inisialisasi proyek menggunakan **Bun** (`bun init`) untuk membuat konfigurasi TypeScript dan `package.json` secara otomatis.
*   [ ] Konfigurasi file `.gitignore` dasar untuk mengabaikan `node_modules`, `.env`, dan folder build/dist.

### 2. Instalasi Dependensi
*   [ ] Pasang dependensi utama (production dependencies):
    *   `elysia` (Web framework)
    *   `drizzle-orm` (ORM)
    *   `mysql2` (Database driver)
    *   `dotenv` (Untuk mengelola environment variables, opsional jika menggunakan fitur bawaan Bun)
*   [ ] Pasang dependensi pengembangan (development dependencies):
    *   `drizzle-kit` (Untuk migrasi dan sinkronisasi skema database)
    *   `@types/node` (Kebutuhan TypeScript)

### 3. Konfigurasi Database & ORM (Drizzle)
*   [ ] Buat file konfigurasi environment (`.env`) berisi kredensial koneksi database MySQL (`DATABASE_URL`).
*   [ ] Buat file konfigurasi Drizzle (`drizzle.config.ts`) yang mengarah ke folder skema database dan mencantumkan dialek `mysql`.
*   [ ] Buat struktur folder untuk database (misalnya `src/db/` atau `src/schema/`):
    *   Definisikan satu tabel contoh (misalnya tabel `users` atau `todos`) menggunakan kolom dasar (`id`, `name`, `created_at`).
    *   Buat modul inisialisasi koneksi database menggunakan `drizzle` dan `mysql2`.

### 4. Setup Server Elysia JS
*   [ ] Buat file entrypoint aplikasi (`src/index.ts`).
*   [ ] Inisialisasi instance Elysia dan konfigurasikan port server (default: `3000`).
*   [ ] Buat endpoint sederhana:
    *   `GET /` : Endpoint beranda/health-check.
    *   `GET /db-test` : Endpoint untuk menguji koneksi ke database MySQL dan melakukan query dasar ke tabel contoh yang telah didefinisikan.

### 5. Skrip Otomatisasi (Scripts)
*   [ ] Tambahkan skrip berikut ke `package.json` untuk memudahkan eksekusi:
    *   `dev`: Menjalankan server development dengan fitur auto-reload (`bun --watch src/index.ts`).
    *   `db:generate`: Membuat file migrasi dari skema Drizzle (`drizzle-kit generate`).
    *   `db:migrate`: Menjalankan migrasi ke database MySQL (`drizzle-kit migrate` atau skrip kustom).
    *   `db:studio`: Membuka Drizzle Studio untuk visualisasi database (`drizzle-kit studio`).

---

## 🔍 Kriteria Keberhasilan (Verification Checklist)
*   [ ] Server Elysia dapat berjalan tanpa error menggunakan perintah `bun dev`.
*   [ ] Akses ke `http://localhost:3000/` mengembalikan respons sukses (misalnya `Hello Elysia`).
*   [ ] Migrasi database berhasil dibuat (`drizzle-kit generate`) dan diterapkan ke database MySQL lokal.
*   [ ] Akses ke endpoint `/db-test` sukses mengembalikan data dari MySQL melalui Drizzle ORM tanpa kendala koneksi.
