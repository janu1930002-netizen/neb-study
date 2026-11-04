
"use client";

import { useEffect, useState } from "react";
import {
  Monitor,
  Laptop,
  Smartphone,
  Download,
  ShieldCheck,
  CheckCircle2,
  ArrowDown,
  Sparkles,
  HardDrive,
} from "lucide-react";

const DOWNLOADS = [
  {
    id: "windows",
    name: "Windows",
    subtitle: "For Desktop & Laptop",
    description: "Enjoy a smooth learning experience on your Windows PC.",
    format: ".exe",
    requirements: "Windows 10 or later",
    size: "Installer",
    icon: Monitor,
    color: "blue",
    url: "https://drive.google.com/uc?export=download&id=WINDOWS_FILE_ID",
  },
  {
    id: "linux",
    name: "Linux",
    subtitle: "For Linux Users",
    description: "A lightweight application for your favorite Linux distribution.",
    format: ".AppImage",
    requirements: "64-bit Linux",
    size: "AppImage",
    icon: Laptop,
    color: "orange",
    url: "https://drive.google.com/uc?export=download&id=LINUX_FILE_ID",
  },
  {
    id: "android",
    name: "Android",
    subtitle: "For Mobile & Tablet",
    description: "Take your notes, books and study materials wherever you go.",
    format: ".apk",
    requirements: "Android 7.0 or later",
    size: "APK",
    icon: Smartphone,
    color: "green",
    url: "https://drive.google.com/uc?export=download&id=ANDROID_FILE_ID",
  },
];

const COLORS = {
  blue: {
    icon: "bg-blue-500/15 text-blue-400",
    button: "from-blue-500 to-indigo-600",
    glow: "group-hover:shadow-blue-500/20",
    border: "group-hover:border-blue-400/50",
    dot: "bg-blue-400",
  },
  orange: {
    icon: "bg-orange-500/15 text-orange-400",
    button: "from-orange-500 to-amber-600",
    glow: "group-hover:shadow-orange-500/20",
    border: "group-hover:border-orange-400/50",
    dot: "bg-orange-400",
  },
  green: {
    icon: "bg-green-500/15 text-green-400",
    button: "from-green-500 to-emerald-600",
    glow: "group-hover:shadow-green-500/20",
    border: "group-hover:border-green-400/50",
    dot: "bg-green-400",
  },
};

export default function DownloadPage() {
  const [platform, setPlatform] = useState("");

  useEffect(() => {
    const ua = navigator.userAgent.toLowerCase();

    if (ua.includes("android")) {
      setPlatform("android");
    } else if (ua.includes("windows")) {
      setPlatform("windows");
    } else if (ua.includes("linux")) {
      setPlatform("linux");
    }
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#080D1B] px-5 py-14 text-white sm:px-8">

      {/* Background Effects */}
      <div className="pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full bg-blue-600/20 blur-[130px]" />
      <div className="pointer-events-none absolute -right-40 top-64 h-96 w-96 rounded-full bg-purple-600/20 blur-[130px]" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-cyan-500/10 blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* Hero Section */}
        <section className="mx-auto mb-16 max-w-3xl text-center">

          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-5 py-2 text-sm font-medium text-blue-300">
            <Sparkles size={16} />
            Official Neb Study Application
          </div>

          <div className="mb-7 flex justify-center">
            <div className="relative flex h-20 w-20 items-center justify-center rounded-[26px] border border-white/10 bg-gradient-to-br from-blue-500 to-indigo-700 shadow-2xl shadow-blue-500/30">
              <Download size={37} strokeWidth={2.3} />
              <div className="absolute -bottom-2 -right-2 rounded-full border-4 border-[#080D1B] bg-green-500 p-1.5">
                <CheckCircle2 size={16} />
              </div>
            </div>
          </div>

          <h1 className="text-4xl font-black leading-tight tracking-tight sm:text-5xl md:text-6xl">
            Get Neb Study App
            <span className="mt-2 block bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent">
              On Your Device
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">
            Your learning companion is just one click away.
            Download Neb Study and access your study materials anytime, anywhere.
          </p>

          {platform && (
            <div className="mx-auto mt-7 inline-flex items-center gap-2 rounded-full border border-green-400/20 bg-green-400/10 px-5 py-2.5 text-sm text-green-300">
              <CheckCircle2 size={17} />
              Recommended for your device:{" "}
              <strong className="capitalize">{platform}</strong>
            </div>
          )}

        </section>

        {/* Section Heading */}
        <div className="mb-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
              Choose your platform
            </p>
            <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
              Available Downloads
            </h2>
          </div>

          <div className="flex items-center gap-2 text-sm text-slate-400">
            <ShieldCheck size={18} className="text-green-400" />
            Secure downloads
          </div>
        </div>

        {/* Download Cards */}
        <section className="grid grid-cols-1 gap-6 md:grid-cols-3">

          {DOWNLOADS.map((item) => {
            const Icon = item.icon;
            const theme = COLORS[item.color];
            const recommended = platform === item.id;

            return (
              <div
                key={item.id}
                className={`group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.045] p-7 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:bg-white/[0.075] hover:shadow-2xl ${theme.glow} ${theme.border} ${
                  recommended
                    ? "ring-1 ring-blue-400/60"
                    : ""
                }`}
              >

                {/* Card decoration */}
                <div className={`absolute -right-16 -top-16 h-40 w-40 rounded-full blur-3xl opacity-10 ${theme.dot}`} />

                {recommended && (
                  <div className="absolute right-5 top-5 rounded-full border border-blue-400/30 bg-blue-500/15 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-blue-300">
                    Recommended
                  </div>
                )}

                {/* Icon */}
                <div className={`relative mb-7 flex h-16 w-16 items-center justify-center rounded-2xl ${theme.icon} transition-transform duration-300 group-hover:scale-110`}>
                  <Icon size={33} strokeWidth={1.8} />
                </div>

                <div className="relative">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                    {item.subtitle}
                  </p>

                  <h3 className="mt-2 text-2xl font-extrabold">
                    {item.name}
                  </h3>

                  <p className="mt-3 min-h-[72px] text-sm leading-6 text-slate-400">
                    {item.description}
                  </p>
                </div>

                {/* Details */}
                <div className="my-6 space-y-4 border-y border-white/10 py-5">

                  <div className="flex items-center justify-between text-sm">
                    <span className="flex items-center gap-2 text-slate-400">
                      <HardDrive size={16} />
                      File format
                    </span>
                    <span className="font-semibold text-slate-200">
                      {item.format}
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-2 text-sm">
                    <span className="text-slate-400">Requirements</span>
                    <span className="text-right font-semibold text-slate-200">
                      {item.requirements}
                    </span>
                  </div>

                </div>

                {/* Download Button */}
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`relative mt-auto flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r ${theme.button} px-5 py-4 font-bold text-white shadow-lg transition-all duration-300 hover:brightness-110 active:scale-[0.98]`}
                >
                  <Download size={19} />
                  Download for {item.name}
                </a>

                <p className="mt-4 text-center text-xs text-slate-500">
                  {item.size} · Google Drive
                </p>

              </div>
            );
          })}

        </section>

        {/* Bottom Information */}
        <section className="mt-12 rounded-2xl border border-white/10 bg-white/[0.035] px-6 py-7 text-center sm:px-10">
          <div className="flex flex-col items-center gap-3">
            <div className="rounded-full bg-blue-500/15 p-3 text-blue-400">
              <ArrowDown size={22} />
            </div>

            <h3 className="text-lg font-bold">
              Ready to start learning?
            </h3>

            <p className="max-w-lg text-sm leading-6 text-slate-400">
              Choose the version that matches your device.
              Download the installer and follow the installation instructions.
            </p>
          </div>
        </section>

      </div>
    </main>
  );
}
