import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Scene} from '../../components/Scene';
import {MaskLine} from '../../components/MaskLine';
import {ArabicText} from '../../components/ArabicText';
import {ReferenceLabel} from '../../components/ReferenceLabel';
import {Kicker, Folio} from '../../components/Kicker';
import {Rule} from '../../components/Rule';
import {Salawat} from '../../components/Salawat';
import {C} from '../../styles/colors';
import {F} from '../../styles/typography';
import {M, CONTENT} from '../../styles/layout';
import {lerp} from '../../utils/animations';

export const SCENE_03_DURATION = 450; // 17–32s

/**
 * THE DALIL.
 * Composition: an inverted page — ink field, paper type. The Arabic is the
 * largest thing on screen and is given a full third of the frame to breathe.
 * Translation is set in serif at reading size, reference in the footer.
 * No ornament competes with scripture.
 */
export const Scene03Hadith: React.FC = () => {
  const frame = useCurrentFrame();

  const arabicIn = lerp(frame, 30, 60, 0, 1);
  const transIn = lerp(frame, 150, 186, 0, 1);
  const refIn = lerp(frame, 200, 232, 0, 1);
  const readCue = lerp(frame, 246, 276, 0, 1);

  return (
    <Scene bg={C.ink}>
      <div style={{position: 'absolute', left: M, top: 92, right: M, display: 'flex', justifyContent: 'space-between'}}>
        <Folio at={6} n="03" label="Hadis" color={C.stone} />
        <Kicker at={12} color={C.stone} size={18}>Sahih Muslim · 145</Kicker>
      </div>
      <Rule at={14} dur={44} color="rgba(242,240,232,0.18)" style={{position: 'absolute', left: M, top: 132, width: CONTENT}} />

      {/* label */}
      <div style={{position: 'absolute', left: M, right: M, top: 236, opacity: arabicIn}}>
        <Kicker at={30} color={C.signal} size={20}>
          Sabda Rasulullah <Salawat />
        </Kicker>
      </div>

      {/* ARABIC — the hero */}
      <div style={{position: 'absolute', left: M, right: M, top: 300}}>
        <ArabicText
          at={44}
          size={84}
          color={C.paper}
          align="right"
          lineHeight={1.75}
          stagger={6}
          text="بدأ الإسلام غريبًا وسيعود كما بدأ غريبًا فطوبى للغرباء"
        />
      </div>

      {/* divider + translation */}
      <div style={{position: 'absolute', left: M, right: M, top: 900}}>
        <div style={{display: 'flex', alignItems: 'center', gap: 20, opacity: transIn}}>
          <div style={{height: 1, flex: 1, backgroundColor: 'rgba(242,240,232,0.22)'}} />
          <Kicker at={150} color={C.stone} size={17}>Terjemahan makna</Kicker>
        </div>

        <div style={{marginTop: 40}}>
          <MaskLine at={158} dur={40}>
            <div style={{fontFamily: F.serif, fontWeight: 300, fontSize: 62, lineHeight: 1.32, letterSpacing: '-0.01em', color: C.paper}}>
              “Islam bermula dalam keadaan asing,
            </div>
          </MaskLine>
          <MaskLine at={168} dur={40}>
            <div style={{fontFamily: F.serif, fontWeight: 300, fontSize: 62, lineHeight: 1.32, letterSpacing: '-0.01em', color: C.paper}}>
              dan akan kembali sebagaimana
            </div>
          </MaskLine>
          <MaskLine at={178} dur={40}>
            <div style={{fontFamily: F.serif, fontWeight: 300, fontSize: 62, lineHeight: 1.32, letterSpacing: '-0.01em', color: C.paper}}>
              awalnya dalam keadaan asing.
            </div>
          </MaskLine>
          <MaskLine at={192} dur={40}>
            <div style={{fontFamily: F.serif, fontWeight: 600, fontSize: 62, lineHeight: 1.32, letterSpacing: '-0.01em', color: C.paper}}>
              Maka beruntunglah
            </div>
          </MaskLine>
          <MaskLine at={200} dur={40}>
            <div style={{fontFamily: F.serif, fontWeight: 600, fontSize: 62, lineHeight: 1.32, letterSpacing: '-0.01em', color: C.signal}}>
              orang-orang yang asing.”
            </div>
          </MaskLine>
        </div>

        <div style={{marginTop: 54, opacity: refIn}}>
          <ReferenceLabel
            at={204}
            source="HR. Muslim no. 145"
            detail="Kitab al-Īmān"
            color={C.paper}
            mutedColor={C.stone}
          />
        </div>
      </div>

      {/* reading cue — quiet footnote that reframes "asing" */}
      <div
        style={{
          position: 'absolute',
          left: M,
          right: M,
          bottom: 96,
          opacity: readCue,
          borderLeft: `2px solid ${C.signal}`,
          paddingLeft: 24,
        }}
      >
        <div style={{fontFamily: F.body, fontSize: 24, lineHeight: 1.6, color: C.stone, maxWidth: 760}}>
          “Asing” di sini bukan tentang dijauhi manusia,
          melainkan tentang memegang sunnah saat ia ditinggalkan.
        </div>
      </div>
    </Scene>
  );
};
