/**
 * Single source of truth for scene lengths and audio cue points.
 * Every VO start below was set from the measured clip length, so the line
 * ends before its scene does (see audio/vo/meta.json).
 */
export const SCENES = [
  {id: '01', duration: 215},
  {id: '02', duration: 430},
  {id: '03', duration: 390},
  {id: '04', duration: 540},
  {id: '05', duration: 500},
  {id: '06', duration: 270},
  {id: '07', duration: 180},
] as const;

/** Absolute start frame of each scene. */
export const STARTS = SCENES.reduce<number[]>((acc, s, i) => {
  acc.push(i === 0 ? 0 : acc[i - 1] + SCENES[i - 1].duration);
  return acc;
}, []);

export const TOTAL = SCENES.reduce((a, s) => a + s.duration, 0);

/** Voice-over: scene-relative frame -> clip in public/vo. */
export const VO: Array<{scene: number; at: number; file: string}> = [
  {scene: 1, at: 22, file: 's01_hook.trim.wav'},
  {scene: 2, at: 30, file: 's02_b1.trim.wav'},
  {scene: 2, at: 115, file: 's02_b2.trim.wav'},
  {scene: 2, at: 270, file: 's02_b3.trim.wav'},
  {scene: 3, at: 55, file: 's03_hadith.trim.wav'},
  {scene: 4, at: 25, file: 's04_u1.trim.wav'},
  {scene: 4, at: 200, file: 's04_u2.trim.wav'},
  {scene: 4, at: 390, file: 's04_u3.trim.wav'},
  {scene: 5, at: 25, file: 's05_r1.trim.wav'},
  {scene: 5, at: 130, file: 's05_r2.trim.wav'},
  {scene: 5, at: 330, file: 's05_r3.trim.wav'},
  {scene: 6, at: 60, file: 's06_c1.trim.wav'},
  {scene: 7, at: 45, file: 's07_outro.trim.wav'},
];

/**
 * Transitions: one accent on every cut, plus in-scene recompositions.
 * `cut` marks the scene boundary it belongs to (frame 0 of that scene).
 */
export const SFX: Array<{at: number; file: string; volume: number}> = [
  // scene boundaries
  {at: 0, file: 'tick_soft.wav', volume: 0.35},
  {at: 215, file: 'tick.wav', volume: 0.5},          // 01 -> 02
  {at: 645, file: 'thud.wav', volume: 0.55},         // 02 -> 03 (into dark)
  {at: 645, file: 'bell.wav', volume: 0.30},         // scripture lands
  {at: 1035, file: 'swish.wav', volume: 0.40},       // 03 -> 04 (back to paper)
  {at: 1575, file: 'tick.wav', volume: 0.35},        // 04 -> 05
  {at: 2075, file: 'thud.wav', volume: 0.50},        // 05 -> 06 (into dark)
  {at: 2345, file: 'page.wav', volume: 0.45},        // 06 -> 07
  // in-scene recompositions
  {at: 215 + 246, file: 'swish.wav', volume: 0.32},  // scene 02: split clears
  {at: 215 + 292, file: 'tick_soft.wav', volume: 0.30},
  {at: 1035 + 452, file: 'tick_soft.wav', volume: 0.28}, // scene 04: ayah block
  {at: 1575 + 340, file: 'bell_low.wav', volume: 0.22},  // scene 05: petition
];
