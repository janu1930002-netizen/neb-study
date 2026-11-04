
import Link from "next/link";
import { ArrowUpRight, BookOpen } from "lucide-react";

export default function Home() {
  const resources = [
    {
      image: "/notesimage.jpg",
      title: "NOTES",
      description: "Explore all notes chapterwise and make learning easier.",
      buttonText: "EXPLORE NOTES",
      href: "/notes",
      number: "01",
      category: "STUDY MATERIAL",
      accent: "from-blue-500 to-cyan-400",
    },
    {
      image: "/syllabusimage.jpg",
      title: "SYLLABUS",
      description: "Explore the complete NEB syllabus and course structure.",
      buttonText: "VIEW SYLLABUS",
      href: "/api/syllabus",
      number: "02",
      category: "CURRICULUM",
      accent: "from-violet-500 to-purple-400",
    },
    {
      image: "/booo.jpeg",
      title: "BOOKS",
      description: "Discover useful books for your academic preparation.",
      buttonText: "EXPLORE BOOKS",
      href: "/books",
      number: "03",
      category: "LIBRARY",
      accent: "from-amber-500 to-yellow-300",
    },
    {
      image: "/questionpaper.jpg",
      title: "QUESTION PAPERS",
      description: "Practice with previous examination question papers.",
      buttonText: "VIEW QUESTIONS",
      href: "/questions",
      number: "04",
      category: "EXAM PREPARATION",
      accent: "from-emerald-500 to-teal-300",
    },
    {
      image: "/schoolimage.jpg",
      title: "SCHOOLS",
      description: "Discover school information and educational resources.",
      buttonText: "EXPLORE SCHOOLS",
      href: "/api/schools",
      number: "05",
      category: "EDUCATION",
      accent: "from-rose-500 to-pink-400",
    },
    {
      image: "/appicon.jpg",
      title: "DOWNLOAD APP",
      description: "Get the application and access your learning materials offline.",
      buttonText: "DOWNLOAD NOW",
      href: "/download",
      number: "06",
      category: "OFFLINE LEARNING",
      accent: "from-cyan-500 to-blue-400",
    },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#080F1E] px-5 py-14 text-white sm:px-8 sm:py-20">

      {/* Background Decoration */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-600/15 blur-[130px]" />
      <div className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-amber-500/10 blur-[130px]" />

      <section className="relative mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">

          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-[2px] w-10 bg-amber-400" />
              <p className="text-xs font-bold tracking-[0.25em] text-amber-400">
                YOUR LEARNING DESTINATION
              </p>
            </div>

            <h1 className="text-3xl font-black tracking-tight sm:text-5xl">
              Explore{" "}
              <span className="bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500 bg-clip-text text-transparent">
                Resources
              </span>
            </h1>

            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
              Everything you need for your academic journey.
              Discover notes, books, syllabus, question papers, and more.
            </p>
          </div>

          <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-5 py-3">
            <BookOpen className="h-5 w-5 text-amber-400" />
            <span className="text-sm font-semibold text-slate-300">
              6 Learning Categories
            </span>
          </div>

        </div>

        {/* Resource Cards */}
        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">

          {resources.map((item) => (
            <ReusableCard key={item.number} {...item} />
          ))}

        </div>

      </section>

      {/* Bottom Banner */}
      <section className="relative mx-auto mt-20 max-w-7xl">

        <div className="relative overflow-hidden rounded-3xl border border-amber-400/20 bg-gradient-to-r from-[#10264A] via-[#172F55] to-[#10264A] px-7 py-10 shadow-2xl sm:px-12 sm:py-12">

          <div className="absolute -right-10 -top-20 h-64 w-64 rounded-full bg-amber-400/10 blur-3xl" />

          <div className="relative flex flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">

            <div>
              <p className="mb-3 text-xs font-bold tracking-[0.2em] text-amber-400">
                LEARN • PRACTICE • ACHIEVE
              </p>

              <h2 className="text-2xl font-extrabold sm:text-3xl">
                Build Your Knowledge.
                <span className="block text-amber-300">
                  Shape Your Future.
                </span>
              </h2>
            </div>

            <Link
              href="/notes"
              className="group inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-amber-400 to-yellow-500 px-7 py-4 font-extrabold text-[#07111F] shadow-lg shadow-amber-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-amber-500/40"
            >
              START LEARNING
              <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>

          </div>
        </div>
      </section>

    </main>
  );
}

/* Reusable Card Component */
function ReusableCard({
  image,
  title,
  description,
  buttonText,
  href,
  number,
  category,
  accent,
}) {
  return (
    <Link
      href={href}
      className="group relative block overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#17263D] via-[#101D30] to-[#0B1424] shadow-xl shadow-black/30 transition-all duration-500 hover:-translate-y-2 hover:border-amber-400/50 hover:shadow-2xl hover:shadow-blue-950/60"
    >
      {/* Top Accent */}
      <div
        className={`absolute left-0 top-0 z-10 h-1 w-full bg-gradient-to-r ${accent}`}
      />

      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1424] via-black/10 to-black/20" />

        {/* Number */}
        <div className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 bg-[#080F1E]/70 text-sm font-black text-amber-300 shadow-lg backdrop-blur-lg">
          {number}
        </div>

        {/* Category */}
        <div className="absolute bottom-5 left-5 rounded-full border border-amber-300/30 bg-[#080F1E]/75 px-4 py-2 text-[10px] font-extrabold tracking-[0.15em] text-amber-200 backdrop-blur-lg">
          {category}
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6">
        <h2 className="text-xl font-extrabold tracking-wide text-white transition-colors duration-300 group-hover:text-amber-300">
          {title}
        </h2>

        <p className="mt-3 min-h-[48px] text-sm leading-6 text-slate-400">
          {description}
        </p>

        {/* Navigation Button Style */}
        <div className="mt-6 flex w-full items-center justify-between rounded-xl border border-amber-400/30 bg-gradient-to-r from-[#243958] to-[#172943] px-5 py-3.5 text-sm font-extrabold tracking-wide text-amber-300 transition-all duration-300 group-hover:border-amber-300 group-hover:from-amber-400 group-hover:to-yellow-500 group-hover:text-[#08111F] group-hover:shadow-lg group-hover:shadow-amber-500/20">
          {buttonText}

          <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </div>
      </div>
    </Link>
  );
}