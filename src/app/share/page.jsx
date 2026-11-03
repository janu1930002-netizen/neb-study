
"use client";

function ShareCard({
  title,
  description,
  image,
  buttonText,
  href,
  icon,
  accent,
}) {
  return (
    <div className="group relative w-full max-w-md overflow-hidden rounded-3xl border border-white/10 bg-slate-900 shadow-xl transition-all duration-500 hover:-translate-y-3 hover:border-blue-400/40 hover:shadow-2xl hover:shadow-blue-950/40">

      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

        <div className="absolute bottom-4 left-5">
          <span className="rounded-full border border-white/20 bg-slate-950/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white backdrop-blur-md">
            Connect with us
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-7">
        <div className="mb-5 flex items-center gap-4">
          <div
            className={`flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-lg ${accent}`}
          >
            {icon}
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white">
              {title}
            </h2>
            <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
              Neb Study Community
            </p>
          </div>
        </div>

        <p className="mb-7 min-h-12 text-sm leading-7 text-slate-300">
          {description}
        </p>

        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex w-full items-center justify-center gap-3 rounded-xl px-5 py-4 font-bold text-white transition-all duration-300 hover:brightness-110 active:scale-95 ${accent}`}
        >
          {buttonText}
          <span className="text-xl transition-transform group-hover:translate-x-1">
            →
          </span>
        </a>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#080F1E] px-5 py-16 sm:py-20">

      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-600/15 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-purple-600/15 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl">

        {/* Heading */}
        <div className="mb-16 text-center">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-300">
            <span className="h-2 w-2 rounded-full bg-cyan-400" />
            Stay Connected
          </span>

          <h1 className="mx-auto max-w-3xl text-3xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
            Share Question Notes
            <span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent">
              and Anything Special
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-slate-400 sm:text-lg">
            Have questions, suggestions, or study materials to share?
            Connect with us through your preferred platform.
          </p>
        </div>

        {/* Cards */}
        <div className="mx-auto grid max-w-4xl grid-cols-1 justify-items-center gap-8 md:grid-cols-2">

          {/* WhatsApp */}
          <ShareCard
            title="WhatsApp"
            description="Connect with us directly on WhatsApp. Share your questions, notes, suggestions, and useful study materials."
            image="https://imgs.search.brave.com/wJAWC0RysgWua0Jr3uRnkdQHJ15qESKSgDTKU4cECbA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/bG9nby53aW5lL2Ev/bG9nby9XaGF0c0Fw/cC9XaGF0c0FwcC1M/b2dvLndpbmUuc3Zn"
            buttonText="Open WhatsApp"
            href="https://wa.me/9779815734883"
            accent="bg-gradient-to-r from-emerald-500 to-green-600"
            icon={
              <svg viewBox="0 0 24 24" className="h-7 w-7 fill-current" aria-hidden="true">
                <path d="M20.52 3.48A11.78 11.78 0 0 0 12.12 0C5.55 0 .2 5.35.2 11.92c0 2.1.55 4.15 1.6 5.96L.1 24l6.27-1.64a11.9 11.9 0 0 0 5.75 1.47h.01c6.57 0 11.92-5.35 11.92-11.92 0-3.18-1.24-6.17-3.53-8.43ZM12.13 21.8a9.9 9.9 0 0 1-5.05-1.38l-.36-.21-3.72.97.99-3.63-.24-.37a9.86 9.86 0 0 1-1.52-5.26c0-5.46 4.45-9.91 9.92-9.91a9.85 9.85 0 0 1 7.02 2.91 9.85 9.85 0 0 1 2.9 7.02c0 5.46-4.45 9.91-9.92 9.91Z" />
              </svg>
            }
          />

          {/* Email */}
          <ShareCard
            title="Email"
            description="Contact the creator directly through Gmail. Send feedback, report problems, or share your valuable ideas."
            image="https://imgs.search.brave.com/i-cmQWOxGYqj6lUi88N171Kj3nIzER2t6HyMFaG9oCk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNDU4/NjE1NTkzL3Bob3Rv/L2dtYWlsLWNvbS13/ZWItbWFpbC1zaXRl/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1Mb201bkhLQlcy/QWFZei1zNHdSTUlS/M0x1WDYtd0lkSnJB/T051RG5aSlpFPQ"
            buttonText="Send Email"
            href="https://mail.google.com/mail/?view=cm&fs=1&to=janu1930002@gmail.com"
            accent="bg-gradient-to-r from-red-500 to-rose-600"
            icon={
              <svg viewBox="0 0 24 24" className="h-7 w-7 fill-current" aria-hidden="true">
                <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm-.4 4.25-6.43 4.82a2 2 0 0 1-2.34 0L4.4 8.25a1 1 0 1 1 1.2-1.6l6.23 4.67a.3.3 0 0 0 .36 0l6.23-4.67a1 1 0 1 1 1.2 1.6Z" />
              </svg>
            }
          />

        </div>

        {/* Bottom message */}
        <div className="mt-16 text-center">
          <div className="mx-auto mb-5 h-px max-w-xs bg-gradient-to-r from-transparent via-blue-400/40 to-transparent" />

          <p className="text-sm font-medium text-slate-400">
            Together, let's make learning easier and better.
          </p>

          <p className="mt-2 text-xs tracking-widest text-slate-600">
            NEB STUDY NOTES
          </p>
        </div>

      </div>
    </main>
  );
}
