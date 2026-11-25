import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Scene} from '../../components/Scene';
import {MaskLine} from '../../components/MaskLine';
import {Kicker, Folio} from '../../components/Kicker';
import {Rule, SignalSquare} from '../../components/Rule';
import {C, INK_12} from '../../styles/colors';
import {F} from '../../styles/typography';
import {M, CONTENT} from '../../styles/layout';
import {lerp, EASE_IN_OUT} from '../../utils/animations';

export const SCENE_02_DURATION = 300; // 7–17s

/**
 * THE CONFLICT.
 * Stage A: an asymmetric two-measure composition — BENAR set large in serif,
 * BIASA set smaller in heavy sans and pushed right. The size difference is the
 * argument. A quiet line anchors the bottom of the page.
 * Stage B: the whole split clears and the question takes the measure.
 */
export const Scene02Conflict: React.FC = () => {
  const frame = useCurrentFrame();

  const stageB = lerp(frame, 150, 184, 0, 1, EASE_IN_OUT);

  const in1 = lerp(frame, 14, 46, 0, 1);
  const in2 = lerp(frame, 30, 62, 0, 1);
  const in3 = lerp(frame, 52, 84, 0, 1);
  const in4 = lerp(frame, 86, 118, 0, 1);

  const qIn = lerp(frame, 190, 224, 0, 1);

  return (
    <Scene>
      <div style={{position: 'absolute', left: M, top: 92, right: M}}>
        <Folio at={4} n="02" label="The Conflict" />
      </div>
      <Rule at={10} dur={40} style={{position: 'absolute', left: M, top: 132, width: CONTENT}} />

      {/* STAGE A */}
      <div
        style={{
          position: 'absolute',
          left: M,
          right: M,
          top: 236,
          opacity: 1 - stageB,
          transform: `translateY(${-stageB * 44}px)`,
        }}
      >
        <div style={{opacity: in1, fontFamily: F.body, fontSize: 34, lineHeight: 1.45, color: C.ink}}>
          Ketika sesuatu yang benar
          <br />
          dianggap aneh.
        </div>

        {/* measure one — BENAR */}
        <div style={{marginTop: 108, opacity: in2, transform: `translateX(${(1 - in2) * -28}px)`}}>
          <Kicker at={30} color={C.stone} size={18}>Yang benar</Kicker>
          <div
            style={{
              fontFamily: F.serif,
              fontWeight: 400,
              fontSize: 204,
              lineHeight: 0.86,
              letterSpacing: '-0.035em',
              color: C.ink,
              marginTop: 10,
            }}
          >
            BENAR
          </div>
          <div style={{fontFamily: F.body, fontSize: 22, color: C.stone, marginTop: 26, letterSpacing: '0.02em'}}>
            karena sesuai dalil
          </div>
        </div>

        {/* the turn of the measure */}
        <div style={{marginTop: 64, opacity: in3}}>
          <div style={{display: 'flex', alignItems: 'center', gap: 20}}>
            <SignalSquare at={56} size={11} />
            <div style={{flex: 1, height: 1, backgroundColor: INK_12}} />
          </div>
        </div>

        {/* measure two — BIASA, smaller, pushed right */}
        <div
          style={{
            marginTop: 40,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            opacity: in3,
            transform: `translateX(${(1 - in3) * 28}px)`,
          }}
        >
          <Kicker at={60} color={C.stone} size={18}>Yang terbiasa</Kicker>
          <div
            style={{
              fontFamily: F.display,
              fontWeight: 700,
              fontSize: 124,
              lineHeight: 0.92,
              letterSpacing: '-0.05em',
              color: C.stone,
              marginTop: 10,
            }}
          >
            BIASA
          </div>
          <div style={{fontFamily: F.body, fontSize: 22, color: C.stone, marginTop: 22, letterSpacing: '0.02em'}}>
            karena hanya diulang
          </div>
        </div>

        {/* bottom anchor */}
        <div style={{position: 'absolute', left: 0, right: 0, top: 1170, opacity: in4}}>
          <div style={{width: 160, height: 2, backgroundColor: C.signal, marginBottom: 30}} />
          <div
            style={{
              fontFamily: F.serif,
              fontWeight: 300,
              fontSize: 46,
              lineHeight: 1.35,
              letterSpacing: '-0.01em',
              color: C.ink,
              maxWidth: 800,
            }}
          >
            Mengikuti tuntunan agama terasa berbeda dari kebiasaan di sekitar kita.
          </div>
        </div>
      </div>

      {/* STAGE B */}
      <div
        style={{
          position: 'absolute',
          left: M,
          right: M,
          top: 300,
          opacity: stageB * qIn,
          transform: `translateY(${(1 - qIn) * 34}px)`,
        }}
      >
        <div style={{display: 'flex', alignItems: 'center', gap: 16}}>
          <SignalSquare at={190} size={12} />
          <Kicker at={192} color={C.signal} size={19}>Pertanyaannya</Kicker>
        </div>

        <div style={{marginTop: 52}}>
          <MaskLine at={198} dur={34}>
            <div style={{fontFamily: F.serif, fontWeight: 300, fontSize: 96, lineHeight: 1.1, letterSpacing: '-0.025em', color: C.ink}}>
              Namun, apakah
            </div>
          </MaskLine>
          <MaskLine at={208} dur={34}>
            <div style={{fontFamily: F.serif, fontWeight: 300, fontSize: 96, lineHeight: 1.1, letterSpacing: '-0.025em', color: C.stone}}>
              kebenaran harus
            </div>
          </MaskLine>
          <MaskLine at={218} dur={34}>
            <div style={{fontFamily: F.serif, fontWeight: 300, fontSize: 96, lineHeight: 1.1, letterSpacing: '-0.025em', color: C.ink}}>
              mengikuti yang
            </div>
          </MaskLine>
          <MaskLine at={228} dur={34}>
            <div style={{fontFamily: F.serif, fontWeight: 600, fontSize: 96, lineHeight: 1.1, letterSpacing: '-0.025em', color: C.signal}}>
              dianggap biasa?
            </div>
          </MaskLine>
        </div>

        <Rule at={244} dur={40} style={{marginTop: 64, width: 320}} />

        <div
          style={{
            marginTop: 36,
            fontFamily: F.body,
            fontSize: 27,
            lineHeight: 1.6,
            color: C.stone,
            maxWidth: 660,
            opacity: lerp(frame, 252, 280, 0, 1),
          }}
        >
          Popularitas bukan ukuran.
          <br />
          Kebiasaan bukan dalil.
        </div>
      </div>

      <div style={{position: 'absolute', left: M, right: M, bottom: 90, display: 'flex', justifyContent: 'space-between'}}>
        <Kicker at={60} color={C.stone} size={17}>Kebenaran vs Kebiasaan</Kicker>
        <Kicker at={66} color={C.stone} size={17}>02</Kicker>
      </div>
    </Scene>
  );
};
