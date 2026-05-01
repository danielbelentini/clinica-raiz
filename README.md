# Clínica Raiz — Site Implantodontia

Vite + React + Tailwind CSS + React Router

## Como rodar

```bash
npm install
npm run dev
```

Acesse: http://localhost:5173

## Estrutura

```
src/
├── App.jsx                  # AnimatedRoutes (fade entre páginas)
├── index.css                # Estilos globais + botões
├── main.jsx
├── components/
│   ├── Navbar.jsx           # Nav fixa + menu mobile
│   ├── Footer.jsx
│   ├── Depoimentos.jsx      # Carrossel: 3/página desktop, 1/vez mobile
│   ├── FAQ.jsx              # Accordion com transição suave
│   └── WhatsAppFloat.jsx    # Botão flutuante verde
└── pages/
    ├── Home.jsx
    ├── Sobre.jsx
    └── Implantes.jsx        # Tratamentos + contato + mapa
```

## Personalização

| O que mudar | Onde |
|---|---|
| Nome da clínica | Navbar, Footer, index.html |
| WhatsApp | Todos os arquivos — buscar `5511999999999` |
| Endereço e horários | `Implantes.jsx` (seção Contato) e `Footer.jsx` |
| Coordenadas do mapa | URL do iframe em `Implantes.jsx` |
| Cores | `tailwind.config.js` — variáveis `navy` e `copper` |
| SEO | `index.html` — title, meta description, og tags |
