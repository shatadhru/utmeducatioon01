import GhostFibers from '@/components/GhostFibers'
import { Pattern } from '@/components/examples/c-carousel-5'
import GetStartedButton from '@/components/shadcn-space/button/button-02'
import { Button } from '@/components/ui/button';
import { ArrowRight, PlayCircle } from 'lucide-react';
import { AnimatedBadge } from '../../../../components/shadcn-space/badge/badge-08';

function Hero() {
  return (
    <section className="relative h-[680px] overflow-hidden sm:h-[750px]">
      {/* Background */}
      <div className="absolute inset-0">
        <GhostFibers
          lineColor="#FF0201"
          glowColor="#6366F1"
          speed={0.2}
          scale={2}
          rotation={-90}
          rotationSpeed={0.25}
          layers={2}
          waveAmplitude={0.015}
          waveFrequency={3.7}
          waveSpeed={0.2}
          layerSpeed={0.08}
          twist={0.1}
          twistFrequency={5}
          twistSpeed={1.2}
          lineFrequency={5}
          lineSpacing={2}
          lineSharpness={16}
          glowFalloff={10}
          glowIntensity={0.65}
          brightness={2}
          blueBoost={1.25}
          vignette={0.8}
          grain={0.05}
          dpr={1}
          lightMode={false}
          fps={60}
          paused={false}
        />
      </div>

      {/* Content */}
      <div className="absolute inset-0 z-10 flex items-center justify-center px-5 sm:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-3">
<AnimatedBadge label="এস এস সি - ২০২৮ ব্যাচ ভর্তি চলছে" />
          </div>

          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            <span className="text-white">
              ঘরে বসেই শুরু হোক
            </span>

            <br />

            <span className="text-gray-100">
              আপনার সাফল্যের প্রস্তুতি
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-300 sm:mt-6 sm:text-lg">
            মুখস্থ নয়, বুঝে শেখার মাধ্যমে প্রতিটি বিষয়কে সহজ করে তুলতে
            <span className="px-1 font-semibold text-white">
              ইউনিক টিচিং মেথড
            </span>
            আপনার পাশে।
          </p>

          <div className="mt-6">
            <Pattern />
          </div>

          <div className="mt-5 flex justify-center gap-4">
            <Button variant="outline" size="lg">প্রিমিয়াম কোর্স সমূহ <ArrowRight /> </Button>
            <Button size="lg">কোর্সে ভর্তি প্রক্রিয়া <PlayCircle /> </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero