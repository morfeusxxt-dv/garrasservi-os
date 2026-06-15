import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Snowflake, Wrench, Settings, ShieldCheck, Zap, Gauge,
  Phone, Mail, MapPin, ArrowRight, CheckCircle2, Clock, Menu, X, Star, ChevronDown, Send
} from "lucide-react";
import { toast, Toaster } from "sonner";
import logoAsset from "@/assets/garras-logo.png.asset.json";
import heroImage from "@/assets/hero-ac.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Garras Serviços — Climatização e Manutenção de Ar Condicionado" },
      { name: "description", content: "Manutenção preventiva, instalação, higienização e projetos PMOC de ar condicionado. Atendimento profissional, rápido e garantido." },
      { property: "og:title", content: "Garras Serviços — Climatização e Manutenção de Ar Condicionado" },
      { property: "og:description", content: "Equipe técnica certificada, garantia mantida e atendimento ágil." },
      { property: "og:image", content: logoAsset.url },
    ],
  }),
  component: HomePage,
});

const services = [
  { icon: Snowflake, title: "Manutenção Preventiva", desc: "Limpeza química profunda, higienização antibacteriana e análise de rendimento para prolongar a vida útil do seu aparelho." },
  { icon: Wrench, title: "Instalação de Alto Padrão", desc: "Projetos de infraestrutura e instalação credenciada de aparelhos Split, Multi-Split e Cassete mantendo a garantia do fabricante." },
  { icon: Settings, title: "Consertos & Diagnóstico", desc: "Identificação rápida de falhas elétricas, mecânicas ou eletrônicas com instrumentação digital de alta precisão." },
  { icon: Zap, title: "Reparo Emergencial", desc: "Equipes de pronto atendimento para vazamentos graves, congelamentos ou compressores inoperantes de forma ágil." },
  { icon: Gauge, title: "Carga e Recarga de Gás", desc: "Detecção prévia de microvazamentos e recarga de fluidos refrigerantes ecológicos R-410A, R-32 e R-22 conforme normas técnicas." },
  { icon: ShieldCheck, title: "Contrato PMOC", desc: "Plano de Manutenção, Operação e Controle completo para empresas, clínicas e condomínios de acordo com a portaria 3.523 da Anvisa." },
];

const brands = [
  { name: "Daikin", country: "Líder em tecnologia Inverter" },
  { name: "Fujitsu", country: "Alta eficiência e durabilidade" },
  { name: "LG", country: "Linha premium inteligente" },
  { name: "Samsung", country: "Tecnologia WindFree inovadora" },
  { name: "Carrier", country: "Robustez e tradição global" },
  { name: "Midea", country: "Custo-benefício e versatilidade" }
];

const steps = [
  { n: "01", title: "Contato & Triagem", desc: "Você nos explica sua necessidade via WhatsApp ou formulário e nós direcionamos o melhor técnico em poucos minutos." },
  { n: "02", title: "Visita & Laudo Técnico", desc: "O técnico credenciado realiza a avaliação técnica presencial no local usando instrumentos calibrados." },
  { n: "03", title: "Execução Limpa", desc: "O serviço é realizado com ferramentas adequadas, proteção dos móveis, limpeza pós-obra e peças genuínas." },
  { n: "04", title: "Garantia & Pós-venda", desc: "Entrega do laudo digital, nota fiscal e cobertura total de garantia por 90 dias, além de lembretes preventivos periódicos." },
];

const testimonials = [
  {
    name: "Mariana Costa",
    role: "Proprietária da Clínica Vitale",
    text: "O contrato PMOC da Garras transformou a qualidade do ar na nossa clínica. A equipe é pontual, os relatórios são detalhados e nos mantêm 100% em conformidade com a Anvisa.",
    rating: 5,
    location: "São Paulo - SP"
  },
  {
    name: "Rodrigo Almeida",
    role: "Apartamento Residencial",
    text: "Instalaram dois aparelhos Split no meu apartamento de forma impecável. Protegeram todos os móveis, usaram aspirador de pó durante a furação e deixaram tudo brilhando. Recomendo muito!",
    rating: 5,
    location: "Campinas - SP"
  },
  {
    name: "Fernanda Soares",
    role: "Gerente de Operações - Tech Hub",
    text: "Tivemos um problema com o sistema de cassetes bem num dia de evento importante. O atendimento emergencial da Garras foi rápido, resolveram em menos de duas horas e salvaram nosso dia.",
    rating: 5,
    location: "Santo André - SP"
  }
];

const faqs = [
  {
    q: "Qual a importância da manutenção preventiva periódica?",
    a: "A manutenção preventiva previne a proliferação de fungos, ácaros e bactérias nocivos à saúde, reduz o consumo de energia elétrica em até 30%, evita paradas inesperadas e estende a durabilidade do aparelho."
  },
  {
    q: "Se eu fizer a instalação com a Garras, eu perco a garantia de fábrica do aparelho?",
    a: "Não! Nossos técnicos são credenciados e qualificados pelos principais fabricantes do mercado. Isso garante que a sua instalação siga rigorosamente o manual do fabricante, mantendo sua garantia de fábrica intacta."
  },
  {
    q: "Minha empresa precisa do PMOC?",
    a: "Sim, de acordo com a Lei 13.589/2018, todos os edifícios de uso público ou coletivo que possuam sistemas de climatização com capacidade acima de 60.000 BTU/h (soma dos aparelhos) devem possuir o Plano de Manutenção, Operação e Controle (PMOC)."
  },
  {
    q: "Quais são as formas de pagamento e prazos de garantia?",
    a: "Oferecemos garantia legal e estendida de 90 dias para todos os serviços executados e peças trocadas. Parcelamos no cartão de crédito, geramos boleto para faturamento corporativo e aceitamos Pix."
  }
];

function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [faqActive, setFaqActive] = useState<number | null>(null);

  // Form State
  const [formData, setFormData] = useState({
    nome: "",
    whatsapp: "",
    email: "",
    servico: "",
    mensagem: "",
  });
  const [loading, setLoading] = useState(false);

  // Default professional contact values
  const whatsappNumber = "5511987654321"; // Professional SP placeholder
  const waLinkDefault = `https://wa.me/${whatsappNumber}?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento%20de%20ar%20condicionado.`;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.nome || !formData.whatsapp || !formData.servico) {
      toast.error("Por favor, preencha todos os campos obrigatórios (*).");
      return;
    }

    setLoading(true);

    // Simulate clean API/Lead Submission
    setTimeout(() => {
      setLoading(false);
      toast.success("Solicitação enviada com sucesso! Nossa equipe entrará em contato em breve.");

      // Formulate WhatsApp message content
      const msg = `Olá Garras Serviços! Me chamo *${formData.nome}*.\n\n*Solicitação de Orçamento:*\n- *Serviço:* ${formData.servico}\n- *WhatsApp:* ${formData.whatsapp}\n- *E-mail:* ${formData.email || "Não informado"}\n- *Mensagem:* ${formData.mensagem || "Sem detalhes adicionais"}`;
      const encodedMsg = encodeURIComponent(msg);
      
      // Open WhatsApp after a short delay
      setTimeout(() => {
        window.open(`https://wa.me/${whatsappNumber}?text=${encodedMsg}`, "_blank");
      }, 1000);

      // Clear Form
      setFormData({
        nome: "",
        whatsapp: "",
        email: "",
        servico: "",
        mensagem: "",
      });
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-background text-foreground antialiased bg-hero-pattern">
      <Toaster position="top-right" richColors />

      {/* HEADER NAV */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/90 border-b border-border transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3">
            <img src={logoAsset.url} alt="Garras Serviços Logo" className="h-10 w-auto object-contain" />
            <span className="font-display font-extrabold text-2xl tracking-tight text-slate-900">
              Garras<span className="text-primary">Serviços</span>
            </span>
          </a>
          
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
            <a href="#marcas" className="hover:text-primary transition-colors">Marcas</a>
            <a href="#servicos" className="hover:text-primary transition-colors">Serviços</a>
            <a href="#processo" className="hover:text-primary transition-colors">Como Funciona</a>
            <a href="#depoimentos" className="hover:text-primary transition-colors">Depoimentos</a>
            <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
            <a href="#contato" className="hover:text-primary transition-colors">Contato</a>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a href={`tel:+5511987654321`} className="text-sm font-bold text-slate-700 hover:text-primary flex items-center gap-2 transition-colors">
              <Phone className="size-4 text-primary" /> (11) 98765-4321
            </a>
            <a 
              href={waLinkDefault} 
              target="_blank"
              rel="noopener noreferrer" 
              className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/95 transition-all shadow-md shadow-primary/10 hover:shadow-lg"
            >
              Falar com Técnico
            </a>
          </div>

          <button 
            className="md:hidden p-2 text-slate-700 hover:text-primary transition-colors" 
            onClick={() => setMenuOpen(!menuOpen)} 
            aria-label="Menu"
          >
            {menuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div className="md:hidden border-t border-border px-6 py-6 flex flex-col gap-4 bg-background/98 shadow-xl">
            <a href="#marcas" className="text-lg font-medium text-slate-700 hover:text-primary py-1" onClick={()=>setMenuOpen(false)}>Marcas</a>
            <a href="#servicos" className="text-lg font-medium text-slate-700 hover:text-primary py-1" onClick={()=>setMenuOpen(false)}>Serviços</a>
            <a href="#processo" className="text-lg font-medium text-slate-700 hover:text-primary py-1" onClick={()=>setMenuOpen(false)}>Como Funciona</a>
            <a href="#depoimentos" className="text-lg font-medium text-slate-700 hover:text-primary py-1" onClick={()=>setMenuOpen(false)}>Depoimentos</a>
            <a href="#faq" className="text-lg font-medium text-slate-700 hover:text-primary py-1" onClick={()=>setMenuOpen(false)}>FAQ</a>
            <a href="#contato" className="text-lg font-medium text-slate-700 hover:text-primary py-1" onClick={()=>setMenuOpen(false)}>Contato</a>
            
            <hr className="border-border my-2" />
            
            <div className="flex flex-col gap-4">
              <a href={`tel:+5511987654321`} className="font-bold text-slate-800 flex items-center gap-2 justify-center py-2">
                <Phone className="size-4 text-primary" /> (11) 98765-4321
              </a>
              <a 
                href={waLinkDefault}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-primary px-6 py-3 text-center text-sm font-semibold text-primary-foreground hover:bg-primary/95 transition-all"
              >
                Orçamento via WhatsApp
              </a>
            </div>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section id="top" className="relative pt-32 pb-20 md:pt-48 md:pb-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 text-left space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4.5 py-1.5 text-xs font-bold uppercase tracking-wider text-primary">
              <span className="size-2 rounded-full bg-cyan animate-pulse" />
              Climatização Residencial e Corporativa
            </div>
            
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.1] tracking-tight text-slate-900">
              Conforto térmico <br className="hidden sm:inline" />
              de alto padrão para seu <span className="text-gradient">ambiente</span>.
            </h1>
            
            <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
              Instalação técnica credenciada, manutenção preventiva profunda e projetos de PMOC executados por especialistas certificados. Mantenha a garantia de fábrica e ar puro o ano todo.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-2">
              <a 
                href="#contato" 
                className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 font-bold text-primary-foreground hover:bg-primary/95 transition-all shadow-lg shadow-primary/20"
              >
                Solicitar Orçamento <ArrowRight className="size-4" />
              </a>
              <a 
                href="#servicos" 
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-8 py-4 font-bold text-slate-700 hover:border-primary/50 hover:bg-slate-50 transition-all shadow-sm"
              >
                Conhecer Serviços
              </a>
            </div>
            
            {/* Trust Badges */}
            <div className="pt-8 grid grid-cols-3 gap-4 border-t border-slate-200 max-w-xl">
              <div>
                <div className="font-display text-2xl font-bold text-slate-900">100%</div>
                <div className="text-xs font-medium text-slate-500 mt-0.5">Técnicos Certificados</div>
              </div>
              <div>
                <div className="font-display text-2xl font-bold text-slate-900">+8k</div>
                <div className="text-xs font-medium text-slate-500 mt-0.5">Aparelhos Atendidos</div>
              </div>
              <div>
                <div className="font-display text-2xl font-bold text-slate-900">90 dias</div>
                <div className="text-xs font-medium text-slate-500 mt-0.5">Garantia por Escrito</div>
              </div>
            </div>
          </div>

          {/* Hero Image / Premium Frame */}
          <div className="lg:col-span-5 relative animate-float">
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-tr from-primary/10 to-cyan/20 blur-2xl opacity-60 pointer-events-none" />
            <div className="relative rounded-[2rem] overflow-hidden border border-slate-200 shadow-2xl bg-white p-2">
              <img 
                src={heroImage} 
                alt="Técnico qualificado revisando split com ferramentas profissionais" 
                className="rounded-[1.5rem] w-full object-cover aspect-[4/3] sm:aspect-square" 
              />
              
              {/* Overlay quality badges */}
              <div className="absolute left-6 bottom-8 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-slate-100 flex items-center gap-3">
                <div className="size-10 rounded-xl bg-cyan/10 flex items-center justify-center">
                  <CheckCircle2 className="size-5 text-cyan" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Instalação</div>
                  <div className="font-display font-bold text-xs text-slate-800">Padrão Autorizado</div>
                </div>
              </div>
              
              <div className="absolute right-6 top-8 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-slate-100 flex items-center gap-3">
                <div className="size-10 rounded-xl bg-amber/10 flex items-center justify-center">
                  <Clock className="size-5 text-amber" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Atendimento</div>
                  <div className="font-display font-bold text-xs text-slate-800">Rápido e Pontual</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* MARCAS PARCEIRAS */}
      <section id="marcas" className="relative py-12 border-y border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-slate-400">Atendimento Multimarcas</span>
            <h2 className="text-lg font-bold text-slate-800 mt-1">Garantia mantida nas principais fabricantes</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-6 items-center">
            {brands.map((b) => (
              <div key={b.name} className="flex flex-col items-center justify-center p-4 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:border-slate-200 transition-all duration-300">
                <span className="font-display font-black text-xl tracking-tight text-slate-700">{b.name}</span>
                <span className="text-[9px] text-slate-400 font-medium text-center mt-1">{b.country}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="servicos" className="relative py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-extrabold uppercase tracking-widest text-primary">// Nossos Serviços</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Soluções completas sob medida.</h2>
            <p className="text-slate-600">Seja para um split residencial ou sistemas industriais integrados, nós temos a equipe certa.</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.title} className="premium-card rounded-3xl p-8 bg-white flex flex-col justify-between group">
                <div>
                  <div className="size-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 transition-colors group-hover:bg-primary group-hover:text-white">
                    <s.icon className="size-6 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3">{s.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">{s.desc}</p>
                </div>
                <a 
                  href={`https://wa.me/${whatsappNumber}?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20serviço%20de%20*${encodeURIComponent(s.title)}*.`}
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-1 text-xs font-bold text-primary group-hover:gap-2 transition-all mt-auto"
                >
                  Solicitar este serviço <ArrowRight className="size-3.5" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS / HOW IT WORKS */}
      <section id="processo" className="relative py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-extrabold uppercase tracking-widest text-primary">// Transparência</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Como funciona o atendimento?</h2>
            <p className="text-slate-600">Garantimos um processo limpo, rápido e sem dores de cabeça do início ao fim.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <div key={step.n} className="relative p-6 rounded-2xl border border-slate-100 hover:border-slate-200 transition-colors">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-display font-black text-4xl text-slate-100 leading-none">{step.n}</span>
                  <div className="size-8 rounded-lg bg-slate-50 flex items-center justify-center border border-slate-100 text-slate-500">
                    <CheckCircle2 className="size-4 text-primary" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">{step.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{step.desc}</p>
                
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 -right-4 translate-x-1/2 z-10 text-slate-300">
                    <ArrowRight className="size-5" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS (NEW SECTION) */}
      <section id="depoimentos" className="relative py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-extrabold uppercase tracking-widest text-primary">// Depoimentos</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">O que nossos clientes dizem.</h2>
            <p className="text-slate-600">A opinião e satisfação de quem confia no nosso trabalho diariamente.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, index) => (
              <div key={index} className="premium-card rounded-3xl p-8 bg-white flex flex-col justify-between">
                <div>
                  <div className="flex gap-1 mb-4">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="size-4 fill-amber text-amber" />
                    ))}
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed italic mb-6">"{t.text}"</p>
                </div>
                
                <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                  <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center font-display font-bold text-sm text-primary">
                    {t.name[0]}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-800 leading-none">{t.name}</h4>
                    <span className="text-[11px] text-slate-400 font-medium block mt-1">{t.role} · {t.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT & INTERACTIVE FORM SECTION (NEW & IMPROVED FUNCTIONALITY) */}
      <section id="contato" className="relative py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            
            {/* Informational column */}
            <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
              <span className="text-xs font-extrabold uppercase tracking-widest text-primary">// Solicite seu orçamento</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Fale com nossa equipe técnica.</h2>
              <p className="text-slate-600 leading-relaxed">
                Preencha o formulário ao lado com suas informações e necessidades básicas. O formulário gerará uma solicitação e você também poderá enviar todos os detalhes diretamente pelo WhatsApp para agilizar sua resposta.
              </p>
              
              <div className="space-y-4 pt-4">
                <div className="flex items-start gap-4">
                  <div className="size-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="size-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xs text-slate-400 font-bold uppercase">Telefone / WhatsApp</h4>
                    <a href={`tel:+5511987654321`} className="text-sm font-bold text-slate-800 hover:text-primary transition-colors">(11) 98765-4321</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="size-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="size-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xs text-slate-400 font-bold uppercase">E-mail Comercial</h4>
                    <a href="mailto:contato@garrasservicos.com.br" className="text-sm font-bold text-slate-800 hover:text-primary transition-colors">contato@garrasservicos.com.br</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="size-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="size-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xs text-slate-400 font-bold uppercase">Área de Atendimento</h4>
                    <span className="text-sm font-bold text-slate-800">Grande São Paulo, ABCD e Interior</span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="size-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Clock className="size-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xs text-slate-400 font-bold uppercase">Horário Comercial</h4>
                    <span className="text-sm font-bold text-slate-800">Segunda a Sábado · 8h às 19h</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Form Column */}
            <div className="lg:col-span-7 bg-slate-50 rounded-3xl p-8 border border-slate-100 shadow-sm">
              <h3 className="text-lg font-bold text-slate-800 mb-2">Envie uma mensagem</h3>
              <p className="text-xs text-slate-500 mb-6">Campos marcados com * são obrigatórios.</p>
              
              <form onSubmit={handleFormSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700" htmlFor="nome">Seu Nome *</label>
                    <input 
                      type="text" 
                      id="nome" 
                      name="nome"
                      required
                      placeholder="Ex: Pedro Henrique" 
                      value={formData.nome}
                      onChange={handleInputChange}
                      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700" htmlFor="whatsapp">WhatsApp / Celular *</label>
                    <input 
                      type="tel" 
                      id="whatsapp" 
                      name="whatsapp"
                      required
                      placeholder="Ex: (11) 98765-4321" 
                      value={formData.whatsapp}
                      onChange={handleInputChange}
                      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700" htmlFor="email">E-mail (opcional)</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email"
                      placeholder="Ex: seuemail@empresa.com" 
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700" htmlFor="servico">Serviço Necessário *</label>
                    <select 
                      id="servico" 
                      name="servico"
                      required
                      value={formData.servico}
                      onChange={handleInputChange}
                      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-primary transition-colors cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%23475569%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-[length:1em_1em] bg-[right_1rem_center] bg-no-repeat"
                    >
                      <option value="">Selecione uma opção...</option>
                      <option value="Instalação Comercial/Residencial">Instalação Completa</option>
                      <option value="Manutenção Preventiva / Limpeza">Manutenção Preventiva / Higienização</option>
                      <option value="Conserto / Reparo Rápido">Conserto / Assistência Técnica</option>
                      <option value="Contrato PMOC corporativo">Contrato PMOC corporativo</option>
                      <option value="Outro Serviço">Outro / Não sei</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700" htmlFor="mensagem">Detalhes do Chamado (opcional)</label>
                  <textarea 
                    id="mensagem" 
                    name="mensagem"
                    rows={4}
                    placeholder="Descreva brevemente o problema, número de aparelhos ou modelo/marca se souber..." 
                    value={formData.mensagem}
                    onChange={handleInputChange}
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-primary transition-colors resize-none"
                  />
                </div>

                <button 
                  type="submit" 
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-primary py-3 px-6 text-sm font-bold text-primary-foreground hover:bg-primary/95 transition-all shadow-md disabled:opacity-50 cursor-pointer"
                >
                  {loading ? (
                    <span className="size-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send className="size-4" /> Enviar e ir para o WhatsApp
                    </>
                  )}
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ SECTION (NEW SECTION) */}
      <section id="faq" className="relative py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16 space-y-3">
            <span className="text-xs font-extrabold uppercase tracking-widest text-primary">// FAQ</span>
            <h2 className="text-3xl font-extrabold text-slate-900">Perguntas Frequentes</h2>
            <p className="text-slate-600">Tire suas principais dúvidas sobre nossos atendimentos, garantias e normas.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const active = faqActive === index;
              return (
                <div 
                  key={index} 
                  className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm transition-all"
                >
                  <button 
                    onClick={() => setFaqActive(active ? null : index)}
                    className="w-full px-6 py-5 text-left font-bold text-slate-800 flex items-center justify-between gap-4 focus:outline-none"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`size-5 text-slate-400 transition-transform ${active ? "rotate-180" : ""}`} />
                  </button>
                  
                  {active && (
                    <div className="px-6 pb-5 text-sm text-slate-600 border-t border-slate-50 pt-3 leading-relaxed">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-200 bg-slate-900 text-slate-400 py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8 mb-12">
          
          <div className="space-y-4">
            <span className="font-display font-black text-2xl tracking-tight text-white">
              Garras<span className="text-primary">Serviços</span>
            </span>
            <p className="text-xs text-slate-400 leading-relaxed">
              Serviço especializado de manutenção e instalação de sistemas de ar condicionado residenciais e empresariais. Qualidade, pontualidade e transparência.
            </p>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold text-white mb-4">Navegação</h4>
            <ul className="space-y-2.5 text-xs">
              <li><a href="#top" className="hover:text-white transition-colors">Início</a></li>
              <li><a href="#marcas" className="hover:text-white transition-colors">Marcas Parceiras</a></li>
              <li><a href="#servicos" className="hover:text-white transition-colors">Nossos Serviços</a></li>
              <li><a href="#processo" className="hover:text-white transition-colors">Como Trabalhamos</a></li>
              <li><a href="#contato" className="hover:text-white transition-colors">Fale Conosco</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold text-white mb-4">Canais de Contato</h4>
            <ul className="space-y-2.5 text-xs">
              <li className="flex items-center gap-2"><Phone className="size-3.5 text-primary" /> (11) 98765-4321</li>
              <li className="flex items-center gap-2"><Mail className="size-3.5 text-primary" /> contato@garrasservicos.com.br</li>
              <li className="flex items-center gap-2"><MapPin className="size-3.5 text-primary" /> São Paulo e Grande SP</li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold text-white mb-4">Certificações e Segurança</h4>
            <ul className="space-y-2.5 text-xs">
              <li className="flex items-center gap-2"><CheckCircle2 className="size-3.5 text-primary" /> Técnicos credenciados</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="size-3.5 text-primary" /> Conformidade com PMOC</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="size-3.5 text-primary" /> Peças Genuínas</li>
            </ul>
          </div>

        </div>

        <div className="max-w-7xl mx-auto px-6 border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} Garras Serviços Ltda. Todos os direitos reservados. CNPJ: 00.000.000/0000-00
          </div>
          <div>
            Desenvolvido com excelência técnica e foco em conversão
          </div>
        </div>
      </footer>
    </div>
  );
}
