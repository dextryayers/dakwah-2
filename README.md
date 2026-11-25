# Ketika Kebenaran Terasa Asing

Esai visual editorial 9:16 · 1080×1920 · 30 fps · 84,2 detik · 2.525 frame.
Dibuat dengan Remotion (React + TypeScript).

## Menjalankan

```bash
npm install
npm run dev        # Remotion Studio
npm run typecheck  # cek TypeScript
npm run render     # render ke out/ketika-kebenaran-terasa-asing.mp4
```

Render final yang dipakai untuk deliverable:

```bash
npx remotion render KetikaKebenaran output/ketika-kebenaran-terasa-asing.mp4 \
  --codec=h264 --crf=16 --pixel-format=yuv420p
```

## Struktur

```
src/
├── Root.tsx                        # registrasi composition
├── fonts.ts                        # inject @font-face lokal + delayRender
├── compositions/KetikaKebenaran/
│   ├── MainVideo.tsx               # urutan scene
│   ├── timeline.ts                 # SATU sumber durasi + cue VO/SFX
│   ├── Scene01Hook.tsx             # 215 f · 0–7,2 s
│   ├── Scene02Conflict.tsx         # 430 f · 7,2–21,5 s
│   ├── Scene03Hadith.tsx           # 390 f · 21,5–34,5 s
│   ├── Scene04Understanding.tsx    # 540 f · 34,5–52,5 s
│   ├── Scene05Reflection.tsx       # 500 f · 52,5–69,2 s
│   ├── Scene06Closing.tsx          # 270 f · 69,2–78,2 s
│   └── Scene07Outro.tsx            # 180 f · 78,2–84,2 s
├── components/                     # Scene, MaskLine, Kicker, Rule, ArabicText,
│                                   # ReferenceLabel, Salawat, AudioTrack
├── styles/                         # colors, typography, layout (grid & margin)
└── utils/animations.ts             # lerp/fade/springAt + kurva easing
public/
├── fonts/*.woff2                   # Space Grotesk, Inter, Cormorant, Amiri
├── vo/*.wav                        # narasi per kalimat (48 kHz mono)
├── sfx/*.wav                       # aksen transisi hasil sintesis
└── ambient-bed.wav                 # room tone non-musikal
```

## Mengubah teks

Semua narasi ada langsung di file scene-nya (tidak ada file copy terpisah).
Ubah string di JSX; untuk baris besar gunakan `MaskLine` agar animasi
masked-reveal tetap konsisten. Dalil dan terjemahannya **wajib** dicek ulang
terhadap `SOURCES.md` setiap kali diubah.

## Mengubah durasi & sinkronisasi

`src/compositions/KetikaKebenaran/timeline.ts` adalah satu-satunya sumber
kebenaran untuk durasi scene (`SCENES`), titik mulai tiap scene (`STARTS`),
cue narasi (`VO`, frame **relatif terhadap scene**), dan aksen transisi
(`SFX`, frame **absolut**).

Kalau durasi sebuah scene berubah, `STARTS` dan `TOTAL` ikut menyesuaikan
otomatis. Yang harus digeser manual hanya frame animasi di dalam scene itu
(nilai `at=` pada `MaskLine`/`lerp`) dan cue `SFX` sesudahnya.

Panjang tiap cue VO diukur dari file audionya (`audio/vo/meta.json`), jadi
setiap baris sudah dipastikan selesai sebelum scene-nya habis.

## Audio

- **Narasi:** 13 baris, suara neural Indonesia, dinormalisasi `loudnorm
  I=-16` lalu dipangkas diamnya. Ditempatkan lewat `AudioTrack.tsx`.
- **SFX:** disintesis sendiri (tick, thud, swish, bell, page) — non-musikal,
  dipasang tepat di setiap pergantian scene dan di titik rekomposisi layout.
- **Bed:** room tone rendah pada volume 0.18 agar narasi selalu di atasnya.

Regenerasi narasi: `audio/vo/meta.json` menyimpan teks & durasi tiap baris.

## Voice-over

Belum ada narasi palsu yang dihasilkan. Untuk menambahkan rekaman manusia:

1. Taruh file di `public/` (mis. `public/vo.mp3`).
2. Buka `src/components/AudioBed.tsx`.
3. Tambahkan `<Audio src={staticFile('vo.mp3')} />` **sebelum** bed ambient,
   dan turunkan `volume` bed ke sekitar `0.15` agar narasi tidak tertutup.

Narasi dirancang terbaca dalam ±62 detik dengan jeda refleksi di Scene 03
(hadis) dan Scene 05. Jika VO lebih panjang, perpanjang durasi scene yang
bersangkutan (lihat bagian di atas) daripada mempercepat bacaan.

## Catatan desain

- Palet dan tipografi mengikuti brief; token warna ada di `styles/colors.ts`.
- Font di-host lokal (`public/fonts`) supaya render deterministik dan tidak
  bergantung jaringan.
- Tidak ada animasi berbasis timer/browser API — semua dari
  `useCurrentFrame()`.
- Teks Arab memakai Amiri dengan `dir="rtl"`; ligatur ﷺ memakai komponen
  `Salawat` agar tidak jatuh ke glyph sistem.
# dakwah-2
