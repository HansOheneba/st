"use client";

import { useState } from "react";
import PassportGate from "@/components/Passport";


export default function InvitePage() {
  const [opened, setOpened] = useState(false);

  return (
    <main className="min-h-screen bg-[#fbfaf6]">
      {/* Overlay gate */}
      {!opened && (
        <PassportGate
          coupleNames="FG OFFR RO SEFAH & FG OFFR TB LAMPTEY"
          subtitle="Tap to open invite"
          onOpened={() => setOpened(true)}
        />
      )}

      {/* Content */}
      <div className="mx-auto max-w-3xl px-5 py-14">
        <header className="text-center">
          <p className="text-[#AA9D7D] tracking-[0.35em] text-xs uppercase">
            Passport to Engagement
          </p>

          <h1 className="mt-4 text-3xl sm:text-4xl font-semibold text-[#1b1b1b] leading-tight">
            FG OFFR RO SEFAH <span className="text-[#AA9D7D]">&</span> FG OFFR
            TB LAMPTEY
          </h1>

          <p className="mt-4 text-sm text-black/60">
            The Sefah and Lamptey family request the pleasure of your company at
            the traditional wedding and blessing.
          </p>
        </header>

        <section className="mt-10 rounded-2xl border border-black/10 bg-white p-6 sm:p-8">
          <div className="grid gap-4 sm:grid-cols-3">
            <Info label="TYPE" value="ENGAGEMENT" />
            <Info label="CODE" value="#ThePilot’sTherapist" />
            <Info label="PASSPORT NO." value="0001001" />
          </div>

          <div className="mt-8 space-y-3">
            <Row label="DATE" value="Saturday, 14th February, 2026" />
            <Row label="TIME" value="0900HRS" />
            <Row label="VENUE" value="The B B Event Center, Westlands Haatso" />
            <Row label="DRESS CODE" value="White" />
            <Row label="CITY" value="Accra" />
          </div>

          <div className="mt-8 rounded-xl bg-[#fbfaf6] border border-black/10 p-4 text-sm text-black/70">
            Kindly note: this event is strictly by invitation.
          </div>
        </section>

        {/* Add scroll sections so it feels like a one-pager experience */}
        <section className="mt-14 space-y-6">
          <Block
            title="What to Expect"
            text="A warm family gathering, tradition, celebration, and a heartfelt blessing. Please arrive on time so you don’t miss the opening rites."
          />
          <Block
            title="Directions"
            text="Use your preferred maps app and search “The B B Event Center, Westlands Haatso”. If you want, I can add a button that opens Google Maps/Apple Maps directly."
          />
          <Block
            title="Dress Code"
            text="White. Keep it elegant, simple, and comfortable."
          />
        </section>

        <footer className="mt-16 text-center text-xs text-black/50">
          Made with ❤️ — Passport to Engagement
        </footer>
      </div>
    </main>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-black/10 bg-[#fbfaf6] p-4">
      <div className="text-[11px] tracking-[0.25em] text-black/50">{label}</div>
      <div className="mt-2 font-semibold text-black">{value}</div>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start justify-between gap-4 border-b border-black/10 pb-3">
      <div className="text-[11px] tracking-[0.25em] text-black/50">{label}</div>
      <div className="text-sm font-medium text-black text-right">{value}</div>
    </div>
  );
}

function Block({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-black/10 bg-white p-6">
      <h3 className="text-lg font-semibold text-black">{title}</h3>
      <p className="mt-2 text-sm text-black/70 leading-relaxed">{text}</p>
    </div>
  );
}
