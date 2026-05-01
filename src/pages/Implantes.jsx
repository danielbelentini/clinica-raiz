import { Link } from 'react-router-dom'
import FAQ from '../components/FAQ'
import Depoimentos from '../components/Depoimentos'

export default function Implantes() {
  return (
    <main>
      <PageHero />
      <ListaTratamentos />
      <Processo />
      <Depoimentos />
      <FAQ />
      <Contato />
    </main>
  )
}

function PageHero() {
  return (
    <section aria-label="Página de implantes" className="py-24 px-6 text-center" style={{ background: '#EEF1F7', paddingTop: '7rem' }}>
      <div className="max-w-2xl mx-auto">
        <span className="section-tag">Implantodontia</span>
        <h1 className="font-extrabold text-4xl md:text-5xl mb-5" style={{ color: '#1B2B4B' }}>
          Nossos Tratamentos
        </h1>
        <p className="text-base leading-relaxed mb-8" style={{ color: '#64748b' }}>
          Do implante unitário à reabilitação completa da arcada — cada tratamento planejado individualmente para o seu caso.
        </p>
        <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className="btn-primary">
          Agendar avaliação gratuita
        </a>
      </div>
    </section>
  )
}

const tratamentos = [
  {
    id: 'unitario',
    title: 'Implante Unitário',
    tag: 'Mais comum',
    img: 'url(https://images.unsplash.com/photo-1593022356769-11f762e25ed9?w=800&q=80&auto=format&fit=crop)',
    desc: 'O implante unitário substitui um único dente perdido por trauma, cárie ou doença periodontal. O resultado é estético e funcional, indistinguível do dente natural.',
    beneficios: ['Não compromete dentes vizinhos', 'Coroa em cerâmica com cor personalizada', 'Resultado natural e duradouro', 'Procedimento rápido e bem tolerado'],
    duracao: '3 a 5 meses (integração + coroa definitiva)',
  },
  {
    id: 'multiplo',
    title: 'Implante Múltiplo',
    tag: 'Vários dentes',
    img: 'url(../images/implante-multiplo.png)',
    desc: 'Para pacientes que perderam dois ou mais dentes em regiões diferentes. Planejamos os implantes de forma integrada, garantindo equilíbrio estético e função mastigatória completa.',
    beneficios: ['Eliminação de próteses parciais removíveis', 'Planejamento digital integrado', 'Reabilitação por etapas ou simultânea', 'Resultado harmonioso em toda a arcada'],
    duracao: '4 a 6 meses dependendo da extensão',
  },
  {
    id: 'allon4',
    title: 'All-on-4 / All-on-6',
    tag: 'Arcada completa',
    img: 'url(https://images.unsplash.com/photo-1588776814546-ec7e0a56f5a8?w=800&q=80&auto=format&fit=crop)',
    desc: 'A solução definitiva para quem perdeu todos os dentes ou usa prótese total. Apenas 4 ou 6 implantes sustentam uma arcada completa e fixa — sem palato, sem colar e sem sair.',
    beneficios: ['Sai com dentes fixos no mesmo dia', 'Sem necessidade de enxerto ósseo na maioria dos casos', 'Mastigação normal em poucos dias', 'Transformação completa do sorriso'],
    duracao: 'Cirurgia em 1 dia + prótese definitiva em 6 meses',
  },
  {
    id: 'carga',
    title: 'Carga Imediata',
    tag: 'No mesmo dia',
    img: 'url(https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=800&q=80&auto=format&fit=crop)',
    desc: 'Para casos selecionados, é possível instalar uma coroa provisória no mesmo dia da cirurgia de implante. Saia do consultório já com o dente no lugar — estético e funcional.',
    beneficios: ['Dente no mesmo dia da cirurgia', 'Coroa provisória imediata de alta qualidade', 'Ideal para dentes anteriores', 'Protocolo rigoroso de seleção de casos'],
    duracao: '1 dia para provisório + 4 a 6 meses para definitivo',
  },
]

function ListaTratamentos() {
  return (
    <section aria-label="Lista de tratamentos" className="py-20 px-6" style={{ background: '#ffffff' }}>
      <div className="max-w-6xl mx-auto flex flex-col gap-20">
        {tratamentos.map((t, i) => (
          <article
            key={t.id}
            id={t.id}
            className={`grid md:grid-cols-2 gap-12 items-center ${i % 2 !== 0 ? 'md:[&>*:first-child]:order-2' : ''}`}
          >
            <div
              className="rounded-xl overflow-hidden h-72 bg-cover bg-center"
              style={{ backgroundImage: t.img }}
              role="img"
              aria-label={`Imagem ilustrativa de ${t.title}`}
            />
            <div>
              <span className="section-tag">{t.tag}</span>
              <h2 className="font-bold text-2xl md:text-3xl mb-4" style={{ color: '#1B2B4B' }}>{t.title}</h2>
              <p className="text-sm leading-relaxed mb-5" style={{ color: '#64748b' }}>{t.desc}</p>
              <ul className="flex flex-col gap-2 mb-5">
                {t.beneficios.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm" style={{ color: '#475569' }}>
                    <span style={{ color: '#C47B5F' }} className="font-bold mt-0.5 flex-shrink-0">✓</span>
                    {b}
                  </li>
                ))}
              </ul>
              <p className="text-xs mb-6" style={{ color: '#94a3b8' }}>
                <span className="font-semibold" style={{ color: '#64748b' }}>Duração estimada:</span> {t.duracao}
              </p>
              <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className="btn-primary">
                Quero este tratamento
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function Processo() {
  const etapas = [
    { num: '01', titulo: 'Avaliação gratuita', desc: 'Exame clínico, tomografia e análise completa do seu caso.' },
    { num: '02', titulo: 'Planejamento digital', desc: 'Simulação 3D do resultado e definição do protocolo ideal.' },
    { num: '03', titulo: 'Cirurgia de implante', desc: 'Procedimento sob anestesia local, rápido e bem tolerado.' },
    { num: '04', titulo: 'Coroa definitiva', desc: 'Instalação da prótese final após a osseointegração completa.' },
  ]
  return (
    <section aria-label="Processo de tratamento" className="py-20 px-6" style={{ background: '#EEF1F7' }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="section-tag">Como funciona</span>
          <h2 className="font-bold text-3xl md:text-4xl" style={{ color: '#1B2B4B' }}>
            Do diagnóstico ao sorriso novo
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {etapas.map((e) => (
            <div key={e.num} className="bg-white rounded-xl p-6" style={{ border: '1px solid #c7d0e0' }}>
              <div className="font-extrabold text-3xl mb-3" style={{ color: '#C47B5F' }}>{e.num}</div>
              <h3 className="font-bold text-sm mb-2" style={{ color: '#1B2B4B' }}>{e.titulo}</h3>
              <p className="text-xs leading-relaxed" style={{ color: '#64748b' }}>{e.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contato() {
  return (
    <section id="contato" aria-label="Contato e localização" className="py-20 px-6" style={{ background: '#F8F9FB' }}>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <span className="section-tag">Fale conosco</span>
          <h2 className="font-bold text-3xl md:text-4xl mb-5" style={{ color: '#1B2B4B' }}>
            Agende sua avaliação
          </h2>
          <p className="text-sm leading-relaxed mb-8" style={{ color: '#64748b' }}>
            Entre em contato e nossa equipe retorna rapidamente para agendar sua consulta gratuita.
          </p>

          <div className="flex flex-col gap-4 mb-8">
            {[
              { label: 'Endereço', val: 'Av. Principal, 1200 — Centro, São Paulo — SP' },
              { label: 'Horários', val: 'Seg a Sex: 08h às 19h · Sáb: 08h às 14h' },
              { label: 'WhatsApp', val: '(11) 99999-9999' },
            ].map((i) => (
              <div key={i.label} className="flex gap-3 items-start">
                <div className="w-8 h-8 rounded flex items-center justify-center flex-shrink-0" style={{ background: '#EEF1F7' }}>
                  <span style={{ color: '#C47B5F', fontSize: '11px' }} className="font-bold">✓</span>
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wide mb-0.5" style={{ color: '#94a3b8' }}>{i.label}</div>
                  <div className="text-sm" style={{ color: '#475569' }}>{i.val}</div>
                </div>
              </div>
            ))}
          </div>

          <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className="btn-primary flex items-center gap-2 w-fit">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Falar no WhatsApp
          </a>
        </div>

        <div className="rounded-xl overflow-hidden" style={{ height: '320px', border: '1px solid #e2e8f0' }}>
          <iframe
            title="Localização da Clínica Raiz"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps?q=-23.5667331,-46.5062812&z=15&output=embed"
          />
        </div>
      </div>
    </section>
  )
}
