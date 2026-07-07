import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, Instagram, Layout, MessageSquare, Sparkles, Compass, Leaf } from "lucide-react";
import heroDesk from "@/assets/hero-desk.jpg";
import sandraPortrait from "@/assets/sandra-portrait.jpg";
import { LanguageProvider, useLanguage, type Lang } from "@/lib/language";
import { translations } from "@/lib/translations";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sandra Campos — Avaliação Estratégica de Presença Digital" },
      {
        name: "description",
        content:
          "Diagnóstico completo da sua presença digital com plano de ação personalizado. Para terapeutas e profissionais liberais que querem transmitir online a mesma confiança que entregam no consultório.",
      },
      { property: "og:title", content: "Avaliação Estratégica de Presença Digital — Sandra Campos" },
      {
        property: "og:description",
        content:
          "Sua presença digital contando a mesma história que você já entrega todos os dias no atendimento. Sem virar influencer.",
      },
    ],
  }),
  component: LandingPage,
});

function whatsappUrl(lang: Lang) {
  const message = encodeURIComponent(translations[lang].whatsappMessage);
  return `https://wa.me/18572498342?text=${message}`;
}

function ContactDialog({ lang, trigger }: { lang: Lang; trigger: React.ReactNode }) {
  const t = translations[lang].contactForm;
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [reason, setReason] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Solicitação de Avaliação Estratégica - ${name}`);
    const body = encodeURIComponent(`Nome: ${name}\n\nMotivo do contato:\n${reason}`);
    window.location.href = `mailto:metodoleve.digital@gmail.com?subject=${subject}&body=${body}`;
    setOpen(false);
    setName("");
    setReason("");
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{t.title}</DialogTitle>
          <DialogDescription>{t.description}</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="contact-name">{t.nameLabel}</Label>
            <Input
              id="contact-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={t.namePlaceholder}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="contact-reason">{t.reasonLabel}</Label>
            <Textarea
              id="contact-reason"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              placeholder={t.reasonPlaceholder}
              rows={3}
              required
            />
          </div>
          <Button type="submit" className="w-full">
            {t.submit}
          </Button>
        </form>
        <a
          href={whatsappUrl(lang)}
          target="_blank"
          rel="noreferrer"
          className="block text-center text-xs text-muted-foreground hover:text-foreground hover:underline"
        >
          {t.whatsappAlt}
        </a>
      </DialogContent>
    </Dialog>
  );
}

function LandingPage() {
  return (
    <LanguageProvider>
      <PageContent />
    </LanguageProvider>
  );
}

function PageContent() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <ForWhom />
        <Method />
        <WhatYouGet />
        <SampleReport />
        <About />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

function LanguageToggle() {
  const { lang, setLang } = useLanguage();
  return (
    <div className="inline-flex items-center gap-1 rounded-full border border-border bg-secondary/60 p-1">
      <button
        type="button"
        onClick={() => setLang("pt")}
        aria-pressed={lang === "pt"}
        aria-label="Português"
        title="Português"
        className={`flex h-7 w-9 items-center justify-center rounded-full transition ${
          lang === "pt" ? "bg-card shadow-sm ring-1 ring-primary/40" : "opacity-50 hover:opacity-100"
        }`}
      >
        <svg viewBox="0 0 20 14" width="20" height="14" aria-hidden="true" className="rounded-[2px]">
          <rect width="20" height="14" fill="#009c3b" />
          <polygon points="10,1.5 18.5,7 10,12.5 1.5,7" fill="#ffdf00" />
          <circle cx="10" cy="7" r="2.6" fill="#002776" />
        </svg>
      </button>
      <button
        type="button"
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
        aria-label="English"
        title="English"
        className={`flex h-7 w-9 items-center justify-center rounded-full transition ${
          lang === "en" ? "bg-card shadow-sm ring-1 ring-primary/40" : "opacity-50 hover:opacity-100"
        }`}
      >
        <svg viewBox="0 0 20 14" width="20" height="14" aria-hidden="true" className="rounded-[2px]">
          <rect width="20" height="14" fill="#b22234" />
          {[1, 3, 5, 7, 9, 11].map((y) => (
            <rect key={y} y={y} width="20" height="1" fill="#fff" />
          ))}
          <rect width="9" height="7" fill="#3c3b6e" />
        </svg>
      </button>
    </div>
  );
}


function Header() {
  const { lang } = useLanguage();
  const t = translations[lang].header;
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#topo" className="flex items-center gap-2">
          <Leaf className="h-5 w-5 text-primary" />
          <span className="font-serif text-xl tracking-tight">Sandra Campos</span>
        </a>
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <a href="#metodo" className="hover:text-foreground">{t.nav[0]}</a>
          <a href="#entrega" className="hover:text-foreground">{t.nav[1]}</a>
          <a href="#relatorio" className="hover:text-foreground">{t.nav[2]}</a>
          <a href="#investimento" className="hover:text-foreground">{t.nav[3]}</a>
        </nav>
        <div className="flex items-center gap-3">
          <LanguageToggle />
          <ContactDialog
            lang={lang}
            trigger={
              <button
                type="button"
                className="hidden rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition hover:bg-primary/90 md:inline-flex"
              >
                {t.cta}
              </button>
            }
          />
        </div>
      </div>
    </header>
  );
}

function Hero() {
  const { lang } = useLanguage();
  const t = translations[lang].hero;
  return (
    <section id="topo" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3 py-1 text-xs uppercase tracking-[0.18em] text-secondary-foreground">
            <Sparkles className="h-3.5 w-3.5" />
            {t.badge}
          </span>
          <h1 className="mt-6 font-serif text-5xl leading-[1.05] tracking-tight md:text-6xl">
            {t.title}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            {t.subtitle}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <ContactDialog
              lang={lang}
              trigger={
                <button
                  type="button"
                  className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition hover:bg-primary/90"
                >
                  {t.ctaPrimary} <ArrowRight className="h-4 w-4" />
                </button>
              }
            />
            <a
              href="#relatorio"
              className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-3 text-sm font-medium text-foreground transition hover:bg-secondary"
            >
              {t.ctaSecondary}
            </a>
          </div>
          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
            {t.bullets.map((b) => (
              <li key={b} className="inline-flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-muted-foreground">
            {t.note}
          </p>
        </div>
        <div className="relative">
          <div className="absolute -inset-6 -z-10 rounded-3xl bg-accent/40 blur-2xl" />
          <img
            src={heroDesk}
            alt={t.imageAlt}
            width={1536}
            height={1280}
            className="rounded-2xl border border-border/60 object-cover shadow-[0_30px_80px_-40px_rgba(40,50,40,0.35)]"
          />
        </div>
      </div>
    </section>
  );
}

function ForWhom() {
  const { lang } = useLanguage();
  const t = translations[lang].forWhom;
  return (
    <section className="border-y border-border/60 bg-secondary/60">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-10 md:grid-cols-[1fr_1.2fr] md:items-start">
          <div>
            <h2 className="font-serif text-4xl leading-tight tracking-tight md:text-5xl">
              {t.title}
            </h2>
            <p className="mt-5 text-muted-foreground">
              {t.subtitle}
            </p>
          </div>
          <ul className="space-y-4">
            {t.items.map((text) => (
              <li
                key={text}
                className="flex items-start gap-3 rounded-xl border border-border bg-card p-5 text-card-foreground"
              >
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span className="leading-relaxed">{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

const METHOD_ICONS = [Compass, Layout, MessageSquare, Sparkles];

function Method() {
  const { lang } = useLanguage();
  const t = translations[lang].method;
  return (
    <section id="metodo" className="mx-auto max-w-6xl px-6 py-24">
      <div className="max-w-2xl">
        <span className="text-xs uppercase tracking-[0.2em] text-primary">{t.kicker}</span>
        <h2 className="mt-3 font-serif text-4xl leading-tight tracking-tight md:text-5xl">
          {t.title}
        </h2>
        <p className="mt-5 text-muted-foreground">
          {t.subtitle}
        </p>
      </div>
      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {t.pillars.map(({ title, items }, i) => {
          const Icon = METHOD_ICONS[i];
          return (
            <article
              key={title}
              className="group rounded-2xl border border-border bg-card p-7 transition hover:border-primary/40 hover:shadow-sm"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-serif text-2xl">{title}</h3>
              <ul className="mt-3 space-y-2">
                {items.map((it) => (
                  <li key={it} className="flex items-start gap-2 leading-relaxed text-muted-foreground">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-primary" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function WhatYouGet() {
  const { lang } = useLanguage();
  const t = translations[lang].whatYouGet;
  return (
    <section id="entrega" className="border-y border-border/60 bg-linen/60">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-2">
        <div>
          <h2 className="font-serif text-4xl leading-tight tracking-tight md:text-5xl">
            {t.title}
          </h2>
          <p className="mt-5 text-muted-foreground">
            {t.p1}
          </p>
          <p className="mt-4 text-muted-foreground">
            {t.p2}
          </p>
          <div className="mt-8 rounded-xl border border-border bg-card p-6 text-sm leading-relaxed text-muted-foreground">
            <p className="text-foreground font-medium">{t.howItWorksTitle}</p>
            <ol className="mt-3 space-y-2">
              {t.steps.map((step, i) => (
                <li key={step}><span className="text-primary">{i + 1}.</span> {step}</li>
              ))}
            </ol>
          </div>
        </div>
        <ul className="space-y-3">
          {t.items.map((text) => (
            <li key={text} className="flex items-start gap-3 rounded-xl bg-card border border-border p-4">
              <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <span className="leading-relaxed text-foreground">{text}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function SampleReport() {
  const { lang } = useLanguage();
  const t = translations[lang].sampleReport;
  return (
    <section id="relatorio" className="mx-auto max-w-6xl px-6 py-24">
      <div className="grid items-center gap-12 md:grid-cols-[1.1fr_1fr]">
        <div className="order-2 md:order-1">
          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-[0_30px_80px_-50px_rgba(40,50,40,0.4)]">
            <div className="border-b border-border bg-secondary/80 px-6 py-3 text-xs uppercase tracking-[0.18em] text-muted-foreground">
              {t.previewLabel}
            </div>
            <div className="space-y-5 p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-primary">{t.kicker}</p>
                  <h3 className="mt-1 font-serif text-2xl leading-tight">
                    {t.reportTitle}
                  </h3>
                  <p className="mt-1 text-xs text-muted-foreground">{t.clientLine}</p>
                </div>
                <div className="rounded-xl border border-border bg-secondary/60 px-4 py-3 text-center">
                  <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">{t.scoreLabel}</p>
                  <p className="font-serif text-3xl leading-none text-foreground">7,2</p>
                  <p className="text-[10px] text-muted-foreground">/ 10</p>
                </div>
              </div>
              <div className="h-px bg-border" />
              <div>
                <p className="mb-3 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                  {t.radarLabel}
                </p>
                <AuthorityRadar axes={t.radarAxes} />
              </div>
              <div className="h-px bg-border" />
              <div className="grid gap-3 text-sm">
                {t.rows.map((row) => (
                  <Row key={row.label} label={row.label} value={row.value} />
                ))}
              </div>
              <a
                href="/relatorio-exemplo"
                className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
              >
                {t.viewFullReport} <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <h2 className="font-serif text-4xl leading-tight tracking-tight md:text-5xl">
            {t.title}
          </h2>
          <p className="mt-5 text-muted-foreground">
            {t.subtitle}
          </p>
          <Link
            to="/relatorio-exemplo"
            className="mt-6 inline-flex items-center gap-2 rounded-md border border-border bg-card px-5 py-3 text-sm font-medium transition hover:bg-secondary"
          >
            {t.openSampleReport} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between gap-4 border-b border-dashed border-border pb-2">
      <span className="text-muted-foreground">{label}</span>
      <span className="text-right font-medium text-foreground">{value}</span>
    </div>
  );
}

function AuthorityRadar({ axes: axisLabels }: { axes: readonly string[] }) {
  const values = [0.72, 0.58, 0.81, 0.66, 0.49];
  const axes = axisLabels.map((label, i) => ({ label, value: values[i] }));
  const size = 220;
  const cx = size / 2;
  const cy = size / 2;
  const radius = 78;
  const n = axes.length;
  const point = (i: number, r: number) => {
    const angle = (Math.PI * 2 * i) / n - Math.PI / 2;
    return [cx + Math.cos(angle) * r, cy + Math.sin(angle) * r] as const;
  };
  const ringPath = (r: number) =>
    axes
      .map((_, i) => {
        const [x, y] = point(i, r);
        return `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`;
      })
      .join(" ") + " Z";
  const dataPath =
    axes
      .map((a, i) => {
        const [x, y] = point(i, radius * a.value);
        return `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`;
      })
      .join(" ") + " Z";
  return (
    <div className="flex items-center justify-center">
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="text-primary">
        {[0.25, 0.5, 0.75, 1].map((s) => (
          <path
            key={s}
            d={ringPath(radius * s)}
            fill="none"
            stroke="currentColor"
            strokeOpacity={0.12}
          />
        ))}
        {axes.map((_, i) => {
          const [x, y] = point(i, radius);
          return (
            <line
              key={i}
              x1={cx}
              y1={cy}
              x2={x}
              y2={y}
              stroke="currentColor"
              strokeOpacity={0.12}
            />
          );
        })}
        <path d={dataPath} fill="currentColor" fillOpacity={0.18} stroke="currentColor" strokeWidth={1.5} />
        {axes.map((a, i) => {
          const [x, y] = point(i, radius + 16);
          return (
            <text
              key={a.label}
              x={x}
              y={y}
              textAnchor="middle"
              dominantBaseline="middle"
              className="fill-muted-foreground"
              style={{ fontSize: 10 }}
            >
              {a.label}
            </text>
          );
        })}
      </svg>
    </div>
  );
}

function About() {
  const { lang } = useLanguage();
  const t = translations[lang].about;
  return (
    <section className="border-y border-border/60 bg-secondary/60">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-24 md:grid-cols-[1fr_1.3fr]">
        <img
          src={sandraPortrait}
          alt={t.imageAlt}
          width={1024}
          height={1280}
          loading="lazy"
          className="mx-auto w-full max-w-sm rounded-2xl border border-border object-cover"
        />
        <div>
          <span className="text-xs uppercase tracking-[0.2em] text-primary">{t.kicker}</span>
          <h2 className="mt-3 font-serif text-4xl leading-tight tracking-tight md:text-5xl">
            {t.name}
          </h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            {t.p1}
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            {t.p2}
          </p>
          <p className="mt-6 font-serif text-2xl italic text-foreground">
            {t.quote}
          </p>
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const { lang } = useLanguage();
  const t = translations[lang].pricing;
  return (
    <section id="investimento" className="mx-auto max-w-6xl px-6 py-24">
      <div className="mx-auto max-w-3xl text-center">
        <span className="text-xs uppercase tracking-[0.2em] text-primary">{t.kicker}</span>
        <h2 className="mt-3 font-serif text-4xl leading-tight tracking-tight md:text-5xl">
          {t.title}
        </h2>
      </div>
      <div className="mx-auto mt-12 max-w-2xl overflow-hidden rounded-3xl border border-border bg-card shadow-[0_30px_80px_-50px_rgba(40,50,40,0.35)]">
        <div className="border-b border-border bg-secondary px-8 py-5 text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-secondary-foreground">
            {t.badge}
          </p>
        </div>
        <div className="px-8 py-10 text-center">
          <p className="font-serif text-6xl text-foreground">{t.price}</p>
          <p className="mt-2 text-sm text-muted-foreground">{t.priceNote}</p>
          <ul className="mx-auto mt-8 max-w-md space-y-3 text-left">
            {t.included.map((text) => (
              <li key={text} className="flex items-start gap-3 text-sm">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span className="leading-relaxed text-foreground">{text}</span>
              </li>
            ))}
          </ul>
          <ContactDialog
            lang={lang}
            trigger={
              <button
                type="button"
                className="mt-10 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:bg-primary/90"
              >
                {t.cta} <ArrowRight className="h-4 w-4" />
              </button>
            }
          />
          <p className="mt-4 text-xs text-muted-foreground">
            {t.footnote}
          </p>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const { lang } = useLanguage();
  const t = translations[lang].faq;
  return (
    <section className="border-y border-border/60 bg-linen/60">
      <div className="mx-auto max-w-3xl px-6 py-24">
        <h2 className="font-serif text-4xl leading-tight tracking-tight md:text-5xl">
          {t.title}
        </h2>
        <div className="mt-10 divide-y divide-border rounded-2xl border border-border bg-card">
          {t.items.map((f) => (
            <details key={f.q} className="group p-6">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 font-medium text-foreground">
                <span>{f.q}</span>
                <span className="mt-1 text-primary transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 leading-relaxed text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  const { lang } = useLanguage();
  const t = translations[lang].finalCTA;
  return (
    <section className="mx-auto max-w-4xl px-6 py-24 text-center">
      <h2 className="font-serif text-4xl leading-tight tracking-tight md:text-5xl">
        {t.title}
      </h2>
      <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
        {t.subtitle}
      </p>
      <ContactDialog
        lang={lang}
        trigger={
          <button
            type="button"
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:bg-primary/90"
          >
            {t.cta} <ArrowRight className="h-4 w-4" />
          </button>
        }
      />
    </section>
  );
}

function Footer() {
  const { lang } = useLanguage();
  const t = translations[lang].footer;
  return (
    <footer className="border-t border-border bg-secondary/70">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-10 text-sm text-muted-foreground md:flex-row md:items-center">
        <div className="flex items-center gap-2 text-foreground">
          <Leaf className="h-4 w-4 text-primary" />
          <span className="font-serif text-lg">Sandra Campos</span>
        </div>
        <p>{t.tagline}</p>
        <a
          href="https://instagram.com/sandra.metodoleve"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 hover:text-foreground"
        >
          <Instagram className="h-4 w-4" /> {t.instagram}
        </a>
      </div>
      <div className="border-t border-border py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Sandra Campos · Método Leve Digital™
      </div>
    </footer>
  );
}
