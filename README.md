# Ketika Kebenaran Terasa Asing

Esai visual editorial 9:16 · 1080×1920 · 30 fps · 65 detik · 1.950 frame.
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
│   ├── MainVideo.tsx               # urutan scene + durasi total
│   ├── Scene01Hook.tsx             # 210 f · 0–7 s
│   ├── Scene02Conflict.tsx         # 300 f · 7–17 s
│   ├── Scene03Hadith.tsx           # 450 f · 17–32 s
│   ├── Scene04Understanding.tsx    # 390 f · 32–45 s
│   ├── Scene05Reflection.tsx       # 300 f · 45–55 s
│   └── Scene06Closing.tsx          # 300 f · 55–65 s
├── components/                     # Scene, MaskLine, Kicker, Rule,
│                                   # ArabicText, ReferenceLabel, Salawat, AudioBed
├── styles/                         # colors, typography, layout (grid & margin)
└── utils/animations.ts             # lerp/fade/springAt + kurva easing
public/
├── fonts/*.woff2                   # Space Grotesk, Inter, Cormorant, Amiri
└── ambient-bed.wav                 # room tone non-musikal
```

## Mengubah teks

Semua narasi ada langsung di file scene-nya (tidak ada file copy terpisah).
Ubah string di JSX; untuk baris besar gunakan `MaskLine` agar animasi
masked-reveal tetap konsisten. Dalil dan terjemahannya **wajib** dicek ulang
terhadap `SOURCES.md` setiap kali diubah.

## Mengubah durasi

Tiap scene mengekspor konstanta durasinya sendiri (`SCENE_0x_DURATION`), dan
`MainVideo.tsx` menjumlahkannya. Ubah konstanta itu saja — timing internal
scene dinyatakan dalam frame relatif terhadap scene, jadi tidak perlu
menyentuh `Sequence` lain. Jika menambah durasi sebuah scene, geser juga
frame animasi di dalamnya (nilai `at=` pada `MaskLine`/`lerp`).

Total durasi harus tetap 1.650–1.950 frame (55–65 detik) sesuai brief.

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
