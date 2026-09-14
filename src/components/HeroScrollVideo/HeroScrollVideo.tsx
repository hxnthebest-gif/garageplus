'use client';

import React, { useRef, useEffect } from 'react';
import { useConfiguratorStore } from '@/lib/store/configuratorStore';

export function HeroScrollVideo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const setQuoteModalOpen = useConfiguratorStore((s) => s.setQuoteModalOpen);

  // Direct DOM references for 60FPS zero-react-overhead animations
  const stage1Ref = useRef<HTMLDivElement>(null);
  const stage2Ref = useRef<HTMLDivElement>(null);
  const stage3Ref = useRef<HTMLDivElement>(null);
  const scrollPromptRef = useRef<HTMLDivElement>(null);

  // Smooth scroll interpolation targets
  const targetProgressRef = useRef(0);
  const currentProgressRef = useRef(0);
  const isSeekingRef = useRef(false);
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.pause();

    const handleLoaded = () => {
      video.pause();
      try {
        video.currentTime = 0;
      } catch {}
    };

    video.addEventListener('loadeddata', handleLoaded);
    if (video.readyState >= 2) {
      handleLoaded();
    }

    const onSeeked = () => {
      isSeekingRef.current = false;
    };
    video.addEventListener('seeked', onSeeked);

    return () => {
      video.removeEventListener('loadeddata', handleLoaded);
      video.removeEventListener('seeked', onSeeked);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const totalScrollable = containerRef.current.offsetHeight - window.innerHeight;
      const scrolled = -rect.top;

      // Pure 1:1 accurate progress between 0 and 1
      const progress = Math.max(0, Math.min(1, scrolled / totalScrollable));
      targetProgressRef.current = progress;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    const renderLoop = () => {
      const video = videoRef.current;

      // Responsive lerp: fast enough to be accurate (0.14), smooth enough to feel cinematic
      const diff = targetProgressRef.current - currentProgressRef.current;

      if (Math.abs(diff) > 0.0002) {
        currentProgressRef.current += diff * 0.14;
        const progress = Math.max(0, Math.min(1, currentProgressRef.current));

        // Precision video frame synchronization
        if (video && video.duration && !isSeekingRef.current) {
          const targetTime = progress * video.duration;
          if (Math.abs(video.currentTime - targetTime) > 0.02) {
            try {
              isSeekingRef.current = true;
              if ('fastSeek' in video && typeof (video as HTMLVideoElement & { fastSeek?: (t: number) => void }).fastSeek === 'function') {
                (video as HTMLVideoElement & { fastSeek: (t: number) => void }).fastSeek(targetTime);
              } else {
                video.currentTime = targetTime;
              }
            } catch {
              isSeekingRef.current = false;
            }
          }
        }

        // Clean Editorial Phase Transitions (Fade + subtle lift)
        // Stage 1: 0% -> 30%
        const s1 = progress < 0.3 ? Math.max(0, 1 - progress / 0.24) : 0;
        // Stage 2: 32% -> 70%
        const s2 =
          progress >= 0.3 && progress <= 0.72
            ? progress < 0.51
              ? (progress - 0.3) / 0.16
              : 1 - (progress - 0.51) / 0.16
            : 0;
        // Stage 3: 72% -> 100%
        const s3 = progress >= 0.7 ? Math.min(1, (progress - 0.7) / 0.18) : 0;

        if (stage1Ref.current) {
          stage1Ref.current.style.opacity = String(s1);
          stage1Ref.current.style.transform = `translateY(${(1 - s1) * 14}px)`;
          stage1Ref.current.style.pointerEvents = s1 > 0.3 ? 'auto' : 'none';
        }
        if (stage2Ref.current) {
          stage2Ref.current.style.opacity = String(s2);
          stage2Ref.current.style.transform = `translateY(${(1 - s2) * 14}px)`;
          stage2Ref.current.style.pointerEvents = s2 > 0.3 ? 'auto' : 'none';
        }
        if (stage3Ref.current) {
          stage3Ref.current.style.opacity = String(s3);
          stage3Ref.current.style.transform = `translateY(${(1 - s3) * 14}px)`;
          stage3Ref.current.style.pointerEvents = s3 > 0.3 ? 'auto' : 'none';
        }

        // Hide bottom scroll prompt once user initiates scroll
        if (scrollPromptRef.current) {
          scrollPromptRef.current.style.opacity = String(Math.max(0, 1 - progress * 4));
        }
      }

      animationFrameRef.current = requestAnimationFrame(renderLoop);
    };

    animationFrameRef.current = requestAnimationFrame(renderLoop);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div ref={containerRef} className="relative w-full h-[320vh] bg-black">
      {/* 100vh Sticky Viewport */}
      <div className="sticky top-0 w-full h-screen overflow-hidden flex items-center justify-center">
        {/* Hardware-Accelerated Video Layer */}
        <video
          ref={videoRef}
          src="/videos/hero.mp4"
          playsInline
          muted
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none will-change-transform"
          style={{ transform: 'translate3d(0, 0, 0)' }}
        />

        {/* Cinematic Vignette & Premium Contrast Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#060608] via-black/20 to-black/50 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.8)_100%)] pointer-events-none" />

        {/* Ultra-Luxury Editorial Typographic Overlay */}
        <div className="pointer-events-none absolute inset-0 z-20 flex flex-col justify-end p-6 sm:p-12 lg:p-16">

          {/* Center / Lower Left Story Presentation */}
          <div className="relative w-full max-w-2xl pb-10 sm:pb-12">
            {/* Stage 1: Entrance */}
            <div
              ref={stage1Ref}
              style={{ opacity: 1, transform: 'translateY(0px)', pointerEvents: 'auto' }}
              className="space-y-4 will-change-[transform,opacity]"
            >
              <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-emerald-400 font-bold">
                STIL TECH ULTRA TPU PPF
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-sans font-black tracking-tight text-white uppercase leading-[0.98]">
                KORUMA. <br />
                <span className="text-neutral-400 font-light">KUSURSUZ İŞÇİLİK.</span>
              </h1>

              <p className="text-xs sm:text-sm text-neutral-300 font-light tracking-wide max-w-md">
                Fabrika boyasını görünmez zırhla ilk günkü kondisyonda koruyun.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => scrollToSection('hizmetler')}
                  className="px-6 py-3.5 bg-white text-black text-[10px] font-mono uppercase tracking-[0.22em] font-bold hover:bg-neutral-200 transition-all cursor-pointer shadow-2xl hover:scale-[1.02]"
                >
                  HİZMETLERİ KEŞFET
                </button>

                <button
                  onClick={() => scrollToSection('konfigurator')}
                  className="px-6 py-3.5 border border-white/30 bg-black/50 backdrop-blur-md text-white text-[10px] font-mono uppercase tracking-[0.22em] font-semibold hover:border-white hover:bg-white/10 transition-all cursor-pointer"
                >
                  360° KONFİGÜRATÖR
                </button>
              </div>
            </div>

            {/* Stage 2: In Motion Precision */}
            <div
              ref={stage2Ref}
              style={{ opacity: 0, transform: 'translateY(14px)', pointerEvents: 'none' }}
              className="absolute bottom-0 left-0 space-y-3 will-change-[transform,opacity]"
            >
              <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-neutral-400 font-bold">
                MİKRON HASSASİYETİ
              </div>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-sans font-black tracking-tight text-white uppercase leading-tight">
                GÖRÜNMEZ ZIRH. <br />
                <span className="text-neutral-400 font-light">TAM DİRENÇ.</span>
              </h2>
              <p className="text-xs sm:text-sm text-neutral-300 font-light tracking-wide max-w-sm">
                Taş çarpmaları, yol artıkları ve kılcal çiziklere karşı kendini yenileyen teknoloji.
              </p>
            </div>

            {/* Stage 3: Climax & Atelier Finish */}
            <div
              ref={stage3Ref}
              style={{ opacity: 0, transform: 'translateY(14px)', pointerEvents: 'none' }}
              className="absolute bottom-0 left-0 space-y-4 will-change-[transform,opacity]"
            >
              <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-emerald-400 font-bold">
                7 YIL RESMİ GARANTİ
              </div>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-sans font-black tracking-tight text-white uppercase leading-tight">
                İLK GÜNKÜ PARLAKLIK. <br />
                <span className="text-neutral-400 font-light">ÖMÜR BOYU DEĞER.</span>
              </h2>
              <div className="pt-2 flex items-center gap-3">
                <button
                  onClick={() => scrollToSection('konfigurator')}
                  className="px-7 py-3.5 bg-white text-black text-[10px] font-mono uppercase tracking-[0.25em] font-bold hover:bg-neutral-200 transition-all cursor-pointer shadow-2xl hover:scale-[1.02]"
                >
                  360° STÜDYOYU AÇ →
                </button>
                <button
                  onClick={() => setQuoteModalOpen(true)}
                  className="px-7 py-3.5 border border-white/40 bg-black/60 backdrop-blur-md text-white text-[10px] font-mono uppercase tracking-[0.25em] font-semibold hover:border-white transition-all cursor-pointer"
                >
                  HIZLI TEKLİF AL
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Minimal Editorial Line */}
          <div
            ref={scrollPromptRef}
            className="w-full flex items-center justify-between pt-4 border-t border-white/10 transition-opacity duration-300"
          >
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-neutral-400 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-white/70 animate-bounce" />
              <span>AŞAĞI KAYDIRIN</span>
            </span>
            <span className="text-[10px] font-mono tracking-[0.2em] text-neutral-500 uppercase">
              BAHÇELİEVLER &bull; İSTANBUL
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
