"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plane, Heart } from "lucide-react";

type PassportGateProps = {
  coupleNames?: string;
  subtitle?: string;
  onOpened: () => void;
};

export default function PassportGate({
  coupleNames = "FG OFFR RO SEFAH & FG OFFR TB LAMPTEY",
  subtitle = "Tap to open invite",
  onOpened,
}: PassportGateProps) {
  const [isOpening, setIsOpening] = useState(false);
  const [isGone, setIsGone] = useState(false);

  useEffect(() => {
    if (!isOpening) return;

    // Let the cover open first, then fade overlay out.
    const t = setTimeout(() => {
      setIsGone(true);
      // a tiny delay so fade starts, then reveal content
      setTimeout(onOpened, 250);
    }, 1200);

    return () => clearTimeout(t);
  }, [isOpening, onOpened]);

  return (
    <AnimatePresence>
      {!isGone && (
        <motion.div
          key="passport-gate"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-50 grid place-items-center bg-[#F3FAE1]"
        >
          {/* Background planes */}
          <div className="absolute inset-0 overflow-hidden">
            {/* plane trail image */}
            <div
              aria-hidden
              className="absolute inset-0 opacity-[0.08] pointer-events-none"
              style={{
                backgroundImage: "url('/plane-trail.png')",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "left center",
                backgroundSize: "70%",
              }}
            />

            {/* soft vignette */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(255,255,255,0.06),transparent_55%)]" />

            {/* plane 1 */}
            <motion.div
              aria-hidden
              className="absolute -left-24 top-24 opacity-[0.10]"
              initial={{ x: -120, y: 40, rotate: -12 }}
              animate={{ x: 900, y: 520, rotate: -12 }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            >
              <Plane className="w-12 h-12 text-white" />
            </motion.div>

            {/* plane 2 */}
            <motion.div
              aria-hidden
              className="absolute left-10 bottom-10 opacity-[0.07]"
              initial={{ x: -200, y: 180, rotate: -8 }}
              animate={{ x: 820, y: -220, rotate: -8 }}
              transition={{
                duration: 22,
                repeat: Infinity,
                ease: "linear",
                delay: 2,
              }}
            >
              <Plane className="w-16 h-16 text-white" />
            </motion.div>

            {/* plane 3 */}
            <motion.div
              aria-hidden
              className="absolute right-0 top-1/3 opacity-[0.06]"
              initial={{ x: 260, y: 80, rotate: 14 }}
              animate={{ x: -980, y: 520, rotate: 14 }}
              transition={{
                duration: 26,
                repeat: Infinity,
                ease: "linear",
                delay: 4,
              }}
            >
              <Plane className="w-10 h-10 text-white" />
            </motion.div>
          </div>

          {/* 3D Stage */}
          <div className="perspective-1200">
            {/* Book wrapper */}
            <motion.div
              initial={{ scale: 0.98, y: 10 }}
              animate={{ scale: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative w-85 sm:w-95 h-130 preserve-3d"
            >
              {/* Back cover (static) */}
              <div className="absolute inset-0 rounded-2xl shadow-2xl bg-[#0B2A33] border border-white/10" />

              {/* Pages block (gives depth) */}
              <div className="absolute inset-2.5 rounded-xl bg-[#f8f6ef] shadow-inner border border-black/10" />
              <div className="absolute inset-2.5 rounded-xl bg-[#fbfaf6] border border-black/5" />

              {/* Front cover (hinged) */}
              <motion.div
                className="absolute inset-0 rounded-2xl shadow-2xl cursor-pointer preserve-3d"
                style={{
                  transformOrigin: "left center",
                }}
                onClick={() => {
                  if (!isOpening) setIsOpening(true);
                }}
                initial={false}
                animate={
                  isOpening
                    ? {
                        rotateY: -165,
                        x: -4,
                      }
                    : { rotateY: 0, x: 0 }
                }
                transition={{ duration: 1.15, ease: [0.2, 0.8, 0.2, 1] }}
              >
                {/* FRONT FACE (what user sees before opening) */}
                <div className="absolute inset-0 rounded-2xl bg-[#0B1D26] border border-white/10 backface-hidden">
                  {/* subtle texture */}
                  <div className="absolute inset-0 rounded-2xl opacity-[0.08] bg-[radial-gradient(circle_at_30%_20%,white,transparent_45%),radial-gradient(circle_at_70%_80%,white,transparent_55%)]" />

                  <div className="relative h-full px-8 py-10 flex flex-col items-center justify-between text-center">
                    {/* Embossed border */}
                    <div className="absolute inset-4 rounded-xl border border-[#D4AF37]/30" />
                    <div className="absolute inset-4.5 rounded-xl border border-white/10" />

                    {/* Leather-ish texture */}
                    <div className="absolute inset-0 rounded-2xl opacity-[0.10] bg-[radial-gradient(circle_at_30%_20%,white,transparent_45%),radial-gradient(circle_at_70%_80%,white,transparent_55%)]" />
                    <div className="absolute inset-0 rounded-2xl opacity-[0.08] bg-[linear-gradient(135deg,transparent_0%,rgba(255,255,255,0.12)_40%,transparent_70%)]" />

                    {/* Top */}
                    <div className="w-full">
                      <p className="text-[#D4AF37] tracking-[0.35em] text-[11px] uppercase">
                        Passport
                      </p>
                      {/* <p className="mt-2 text-white/70 text-[11px] tracking-[0.22em] uppercase">
                        to engagement
                      </p> */}
                    </div>

                    {/* Crest / Seal */}
                    <div className="flex flex-col items-center gap-5">
                      {/* Gold foil seal placeholder */}
                      {/* Gold foil heart crest */}
                      <div className="relative">
                        {/* outer emboss */}
                        <div className="h-20 w-20 rounded-full border border-[#D4AF37]/50 bg-[#D4AF37]/10 shadow-[0_0_0_1px_rgba(212,175,55,0.25)_inset]" />

                        {/* glow */}
                        <div className="absolute inset-0 rounded-full opacity-[0.35] blur-sm bg-[#D4AF37]" />

                        {/* heart icon */}
                        <div className="absolute inset-0 grid place-items-center">
                          <Heart
                            className="h-8 w-8 text-[#D4AF37]"
                            strokeWidth={1.5}
                            fill="rgba(212,175,55,0.15)"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <p className="text-[#D4AF37] text-[11px] tracking-[0.32em] uppercase">
                          Invitation
                        </p>

                        <h1 className="text-white text-lg sm:text-xl font-semibold leading-snug">
                          {coupleNames}
                        </h1>
                      </div>

                      {/* Microtext lines */}
                      <div className="w-full max-w-60 space-y-2 opacity-80">
                        <div className="h-px w-full bg-white/10" />
                        <div className="h-px w-5/6 bg-white/10 mx-auto" />
                        <div className="h-px w-4/6 bg-white/10 mx-auto" />
                      </div>
                    </div>

                    {/* Bottom: chip + tap */}
                    <div className="w-full space-y-4">
                      <div className="flex items-center justify-center gap-3 opacity-90">
                        {/* chip */}
                        <div className="h-8 w-12 rounded-md border border-[#D4AF37]/40 bg-[#D4AF37]/10 shadow-[0_0_0_1px_rgba(212,175,55,0.20)_inset]" />
                        <div className="h-px w-16 bg-white/10" />
                        <div className="h-px w-10 bg-white/10" />
                      </div>

                      <motion.p
                        animate={
                          isOpening
                            ? { opacity: 0 }
                            : { opacity: [0.55, 1, 0.55] }
                        }
                        transition={
                          isOpening
                            ? { duration: 0.2 }
                            : {
                                duration: 1.4,
                                repeat: Infinity,
                                ease: "easeInOut",
                              }
                        }
                        className="text-[#D4AF37] text-sm"
                      >
                        {subtitle}
                      </motion.p>
                    </div>
                  </div>
                </div>

                {/* INSIDE FACE (shows when cover swings open) */}
                <div
                  className="absolute inset-0 rounded-2xl bg-[#fbfaf6] border border-black/10 backface-hidden overflow-hidden"
                  style={{ transform: "rotateY(180deg)" }}
                >
                  {/* subtle world-map-ish texture vibe */}
                  <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(circle_at_30%_20%,black,transparent_45%),radial-gradient(circle_at_70%_70%,black,transparent_55%)]" />

                  <div className="relative h-full p-8 flex flex-col justify-between">
                    <div>
                      <p className="text-[#AA9D7D] tracking-[0.35em] text-[10px] uppercase">
                        Processing…
                      </p>

                      <motion.h2
                        initial={{ opacity: 0, y: 8 }}
                        animate={
                          isOpening
                            ? { opacity: 1, y: 0 }
                            : { opacity: 0, y: 8 }
                        }
                        transition={{ duration: 0.45, ease: "easeOut" }}
                        className="mt-3 text-[#1b1b1b] text-xl font-semibold"
                      >
                        Taking you to your experience
                      </motion.h2>

                      <motion.p
                        initial={{ opacity: 0, y: 8 }}
                        animate={
                          isOpening
                            ? { opacity: 1, y: 0 }
                            : { opacity: 0, y: 8 }
                        }
                        transition={{
                          duration: 0.55,
                          delay: 0.1,
                          ease: "easeOut",
                        }}
                        className="mt-2 text-black/60 text-sm"
                      >
                        Please hold on while we open your invite ✈️
                      </motion.p>
                    </div>

                    {/* animated progress bar */}
                    <div className="space-y-4">
                      <div className="h-2 w-full rounded-full bg-black/10 overflow-hidden">
                        <motion.div
                          initial={{ width: "0%" }}
                          animate={
                            isOpening ? { width: "100%" } : { width: "0%" }
                          }
                          transition={{ duration: 1.05, ease: "easeInOut" }}
                          className="h-full rounded-full bg-[#D4AF37]"
                        />
                      </div>

                      {/* little “stamping” badge */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.92, rotate: -8 }}
                        animate={
                          isOpening
                            ? { opacity: 1, scale: 1, rotate: 0 }
                            : { opacity: 0 }
                        }
                        transition={{
                          duration: 0.5,
                          delay: 0.15,
                          ease: "easeOut",
                        }}
                        className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-xs text-black/70"
                      >
                        <span className="h-2 w-2 rounded-full bg-[#D4AF37]" />
                        Stamping your passport…
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Optional little drop shadow under the book */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[85%] h-8 blur-2xl bg-black/50 -z-10" />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

