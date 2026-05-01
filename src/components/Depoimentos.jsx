import { useState } from 'react'

const depoimentos = [
  {
    initials: 'MS',
    name: 'Marcos Silveira',
    role: 'Paciente há 2 anos',
    text: 'Perdi três dentes em um acidente e fiquei anos sem conseguir comer direito. Fiz os implantes na Clínica Raiz e hoje não me lembro mais como era ter esse problema. O processo foi tranquilo, bem explicado, e o resultado ficou idêntico ao dente natural.',
  },
  {
    initials: 'RC',
    name: 'Regina Campos',
    role: 'Paciente há 1 ano',
    text: 'Tinha muito medo de implante achando que seria uma cirurgia sofrida. Não foi nada disso. Fiz dois implantes aqui, fiquei com anestesia local sem sentir nada e no dia seguinte já estava trabalhando normalmente. Me arrependo de ter esperado tanto.',
  },
  {
    initials: 'FN',
    name: 'Fernando Nunes',
    role: 'Paciente há 3 anos',
    text: 'Vim com a prótese total caindo toda hora, uma situação bem constrangedora. O Dr. me indicou o protocolo All-on-4 e em dois dias eu já estava com dentes fixos. Melhor investimento que fiz na vida. Recomendo a clínica sem pensar duas vezes.',
  },
  {
    initials: 'AP',
    name: 'Adriana Pinto',
    role: 'Paciente há 8 meses',
    text: 'Fui indicada por uma amiga e não me arrependo. Atendimento impecável desde a avaliação até a colocação da coroa. Me explicaram tudo com detalhes, o parcelamento foi ótimo e o resultado ficou lindo. Finalmente consigo sorrir sem vergonha.',
  },
  {
    initials: 'GT',
    name: 'Gustavo Torres',
    role: 'Paciente há 1 ano e meio',
    text: 'Fiz implante unitário no dente da frente, que é o mais complicado esteticamente. Fiquei preocupado se ia ficar natural. Ficou perfeito — a cor, o formato, tudo igual ao dente do lado. Profissionalismo de alto nível nessa clínica.',
  },
  {
    initials: 'LB',
    name: 'Luciana Braga',
    role: 'Paciente há 6 meses',
    text: 'Vim fazer avaliação para um implante e descobri que precisava de dois. Confesso que o valor me assustou no começo, mas o parcelamento cabe no bolso e valeu cada centavo. Minha mastigação melhorou 100% e não tenho mais dor de cabeça por conta da mordida errada.',
  },
]

function Card({ d }) {
  return (
    <article className="bg-white rounded-xl p-6 h-full flex flex-col justify-between" style={{ border: '1px solid #EEF1F7', boxShadow: '0 2px 12px rgba(27,43,75,0.06)' }}>
      <div>
        <div className="flex gap-0.5 mb-4">
          {[...Array(5)].map((_, i) => <span key={i} style={{ color: '#C47B5F' }} className="text-base">★</span>)}
        </div>
        <p className="text-sm leading-relaxed mb-5 italic" style={{ color: '#475569' }}>"{d.text}"</p>
      </div>
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0" style={{ background: '#EEF1F7', color: '#1B2B4B', border: '1px solid #c7d0e0' }}>
          {d.initials}
        </div>
        <div>
          <div className="text-sm font-semibold" style={{ color: '#1B2B4B' }}>{d.name}</div>
          <div className="text-xs" style={{ color: '#94a3b8' }}>{d.role}</div>
        </div>
      </div>
    </article>
  )
}

function Controls({ current, total, onChange }) {
  return (
    <div className="flex items-center justify-center gap-4 mt-8">
      <button
        onClick={() => onChange(Math.max(0, current - 1))}
        disabled={current === 0}
        aria-label="Anterior"
        className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 border-2 cursor-pointer"
        style={{
          borderColor: current > 0 ? '#1B2B4B' : '#e2e8f0',
          color: current > 0 ? '#1B2B4B' : '#cbd5e1',
          background: 'transparent',
        }}
      >←</button>

      <div className="flex gap-2">
        {Array.from({ length: total }).map((_, i) => (
          <button
            key={i}
            onClick={() => onChange(i)}
            aria-label={`Ir para página ${i + 1}`}
            className="h-2 rounded-full transition-all duration-300 border-0 cursor-pointer p-0"
            style={{ width: current === i ? '20px' : '8px', background: current === i ? '#1B2B4B' : '#cbd5e1' }}
          />
        ))}
      </div>

      <button
        onClick={() => onChange(Math.min(total - 1, current + 1))}
        disabled={current === total - 1}
        aria-label="Próximo"
        className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 border-2 cursor-pointer"
        style={{
          borderColor: current < total - 1 ? '#1B2B4B' : '#e2e8f0',
          color: current < total - 1 ? '#1B2B4B' : '#cbd5e1',
          background: 'transparent',
        }}
      >→</button>
    </div>
  )
}

export default function Depoimentos() {
  const perPage = 3
  const totalPages = Math.ceil(depoimentos.length / perPage)
  const [desktopPage, setDesktopPage] = useState(0)
  const [mobilePage, setMobilePage] = useState(0)

  const visibleDesktop = depoimentos.slice(desktopPage * perPage, desktopPage * perPage + perPage)

  return (
    <section aria-label="Depoimentos de pacientes" className="py-20 px-6" style={{ background: '#F8F9FB' }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="section-tag">Depoimentos</span>
          <h2 className="font-bold text-3xl md:text-4xl" style={{ color: '#1B2B4B' }}>
            Quem já transformou o sorriso
          </h2>
        </div>

        {/* Desktop */}
        <div className="hidden md:block">
          <div className="grid grid-cols-3 gap-5">
            {visibleDesktop.map((d, i) => <Card key={desktopPage * perPage + i} d={d} />)}
          </div>
          <Controls current={desktopPage} total={totalPages} onChange={setDesktopPage} />
        </div>

        {/* Mobile — 1 por vez, todos os 6 */}
        <div className="md:hidden">
          <Card d={depoimentos[mobilePage]} />
          <Controls current={mobilePage} total={depoimentos.length} onChange={setMobilePage} />
        </div>
      </div>
    </section>
  )
}
