import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [messageSent, setMessageSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    const formData = new FormData(form.current);

    const name = String(formData.get("user_name") || "").trim();
    const email = String(formData.get("user_email") || "").trim();
    const message = String(formData.get("message") || "").trim();

    if (!name || !email || !message) {
      setError("Please fill out all fields.");
      return;
    }

    emailjs
      .sendForm(
        "service_2e9zq4f",
        "template_mq85xh3",
        form.current,
        "VSey23muaE28V71S_"
      )
      .then(
        () => {
          setMessageSent(true);
          setError(null);
          form.current?.reset();
        },
        () => {
          setError("Something went wrong. Please try again later.");
        }
      );
  };

  return (
    <section id="contact" className="w-full bg-slate-50 py-28 font-manrope">
      <div className="mx-auto max-w-5xl px-6">
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-wide text-indigo-500">
            Contact
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Let’s work together
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Have a project in mind or want to explore an idea? Send me a message
            and I’ll get back to you shortly.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-5">
          {/* Form */}
          <div className="md:col-span-3">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
            >
              <div className="grid grid-cols-1 gap-6">
                <input
                  type="text"
                  name="user_name"
                  placeholder="Your name"
                  className="w-full rounded-md border border-slate-300 px-4 py-3 text-sm text-slate-900 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-200"
                />

                <input
                  type="email"
                  name="user_email"
                  placeholder="Your email"
                  className="w-full rounded-md border border-slate-300 px-4 py-3 text-sm text-slate-900 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-200"
                />

                <textarea
                  name="message"
                  rows={4}
                  placeholder="Tell me about your project"
                  className="w-full rounded-md border border-slate-300 px-4 py-3 text-sm text-slate-900 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-200"
                />

                <button
                  type="submit"
                  className="group inline-flex w-fit items-center gap-2 rounded-md bg-indigo-400 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:ring-offset-2"
                >
                  Send Message
                  <svg
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="M13 5l7 7-7 7" />
                  </svg>
                </button>

                {messageSent && (
                  <p className="text-sm font-medium text-green-600">
                    ✅ Message sent successfully.
                  </p>
                )}
                {error && (
                  <p className="text-sm font-medium text-red-600">
                    ❌ {error}
                  </p>
                )}
              </div>
            </form>
          </div>

          {/* Socials */}
          <div className="md:col-span-2 flex flex-col justify-center">
            <p className="text-sm font-medium uppercase tracking-wide text-slate-500">
              Or find me on
            </p>

            <ul className="mt-6 space-y-4">
              <li>
                <a
                  href="https://www.youtube.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-medium text-slate-700 transition-colors hover:text-indigo-600"
                >
                  YouTube
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-medium text-slate-700 transition-colors hover:text-indigo-600"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-medium text-slate-700 transition-colors hover:text-indigo-600"
                >
                  Telegram
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
