import { useState, useRef } from 'react'

const faqs = [
  {
    q: 'O implante dentário dói?',
    a: 'O procedimento é realizado com anestesia local, então durante a cirurgia você não sente dor. Após o efeito passar, é comum um leve desconforto nos primeiros 2 a 3 dias, controlado com analgésicos comuns. A maioria dos pacientes fica surpreso com o quão tranquilo é o pós-operatório.',
  },
  {
    q: 'Quanto tempo dura um implante dentário?',
    a: 'Com os cuidados corretos — escovação adequada, fio dental e visitas regulares ao dentista —, um implante pode durar a vida toda. Os titânio utilizados hoje são altamente biocompatíveis e resistentes, com estudos mostrando durabilidade de mais de 25 anos em média.',
  },
  {
    q: 'Qualquer pessoa pode fazer implante?',
    a: 'A grande maioria dos adultos é candidata ao implante. Diabéticos controlados, hipertensos e fumantes podem fazer, mas exigem avaliação mais cuidadosa. Pacientes com osteoporose severa ou que fazem uso de alguns medicamentos podem precisar de protocolos especiais. Por isso a avaliação prévia é fundamental.',
  },
  {
    q: 'Quanto tempo leva o tratamento completo?',
    a: 'O tempo varia conforme o caso. Em geral, entre a colocação do implante e a instalação da coroa definitiva, leva de 3 a 6 meses — período necessário para o implante se integrar ao osso (osseointegração). Em casos selecionados, é possível colocar uma coroa provisória no mesmo dia da cirurgia.',
  },
  {
    q: 'O implante fica igual ao dente natural?',
    a: 'Visualmente sim — a coroa é confeccionada em cerâmica e individualizada para combinar com a cor e o formato dos seus outros dentes. Funcionalmente também: você mastiga, fala e sorri normalmente. Muitos pacientes esquecem que têm implante após alguns meses de uso.',
  },
  {
    q: 'É possível parcelar o implante?',
    a: 'Sim. Na Clínica Raiz oferecemos diversas formas de pagamento, incluindo parcelamento em até 24 vezes no cartão. Também trabalhamos com convênios odontológicos e financiamento. Na consulta de avaliação apresentamos todas as opções sem compromisso.',
  },
]

function FaqItem({ faq, isOpen, onToggle }) {
  const ref = useRef(null)
  return (
    <div
      className="rounded-xl overflow-hidden transition-colors duration-200"
      style={{ border: `1px solid ${isOpen ? '#C47B5F' : '#e2e8f0'}` }}
    >
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full flex items-center justify-between px-5 py-4 text-left cursor-pointer border-0 transition-colors duration-200"
        style={{ background: isOpen ? '#FDF5F2' : '#ffffff' }}
      >
        <span className="text-sm font-semibold pr-4" style={{ color: isOpen ? '#A05E44' : '#1B2B4B' }}>
          {faq.q}
        </span>
        <span
          className="text-lg font-light flex-shrink-0 transition-transform duration-300"
          style={{ color: '#C47B5F', transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}
        >+</span>
      </button>

      <div
        ref={ref}
        style={{
          maxHeight: isOpen ? ref.current?.scrollHeight + 'px' : '0px',
          transition: 'max-height 0.35s ease',
          overflow: 'hidden',
        }}
      >
        <div className="px-5 pt-3 pb-5" style={{ background: '#ffffff' }}>
          <p className="text-sm leading-relaxed" style={{ color: '#64748b' }}>{faq.a}</p>
        </div>
      </div>
    </div>
  )
}

export default function FAQ() {
  const [open, setOpen] = useState(null)

  return (
    <section aria-label="Perguntas frequentes" className="py-20 px-6" style={{ background: '#ffffff' }}>
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <span className="section-tag">Dúvidas frequentes</span>
          <h2 className="font-bold text-3xl md:text-4xl" style={{ color: '#1B2B4B' }}>
            Perguntas sobre implantes
          </h2>
        </div>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <FaqItem
              key={i}
              faq={faq}
              isOpen={open === i}
              onToggle={() => setOpen(open === i ? null : i)}
            />
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-sm mb-4" style={{ color: '#64748b' }}>Ainda tem dúvidas? Fale com nossa equipe.</p>
          <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className="btn-primary">
            Falar pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
