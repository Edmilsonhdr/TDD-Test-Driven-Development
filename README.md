# DateRange Value Object

> ⚠️ **Status do Projeto**: Em andamento - Ainda não finalizado

Projeto criado para demonstrar a prática de **Test Driven Development (TDD)** implementando um Value Object para manipulação de intervalos de datas.

## 📋 Descrição

Este projeto implementa a classe `DateRange`, um Value Object que representa um intervalo de datas com validações e operações úteis para trabalhar com períodos.

## 🚀 Funcionalidades

- ✅ Validação de intervalo de datas
- ✅ Cálculo do total de noites em um intervalo
- ✅ Verificação de sobreposição entre intervalos
- ✅ Validação de regras de negócio

## 🛠️ Tecnologias

- **TypeScript** - Linguagem de programação
- **Jest** - Framework de testes
- **ts-jest** - Preset para executar testes TypeScript com Jest

## 📁 Estrutura do Projeto

```
tdd/
├── src/
│   └── domain/
│       └── value_objects/
│           ├── date_range.ts      # Implementação do DateRange
│           └── date_range.test.ts # Testes unitários
├── jest.config.js
├── tsconfig.json
├── package.json
└── README.md
```

## 🧪 Regras de Negócio

### Validações

1. **Data de término deve ser posterior à data de início**: Um erro é lançado se a data de término for anterior à data de início
2. **Datas não podem ser iguais**: A data de início e término devem ser diferentes

### Métodos Disponíveis

- `getStartDate()`: Retorna a data de início
- `getEndDate()`: Retorna a data de término
- `getTotalNights()`: Calcula o número total de noites entre as datas
- `overlaps(other: DateRange)`: Verifica se o intervalo atual sobrepõe outro intervalo

## 💻 Instalação

```bash
npm install
```

## 🧪 Executando os Testes

```bash
npm test
```

## 📝 Exemplo de Uso

```typescript
import { DateRange } from './src/domain/value_objects/date_range';

// Criar um intervalo de datas
const startDate = new Date("2024-12-20");
const endDate = new Date("2024-12-25");
const dateRange = new DateRange(startDate, endDate);

// Obter o total de noites
console.log(dateRange.getTotalNights()); // 5

// Verificar sobreposição com outro intervalo
const otherRange = new DateRange(new Date("2024-12-22"), new Date("2024-12-27"));
console.log(dateRange.overlaps(otherRange)); // true
```

## 📊 Testes Implementados

O projeto possui testes que cobrem:
- ✅ Validação de datas invertidas
- ✅ Criação de instância com datas válidas
- ✅ Cálculo correto do total de noites
- ✅ Detecção de sobreposição de intervalos
- ✅ Validação de datas iguais

## 🎯 Objetivo

Este projeto foi criado como parte do curso FullCycle para demonstrar:
- Boas práticas de TDD (Test Driven Development)
- Implementação de Value Objects
- Validação de regras de negócio
- Estruturação de código seguindo Domain-Driven Design (DDD)

## 📄 Licença

ISC

