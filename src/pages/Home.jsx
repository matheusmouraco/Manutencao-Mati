
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CheckCircle, Wrench, Target, MessageSquare, Search, Award, Smartphone, Building, Users, Zap, Droplets, Paintbrush, XCircle, MapPin, Clock, Calendar } from 'lucide-react';
import { Toaster } from "@/components/ui/toaster";

export default function Home() {

  const whatsappLink = "https://wa.me/5511992644010?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Mati%20Studio%20e%20quero%20um%20or%C3%A7amento%20para%20site%20de%20manuten%C3%A7%C3%A3o.";

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const portfolioCases = [
      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/497d63968_portfolio-1-a-50-Prancheta-5.png",
      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/d36856ba4_portfolio-1-a-50-Prancheta-9.png",
      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/4e6529564_portfolio-1-a-50-Prancheta-23.png",
      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/f0a75bc46_portfolio-51-a-100-Prancheta-4.png",
      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/40f6aa548_portfolio-51-a-100-Prancheta-3-1.png",
      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/65166c10d_portfolio-51-a-100-Prancheta-14.png",
  ];

  return (
    <>
      <Toaster />
      <style>{`
        .hero-bg {
          background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop');
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
        }
        .cta-bg {
          background-image: linear-gradient(to top, rgba(255, 0, 77, 0.1), transparent);
        }
        .final-cta-bg {
           background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2070&auto=format&fit=crop');
           background-size: cover;
           background-position: center;
        }
      `}</style>
      
      <header className="fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-sm shadow-md z-40 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3">
            <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/1dd374859_Group-1171276258.png" alt="Mati Studio Logo" className="h-10" />
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button className="bg-[#FF004D] hover:bg-[#D90042] text-white rounded-full group px-6">
                Fale com um Especialista
                <MessageSquare className="ml-2 w-4 h-4" />
              </Button>
            </a>
          </div>
        </div>
      </header>

      <main className="bg-black text-zinc-200 pt-[68px]">
        {/* Hero Section */}
        <section className="hero-bg">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-24 md:py-36">
            <motion.div variants={fadeIn} initial="hidden" animate="visible">
              <Wrench className="w-16 h-16 text-[#FF004D] mx-auto mb-4"/>
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                Quem resolve problemas precisa ser fácil de encontrar.
              </h1>
              <p className="mt-6 text-lg md:text-xl text-zinc-300 max-w-3xl mx-auto">
                Se você já trabalha com responsabilidade e eficiência, seu site precisa mostrar isso. Criamos sites que geram orçamentos e contatos todos os dias.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search Problem Section */}
        <section className="py-20 bg-zinc-900">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="text-center mb-12">
                 <h2 className="text-2xl md:text-3xl font-mono font-bold text-white mb-8">Todo dia, alguém digita no Google:</h2>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
                     {[
                         "\"Eletricista urgente perto de mim\"",
                         "\"Conserto de vazamento\"", 
                         "\"Manutenção predial em [sua cidade]\"",
                         "\"Pintor de confiança\""
                     ].map((search, i) => (
                         <div key={i} className="bg-zinc-800 p-4 rounded-lg text-zinc-300 font-mono text-lg">
                             <Search className="w-5 h-5 text-[#FF004D] inline mr-2"/>
                             {search}
                         </div>
                     ))}
                 </div>
                 <p className="mt-8 text-xl text-zinc-300">A pergunta é: <span className="text-[#FF004D] font-bold">Eles estão encontrando você — ou o concorrente?</span></p>
             </div>
          </div>
        </section>

        {/* What your site can do */}
        <section className="py-20 bg-black">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">O que seu novo site pode fazer por você</h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        { icon: Search, title: "Ser encontrado no Google", description: "Aparecer nas buscas locais quando alguém precisa dos seus serviços" },
                        { icon: Clock, title: "Vender 24h por dia", description: "Trabalhar por você mesmo fora do horário comercial" },
                        { icon: MessageSquare, title: "Facilitar contatos", description: "WhatsApp e formulários estratégicos para gerar orçamentos" },
                        { icon: Award, title: "Passar confiança", description: "Design profissional que transmite credibilidade" },
                        { icon: Target, title: "Mostrar seu trabalho", description: "Galeria com fotos reais e depoimentos de clientes" },
                        { icon: MapPin, title: "Atuação local", description: "Definir área de atendimento e aparecer nas buscas da região" },
                    ].map(benefit => (
                         <Card key={benefit.title} className="bg-zinc-900 border-zinc-800 text-white p-6 hover:bg-zinc-800 transition-colors">
                            <benefit.icon className="w-8 h-8 text-[#FF004D] mb-4"/>
                            <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                            <p className="text-zinc-400">{benefit.description}</p>
                        </Card>
                    ))}
                </div>
            </div>
        </section>

        {/* Target Audience */}
        <section className="py-20 bg-zinc-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl font-bold text-white mb-2">Ideal para:</h2>
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                  {[
                      { icon: Wrench, text: "Prestadores Autônomos" },
                      { icon: Building, text: "Empresas de Manutenção" },
                      { icon: Users, text: "Maridos de Aluguel" },
                      { icon: Zap, text: "Serviços Elétricos e Hidráulicos" },
                  ].map(item => (
                      <div key={item.text} className="bg-zinc-800 text-zinc-200 rounded-full px-5 py-2 text-md font-medium flex items-center gap-2">
                        <item.icon className="w-4 h-4 text-[#FF004D]"/> {item.text}
                      </div>
                  ))}
              </div>
          </div>
        </section>

        {/* What we deliver */}
        <section className="py-20 bg-black">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">Site institucional completo para serviços de manutenção</h2>
                </div>
                <Card className="bg-zinc-900 border-zinc-800 text-white p-6 md:p-10">
                    <div className="flex flex-col md:flex-row items-start gap-8">
                        <Building className="w-16 h-16 text-[#FF004D] shrink-0 mt-1"/>
                        <div>
                            <h3 className="text-2xl font-bold mb-4">Inclui:</h3>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 list-disc list-inside text-zinc-300">
                                <li>Página inicial com seus diferenciais</li>
                                <li>Lista de serviços com fotos e descrição</li>
                                <li>Página com localização e área de atendimento</li>
                                <li>Botão de WhatsApp em todas as páginas</li>
                                <li>Formulário de orçamento estratégico</li>
                                <li>Galeria com fotos dos serviços realizados</li>
                                <li>Página "Sobre" com sua história</li>
                                <li>SEO local para sua cidade</li>
                                <li>Design responsivo e moderno</li>
                            </ul>
                        </div>
                    </div>
                </Card>
            </div>
        </section>

        {/* Landing Pages Section */}
        <section className="py-20 bg-zinc-900">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">Landing Pages de conversão para campanhas específicas</h2>
                    <p className="mt-4 text-lg text-zinc-400">Perfeitas para promoções ou serviços específicos</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        { icon: Zap, title: "Instalação Elétrica", description: "Ventiladores, chuveiros e luminárias" },
                        { icon: Paintbrush, title: "Pintura", description: "Ambientes residenciais e comerciais" },
                        { icon: Droplets, title: "Emergências", description: "Vazamentos e reparos urgentes" },
                        { icon: Wrench, title: "Reformas Rápidas", description: "Pequenos reparos e melhorias" },
                        { icon: Building, title: "Manutenção Preventiva", description: "Para empresas e condomínios" },
                        { icon: Award, title: "Revisão Completa", description: "Elétrica e hidráulica" },
                    ].map(service => (
                         <Card key={service.title} className="bg-zinc-800 border-zinc-700 text-white p-6 hover:bg-zinc-700 transition-colors">
                            <service.icon className="w-8 h-8 text-[#FF004D] mb-4"/>
                            <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                            <p className="text-zinc-400">{service.description}</p>
                        </Card>
                    ))}
                </div>
            </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-black">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">Benefícios reais do seu site</h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        { icon: Calendar, title: "Mais agendamentos", description: "Todos os dias" },
                        { icon: MapPin, title: "Posicionamento local", description: "No Google para sua cidade" },
                        { icon: Award, title: "Mais confiança", description: "Desde o primeiro clique" },
                        { icon: MessageSquare, title: "Canal direto", description: "Via WhatsApp" },
                        { icon: Target, title: "Orçamentos fáceis", description: "Com menos esforço" },
                        { icon: Smartphone, title: "Imagem profissional", description: "Mesmo sendo pequeno" },
                    ].map(benefit => (
                         <div key={benefit.title} className="flex items-start gap-4 bg-zinc-900 p-6 rounded-lg border border-zinc-800">
                            <div className="flex-shrink-0 w-12 h-12 bg-black rounded-full flex items-center justify-center">
                                <benefit.icon className="w-6 h-6 text-[#FF004D]"/>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-1">{benefit.title}</h3>
                                <p className="text-zinc-400">{benefit.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Comparison Section */}
        <section className="py-20 bg-zinc-900">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">Site genérico vs Site feito para manutenção</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                    <Card className="bg-red-950/30 border-red-800 p-6">
                        <div className="flex items-center gap-3 mb-4">
                            <XCircle className="w-8 h-8 text-red-400"/>
                            <h3 className="text-xl font-bold text-red-400">Problemas comuns</h3>
                        </div>
                        <ul className="space-y-3 text-zinc-300">
                            <li>• Site parado e sem conversão</li>
                            <li>• Pouca presença no Google</li>
                            <li>• Fotos ruins ou sem impacto</li>
                            <li>• Falta de credibilidade</li>
                            <li>• Atendimento só por telefone</li>
                        </ul>
                    </Card>
                    <Card className="bg-green-950/30 border-green-800 p-6">
                        <div className="flex items-center gap-3 mb-4">
                            <CheckCircle className="w-8 h-8 text-green-400"/>
                            <h3 className="text-xl font-bold text-green-400">Soluções da Mati Studio</h3>
                        </div>
                        <ul className="space-y-3 text-zinc-300">
                            <li>• Estrutura com CTA, WhatsApp e formulários</li>
                            <li>• SEO local completo incluído</li>
                            <li>• Galeria profissional com seus trabalhos</li>
                            <li>• Design com foco em confiança</li>
                            <li>• WhatsApp integrado + formulários</li>
                        </ul>
                    </Card>
                </div>
            </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-20 bg-black">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-white text-center mb-12">Projetos e Clientes</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolioCases.map((src, i) => (
                <motion.div 
                  key={i} 
                  className="rounded-lg overflow-hidden shadow-lg border border-zinc-700/50"
                  variants={fadeIn} 
                  initial="hidden" 
                  whileInView="visible" 
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{delay: i * 0.1}}
                >
                  <img src={src} alt={`Portfolio case ${i + 1}`} className="w-full h-auto"/>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="final-cta-bg">
          <div className="py-24 text-center bg-black/70">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <Wrench className="w-16 h-16 text-[#FF004D] mx-auto mb-6"/>
                <h2 className="text-4xl md:text-5xl font-bold text-white">Seu serviço resolve o problema de alguém. Seu site precisa resolver o seu.</h2>
                <div className="mt-8 flex flex-wrap justify-center gap-4 text-lg text-zinc-300">
                    <div className="flex items-center gap-2">
                        <Search className="w-5 h-5 text-[#FF004D]"/>
                        <span>Seja encontrado</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <MessageSquare className="w-5 h-5 text-[#FF004D]"/>
                        <span>Seja contatado com facilidade</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Award className="w-5 h-5 text-[#FF004D]"/>
                        <span>Seja lembrado como profissional de confiança</span>
                    </div>
                </div>
                <p className="mt-6 text-lg text-zinc-300 max-w-2xl mx-auto">Vamos criar um site que trabalhe por você — todo dia.</p>
                <div className="mt-10">
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    <Button size="lg" className="w-full sm:w-auto bg-[#FF004D] hover:bg-[#D90042] text-white rounded-full text-lg px-10 py-6 font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                      Quero meu site profissional agora
                    </Button>
                  </a>
                </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-black border-t border-zinc-800">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 text-center text-zinc-500">
          <p>&copy; {new Date().getFullYear()} Mati Studio | Sites profissionais para quem resolve problemas.</p>
        </div>
      </footer>
    </>
  );
}
