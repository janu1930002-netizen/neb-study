
import Link from "next/link";

import {
  BsFacebook,
  BsWhatsapp,
  BsEnvelopeFill,
} from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-gradient-to-r from-[#071A40] via-[#123B83] to-[#071A40] text-white">

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-16 lg:px-10">

        {/* Brand Section */}
        <div className="lg:col-span-2">

          <Link href="/" className="inline-flex items-center gap-3">
            <div className="h-24 w-24 overflow-hidden rounded-2xl sm:h-28 sm:w-28">
              <img
                src="/company-logo.jpg"
                alt="EBRA Website Logo"
                className="h-full w-full object-cover"
              />
            </div>

            <span className="text-4xl font-extrabold tracking-wider text-white">
              EBRA
            </span>
          </Link>

          <p className="mt-5 max-w-md text-sm leading-7 text-blue-100/80 sm:text-base">
            Your trusted destination for learning, knowledge, and useful
            resources. Explore, learn, and grow with us.
          </p>

          {/* Social Media */}
          <div className="mt-7">
            <h3 className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-blue-200">
              Connect With Us
            </h3>

            <div className="flex items-center gap-4">

              {/* Facebook */}
              <a
                href="https://www.facebook.com/profile.php?id=100078739600785"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1877F2] text-2xl text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:-translate-y-2 hover:bg-blue-500 hover:shadow-blue-500/40"
              >
                <BsFacebook />
              </a>

              {/* Email */}
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=janu1930002@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Email"
                className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EA4335] text-2xl text-white shadow-lg shadow-red-500/20 transition-all duration-300 hover:-translate-y-2 hover:bg-red-500 hover:shadow-red-500/40"
              >
                <BsEnvelopeFill />
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/9779815734883"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#25D366] text-2xl text-white shadow-lg shadow-green-500/20 transition-all duration-300 hover:-translate-y-2 hover:bg-green-500 hover:shadow-green-500/40"
              >
                <BsWhatsapp />
              </a>

            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-6 text-lg font-bold tracking-wide text-white">
            Quick Links
          </h3>

          <div className="flex flex-col gap-4">

            <Link
              href="/"
              className="w-fit text-sm font-medium text-blue-100/80 transition-all duration-300 hover:translate-x-1 hover:text-cyan-300"
            >
              Home
            </Link>

            <Link
              href="/share"
              className="w-fit text-sm font-medium text-blue-100/80 transition-all duration-300 hover:translate-x-1 hover:text-cyan-300"
            >
              Share
            </Link>

            <Link
              href="/about"
              className="w-fit text-sm font-medium text-blue-100/80 transition-all duration-300 hover:translate-x-1 hover:text-cyan-300"
            >
              Resource
            </Link>

          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/15">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-center sm:flex-row sm:text-left lg:px-10">

          <p className="text-sm text-blue-100/70">
            © 2026{" "}
            <Link
              href="/"
              className="font-bold text-white hover:text-cyan-300"
            >
              EBRA
            </Link>
            . All rights reserved.
          </p>

          <p className="text-sm font-medium tracking-wide text-blue-200/70">
            Designed with care. Built for everyone.
          </p>

        </div>
      </div>

    </footer>
  );
}
