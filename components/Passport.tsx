"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plane, PlaneIcon } from "lucide-react";
import Image from "next/image";

type PassportGateProps = {
  coupleNames?: string;
  subtitle?: string;
  onOpened: () => void;
};

function useCountdown(targetISO: string) {
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const target = new Date(targetISO).getTime();
  const diff = Math.max(0, target - now);

  const totalSeconds = Math.floor(diff / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  const pad = (n: number) => n.toString().padStart(2, "0");

  return {
    diff,
    days,
    hours: pad(hours),
    minutes: pad(minutes),
    seconds: pad(seconds),
  };
}

export default function PassportGate({
  subtitle = "Tap to open invite",
  onOpened,
}: PassportGateProps) {
  const [isOpening, setIsOpening] = useState(false);
  const [isGone, setIsGone] = useState(false);

  useEffect(() => {
    if (!isOpening) return;

    const t = setTimeout(() => {
      setIsGone(true);
      setTimeout(onOpened, 250);
    }, 1200);

    return () => clearTimeout(t);
  }, [isOpening, onOpened]);

  const countdown = useCountdown("2026-02-14T09:00:00Z");

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
          {/* ================= AVIATION / MILITARY BACKGROUND ================= */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute inset-0 bg-[#F3FAE1]" />

            <Image
              src="/stamp3.png"
              alt=""
              aria-hidden
              className="absolute bottom-20 right-16 opacity-20 -rotate-45"
              width={200}
              height={200}
            />

            <Image
              src="/plane-trail.png"
              alt=""
              aria-hidden
              className="absolute top-20 right-16 opacity-20"
              width={200}
              height={200}
            />

            <div
              className="absolute inset-0 opacity-[0.07]"
              style={{
                backgroundImage: "url('/plane-trail1.png')",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "left center",
                backgroundSize: "80%",
              }}
            />

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(0,0,0,0.05),transparent_60%)]" />

            <div className="absolute inset-0 opacity-[0.3] bg-[linear-gradient(to_right,rgba(0,0,0,0.18)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.18)_1px,transparent_1px)] bg-[size:50px_50px]" />

            <svg
              className="absolute inset-0 opacity-[0.12]"
              viewBox="0 0 1200 700"
              fill="none"
              preserveAspectRatio="none"
            >
              <path
                d="M-40 520 C 180 420, 360 560, 520 440 S 840 260, 1020 360 S 1200 520, 1320 300"
                stroke="rgba(212,175,55,0.8)"
                strokeWidth="2"
                strokeDasharray="8 14"
              />
            </svg>

            <div className="absolute top-5 left-0 right-0 px-5 flex justify-between text-[10px] tracking-[0.35em] uppercase text-black/45">
              <span>MISSION • CLEARED</span>
              <span>ACC → ENG</span>
            </div>

            <motion.div
              className="absolute -left-20 top-32 opacity-[0.08]"
              initial={{ x: -120, y: 40, rotate: -12 }}
              animate={{ x: 900, y: 520, rotate: -12 }}
              transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
            >
              <Plane className="w-10 h-10 text-white" />
            </motion.div>

            <motion.div
              className="hidden sm:block absolute right-0 top-1/3 opacity-[0.06]"
              initial={{ x: 260, y: 80, rotate: 14 }}
              animate={{ x: -980, y: 520, rotate: 14 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            >
              <Plane className="w-10 h-10 text-white" />
            </motion.div>

            <div className="absolute bottom-6 left-0 right-0 px-5 flex justify-between text-[10px] tracking-[0.35em] uppercase text-black/45">
              <span>ALT 31K • HDG 072</span>
              <span>STATUS • READY</span>
            </div>

            {/* (optional) countdown, if you want it on this screen too */}
            <div className="absolute bottom-16 right-5 sm:right-8 rounded-xl border border-black/10 bg-white/65 backdrop-blur-sm px-4 py-3 text-right shadow-sm">
              <p className="text-[10px] tracking-[0.35em] uppercase text-black/50">
                T-MINUS
              </p>
              <div className="mt-1 font-semibold text-black text-base">
                {countdown.days}D {countdown.hours}:{countdown.minutes}:
                {countdown.seconds}
              </div>
              <p className="mt-1 text-[11px] text-black/50">
                Boarding sequence initiated
              </p>
            </div>
          </div>

          {/* 3D Stage */}
          <div className="perspective-1200">
            <motion.div
              initial={{ scale: 0.98, y: 10 }}
              animate={{ scale: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative w-85 sm:w-95 h-130 preserve-3d"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Back cover */}
              <div className="absolute inset-0 shadow-2xl bg-[#0B2A33] border border-white/10 rounded-r-xl overflow-hidden" />

              {/* Pages (minimal printed teaser) */}
              <div className="absolute inset-2 bg-[#f8f6ef] border border-black/10 overflow-hidden">
                <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle_at_30%_20%,black,transparent_45%),radial-gradient(circle_at_70%_80%,black,transparent_55%)]" />

                <div className="relative h-full grid place-items-center">
                  <div className="text-center">
                    <PlaneIcon className="mx-auto mb-4 w-8 h-8 text-black/20" />
                    <p className="text-[10px] tracking-[0.45em] uppercase text-black/45">
                      Prepare for <br /> Liftoff
                    </p>
                  </div>
                </div>

                <div className="absolute left-4 top-4 h-6 w-6 border-l border-t border-black/10" />
                <div className="absolute right-4 top-4 h-6 w-6 border-r border-t border-black/10" />
                <div className="absolute left-4 bottom-4 h-6 w-6 border-l border-b border-black/10" />
                <div className="absolute right-4 bottom-4 h-6 w-6 border-r border-b border-black/10" />
              </div>

              {/* Front cover (hinged) */}
              <motion.div
                className="absolute inset-0 shadow-2xl cursor-pointer preserve-3d rounded-r-xl overflow-hidden"
                style={{
                  transformOrigin: "left center",
                  transformStyle: "preserve-3d",
                }}
                onClick={() => !isOpening && setIsOpening(true)}
                animate={
                  isOpening ? { rotateY: -165, x: -4 } : { rotateY: 0, x: 0 }
                }
                transition={{ duration: 1.15, ease: [0.2, 0.8, 0.2, 1] }}
              >
                {/* ================= FRONT FACE (cover) ================= */}
                <div
                  className="absolute inset-0 bg-[#0B1D26] border border-white/10"
                  style={{
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden",
                  }}
                >
                  <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(120deg,transparent_0%,rgba(255,255,255,0.35)_45%,transparent_70%)]" />

                  <div className="absolute inset-5 border border-[#D4AF37]/35" />
                  <div className="absolute inset-[22px] border border-white/10" />

                  <div className="relative h-full px-10 py-14 flex flex-col items-center text-center">
                    <p className="text-[#D4AF37] tracking-[0.45em] text-[15px] uppercase font-semibold">
                      Passport
                    </p>

                    <div className="mt-6 relative">
                      <div className="h-28 w-28" />
                      <div className="absolute inset-0 grid place-items-center">
                        <Image
                          src="/heart.png"
                          alt="Heart"
                          width={400}
                          height={400}
                        />
                      </div>
                    </div>

                    <div className="mt-10 w-full space-y-2 opacity-70">
                      <div className="h-px w-full bg-white/10" />
                      <div className="h-px w-5/6 bg-white/10 mx-auto" />
                    </div>

                    <div className="mt-8">
                      <h1 className="mt-3 text-white text-lg sm:text-xl font-semibold leading-snug text-center">
                        <span className="block">FG OFFR RO SEFAH</span>
                        <span className="block my-1">&amp;</span>
                        <span className="block">FG OFFR TB LAMPTEY</span>
                      </h1>
                    </div>

                    <div className="mt-auto pb-6">
                      <motion.p
                        animate={
                          isOpening
                            ? { opacity: 0 }
                            : { opacity: [0.55, 1, 0.55] }
                        }
                        transition={{
                          duration: 1.4,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="text-[#D4AF37] text-sm"
                      >
                        {subtitle}
                      </motion.p>
                    </div>
                  </div>
                </div>

                {/* ================= INSIDE FACE (blank inner cover) ================= */}
                <div
                  className="absolute inset-0 bg-[#1e3a5f] border border-white/10"
                  style={{
                    transform: "rotateY(180deg)",
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden",
                  }}
                >
                  {/* keep it mostly blank with subtle gradient like a real passport/book */}
                  <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.15),transparent_45%),radial-gradient(circle_at_70%_80%,rgba(0,0,0,0.15),transparent_55%)]" />

                  {/* very subtle inner-print (optional, tiny) */}
                  <div className="absolute bottom-8 left-8 right-8">
                    <div className="h-px w-full bg-white/15" />
                    <p className="mt-3 text-[10px] tracking-[0.45em] uppercase text-white/40">
                      CLEARED FOR ENTRY • PT-0214
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* shadow */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[85%] h-8 blur-2xl bg-black/50 -z-10" />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
