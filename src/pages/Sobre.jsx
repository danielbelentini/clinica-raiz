import { Link } from 'react-router-dom'
import Depoimentos from '../components/Depoimentos'

export default function Sobre() {
  return (
    <main>
      <PageHero />
      <Historia />
      <Equipe />
      <Valores />
      <Depoimentos />
      <CTA />
    </main>
  )
}

function PageHero() {
  return (
    <section aria-label="Sobre a clínica" className="py-24 px-6 text-center" style={{ background: '#EEF1F7', paddingTop: '7rem' }}>
      <div className="max-w-2xl mx-auto">
        <span className="section-tag">Quem somos</span>
        <h1 className="font-extrabold text-4xl md:text-5xl mb-5" style={{ color: '#1B2B4B' }}>
          Sobre a Clínica Raiz
        </h1>
        <p className="text-base leading-relaxed" style={{ color: '#64748b' }}>
          Nascemos do compromisso de devolver aos pacientes algo essencial: a capacidade de mastigar, falar e sorrir com confiança.
        </p>
      </div>
    </section>
  )
}

function Historia() {
  return (
    <section aria-label="História da clínica" className="py-20 px-6" style={{ background: '#ffffff' }}>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div
          className="rounded-xl overflow-hidden h-80 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&q=80&auto=format&fit=crop)' }}
          role="img"
          aria-label="Interior moderno da Clínica Raiz"
        />
        <div>
          <span className="section-tag">Nossa história</span>
          <h2 className="font-bold text-3xl md:text-4xl mb-5" style={{ color: '#1B2B4B' }}>
            Uma clínica fundada para resolver o que outros evitam
          </h2>
          <p className="text-sm leading-relaxed mb-4" style={{ color: '#64748b' }}>
            A Clínica Raiz foi fundada em 2013 por especialistas em implantodontia que compartilhavam uma insatisfação comum: ver pacientes indo de clínica em clínica sem conseguir um tratamento completo e honesto.
          </p>
          <p className="text-sm leading-relaxed mb-4" style={{ color: '#64748b' }}>
            Desde o início, o nosso foco foi criar um ambiente onde o paciente se sentisse seguro para tirar dúvidas, entender seu caso e tomar a melhor decisão — sem pressão e sem promessas impossíveis.
          </p>
          <p className="text-sm leading-relaxed" style={{ color: '#64748b' }}>
            Hoje, com mais de 4.000 implantes realizados e uma taxa de sucesso de 98%, seguimos com o mesmo propósito do primeiro dia.
          </p>
        </div>
      </div>
    </section>
  )
}

function Equipe() {
  const membros = [
    { initials: 'DR', nome: 'Dr. Rafael Andrade', esp: 'Implantodontia', bio: 'Mestre em Implantodontia pela USP. Mais de 12 anos de experiência clínica e mais de 2.000 implantes realizados.' },
    { initials: 'DC', nome: 'Dra. Camila Torres', esp: 'Periodontia e Implantes', bio: 'Especialista em tecidos moles ao redor de implantes. Referência em cirurgias regenerativas e enxertos.' },
    { initials: 'DM', nome: 'Dr. Matheus Lima', esp: 'Prótese sobre Implante', bio: 'Responsável pelas reabilitações protéticas. Especialista em casos All-on-4 e All-on-6 com carga imediata.' },
  ]
  return (
    <section aria-label="Equipe da clínica" className="py-20 px-6" style={{ background: '#F8F9FB' }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="section-tag">Nossa equipe</span>
          <h2 className="font-bold text-3xl md:text-4xl" style={{ color: '#1B2B4B' }}>
            Especialistas dedicados ao seu caso
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {membros.map((m) => (
            <article key={m.nome} className="bg-white rounded-xl p-6 text-center" style={{ border: '1px solid #EEF1F7' }}>
              <div className="w-16 h-16 rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4" style={{ background: '#EEF1F7', color: '#1B2B4B', border: '2px solid #c7d0e0' }}>
                {m.initials}
              </div>
              <h3 className="font-bold text-base mb-1" style={{ color: '#1B2B4B' }}>{m.nome}</h3>
              <p className="text-xs font-semibold tracking-wide uppercase mb-3" style={{ color: '#C47B5F' }}>{m.esp}</p>
              <p className="text-sm leading-relaxed" style={{ color: '#64748b' }}>{m.bio}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Valores() {
  const valores = [
    { titulo: 'Honestidade clínica', desc: 'Indicamos implante só quando é a melhor solução para o seu caso. Nunca por pressão comercial.' },
    { titulo: 'Transparência total', desc: 'Explicamos o diagnóstico, o plano e o custo com clareza antes de qualquer procedimento.' },
    { titulo: 'Excelência técnica', desc: 'Materiais de implantes certificados internacionalmente e protocolos baseados em evidências.' },
    { titulo: 'Cuidado contínuo', desc: 'Acompanhamos cada paciente após o procedimento para garantir o sucesso a longo prazo.' },
  ]
  return (
    <section aria-label="Valores da clínica" className="py-20 px-6" style={{ background: '#ffffff' }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="section-tag">Nossos valores</span>
          <h2 className="font-bold text-3xl md:text-4xl" style={{ color: '#1B2B4B' }}>O que guia cada decisão</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {valores.map((v) => (
            <div key={v.titulo} className="rounded-xl p-6 transition-all duration-300" style={{ border: '1px solid #EEF1F7' }}
              onMouseEnter={e => { e.currentTarget.style.background = '#EEF1F7'; e.currentTarget.style.borderColor = '#c7d0e0' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = '#EEF1F7' }}
            >
              <div className="w-8 h-8 rounded flex items-center justify-center mb-4" style={{ background: '#C47B5F' }}>
                <span className="text-white text-sm font-bold">✓</span>
              </div>
              <h3 className="font-bold text-sm mb-2" style={{ color: '#1B2B4B' }}>{v.titulo}</h3>
              <p className="text-xs leading-relaxed" style={{ color: '#64748b' }}>{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CTA() {
  return (
    <section aria-label="Chamada para ação" className="py-16 px-6 text-center" style={{ background: '#1B2B4B' }}>
      <div className="max-w-2xl mx-auto">
        <h2 className="font-extrabold text-white text-3xl md:text-4xl mb-4">Venha nos conhecer</h2>
        <p className="text-sm mb-8" style={{ color: 'rgba(255,255,255,0.65)' }}>
          Primeira consulta gratuita. Sem compromisso.
        </p>
        <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className="btn-primary">
          Agendar avaliação
        </a>
      </div>
    </section>
  )
}
