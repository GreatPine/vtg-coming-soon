"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { FormEvent, useEffect, useRef, useState } from "react";
import { contactTranslations, type LangCode } from "../../data/contactTranslations";

const languages: { code: LangCode; label: string }[] = [
  { code: "sr", label: "SR" }, { code: "en", label: "EN" }, { code: "de", label: "DE" },
  { code: "it", label: "IT" }, { code: "fr", label: "FR" }, { code: "es", label: "ES" },
  { code: "ru", label: "RU" }, { code: "hi", label: "HI" }, { code: "zh", label: "ZH" },
  { code: "ar", label: "AR" },
];

const categories = ["general", "suggestion", "business", "partnership", "feedback", "other"] as const;
type Category = (typeof categories)[number];
const categoryKeys: Record<Category, keyof typeof contactTranslations.en> = {
  general: "supportContactCategoryGeneral", suggestion: "supportContactCategorySuggestion",
  business: "supportContactCategoryBusiness", partnership: "supportContactCategoryPartnership",
  feedback: "supportContactCategoryFeedback", other: "supportContactCategoryOther",
};
const API_BASE_URL = process.env.NEXT_PUBLIC_VTG_API_URL?.trim() || "https://api.vtguide.app";

export default function ContactPage() {
  const [lang, setLang] = useState<LangCode>("sr");
  const [languageHydrated, setLanguageHydrated] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [category, setCategory] = useState<Category>("general");
  const [honeypot, setHoneypot] = useState("");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const submitLock = useRef(false);

  useEffect(() => {
    const savedLang = localStorage.getItem("vtg-language");
    const timeoutId = window.setTimeout(() => {
      if (savedLang && languages.some((item) => item.code === savedLang)) setLang(savedLang as LangCode);
      setLanguageHydrated(true);
    }, 0);
    return () => window.clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    if (!languageHydrated) return;
    localStorage.setItem("vtg-language", lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang, languageHydrated]);

  const t = contactTranslations[lang];
  const direction = lang === "ar" ? "rtl" : "ltr";

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (sending || submitLock.current) return;
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedSubject = subject.trim();
    const trimmedMessage = message.trim();
    if (!trimmedName || trimmedName.length > 100) return setError(t.supportContactNameRequired);
    if (!trimmedEmail || trimmedEmail.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) return setError(t.supportContactEmailRequired);
    if (!trimmedSubject || trimmedSubject.length > 150) return setError(t.supportContactSubjectRequired);
    if (!trimmedMessage || trimmedMessage.length > 5000) return setError(t.supportContactMessageRequired);

    setError(""); submitLock.current = true; setSending(true);
    try {
      const response = await fetch(`${API_BASE_URL}/website/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: trimmedName, email: trimmedEmail, subject: trimmedSubject, message: trimmedMessage, category, language: lang, honeypot }),
      });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(payload?.error || "website_contact_failed");
      setSent(true); setSubject(""); setMessage(""); setHoneypot("");
    } catch {
      setError(t.supportContactSendFailed);
    } finally {
      submitLock.current = false; setSending(false);
    }
  }

  return (
    <main dir={direction} className="min-h-screen overflow-hidden bg-[#07111f] text-white">
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute left-[-10%] top-[-10%] h-[420px] w-[420px] rounded-full bg-amber-400/20 blur-[120px]" />
        <div className="absolute right-[-10%] top-[20%] h-[460px] w-[460px] rounded-full bg-blue-500/20 blur-[140px]" />
      </div>
      <header className="sticky top-0 z-[999] border-b border-white/10 bg-[#07111f]/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/vtg-logo.png" alt="VTG logo" width={52} height={52} />
            <div><p className="text-lg font-black leading-none">VTG</p><p className="text-xs text-slate-400">{t.brandName}</p></div>
          </Link>
          <div className="relative">
            <button type="button" aria-label={t.languageLabel} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)} className="flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-bold text-white backdrop-blur transition hover:bg-white/15">
              {lang.toUpperCase()} <ChevronDown size={16} />
            </button>
            {menuOpen && <div className="absolute right-0 top-12 z-[1001] w-40 overflow-hidden rounded-2xl border border-white/10 bg-[#0f1c2f] shadow-2xl shadow-black/40">
              {languages.map((item) => <button key={item.code} type="button" onClick={() => { setLang(item.code); setMenuOpen(false); }} className={`flex w-full items-center justify-between px-4 py-3 text-left text-sm transition hover:bg-white/10 ${lang === item.code ? "text-amber-300" : "text-white"}`}>
                {item.label}{lang === item.code && <span className="h-2 w-2 rounded-full bg-amber-300" />}
              </button>)}
            </div>}
          </div>
        </div>
      </header>
      <section className="relative mx-auto max-w-3xl px-6 py-16">
        <Link href="/" className="text-sm font-bold text-amber-300 hover:text-amber-200">← {t.backHome}</Link>
        <div className="mt-8 rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 shadow-2xl shadow-black/20 sm:p-10">
          <h1 className="text-4xl font-black tracking-tight">{t.supportContactMessage}</h1>
          <p className="mt-4 leading-8 text-slate-300">{t.supportContactFormSubtitle}</p>
          {sent ? <div className="mt-8 rounded-2xl border border-emerald-300/30 bg-emerald-300/10 p-5 text-emerald-100">
            <p className="font-bold">{t.supportContactSent}</p>
            <button type="button" onClick={() => setSent(false)} className="mt-5 rounded-full border border-white/20 px-5 py-3 font-bold text-white hover:bg-white/10">{t.supportContactMessage}</button>
          </div> : <form onSubmit={submit} className="mt-8 space-y-5">
            <Field label={t.supportContactName} value={name} onChange={setName} maxLength={100} dir={direction} />
            <Field label={t.supportContactEmail} value={email} onChange={setEmail} maxLength={254} type="email" dir="ltr" />
            <Field label={t.supportContactSubject} value={subject} onChange={setSubject} maxLength={150} dir={direction} />
            <div><label className="mb-2 block text-sm font-bold text-slate-200">{t.supportContactCategory}</label><div className="flex flex-wrap gap-2">{categories.map((item) => <button key={item} type="button" onClick={() => setCategory(item)} className={`rounded-full border px-4 py-2 text-sm font-bold transition ${item === category ? "border-amber-300 bg-amber-300 text-slate-950" : "border-white/15 bg-white/[0.05] text-white hover:bg-white/10"}`}>{t[categoryKeys[item]]}</button>)}</div></div>
            <div><label className="mb-2 block text-sm font-bold text-slate-200">{t.supportContactMessageField}</label><textarea value={message} onChange={(event) => setMessage(event.target.value)} maxLength={5000} required dir={direction} className="min-h-36 w-full rounded-2xl border border-white/15 bg-[#0f1c2f] px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-amber-300" /></div>
            <input aria-hidden="true" tabIndex={-1} autoComplete="off" value={honeypot} onChange={(event) => setHoneypot(event.target.value)} className="absolute left-[-9999px] h-px w-px opacity-0" />
            {error && <p className="font-bold text-red-300" role="alert">{error}</p>}
            <p className="text-sm leading-6 text-slate-400">
              {t.contactPrivacy} {" "}
              <Link href="/privacy" className="font-bold text-amber-300 hover:text-amber-200">{t.privacyLabel}</Link>
            </p>
            <button type="submit" disabled={sending} className="w-full rounded-full bg-amber-300 px-6 py-4 font-black text-slate-950 transition hover:bg-amber-200 disabled:cursor-not-allowed disabled:opacity-60">{sending ? t.supportContactSending : t.supportContactSend}</button>
          </form>}
        </div>
      </section>
    </main>
  );
}

function Field({ label, value, onChange, maxLength, type = "text", dir }: { label: string; value: string; onChange: (value: string) => void; maxLength: number; type?: string; dir: "ltr" | "rtl" }) {
  return <div><label className="mb-2 block text-sm font-bold text-slate-200">{label}</label><input type={type} value={value} onChange={(event) => onChange(event.target.value)} maxLength={maxLength} required dir={dir} className="w-full rounded-2xl border border-white/15 bg-[#0f1c2f] px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-amber-300" /></div>;
}
