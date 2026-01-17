"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  Plane,
  MapPin,
  Clock,
  CalendarDays,
  Ticket,
  Heart,
} from "lucide-react";

type DetailItem = { label: string; value: string; icon?: React.ReactNode };

const DETAILS: DetailItem[] = [
  {
    label: "DATE",
    value: "Saturday, 14th February, 2026",
    icon: <CalendarDays className="h-4 w-4" />,
  },
  { label: "TIME", value: "10:00 HRS", icon: <Clock className="h-4 w-4" /> },
  {
    label: "VENUE",
    value: "The B B Event Center, Westlands Haatso",
    icon: <MapPin className="h-4 w-4" />,
  },
  { label: "DRESS CODE", value: "White", icon: <Ticket className="h-4 w-4" /> },
];

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

const IMG = {
  hero: "https://images.unsplash.com/photo-1570970580763-7993ca30d726?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  story:
    "https://images.unsplash.com/photo-1683971336619-d445cbec0276?q=80&w=1189&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  details:
    "/img2.jpg",
  // details:
  //   "https://images.unsplash.com/photo-1594671515324-ea48fea744d5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  venue:
    "https://images.unsplash.com/photo-1556388158-158ea5ccacbd?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  registry:
    "https://images.unsplash.com/photo-1571406172996-99dcf29b2f7a?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  map: "https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  // us: "https://images.unsplash.com/photo-1762347159296-e8bbcfd7d108?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  us: "/img3.jpg",
  rsvp: "https://images.unsplash.com/photo-1762846700374-f4aeb2f38e92?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
};

export default function Invite() {
  const countdown = useCountdown("2026-02-14T10:00:00Z");

  return (
    <main className="bg-[#0b0b0c] text-white">
      {/* HERO */}
      <section className="relative min-h-[92vh] w-full overflow-hidden">
        <Image
          src={IMG.hero}
          alt="Hero"
          fill
          priority
          className="object-cover opacity-95"
          unoptimized
        />

        {/* deep luxury overlays */}
        <div className="absolute inset-0 bg-linear-to-b from-black/55 via-black/45 to-black/80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(212,175,55,0.10),transparent_55%)]" />

        {/* subtle moving “flight path” */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.16]">
          <svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 1200 700"
            fill="none"
          >
            <path
              d="M-40 540 C 200 380, 340 610, 520 470 S 820 220, 980 360 S 1180 560, 1280 300"
              stroke="rgba(212,175,55,0.55)"
              strokeWidth="2"
              strokeDasharray="6 10"
            />
          </svg>
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-5 pt-20 sm:pt-28 pb-16 sm:pb-20 text-center">
          <div
            className="inline-flex items-center gap-2 rounded-full 
  border border-[#D4AF37]/30 
  bg-white/5 
  px-4 py-2 
  text-[10px] sm:text-[11px] 
  tracking-[0.35em] uppercase 
  text-white/85
  shadow-[0_0_0_1px_rgba(212,175,55,0.12),0_0_24px_rgba(212,175,55,0.12)]
"
          >
            <Plane className="h-4 w-4 text-[#D4AF37]" />
            <span className="text-[#D4AF37] font-semibold">T-MINUS</span>
            <span className="font-mono tabular-nums">
              {countdown.days}D {countdown.hours}:{countdown.minutes}:
              {countdown.seconds}
            </span>
          </div>

          <h1 className="mt-7 sm:mt-8 text-4xl sm:text-6xl md:text-7xl leading-[0.95] sm:leading-none">
            FG OFFR RO SEFAH
            <span className="block mt-3 sm:mt-4 text-white/90">&</span>
            FG OFFR TB LAMPTEY
          </h1>

          <p className="mt-5 sm:mt-7 text-white/70 text-[11px] sm:text-sm tracking-[0.22em] sm:tracking-[0.25em] uppercase">
            Accra • 14 Feb 2026 • Boarding begins 09:30
          </p>

          {/* “Boarding pass” strip */}
          <div className="mt-8 sm:mt-10 mx-auto max-w-3xl rounded-2xl border border-white/12 bg-black/35 backdrop-blur-sm overflow-hidden">
            {/* Top row: becomes stacked + centered on mobile */}
            <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto_1fr] gap-0">
              <div className="p-5 sm:p-6 text-center sm:text-left">
                <p className="text-xs tracking-[0.30em] uppercase text-white/60">
                  Departure
                </p>
                <div className="mt-2 text-2xl font-semibold">ACC</div>
                <p className="mt-1 text-sm text-white/70">Accra</p>
              </div>

              <div className="hidden sm:flex items-center justify-center px-4">
                <div className="h-14 w-px bg-white/10" />
              </div>

              <div className="p-5 sm:p-6 text-center sm:text-right">
                <p className="text-xs tracking-[0.30em] uppercase text-white/60">
                  Arrival
                </p>
                <div className="mt-2 text-2xl font-semibold">ENG</div>
                <p className="mt-1 text-sm text-white/70">Engagement</p>
              </div>
            </div>

            <div className="h-px w-full bg-white/10" />

            {/* Bottom minis: 2-cols on mobile, 3-cols on sm+ */}
            <div className="p-5 sm:p-6 grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 text-left">
              <Mini label="Flight" value="PT-0214" />
              <Mini label="Gate" value="Love" />
              <Mini label="Seat" value="A2 & B2" />
            </div>
          </div>
        </div>
      </section>

      {/* MOSAIC GRID */}
      <section className="mx-auto max-w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 overflow-hidden pb-14 border-white/10">
          {/* Row 1 */}
          <MosaicImage src={IMG.story} alt="Story" />
          <Panel>
            <PanelTitle>CAPTAIN’S NOTE</PanelTitle>
            <PanelText>
              The Sefah and Lamptey family request the pleasure of your company
              as we celebrate tradition, family, and the start of a new journey.
              Consider this your official clearance to join us for a morning of
              love, laughter, and blessing.
            </PanelText>

            <div className="mt-10 flex flex-wrap items-center gap-2">
              <Badge>
                <Plane className="h-4 w-4 text-[#D4AF37]" /> Boarding 08:30
              </Badge>
              <Badge>
                <MapPin className="h-4 w-4 text-[#D4AF37]" /> Westlands Haatso
              </Badge>
              <Badge>
                <Heart className="h-4 w-4 text-[#D4AF37]" /> By Invitation
              </Badge>
            </div>
          </Panel>

          {/* Row 2 */}
          <MosaicImage
            className="md:hidden block"
            src={IMG.details}
            alt="Details"
          />

          <Panel>
            <PanelTitle>FLIGHT DETAILS</PanelTitle>

            <div className="mt-6 space-y-4">
              {DETAILS.map((d) => (
                <div
                  key={d.label}
                  className="grid grid-cols-[26px_90px_1fr] gap-4 items-start"
                >
                  <div className="mt-[2px] text-white/60">{d.icon}</div>
                  <div className="text-xs tracking-[0.25em] text-white/60">
                    {d.label}
                  </div>
                  <div className="text-sm text-white/85">{d.value}</div>
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-xl border border-white/10 bg-white/5 p-5">
              <p className="text-xs tracking-[0.30em] uppercase text-white/60">
                Dress Guidance
              </p>
              <p className="mt-2 text-sm text-white/75 leading-relaxed">
                White. Think clean, timeless, elegant. Keep it comfortable for a
                morning celebration.
              </p>
            </div>

            <div className="mt-8 text-xs text-white/55">
              Kindly note: this event is strictly by invitation.
            </div>
          </Panel>

          <MosaicImage
            className="md:block hidden"
            src={IMG.details}
            alt="Details"
          />

          <MosaicImage src={IMG.us} alt="Story" />
          <Panel>
            <PanelTitle>OUR STORY</PanelTitle>
            <PanelText>
              We met in a very beautiful city—the only twin city in Ghana—where
              the sea breeze carries dreams and destiny quietly finds its way.
              It was there, in Sekondi–Takoradi, that our love was brewed,
              gently and intentionally.
              <br />
              <br />
              From the very first day, I looked her in the eyes and told her,
              without hesitation, that I was going to marry her. No doubts. No
              games. Just certainty. She smiled then, not knowing how powerfully
              those words would echo into our future.
              <br />
              <br />
              The journey hasn’t been without its ups and downs. We’ve been
              tested, stretched, and refined by life, but through it all, love
              remained our anchor. Each challenge only confirmed what our hearts
              already knew—that this was no accident, but purpose.
              <br />
              <br />
              Today, here we are. What began in a twin city has become one
              heart, one love, and one future. Truly, a perfect match made in
              heaven. 💍✨
            </PanelText>
          </Panel>

          {/* Row 3 */}
          <MosaicImage
            className="md:hidden block"
            src={IMG.venue}
            alt="Venue"
          />

          <Panel>
            <PanelTitle>ARRIVAL & ROUTE</PanelTitle>
            <PanelText>
              Please arrive early so you don’t miss the opening rites. If you
              need help with directions, reach out to the family contact listed
              on your invite.
            </PanelText>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="#map"
                className="rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm hover:bg-white/15 transition text-center"
              >
                View Map
              </a>
              <a
                href="#registry"
                className="rounded-full border border-white/20 bg-transparent px-6 py-3 text-sm hover:bg-white/10 transition text-center"
              >
                Continue ↓
              </a>
            </div>
          </Panel>
          <MosaicImage
            className="md:block hidden"
            src={IMG.venue}
            alt="Venue"
          />
        </div>
      </section>

      {/* MAP/LOCATION STRIP */}
      <section id="map" className="mx-auto max-w-6xl px-5 pb-14">
        <div className="relative overflow-hidden rounded-2xl border border-white/10">
          <div className="relative h-[320px] md:h-[420px]">
            <Image
              src={IMG.map}
              alt="Accra"
              fill
              className="object-cover opacity-80"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/70" />
          </div>

          <div className="absolute inset-0 p-7 md:p-10 flex flex-col justify-end">
            <div className="max-w-xl">
              <p className="text-xs tracking-[0.35em] uppercase text-white/70">
                LOCATION
              </p>
              <h3 className="mt-3 text-2xl md:text-3xl">
                The B B Event Center, Westlands Haatso
              </h3>
              <p className="mt-3 text-sm text-white/70">
                Open your maps app and search the venue name above.
              </p>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                {/* Replace with your real map link later */}
                <a
                  href="https://maps.app.goo.gl/g7BMsyKMNjH71xJ27"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm hover:bg-white/15 transition text-center"
                >
                  Open in Maps
                </a>
                <button
                  onClick={() => {
                    const mapUrl = "https://maps.app.goo.gl/g7BMsyKMNjH71xJ27";
                    if (navigator.share) {
                      navigator.share({
                        title: "The B B Event Center",
                        text: "Join us at The B B Event Center, Westlands Haatso",
                        url: mapUrl,
                      });
                    } else {
                      navigator.clipboard.writeText(mapUrl);
                      alert("Location link copied to clipboard!");
                    }
                  }}
                  className="rounded-full border border-white/20 bg-transparent px-6 py-3 text-sm hover:bg-white/10 transition text-center"
                >
                  Share Location
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REGISTRY */}
      <section id="registry" className="relative py-24 overflow-hidden">
        <Image
          src={IMG.registry}
          alt="Registry background"
          fill
          className="object-cover opacity-60"
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/70 to-black/90" />

        <div className="relative z-10 mx-auto max-w-6xl px-5">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs tracking-[0.35em] uppercase text-white/70">
              REGISTRY
            </p>

            <h2 className="mt-6 text-4xl sm:text-5xl leading-tight">
              Your presence is the greatest gift.
            </h2>

            <p className="mt-6 text-white/70 text-sm leading-relaxed">
              Your presence means everything to us. If you wish to bless us
              further, the options below are available. Thank you for
              celebrating this journey with us.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {/* MOMO */}
              <GiftCard
                title="Mobile Money"
                name="Richard Obeng Sefah"
                value="0549422645"
                meta="MTN MoMo"
              />

              {/* BANK */}
              <GiftCard
                title="Bank Transfer"
                name="Tracey Babsy Lamptey"
                value="1441004879779"
                meta="EcoBank"
              />
            </div>
          </div>

          {/* big decorative text */}
          <div className="mt-16 text-center select-none pointer-events-none">
            <div className="text-[14vw] leading-none font-semibold text-white/10">
              CLEARED
            </div>
          </div>
        </div>
      </section>

      <RSVPSection
        name="Stacey Elsie Lamptey"
        phone="0560607547"
        eventTag="PT-0214"
      />

      <footer className="py-10 text-center text-xs text-white/50">
        Passport to Engagement • Accra
      </footer>
    </main>
  );
}

function MosaicImage({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div className={`relative min-h-85 md:min-h-110 ${className}`}>
      <Image src={src} alt={alt} fill className="object-cover" unoptimized />
      <div className="absolute inset-0 bg-black/30" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(212,175,55,0.10),transparent_55%)]" />
    </div>
  );
}


function Panel({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[#141416] p-10 md:p-12 flex items-center">
      <div className="max-w-md mx-auto w-full text-center md:text-left">
        {children}
      </div>
    </div>
  );
}

function PanelTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-md tracking-[0.35em] uppercase text-white/85 font-semibold">
      {children}
    </h3>
  );
}

function PanelText({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-6 text-sm text-white/70 leading-relaxed">{children}</p>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs text-white/75">
      {children}
    </span>
  );
}

function Mini({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-white/12 bg-white/5 p-4">
      <div className="text-[11px] tracking-[0.30em] uppercase text-white/55">
        {label}
      </div>
      <div className="mt-2 text-sm text-white/85">{value}</div>
    </div>
  );
}

function GiftCard({
  title,
  name,
  value,
  meta,
}: {
  title: string;
  name: string;
  value: string;
  meta: string;
}) {
  return (
    <div className="rounded-2xl border border-white/15 bg-white/5 backdrop-blur-sm p-5 text-left">
      <p className="text-xs tracking-[0.35em] uppercase text-white/60">
        {title}
      </p>

      <div className="mt-3 text-lg font-semibold text-white">{value}</div>

      <p className="mt-1 text-sm text-white/70">{name}</p>
      <p className="mt-1 text-xs text-white/50">{meta}</p>

      <button
        onClick={() => navigator.clipboard.writeText(value)}
        className="mt-4 inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs text-white/80 hover:bg-white/20 transition"
      >
        Copy
      </button>
    </div>
  );
}
function RSVPSection({
  name,
  phone,
  eventTag = "PT-0214",
}: {
  name: string;
  phone: string; // e.g. 0560607547
  eventTag?: string;
}) {
  const intl = `233${phone.replace(/\D/g, "").replace(/^0/, "")}`;
  const pretty = phone;

  const message = encodeURIComponent(
    `Hello ${name}, I’m confirming my attendance for the engagement (${eventTag}). My name is: ______. ✅`
  );

  const waLink = `https://wa.me/${intl}?text=${message}`;
  const telLink = `tel:${phone}`;

  return (
    <section id="rsvp" className="relative py-10 overflow-hidden">
      <Image
        src={IMG.rsvp}
        alt="RSVP background"
        fill
        className="object-cover opacity-60"
        unoptimized
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/70 to-black/90" />
      <div className="absolute inset-0 opacity-[0.18] bg-[radial-gradient(circle_at_50%_30%,rgba(212,175,55,0.12),transparent_55%)]" />

      <div className="relative z-10 mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs tracking-[0.35em] uppercase text-white/70">
            RSVP
          </p>

          <h2 className="mt-6 text-4xl sm:text-5xl leading-tight">
            Kindly confirm attendance.
          </h2>

          <p className="mt-6 text-white/70 text-sm leading-relaxed">
            This event is strictly by invitation. Please confirm directly with{" "}
            {name}.
          </p>

          <div className="mt-10 mx-auto max-w-xl rounded-2xl border border-white/12 bg-white/5 backdrop-blur-sm p-6 text-left">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs tracking-[0.30em] uppercase text-white/60">
                  RSVP Contact
                </p>
                <p className="mt-2 text-lg font-semibold text-white">{name}</p>
                <p className="mt-1 text-sm text-white/70">{pretty}</p>
              </div>

              <button
                onClick={() => navigator.clipboard.writeText(phone)}
                className="shrink-0 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs text-white/80 hover:bg-white/20 transition"
              >
                Copy
              </button>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-[#F6F7EC]/40 bg-[#AD833C]/15 px-6 py-3 text-sm text-white hover:bg-[#25D366]/25 transition text-center"
              >
                Confirm on WhatsApp
              </a>

              <a
                href={telLink}
                className="rounded-full border border-white/20 bg-transparent px-6 py-3 text-sm hover:bg-white/10 transition text-center"
              >
                Call
              </a>
            </div>

            <p className="mt-5 text-xs text-white/55">
              WhatsApp message is pre-filled — just add your name.
            </p>
          </div>

          {/* <div className="mt-16 text-center select-none pointer-events-none">
            <div className="text-[14vw] leading-none font-semibold text-white/10">
              CONFIRM
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
