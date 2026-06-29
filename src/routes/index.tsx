import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, Instagram, Layout, MessageSquare, Sparkles, Compass, Leaf } from "lucide-react";
import heroDesk from "@/assets/hero-desk.jpg";
import sandraPortrait from "@/assets/sandra-portrait.jpg";

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

const PRICE_BRL = "R$ 697";
const WHATSAPP_URL =
  "https://wa.me/5500000000000?text=Ol%C3%A1%20Sandra%2C%20quero%20agendar%20uma%20Avalia%C3%A7%C3%A3o%20Estrat%C3%A9gica%20de%20Presen%C3%A7a%20Digital.";

function LandingPage() {
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

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#topo" className="flex items-center gap-2">
          <Leaf className="h-5 w-5 text-primary" />
          <span className="font-serif text-xl tracking-tight">Sandra Campos</span>
        </a>
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <a href="#metodo" className="hover:text-foreground">Método</a>
          <a href="#entrega" className="hover:text-foreground">O que você recebe</a>
          <a href="#relatorio" className="hover:text-foreground">Relatório</a>
          <a href="#investimento" className="hover:text-foreground">Investimento</a>
        </nav>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          className="hidden rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition hover:bg-primary/90 md:inline-flex"
        >
          Agendar avaliação
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="topo" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3 py-1 text-xs uppercase tracking-[0.18em] text-secondary-foreground">
            <Sparkles className="h-3.5 w-3.5" />
            Avaliação Estratégica de Presença Digital
          </span>
          <h1 className="mt-6 font-serif text-5xl leading-[1.05] tracking-tight md:text-6xl">
            Sua presença digital pode contar a mesma história que você já entrega no atendimento.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Para terapeutas e profissionais liberais que fazem um trabalho excelente, mas
            sentem que o online ainda não comunica esse valor — e que não querem virar influencer
            para resolver isso.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition hover:bg-primary/90"
            >
              Solicitar minha Avaliação Estratégica <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#relatorio"
              className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-3 text-sm font-medium text-foreground transition hover:bg-secondary"
            >
              Ver exemplo do relatório
            </a>
          </div>
          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
            {[
              "Relatório Estratégico Personalizado",
              "Plano de Ação Priorizado",
              "Reunião Estratégica Individual",
            ].map((b) => (
              <li key={b} className="inline-flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-muted-foreground">
            Sem fórmulas prontas. Sem pressão para postar todos os dias.
          </p>
        </div>
        <div className="relative">
          <div className="absolute -inset-6 -z-10 rounded-3xl bg-accent/40 blur-2xl" />
          <img
            src={heroDesk}
            alt="Mesa de trabalho organizada com caderno aberto, planta e xícara de chá"
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
  const items = [
    "Você é boa no que faz — seus pacientes voltam e indicam.",
    "Mas seu Instagram, seu site e seus pontos de contato online não traduzem isso.",
    "Você sente que precisaria 'aparecer mais', mas isso não combina com você.",
    "Quer atrair clientes preparados para contratar, não curiosos de passagem.",
  ];
  return (
    <section className="border-y border-border/60 bg-secondary/60">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-10 md:grid-cols-[1fr_1.2fr] md:items-start">
          <div>
            <h2 className="font-serif text-4xl leading-tight tracking-tight md:text-5xl">
              Se você se reconhece aqui, essa avaliação foi pensada para você.
            </h2>
            <p className="mt-5 text-muted-foreground">
              A maioria das profissionais que me procura entrega muito mais valor do que a
              presença digital delas mostra. O problema raramente é falta de talento — é falta
              de estratégia.
            </p>
          </div>
          <ul className="space-y-4">
            {items.map((t) => (
              <li
                key={t}
                className="flex items-start gap-3 rounded-xl border border-border bg-card p-5 text-card-foreground"
              >
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span className="leading-relaxed">{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Method() {
  const pillars = [
    {
      icon: Compass,
      title: "Diagnóstico Estratégico",
      body:
        "Analiso cada ponto de contato seu com o cliente — Instagram, identidade visual, comunicação, posicionamento, site, landing pages e percepção de valor.",
    },
    {
      icon: Layout,
      title: "Posicionamento",
      body:
        "Identifico o que reduz sua autoridade e o que poderia comunicar com mais clareza o valor real do seu trabalho.",
    },
    {
      icon: MessageSquare,
      title: "Plano de Ação Priorizado",
      body:
        "Você recebe um plano personalizado, em ordem de impacto — não uma lista de tarefas, mas o que vale a pena ajustar primeiro.",
    },
    {
      icon: Sparkles,
      title: "Implementação com IA",
      body:
        "Mostro como usar Inteligência Artificial para acelerar as melhorias sem perder a sua autenticidade.",
    },
  ];
  return (
    <section id="metodo" className="mx-auto max-w-6xl px-6 py-24">
      <div className="max-w-2xl">
        <span className="text-xs uppercase tracking-[0.2em] text-primary">Método Leve Digital™</span>
        <h2 className="mt-3 font-serif text-4xl leading-tight tracking-tight md:text-5xl">
          Quatro pilares que sustentam o diagnóstico.
        </h2>
        <p className="mt-5 text-muted-foreground">
          Um caminho construído para profissionais que valorizam credibilidade acima de
          visibilidade.
        </p>
      </div>
      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {pillars.map(({ icon: Icon, title, body }) => (
          <article
            key={title}
            className="group rounded-2xl border border-border bg-card p-7 transition hover:border-primary/40 hover:shadow-sm"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent text-accent-foreground">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="mt-5 font-serif text-2xl">{title}</h3>
            <p className="mt-2 leading-relaxed text-muted-foreground">{body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function WhatYouGet() {
  const items = [
    "Análise completa do seu Instagram (bio, feed, destaques, capas, linha editorial e percepção geral).",
    "Avaliação da sua identidade visual e da coerência entre todos os seus pontos de contato.",
    "Diagnóstico da sua comunicação e do seu posicionamento atual.",
    "Análise do site e/ou landing pages (clareza, autoridade, conversão).",
    "Mapa da experiência do cliente — do primeiro contato à decisão de contratar.",
    "Plano de ação personalizado, priorizado por impacto e esforço.",
    "Recomendações de como aplicar IA para implementar mais rápido, sem perder sua voz.",
  ];
  return (
    <section id="entrega" className="border-y border-border/60 bg-linen/60">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-2">
        <div>
          <h2 className="font-serif text-4xl leading-tight tracking-tight md:text-5xl">
            O que você recebe ao final.
          </h2>
          <p className="mt-5 text-muted-foreground">
            Um documento de aproximadamente 25 a 35 páginas, claro e prático. Pensado para ser
            lido com calma e aplicado no seu ritmo — sozinha ou com sua equipe.
          </p>
          <div className="mt-8 rounded-xl border border-border bg-card p-6 text-sm leading-relaxed text-muted-foreground">
            <p className="text-foreground font-medium">Como funciona</p>
            <ol className="mt-3 space-y-2">
              <li><span className="text-primary">1.</span> Você responde um formulário curto e me envia seus links.</li>
              <li><span className="text-primary">2.</span> Faço a análise em até 7 dias úteis.</li>
              <li><span className="text-primary">3.</span> Recebe o relatório por e-mail e tem uma call de 60 min comigo para destrinchar tudo.</li>
            </ol>
          </div>
        </div>
        <ul className="space-y-3">
          {items.map((t) => (
            <li key={t} className="flex items-start gap-3 rounded-xl bg-card border border-border p-4">
              <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <span className="leading-relaxed text-foreground">{t}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function SampleReport() {
  return (
    <section id="relatorio" className="mx-auto max-w-6xl px-6 py-24">
      <div className="grid items-center gap-12 md:grid-cols-[1.1fr_1fr]">
        <div className="order-2 md:order-1">
          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-[0_30px_80px_-50px_rgba(40,50,40,0.4)]">
            <div className="border-b border-border bg-secondary/80 px-6 py-3 text-xs uppercase tracking-[0.18em] text-muted-foreground">
              Pré-visualização · relatório modelo
            </div>
            <div className="space-y-4 p-8">
              <p className="text-xs uppercase tracking-[0.2em] text-primary">Avaliação Estratégica</p>
              <h3 className="font-serif text-3xl leading-tight">
                Diagnóstico de Presença Digital — Cliente Exemplo
              </h3>
              <div className="h-px bg-border" />
              <div className="grid gap-4 text-sm">
                <Row label="Posicionamento atual" value="Comunica serviço, não comunica autoridade" />
                <Row label="Clareza da promessa" value="Parcial — bio genérica" />
                <Row label="Coerência visual" value="3 estilos diferentes no feed" />
                <Row label="Prioridade #1" value="Reescrever bio + 3 destaques principais" />
              </div>
              <a
                href="/relatorio-exemplo"
                className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
              >
                Ver relatório completo <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <h2 className="font-serif text-4xl leading-tight tracking-tight md:text-5xl">
            Veja exatamente como o relatório chega até você.
          </h2>
          <p className="mt-5 text-muted-foreground">
            Sem jargão, sem 80 slides de teoria. Um documento claro, organizado por prioridade,
            que mostra o que está funcionando, o que não está, e o caminho mais curto entre os
            dois.
          </p>
          <Link
            to="/relatorio-exemplo"
            className="mt-6 inline-flex items-center gap-2 rounded-md border border-border bg-card px-5 py-3 text-sm font-medium transition hover:bg-secondary"
          >
            Abrir relatório modelo <ArrowRight className="h-4 w-4" />
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

function About() {
  return (
    <section className="border-y border-border/60 bg-secondary/60">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-24 md:grid-cols-[1fr_1.3fr]">
        <img
          src={sandraPortrait}
          alt="Retrato de Sandra Campos"
          width={1024}
          height={1280}
          loading="lazy"
          className="mx-auto w-full max-w-sm rounded-2xl border border-border object-cover"
        />
        <div>
          <span className="text-xs uppercase tracking-[0.2em] text-primary">Quem assina o diagnóstico</span>
          <h2 className="mt-3 font-serif text-4xl leading-tight tracking-tight md:text-5xl">
            Sandra Campos.
          </h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            Mais de 15 anos de experiência na área de saúde mental, no Brasil e nos Estados
            Unidos. Esse caminho me deu um olhar apurado sobre comportamento humano,
            construção de confiança e tomada de decisão.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Hoje aplico tudo isso para ajudar terapeutas e profissionais liberais a
            fortalecerem a presença digital de forma estratégica — transmitindo online a mesma
            credibilidade que já entregam nos atendimentos.
          </p>
          <p className="mt-6 font-serif text-2xl italic text-foreground">
            "Mais seguidores não significam mais clientes. Credibilidade gera muito mais
            resultado do que visibilidade sem estratégia."
          </p>
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const included = [
    "Análise estratégica de todos os pontos de contato digitais",
    "Relatório completo em PDF (25–35 páginas)",
    "Plano de ação priorizado e personalizado",
    "Call de 60 minutos para apresentação do diagnóstico",
    "Recomendações de uso de IA para implementação",
    "30 dias de suporte por e-mail para dúvidas pontuais",
  ];
  return (
    <section id="investimento" className="mx-auto max-w-6xl px-6 py-24">
      <div className="mx-auto max-w-3xl text-center">
        <span className="text-xs uppercase tracking-[0.2em] text-primary">Investimento</span>
        <h2 className="mt-3 font-serif text-4xl leading-tight tracking-tight md:text-5xl">
          Um diagnóstico que se paga no primeiro cliente que você atrai com mais clareza.
        </h2>
      </div>
      <div className="mx-auto mt-12 max-w-2xl overflow-hidden rounded-3xl border border-border bg-card shadow-[0_30px_80px_-50px_rgba(40,50,40,0.35)]">
        <div className="border-b border-border bg-secondary px-8 py-5 text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-secondary-foreground">
            Avaliação Estratégica de Presença Digital™
          </p>
        </div>
        <div className="px-8 py-10 text-center">
          <p className="font-serif text-6xl text-foreground">{PRICE_BRL}</p>
          <p className="mt-2 text-sm text-muted-foreground">pagamento único · em até 3x sem juros</p>
          <ul className="mx-auto mt-8 max-w-md space-y-3 text-left">
            {included.map((t) => (
              <li key={t} className="flex items-start gap-3 text-sm">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span className="leading-relaxed text-foreground">{t}</span>
              </li>
            ))}
          </ul>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:bg-primary/90"
          >
            Quero agendar minha avaliação <ArrowRight className="h-4 w-4" />
          </a>
          <p className="mt-4 text-xs text-muted-foreground">
            Vagas limitadas a 4 avaliações por mês para manter a profundidade da análise.
          </p>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    {
      q: "Preciso ter Instagram ativo?",
      a: "Sim, idealmente. A análise inclui sua presença no Instagram, mas também olha site, landing pages, identidade visual e experiência do cliente. Se você ainda não tem Instagram, conversamos antes para ver se faz sentido.",
    },
    {
      q: "Vou precisar postar mais depois?",
      a: "Não necessariamente. A maioria das recomendações é sobre clareza, posicionamento e percepção de valor — não sobre volume de conteúdo. Frequência só entra no plano se for realmente o que move o seu objetivo.",
    },
    {
      q: "Quanto tempo leva?",
      a: "Em média 7 dias úteis entre o recebimento do seu material e a entrega do relatório. A call de apresentação é agendada na semana seguinte.",
    },
    {
      q: "Você implementa as mudanças por mim?",
      a: "A Avaliação Estratégica é o diagnóstico e o plano. A implementação fica com você (ou sua equipe), com o passo a passo no relatório. Se quiser apoio na execução, conversamos sobre formato à parte.",
    },
  ];
  return (
    <section className="border-y border-border/60 bg-linen/60">
      <div className="mx-auto max-w-3xl px-6 py-24">
        <h2 className="font-serif text-4xl leading-tight tracking-tight md:text-5xl">
          Dúvidas que aparecem com frequência.
        </h2>
        <div className="mt-10 divide-y divide-border rounded-2xl border border-border bg-card">
          {faqs.map((f) => (
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
  return (
    <section className="mx-auto max-w-4xl px-6 py-24 text-center">
      <h2 className="font-serif text-4xl leading-tight tracking-tight md:text-5xl">
        Você já sabe cuidar das pessoas. Eu mostro como o mercado pode finalmente perceber esse valor.
      </h2>
      <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
        Sem mudar sua essência. Só fazendo sua presença digital contar a mesma história que
        você já entrega todos os dias no atendimento.
      </p>
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noreferrer"
        className="mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:bg-primary/90"
      >
        Agendar minha Avaliação Estratégica <ArrowRight className="h-4 w-4" />
      </a>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/70">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-10 text-sm text-muted-foreground md:flex-row md:items-center">
        <div className="flex items-center gap-2 text-foreground">
          <Leaf className="h-4 w-4 text-primary" />
          <span className="font-serif text-lg">Sandra Campos</span>
        </div>
        <p>Consultoria de Posicionamento e Presença Digital com IA.</p>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 hover:text-foreground"
        >
          <Instagram className="h-4 w-4" /> Instagram
        </a>
      </div>
      <div className="border-t border-border py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Sandra Campos · Método Leve Digital™
      </div>
    </footer>
  );
}
