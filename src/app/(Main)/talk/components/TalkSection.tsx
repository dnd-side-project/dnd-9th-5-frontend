'use client';

import Lottie from 'react-lottie-player';
import lottieJson from '../../../../../public/jsons/pzpicker.json';
import lottieJson2 from '../../../../../public/jsons/animation_ll796vsv.json';

interface TalkSectionProps {}
export default function TalkSection() {
  return (
    <section>
      <Lottie loop animationData={lottieJson} play style={{ width: 150, height: 150 }} />
      <Lottie loop animationData={lottieJson2} play style={{ width: 150, height: 150 }} />
    </section>
  );
}
