
"use client";

import {
  BookOpen,
  Target,
  MonitorSmartphone,
  Share2,
  MessageCircle,
  Mail,
  Code2,
  Heart,
  GraduationCap,
  FileText,
  Sparkles,
  Globe,
  Users,
  Smartphone,
  CheckCircle,
  ArrowUpRight,
  Github,
  Zap,
  ShieldCheck,
  UserRound,
} from "lucide-react";

const APP = {
  name: "Neb Study",
  description:
    "Your smart learning companion. Organize study materials, access notes, and make learning easier.",
  website: "https://www.facebook.com/profile.php?id=100078739600785",
  email: "janu1930002@gmail.com",
};

/* Multiple Developers */
const DEVELOPERS = [
  {
    id: 1,
    name: "Ram Kumar Yadav",
    role: "Lead Developer & Creator of Neb Study",
    image: "/ram.jpg",
    bio: "I enjoy building useful applications that make learning easier, more organized, and accessible to students.",

    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Next.js",
      "Python",
      "Machine Learning",
      "Kivy","Programming","Web Development","AI and Automattion","Experiments and Tools",
    ],

    contributions: [
      "Application design and development",
      "Responsive user interface",
      "Continuous improvements and updates",
    ],

    facebook: "https://www.facebook.com/profile.php?id=100078739600785",
    instagram: "https://www.instagram.com/ramkumar12349763/",
    whatsapp: "9779815734883",
    email: "janu193000@gmail.com",
  },
 {
    id: 2,
    name: "Ajit Yadav",
    role: "Developer",
    image: "/ram.jpg",
    bio: "I enjoy building useful applications that make learning easier, more organized, and accessible to students.",

    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Next.js",
    ],

    contributions: [
      "Application design and development",
      "Responsive user interface",
      "Continuous improvements and updates",
    ],

    facebook: "https://www.facebook.com/share/1CEnbtNYzL/",
    instagram: "https://www.instagram.com/ramkumar12349763/",
    whatsapp: "9779819612973",
    email: "moneyheist.u@gmail.com",
  },

  {
    id: 3,
    name: "Siyaram Yadav",
    role: "Resource Provider",
    image: "/siyaram.jpeg",
    bio: "I enjoy building useful resources that make learning easier, more organized, and accessible to students.",

    skills: [
      "Sceince",
      "Physic",
      "Chemistry",
    ],

    contributions: [
      "Responsible for providing educational resources",
      "Provides computer notes, books, and question papers",
      "Provides syllabuses and other study materials",
      "Supports students with useful learning resources",
      "Helps maintain relevant and updated educational content",
    ],

    facebook: "https://m.facebook.com/siyaram.yadav.756/",
    instagram: "",
    whatsapp: "9779862625850",
    email: "ysiyaram44rocket@gmail.com",
  },

  {
    id: 4,
    name: "Mithlesh Kapar",
    role: "Resource Manager",
    image: "/mithlesh.jpeg",
    bio: "I enjoy building useful resources that make learning easier, more organized, and accessible to students.",

    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React","Programming","Web Development","AI and Automattion","Experiments and Tools",
    ],

    contributions: [
      "Responsible for managing educational resources",
      "Manages computer notes, textbooks, and question papers",
      "Organizes syllabuses and digital learning materials",
      "Ensures resources are properly organized and updated",
      "Helps keep learning materials verified and accessible",
    ],

    facebook: "https://www.facebook.com/mithleshmiles",
    instagram: "",
    whatsapp: "9779804744481",
    email: "mithleshkapar@gmail.com",
  },

  {
    id: 5,
    name: "Prem Prakash Yadav",
    role: "Resource Provider",
    image: "/prem.jpeg",
    bio: "I enjoy building useful resources that make learning easier, more organized, and accessible to students.",

    skills: [
      "Programming","Web Development","AI and Automattion","Experiments and Tools",
    ],

    contributions: [
      "Responsible for providing educational resources",
      "Provides computer notes, books, and question papers",
      "Provides syllabuses and other study materials",
      "Supports students with useful learning resources",
      "Helps maintain relevant and updated educational content",
    ],

    facebook: "https://www.facebook.com/ItsThePrem",
    instagram: "",
    whatsapp: "9779827715545",
    email: "thepremydv@gmail.com",
  },
    {
    id: 6,
    name: "Lokendra Manadal",
    role: "Resource Provider",
    image: "/lokendra.jpeg",
    bio: "I enjoy building useful resources that make learning easier, more organized, and accessible to students.",

    skills: [
      "High level knowledge of Chemistry",
    ],

    contributions: [
      "Responsible for providing educational resources",
      "Provides computer notes, books, and question papers",
      "Provides syllabuses and other study materials",
      "Supports students with useful learning resources",
      "Helps maintain relevant and updated educational content",
    ],

    facebook: "https://www.facebook.com/lokendra.mandal.14",
    instagram: "",
    whatsapp: "9779810258566",
    email: "",
  },
  {
    id: 7,
    name: "Santosh Sah",
    role: "Resource Provider",
    image: "/santosh.jpeg",
    bio: "I enjoy building useful resources that make learning easier, more organized, and accessible to students.",

    skills: [
     "Programming","Web Development","AI and Automattion","Experiments and Tools","Graphics design ","Networking"
,"Electronic Circuit......"
    ],

    contributions: [
      "Responsible for providing educational resources",
      "Provides computer notes, books, and question papers",
      "Provides syllabuses and other study materials",
      "Supports students with useful learning resources",
      "Helps maintain relevant and updated educational content",
    ],

    facebook: "https://www.facebook.com/sant.sh.sah.216355",
    instagram: "",
    whatsapp: "9779807710402",
    email: "sahsantosh160@gmail.com",
  },
  {
    id: 8,
    name: "Bivash Chandra Yadav",
    role: "Resource Provider",
    image: "/bivash.jpeg",
    bio: "I enjoy building useful resources that make learning easier, more organized, and accessible to students.",

    skills: [
     "Programming","Web Development","Computer Hardware Repair and Maintenance.","Projects handling ","Office Package (Word, excel, PowerPoint)",],

    contributions: [
      "Responsible for providing educational resources",
      "Provides computer notes, books, and question papers",
      "Provides syllabuses and other study materials",
      "Supports students with useful learning resources",
      "Helps maintain relevant and updated educational content",
    ],

    facebook:"https://www.facebook.com/smiley.bivash.2025",
    instagram: "",
    whatsapp: "9779805934223",
    email: "smileybivash@gmail.com",
  },
  {
    id: 9,
    name: "Santosh Kumar Yadav",
    role: "Resource Provider",
    image: "/bivash.jpeg",
    bio: "I enjoy building useful resources that make learning easier, more organized, and accessible to students.",

    skills: [
     "Programming","Web Development","AI and Automattion","Experiments and Tools","Java Programming and projects","Computer Hardware ","Computer Lab Management",
    ],

    contributions: [
      "Responsible for providing educational resources",
      "Provides computer notes, books, and question papers",
      "Provides syllabuses and other study materials",
      "Supports students with useful learning resources",
      "Helps maintain relevant and updated educational content",
    ],

    facebook:"https://www.facebook.com/lakhindar.mahato.73",
    instagram: "",
    whatsapp: "977974-6606067",
    email: "",
  },
];


const features = [
  {
    icon: BookOpen,
    title: "Study Materials",
    text: "Keep your learning resources and study notes organized in one place.",
    number: "01",
    color: "from-blue-500 to-cyan-400",
  },
  {
    icon: Target,
    title: "Easy to Use",
    text: "Navigate learning content through a clean and user-friendly interface.",
    number: "02",
    color: "from-violet-500 to-purple-400",
  },
  {
    icon: MonitorSmartphone,
    title: "Responsive Design",
    text: "Enjoy a smooth experience across mobile phones, tablets, and computers.",
    number: "03",
    color: "from-emerald-500 to-teal-400",
  },
];

const socialPlatforms = [
  {
    name: "WhatsApp",
    icon: MessageCircle,
    color: "bg-green-500 hover:bg-green-400",
    action: "whatsapp",
  },
  {
    name: "Facebook",
    icon: Globe,
    color: "bg-blue-600 hover:bg-blue-500",
    action: "facebook",
  },
  {
    name: "Instagram",
    icon: Smartphone,
    color:
      "bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 hover:opacity-90",
    action: "instagram",
  },
  {
    name: "Share",
    icon: Share2,
    color: "bg-slate-700 hover:bg-slate-600",
    action: "share",
  },
];

/* Section Heading */
function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-bold tracking-widest text-cyan-300">
        <Sparkles size={15} />
        {eyebrow}
      </div>

      <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
        {title}
      </h2>

      {description && (
        <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">
          {description}
        </p>
      )}
    </div>
  );
}

/* Social Share Button */
function SocialButton({ platform }) {
  const Icon = platform.icon;

  const handleClick = async () => {
    const url = APP.website;
    const message = `${APP.name} - ${APP.description} ${url}`;

    if (platform.action === "share") {
      if (navigator.share) {
        try {
          await navigator.share({
            title: APP.name,
            text: APP.description,
            url,
          });
          return;
        } catch (error) {
          if (error?.name === "AbortError") return;
        }
      }

      try {
        await navigator.clipboard.writeText(message);
        window.alert("Application link copied!");
      } catch {
        window.open(url, "_blank", "noopener,noreferrer");
      }

      return;
    }

    const links = {
      whatsapp: `https://wa.me/?text=${encodeURIComponent(message)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      instagram: "https://www.instagram.com/",
    };

    if (platform.action === "instagram" && navigator.share) {
      try {
        await navigator.share({
          title: APP.name,
          text: message,
          url,
        });
        return;
      } catch (error) {
        if (error?.name === "AbortError") return;
      }
    }

    window.open(links[platform.action], "_blank", "noopener,noreferrer");
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-bold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl ${platform.color}`}
    >
      <Icon size={19} />
      {platform.name}
    </button>
  );
}

/* Multiple Developer Cards */
function DeveloperCard({ developer }) {
  const handleWhatsApp = () => {
    const phone = developer.whatsapp?.replace(/\D/g, "");

    if (!phone) return;

    window.open(
      `https://wa.me/${phone}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#172A46] via-[#111F35] to-[#0C172A] shadow-2xl shadow-black/30 transition duration-500 hover:-translate-y-1 hover:border-cyan-400/30">

      <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-violet-500/10 blur-3xl" />

      <div className="relative p-6 sm:p-10">

        {/* Profile */}
        <div className="flex flex-col items-center gap-7 text-center md:flex-row md:items-start md:text-left">

          <div className="relative shrink-0">
            <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-violet-500 opacity-70 blur-md" />

            <div className="relative h-36 w-36 overflow-hidden rounded-full border-4 border-[#14243B] bg-slate-800 shadow-xl sm:h-44 sm:w-44">
              <img
                src={developer.image || "/default-profile.png"}
                alt={developer.name}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="absolute bottom-2 right-2 flex h-9 w-9 items-center justify-center rounded-full border-4 border-[#14243B] bg-emerald-500 text-white">
              <CheckCircle size={17} />
            </div>
          </div>

          <div className="flex-1">

            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1.5 text-xs font-bold text-cyan-300">
              <UserRound size={14} />
              DEVELOPER PROFILE
            </div>

            <h3 className="text-3xl font-black text-white sm:text-4xl">
              {developer.name}
            </h3>

            <p className="mt-2 font-semibold text-cyan-300">
              {developer.role}
            </p>

            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
              {developer.bio}
            </p>

            {/* Social Links */}
            <div className="mt-7 flex flex-wrap justify-center gap-3 md:justify-start">

              {developer.facebook && (
                <a
                  href={developer.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${developer.name} Facebook`}
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-blue-500/15 text-blue-300 transition hover:-translate-y-1 hover:bg-blue-600 hover:text-white"
                >
                  <Globe size={20} />
                </a>
              )}

              {developer.instagram && (
                <a
                  href={developer.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${developer.name} Instagram`}
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-pink-500/15 text-pink-300 transition hover:-translate-y-1 hover:bg-pink-600 hover:text-white"
                >
                  <Smartphone size={20} />
                </a>
              )}

              {developer.whatsapp && (
                <button
                  type="button"
                  onClick={handleWhatsApp}
                  aria-label={`Contact ${developer.name} on WhatsApp`}
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-green-500/15 text-green-300 transition hover:-translate-y-1 hover:bg-green-600 hover:text-white"
                >
                  <MessageCircle size={20} />
                </button>
              )}

              {developer.email && (
                <a
                  href={`mailto:${developer.email}`}
                  aria-label={`Email ${developer.name}`}
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-violet-500/15 text-violet-300 transition hover:-translate-y-1 hover:bg-violet-600 hover:text-white"
                >
                  <Mail size={20} />
                </a>
              )}

            </div>
          </div>
        </div>

        <div className="my-10 border-t border-white/10" />

        {/* Technical Skills */}
        <div className="mb-9">

          <h4 className="mb-5 flex items-center gap-3 text-lg font-extrabold text-white">
            <Code2 className="text-cyan-400" />
            Technical Skills
          </h4>

          <div className="flex flex-wrap gap-3">
            {developer.skills.map((skill) => (
              <span
                key={skill}
                className="rounded-xl border border-blue-400/15 bg-blue-400/10 px-4 py-2.5 text-sm font-semibold text-blue-200 transition hover:border-cyan-400/50 hover:bg-cyan-400/10 hover:text-cyan-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Contributions */}
        <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">

          <h4 className="mb-5 flex items-center gap-3 text-lg font-extrabold text-white">
            <Heart className="text-rose-400" />
            Contributions
          </h4>

          <div className="grid gap-4 sm:grid-cols-2">

            {developer.contributions.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 text-sm leading-6 text-slate-300"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400">
                  <CheckCircle size={17} />
                </span>

                {item}
              </div>
            ))}

          </div>
        </div>

      </div>
    </div>
  );
}

/* Main About Page */
export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#080F1E] text-white">

      {/* Hero Section */}
      <section className="relative isolate overflow-hidden">

        <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-blue-600/20 blur-[130px]" />
        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-violet-600/20 blur-[130px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-2 lg:py-28">

          {/* Hero Text */}
          <div className="text-center lg:text-left">

            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-300">
              <Sparkles size={16} />
              ABOUT OUR APPLICATION
            </div>

            <h1 className="text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Welcome to
              <span className="mt-2 block bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                {APP.name}
              </span>
            </h1>

            <p className="mx-auto mt-7 max-w-xl text-base leading-8 text-slate-300 sm:text-lg lg:mx-0">
              {APP.description}
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-4 lg:justify-start">

              <a
                href="/about"
                className="group inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 px-6 py-4 font-bold text-white shadow-lg shadow-blue-500/20 transition duration-300 hover:-translate-y-1 hover:shadow-cyan-500/30"
              >
                <BookOpen size={19} />
                Explore Application
                <ArrowUpRight size={18} className="transition group-hover:-translate-y-1 group-hover:translate-x-1" />
              </a>

              <a
                href="#developer"
                className="inline-flex items-center gap-3 rounded-xl border border-white/15 bg-white/5 px-6 py-4 font-semibold text-white transition hover:border-cyan-400/40 hover:bg-white/10"
              >
                <Users size={19} />
                Meet Developers
              </a>

            </div>

            {/* Small Highlights */}
            <div className="mt-12 flex flex-wrap justify-center gap-6 lg:justify-start">

              <div className="flex items-center gap-2 text-sm text-slate-400">
                <ShieldCheck className="text-emerald-400" size={19} />
                Student Focused
              </div>

              <div className="flex items-center gap-2 text-sm text-slate-400">
                <Zap className="text-amber-400" size={19} />
                Easy Learning
              </div>

              <div className="flex items-center gap-2 text-sm text-slate-400">
                <MonitorSmartphone className="text-cyan-400" size={19} />
                Responsive
              </div>

            </div>
          </div>

          {/* App Showcase */}
          <div className="flex justify-center">

            <div className="group relative w-full max-w-md">

              <div className="absolute -inset-5 rounded-[3rem] bg-gradient-to-r from-blue-500/20 via-violet-500/20 to-cyan-500/20 opacity-70 blur-2xl transition duration-500 group-hover:opacity-100" />

              <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-gradient-to-br from-[#1B3153] to-[#101B30] p-8 text-center shadow-2xl sm:p-10">

                <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-blue-400/10 blur-2xl" />

                <div className="relative mx-auto mb-8 flex h-44 w-44 items-center justify-center rounded-[2rem] border border-white/20 bg-white p-3 shadow-2xl transition duration-500 group-hover:scale-105 sm:h-52 sm:w-52">

                  <img
                    src="/appicon.jpg"
                    alt="Neb Study App Icon"
                    className="h-full w-full rounded-2xl object-cover"
                  />

                </div>

                <h2 className="relative text-2xl font-black tracking-wide text-white sm:text-3xl">
                  NEB STUDY NOTES
                </h2>

                <p className="relative mt-4 text-sm leading-7 text-slate-400">
                  Your learning journey, organized in one place.
                </p>

                <div className="relative mt-8 flex flex-wrap justify-center gap-3">

                  <span className="rounded-full border border-blue-400/20 bg-blue-400/10 px-4 py-2 text-xs font-bold text-blue-200">
                    LEARNING
                  </span>

                  <span className="rounded-full border border-violet-400/20 bg-violet-400/10 px-4 py-2 text-xs font-bold text-violet-200">
                    RESOURCES
                  </span>

                  <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-bold text-cyan-200">
                    ACCESSIBLE
                  </span>

                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative bg-[#0C1729] px-5 py-20 sm:px-8 sm:py-24">

        <div className="mx-auto max-w-7xl">

          <SectionHeading
            eyebrow="WHAT WE OFFER"
            title="Designed to Make Learning Easier"
            description="Neb Study aims to make study resources easier to access and manage through a simple, organized, and responsive experience."
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <article
                  key={feature.title}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#172943] to-[#101D30] p-7 shadow-xl transition duration-500 hover:-translate-y-2 hover:border-cyan-400/30 hover:shadow-blue-950/50"
                >

                  <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-blue-500/5 blur-2xl transition group-hover:bg-cyan-500/10" />

                  <div className="relative mb-7 flex items-center justify-between">

                    <div className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${feature.color} text-white shadow-lg`}>
                      <Icon size={30} strokeWidth={1.8} />
                    </div>

                    <span className="text-4xl font-black text-white/10">
                      {feature.number}
                    </span>

                  </div>

                  <h3 className="relative text-xl font-extrabold text-white transition group-hover:text-cyan-300">
                    {feature.title}
                  </h3>

                  <p className="relative mt-4 text-sm leading-7 text-slate-400">
                    {feature.text}
                  </p>

                  <div className="mt-7 h-1 w-12 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 transition-all duration-500 group-hover:w-24" />

                </article>
              );
            })}

          </div>

          {/* Additional Highlights */}
          <div className="mt-8 grid gap-6 md:grid-cols-2">

            <div className="flex items-start gap-5 rounded-2xl border border-white/10 bg-[#14243A] p-7 transition hover:border-amber-400/30">

              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-amber-400/10 text-amber-400">
                <GraduationCap size={28} />
              </div>

              <div>
                <h3 className="font-bold text-white">
                  Student-Focused
                </h3>

                <p className="mt-2 text-sm leading-7 text-slate-400">
                  Built around the goal of helping students keep their learning resources organized and easy to find.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-5 rounded-2xl border border-white/10 bg-[#14243A] p-7 transition hover:border-rose-400/30">

              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-rose-400/10 text-rose-400">
                <Heart size={27} />
              </div>

              <div>
                <h3 className="font-bold text-white">
                  Built with Care
                </h3>

                <p className="mt-2 text-sm leading-7 text-slate-400">
                  Focused on usability, clear presentation, and ongoing improvements to the learning experience.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Share Section */}
      <section className="px-5 py-20 sm:px-8 sm:py-24">

        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border border-blue-400/20 bg-gradient-to-br from-[#142E54] via-[#173A69] to-[#182C52] p-7 shadow-2xl sm:p-12">

          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-violet-400/10 blur-3xl" />

          <div className="relative grid items-center gap-10 md:grid-cols-[1fr_auto]">

            <div>

              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-cyan-300">
                <Share2 size={28} />
              </div>

              <p className="mb-3 text-xs font-bold tracking-[0.2em] text-cyan-300">
                SPREAD THE KNOWLEDGE
              </p>

              <h2 className="text-3xl font-black text-white sm:text-4xl">
                Share Learning
                <span className="block text-cyan-300">
                  with Friends
                </span>
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-blue-100/70 sm:text-base">
                Help other students discover {APP.name} by sharing the application with friends and classmates.
              </p>

            </div>

            <div className="grid grid-cols-2 gap-3">
              {socialPlatforms.map((platform) => (
                <SocialButton key={platform.name} platform={platform} />
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Multiple Developers Section */}
      <section
        id="developer"
        className="bg-[#0C1729] px-5 py-20 sm:px-8 sm:py-24"
      >

        <div className="mx-auto max-w-7xl">

          <SectionHeading
            eyebrow="BEHIND THE APPLICATION"
            title="Meet Our Developers"
            description="Meet the people behind Neb Study and explore their skills, contributions, and roles in building the application."
          />

          <div className="mx-auto grid max-w-4xl gap-8">

            {DEVELOPERS.map((developer) => (
              <DeveloperCard
                key={developer.id}
                developer={developer}
              />
            ))}

          </div>

        </div>
      </section>

    </main>
  );
}
