import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Check, AlertTriangle, Sparkles, Printer } from "lucide-react";

export const Route = createFileRoute("/relatorio-exemplo")({
  head: () => ({
    meta: [
      { title: "Relatório Modelo — Avaliação Estratégica de Presença Digital" },
      {
        name: "description",
        content:
          "Exemplo do relatório que você recebe após a Avaliação Estratégica de Presença Digital com Sandra Campos.",
      },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: SampleReport,
});

const CLIENT = "Dra. Cliente Exemplo";
const DATE = "Modelo · não vinculado a cliente real";

function SampleReport() {
  return (
    <div className="min-h-screen bg-linen/40 text-foreground">
      <TopBar />
      <article className="mx-auto my-10 max-w-3xl rounded-2xl border border-border bg-card p-8 shadow-[0_30px_80px_-50px_rgba(40,50,40,0.35)] md:p-14 print:my-0 print:rounded-none print:border-0 print:shadow-none">
        <Cover />
        <Divider />
        <Section number="01" title="Resumo Executivo">
          <p>
            Você entrega um trabalho consistente e tem indicação ativa de pacientes. Sua
            presença digital, hoje, comunica <strong>serviço</strong> — mas ainda não comunica
            <strong> autoridade</strong>. Esse é o gap principal que este diagnóstico endereça.
          </p>
          <p>
            Em três frentes (bio, identidade visual e clareza de oferta) há ganhos rápidos
            possíveis em 7 a 14 dias, sem aumentar volume de postagens.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <Stat label="Score geral" value="62/100" />
            <Stat label="Clareza da oferta" value="Parcial" />
            <Stat label="Coerência visual" value="Baixa" />
          </div>
        </Section>

        <Section number="02" title="O que está funcionando">
          <Bullets
            items={[
              "Tom de voz acolhedor e coerente com a prática clínica.",
              "Stories trazem bastidor real, gerando proximidade e confiança.",
              "Indicação boca a boca consistente — base sólida de prova social não usada online.",
              "Boas fotos de bastidor já existem no acervo, prontas para reuso.",
            ]}
          />
        </Section>

        <Section number="03" title="O que está reduzindo sua autoridade">
          <Findings />
        </Section>

        <Section number="04" title="Plano de Ação Priorizado">
          <p className="mb-6">
            Sequência recomendada. Cada ação tem impacto e esforço estimados. Comece por cima.
          </p>
          <PlanTable />
        </Section>

        <Section number="05" title="Posicionamento Recomendado">
          <Quote>
            "Ajudo [público] a [resultado tangível] — sem [objeção comum do público]."
          </Quote>
          <p>
            Aplicação sugerida para a sua bio do Instagram e cabeçalho do site, com 3
            variações testadas no relatório completo entregue ao cliente.
          </p>
          <div className="mt-6 rounded-xl border border-border bg-secondary/60 p-5 text-sm">
            <p className="font-medium text-foreground">Bio sugerida (versão A)</p>
            <p className="mt-2 text-muted-foreground">
              Psicóloga clínica · ajudo mulheres adultas a lidar com ansiedade sem culpa.
              <br />
              Atendimento online no Brasil e EUA.
              <br />
              ↓ Agende sua sessão de avaliação
            </p>
          </div>
        </Section>

        <Section number="06" title="Identidade Visual — Ajustes">
          <Bullets
            items={[
              "Padronizar paleta em 4 cores (atualmente 9 em uso no feed).",
              "Adotar 1 fonte de título + 1 fonte de corpo, em vez das 3 atuais.",
              "Refazer 3 capas de destaques principais com a nova paleta.",
              "Banir fotos genéricas de banco de imagens — substituir por bastidor real.",
            ]}
          />
        </Section>

        <Section number="07" title="Uso de IA na Implementação">
          <p>
            Você pode acelerar de 60% a 70% do plano com IA, sem perder sua voz. Recomendo
            três fluxos prontos no relatório completo:
          </p>
          <Bullets
            items={[
              "Reescrita de bio e legendas mantendo seu tom (com prompt calibrado).",
              "Geração de capas de destaques na nova paleta.",
              "Estrutura semanal de 2 conteúdos por semana — sem postar todo dia.",
            ]}
          />
          <Callout icon={Sparkles}>
            A IA aqui é ferramenta de bastidor. Quem assina e revisa cada peça continua sendo
            você.
          </Callout>
        </Section>

        <Section number="08" title="Próximos Passos">
          <ol className="space-y-3">
            {[
              "Implementar as 3 ações marcadas como 'alto impacto / baixo esforço' nos próximos 7 dias.",
              "Agendar revisão com Sandra em 30 dias para medir o que mudou.",
              "Avaliar abertura de um próximo ciclo (posicionamento + funil) somente após colher dados.",
            ].map((s, i) => (
              <li key={s} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
                  {i + 1}
                </span>
                <span className="leading-relaxed">{s}</span>
              </li>
            ))}
          </ol>
        </Section>

        <Closing />
      </article>
    </div>
  );
}

function TopBar() {
  return (
    <div className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur print:hidden">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" /> Voltar para a página inicial
        </Link>
        <button
          onClick={() => window.print()}
          className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-3 py-2 text-xs font-medium hover:bg-secondary"
        >
          <Printer className="h-3.5 w-3.5" /> Imprimir / salvar PDF
        </button>
      </div>
    </div>
  );
}

function Cover() {
  return (
    <header className="text-center">
      <p className="text-xs uppercase tracking-[0.25em] text-primary">
        Avaliação Estratégica de Presença Digital™
      </p>
      <h1 className="mt-4 font-serif text-5xl leading-tight tracking-tight md:text-6xl">
        Diagnóstico Estratégico
      </h1>
      <p className="mt-4 font-serif text-2xl italic text-muted-foreground">{CLIENT}</p>
      <p className="mt-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">{DATE}</p>
      <p className="mx-auto mt-8 max-w-xl text-sm leading-relaxed text-muted-foreground">
        Este relatório analisa todos os pontos de contato digitais que você mantém com seu
        cliente. O objetivo é mostrar, sem rodeios, o que está sustentando sua autoridade
        hoje, o que está limitando, e o caminho mais curto para corrigir.
      </p>
    </header>
  );
}

function Divider() {
  return <div className="my-12 flex items-center gap-4 text-muted-foreground/60">
    <div className="h-px flex-1 bg-border" />
    <span className="font-serif text-xl">·</span>
    <div className="h-px flex-1 bg-border" />
  </div>;
}

function Section({ number, title, children }: { number: string; title: string; children: React.ReactNode }) {
  return (
    <section className="mt-12 first:mt-0">
      <div className="flex items-baseline gap-4">
        <span className="font-serif text-3xl text-primary">{number}</span>
        <h2 className="font-serif text-3xl tracking-tight md:text-4xl">{title}</h2>
      </div>
      <div className="mt-5 space-y-4 leading-relaxed text-muted-foreground [&_strong]:text-foreground [&_strong]:font-medium">
        {children}
      </div>
    </section>
  );
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((t) => (
        <li key={t} className="flex items-start gap-3">
          <Check className="mt-1 h-4 w-4 shrink-0 text-primary" />
          <span className="leading-relaxed">{t}</span>
        </li>
      ))}
    </ul>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-border bg-secondary/50 p-4 text-center">
      <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{label}</p>
      <p className="mt-2 font-serif text-2xl text-foreground">{value}</p>
    </div>
  );
}

function Quote({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="border-l-2 border-primary bg-secondary/50 px-6 py-5 font-serif text-xl italic text-foreground">
      {children}
    </blockquote>
  );
}

function Callout({ icon: Icon, children }: { icon: typeof Sparkles; children: React.ReactNode }) {
  return (
    <div className="mt-5 flex items-start gap-3 rounded-xl border border-accent bg-accent/30 p-4 text-sm text-accent-foreground">
      <Icon className="mt-0.5 h-4 w-4 shrink-0" />
      <span>{children}</span>
    </div>
  );
}

function Findings() {
  const findings = [
    {
      area: "Bio do Instagram",
      issue: "Lista o serviço, mas não responde 'pra quem' e 'por quê eu'.",
      effect: "Visitante de primeira vez não entende em 3 segundos.",
    },
    {
      area: "Capas de destaques",
      issue: "3 estilos visuais diferentes convivem no mesmo perfil.",
      effect: "Marca parece menor e menos consolidada do que é.",
    },
    {
      area: "Site / Landing",
      issue: "CTA principal pede 'entre em contato', sem promessa específica.",
      effect: "Conversão depende da boa vontade do visitante.",
    },
    {
      area: "Tom de comunicação",
      issue: "Mistura linguagem técnica e marketing genérico em legendas.",
      effect: "Quebra a sensação de autoridade construída no atendimento.",
    },
  ];
  return (
    <div className="space-y-3">
      {findings.map((f) => (
        <div key={f.area} className="rounded-xl border border-border bg-secondary/40 p-5">
          <div className="flex items-start gap-3">
            <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-terracotta" />
            <div>
              <p className="font-medium text-foreground">{f.area}</p>
              <p className="mt-1 text-sm text-muted-foreground"><strong className="font-medium text-foreground/90">Observação:</strong> {f.issue}</p>
              <p className="text-sm text-muted-foreground"><strong className="font-medium text-foreground/90">Efeito:</strong> {f.effect}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function PlanTable() {
  const rows = [
    { p: "1", a: "Reescrever bio do Instagram (modelo no relatório)", imp: "Alto", eff: "Baixo" },
    { p: "2", a: "Padronizar 3 capas de destaques principais", imp: "Alto", eff: "Baixo" },
    { p: "3", a: "Trocar CTA do site por promessa específica", imp: "Alto", eff: "Médio" },
    { p: "4", a: "Definir paleta de 4 cores e aplicar nos próximos 8 posts", imp: "Médio", eff: "Médio" },
    { p: "5", a: "Estruturar linha editorial em 2 pilares fixos", imp: "Médio", eff: "Médio" },
    { p: "6", a: "Criar landing de captação para a oferta principal", imp: "Alto", eff: "Alto" },
  ];
  return (
    <div className="overflow-hidden rounded-xl border border-border">
      <table className="w-full text-left text-sm">
        <thead className="bg-secondary text-xs uppercase tracking-[0.12em] text-muted-foreground">
          <tr>
            <th className="px-4 py-3 w-12">#</th>
            <th className="px-4 py-3">Ação</th>
            <th className="px-4 py-3 w-24">Impacto</th>
            <th className="px-4 py-3 w-24">Esforço</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border bg-card">
          {rows.map((r) => (
            <tr key={r.p}>
              <td className="px-4 py-3 font-serif text-base text-primary">{r.p}</td>
              <td className="px-4 py-3 text-foreground">{r.a}</td>
              <td className="px-4 py-3"><Badge tone={r.imp === "Alto" ? "primary" : "muted"}>{r.imp}</Badge></td>
              <td className="px-4 py-3"><Badge tone={r.eff === "Baixo" ? "primary" : "muted"}>{r.eff}</Badge></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Badge({ tone, children }: { tone: "primary" | "muted"; children: React.ReactNode }) {
  return (
    <span
      className={
        "inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium " +
        (tone === "primary"
          ? "bg-accent text-accent-foreground"
          : "bg-secondary text-muted-foreground")
      }
    >
      {children}
    </span>
  );
}

function Closing() {
  return (
    <footer className="mt-16 border-t border-border pt-8 text-center">
      <p className="font-serif text-2xl italic text-foreground">
        "Sua presença digital pode finalmente contar a mesma história que você já entrega
        todos os dias no atendimento."
      </p>
      <p className="mt-6 text-xs uppercase tracking-[0.18em] text-muted-foreground">
        Sandra Campos · Método Leve Digital™
      </p>
    </footer>
  );
}
