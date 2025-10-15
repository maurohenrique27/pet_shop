# 🐶 Pet Shop — Next.js Application

Uma aplicação moderna desenvolvida com **Next.js** para gestão de um pet shop, incluindo agendamentos, clientes e serviços.  
Projetada para ser escalável, tipada e de fácil manutenção, utilizando ferramentas como **Prisma**, **ESLint**, **Lefthook** e uma estrutura modular de componentes.

---

## 🚀 Tecnologias Principais

| Tecnologia     | Descrição                                                 |
| -------------- | --------------------------------------------------------- |
| **Next.js**    | Framework React para renderização híbrida (SSR/SSG)       |
| **TypeScript** | Tipagem estática e segurança em tempo de desenvolvimento  |
| **Prisma ORM** | Mapeamento de banco de dados eficiente e tipado           |
| **ESLint**     | Padronização e qualidade de código                        |
| **Lefthook**   | Hooks de Git para automatizar validações antes de commits |

---

## 🧱 Estrutura de Pastas

```bash
petshop/
├── components/             # Componentes reutilizáveis da aplicação
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── AppointmentCard.tsx
│
├── lib/
│   └── prisma.ts           # Inicialização e configuração do Prisma
│
├── types/
│   └── appointment.ts      # Tipagem para agendamentos
│
├── utils/
│   ├── appointment-utils.ts # Funções auxiliares relacionadas a agendamentos
│   ├── index.ts             # Reexporta funções utilitárias
│   └── mock-data.ts         # Dados mockados para testes e desenvolvimento
│
├── pages/                  # Rotas da aplicação Next.js
│   ├── index.tsx
│   ├── api/
│   │   └── appointments/
│   │       └── index.ts    # Endpoints relacionados a agendamentos
│   └── _app.tsx
│
├── prisma/
│   └── schema.prisma       # Definição do modelo de banco de dados
│
├── .eslintrc.js            # Configuração do ESLint
├── lefthook.yml            # Configuração dos hooks de Git
├── package.json
└── README.md
```
