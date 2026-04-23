# 🚀 Kuy Nge Website — Panduan Deploy

Platform belajar web development oleh **Muhammad Hasbhi**.

---

## 📁 Struktur Project

```
kuy-nge-website/
├── api/
│   └── chat.js          ← Backend proxy untuk chatbot AI (PENTING!)
├── public/
│   └── index.html       ← Website utama
├── vercel.json          ← Konfigurasi Vercel
├── package.json
└── README.md
```

---

## 🔑 Kenapa Ada Folder `api`?

Chatbot **Hasbhi Bot** menggunakan Anthropic AI yang butuh **API Key**.
API Key **TIDAK BOLEH** ditaruh di file HTML (bisa dicuri orang!).

Solusinya: file `api/chat.js` adalah server kecil yang menyimpan API key
dengan aman di environment variable Vercel.

```
Browser → /api/chat (server kita) → Anthropic API
                  ↑
           API key aman di sini
```

---

## 🛠️ Cara Deploy ke Vercel (GRATIS)

### Langkah 1: Buat Akun GitHub
1. Buka [github.com](https://github.com) → Sign Up (gratis)

### Langkah 2: Upload Project ke GitHub
1. Klik tombol **"+"** → **New repository**
2. Nama: `kuy-nge-website`
3. Public ✅ → klik **Create repository**
4. Upload semua file (drag & drop atau pakai GitHub Desktop)

### Langkah 3: Deploy ke Vercel
1. Buka [vercel.com](https://vercel.com) → **Sign Up with GitHub**
2. Klik **"Add New Project"**
3. Import repository `kuy-nge-website`
4. Klik **Deploy**

### Langkah 4: Tambahkan API Key ⭐ WAJIB!
1. Di dashboard Vercel → klik project kamu
2. **Settings** → **Environment Variables**
3. Klik **"Add New"**:
   - Name: `ANTHROPIC_API_KEY`
   - Value: (API key kamu — lihat langkah 5)
4. Klik **Save** → klik **Redeploy**

### Langkah 5: Dapatkan Anthropic API Key
1. Buka [console.anthropic.com](https://console.anthropic.com)
2. Daftar/Login
3. **API Keys** → **Create Key**
4. Copy key-nya → paste ke Vercel (langkah 4)

> ⚠️ **PENTING:** Jangan pernah share API key kamu ke siapapun!

---

## ✅ Checklist Setelah Deploy

- [ ] Website bisa dibuka
- [ ] 60 level tampil dengan benar
- [ ] Bisa klik "Belajar" → masuk halaman materi
- [ ] Bisa klik "Tes" → quiz muncul
- [ ] Chatbot Hasbhi Bot bisa menjawab
- [ ] Final Project upload HTML bisa preview
- [ ] Halaman Tentang tampil foto dan info
- [ ] XP tersimpan setelah level selesai

---

## 🐛 Troubleshooting

**Chatbot error "API key not configured":**
→ Belum tambah ANTHROPIC_API_KEY di Vercel Settings

**Chatbot tidak menjawab:**
→ Cek apakah API key valid di console.anthropic.com

**Website tidak update setelah edit:**
→ Push ke GitHub → Vercel auto-deploy

---

*Dibuat dengan ❤️ oleh Muhammad Hasbhi — Kuy Nge Website! 2025*
