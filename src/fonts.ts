import {continueRender, delayRender, staticFile} from 'remotion';

/**
 * Local webfonts, injected at runtime.
 * The @font-face URLs go through staticFile() so Remotion's bundler does not
 * try to resolve them as JS modules (which breaks on `/fonts/*.woff2`).
 */
const FACES: Array<[family: string, file: string, weight: string, style?: string]> = [
  ['Space Grotesk', 'space-grotesk.woff2', '300 700'],
  ['Inter', 'inter.woff2', '300 700'],
  ['Cormorant Garamond', 'cormorant-300.woff2', '300'],
  ['Cormorant Garamond', 'cormorant-400.woff2', '400'],
  ['Cormorant Garamond', 'cormorant-600.woff2', '600'],
  ['Cormorant Garamond', 'cormorant-300i.woff2', '300', 'italic'],
  ['Cormorant Garamond', 'cormorant-400i.woff2', '400', 'italic'],
  ['Amiri', 'amiri-400.woff2', '400'],
  ['Amiri', 'amiri-700.woff2', '700'],
];

const css = FACES.map(
  ([family, file, weight, style = 'normal']) => `@font-face {
  font-family: '${family}';
  font-style: ${style};
  font-weight: ${weight};
  font-display: block;
  src: url('${staticFile(`fonts/${file}`)}') format('woff2');
}`,
).join('\n');

const style = document.createElement('style');
style.textContent = css;
document.head.appendChild(style);

const handle = delayRender('Loading local webfonts');

Promise.all(
  FACES.map(([family, , weight, style = 'normal']) =>
    document.fonts.load(`${style} ${weight.split(' ')[0]} 100px "${family}"`),
  ),
)
  .then(() => document.fonts.ready)
  .then(() => continueRender(handle))
  .catch(() => continueRender(handle));
