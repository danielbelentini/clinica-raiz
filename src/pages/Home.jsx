import { Link } from 'react-router-dom'
import Depoimentos from '../components/Depoimentos'
import FAQ from '../components/FAQ'

export default function Home() {
  return (
    <main>
      <Hero />
      <Numeros />
      <Servicos />
      <Diferenciais />
      <Depoimentos />
      <FAQ />
      <CTA />
    </main>
  )
}

function Hero() {
  return (
    <section
      aria-label="Apresentação da clínica"
      className="relative min-h-screen flex items-center px-6"
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=1600&q=80&auto=format&fit=crop)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0" style={{ background: 'linear-gradient(100deg, rgba(15,30,53,0.93) 0%, rgba(15,30,53,0.75) 60%, rgba(15,30,53,0.4) 100%)' }} />

      <div className="relative z-10 max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center py-28">
        <div>
          <span className="section-tag">Implantodontia especializada</span>
          <h1 className="font-extrabold text-white leading-tight mb-5" style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)' }}>
            Recupere seus dentes.<br />
            <span style={{ color: '#C47B5F' }}>Recupere sua vida.</span>
          </h1>
          <p className="text-base leading-relaxed mb-8 max-w-md" style={{ color: 'rgba(255,255,255,0.75)' }}>
            Somos especialistas em implantes dentários com mais de 10 anos de experiência. Tecnologia avançada, equipe qualificada e resultado que dura para sempre.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className="btn-primary flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Avaliação gratuita
            </a>
            <Link to="/implantes" className="btn-outline-light">Conhecer tratamentos</Link>
          </div>
        </div>

        {/* Card lateral */}
        <div className="hidden md:flex justify-end">
          <div className="bg-white rounded-xl p-7 max-w-xs w-full" style={{ boxShadow: '0 8px 40px rgba(0,0,0,0.18)' }}>
            <div className="w-11 h-11 rounded flex items-center justify-center mb-4" style={{ background: '#EEF1F7' }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="#1B2B4B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <h2 className="font-bold text-lg mb-2" style={{ color: '#1B2B4B' }}>Avaliação Gratuita</h2>
            <p className="text-sm leading-relaxed mb-5" style={{ color: '#64748b' }}>
              Venha descobrir se você é candidato ao implante sem pagar nada pela consulta inicial.
            </p>
            <ul className="flex flex-col gap-2">
              {['Diagnóstico completo', 'Plano de tratamento', 'Simulação do resultado', 'Parcelamento facilitado'].map((i) => (
                <li key={i} className="flex items-center gap-2 text-sm" style={{ color: '#475569' }}>
                  <span style={{ color: '#C47B5F' }} className="font-bold">✓</span> {i}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

function Numeros() {
  const items = [
    { num: '10+', label: 'Anos de experiência' },
    { num: '4.000+', label: 'Implantes realizados' },
    { num: '98%', label: 'Taxa de sucesso' },
    { num: '24x', label: 'Parcelamento' },
  ]
  return (
    <section aria-label="Números da clínica" className="py-12 px-6" style={{ background: '#1B2B4B' }}>
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {items.map((i) => (
          <div key={i.label}>
            <div className="font-extrabold text-3xl md:text-4xl mb-1" style={{ color: '#C47B5F' }}>{i.num}</div>
            <div className="text-xs tracking-wide uppercase" style={{ color: 'rgba(255,255,255,0.6)' }}>{i.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

function Servicos() {
  const items = [
    { title: 'Implante Unitário', desc: 'Reposição de um único dente perdido com resultado idêntico ao natural.' },
    { title: 'Implante Múltiplo', desc: 'Solução para quem perdeu vários dentes, sem precisar de prótese removível.' },
    { title: 'All-on-4 / All-on-6', desc: 'Arcada completa fixa sobre implantes. Saia com dentes novos em um dia.' },
    { title: 'Carga Imediata', desc: 'Implante e coroa provisória no mesmo dia, para casos selecionados.' },
  ]
  return (
    <section aria-label="Serviços de implantodontia" className="py-20 px-6" style={{ background: '#F8F9FB' }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="section-tag">Tratamentos</span>
          <h2 className="font-bold text-3xl md:text-4xl" style={{ color: '#1B2B4B' }}>
            Soluções para cada caso
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((s) => (
            <article
              key={s.title}
              className="bg-white rounded-xl p-6 transition-all duration-300 group cursor-pointer"
              style={{ border: '1px solid #EEF1F7' }}
              onMouseEnter={e => e.currentTarget.style.borderColor = '#C47B5F'}
              onMouseLeave={e => e.currentTarget.style.borderColor = '#EEF1F7'}
            >
              <div className="w-9 h-9 rounded flex items-center justify-center mb-4 transition-all duration-300" style={{ background: '#EEF1F7' }}>
                <span style={{ color: '#C47B5F' }} className="font-bold text-sm">+</span>
              </div>
              <h3 className="font-bold text-base mb-2" style={{ color: '#1B2B4B' }}>{s.title}</h3>
              <p className="text-sm leading-relaxed mb-4" style={{ color: '#64748b' }}>{s.desc}</p>
              <Link to="/implantes" className="text-xs font-semibold no-underline transition-colors" style={{ color: '#C47B5F' }}>
                Saiba mais →
              </Link>
            </article>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/implantes" className="btn-primary">Ver todos os tratamentos</Link>
        </div>
      </div>
    </section>
  )
}

function Diferenciais() {
  const items = [
    { title: 'Tecnologia 3D', desc: 'Planejamento digital com tomografia e guias cirúrgicos para máxima precisão.' },
    { title: 'Equipe especializada', desc: 'Implantodontistas com pós-graduação e atualização constante.' },
    { title: 'Ambiente seguro', desc: 'Esterilização rigorosa, materiais certificados e protocolos internacionais.' },
    { title: 'Parcelamento real', desc: 'Até 24x no cartão. Trabalhamos com convênios e financiamento.' },
  ]
  return (
    <section aria-label="Diferenciais da clínica" className="py-20 px-6" style={{ background: '#ffffff' }}>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <span className="section-tag">Por que a Clínica Raiz</span>
          <h2 className="font-bold text-3xl md:text-4xl mb-5" style={{ color: '#1B2B4B' }}>
            Implante feito do jeito certo
          </h2>
          <p className="text-sm leading-relaxed mb-8" style={{ color: '#64748b' }}>
            Não tratamos implante como procedimento em série. Cada caso é planejado individualmente, com avaliação completa e acompanhamento até o resultado final.
          </p>
          <Link to="/sobre" className="btn-outline">Conhecer nossa equipe</Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {items.map((d) => (
            <div key={d.title} className="rounded-xl p-5" style={{ background: '#EEF1F7' }}>
              <div className="w-8 h-8 rounded flex items-center justify-center mb-3" style={{ background: '#1B2B4B' }}>
                <span className="text-white text-xs font-bold">✓</span>
              </div>
              <h3 className="font-bold text-sm mb-1" style={{ color: '#1B2B4B' }}>{d.title}</h3>
              <p className="text-xs leading-relaxed" style={{ color: '#64748b' }}>{d.desc}</p>
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
        <h2 className="font-extrabold text-white text-3xl md:text-4xl mb-4">
          Pronto para ter seu sorriso de volta?
        </h2>
        <p className="text-sm mb-8" style={{ color: 'rgba(255,255,255,0.65)' }}>
          Agende sua avaliação gratuita e descubra o melhor tratamento para o seu caso.
        </p>
        <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className="btn-primary">
          Agendar pelo WhatsApp
        </a>
      </div>
    </section>
  )
}
