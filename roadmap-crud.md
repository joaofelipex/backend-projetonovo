# Roadmap de Estudos - CRUD de Contatos Fullstack

## Fase 1: Preparação do Ambiente (2-3 dias)
### 1.1 Instalação das Ferramentas Básicas
1. Instalar Node.js (versão LTS)
   - Acessar nodejs.org
   - Baixar e instalar a versão LTS
   - Verificar instalação: `node --version`

2. Instalar Git
   - Acessar git-scm.com
   - Baixar e instalar
   - Configurar usuário e email:
     ```bash
     git config --global user.name "Seu Nome"
     git config --global user.email "seu@email.com"
     ```

3. Instalar PostgreSQL
   - Acessar postgresql.org
   - Baixar e instalar
   - Anotar a senha definida durante instalação
   - Instalar pgAdmin 4 para gerenciamento visual

4. Instalar VS Code
   - Acessar code.visualstudio.com
   - Baixar e instalar
   - Extensões recomendadas:
     - Angular Language Service
     - ESLint
     - Prettier
     - GitLens

### 1.2 Conceitos Básicos (3-4 dias)
1. HTML/CSS
   - Estrutura básica HTML
   - Principais tags
   - Seletores CSS
   - Flexbox
   - Responsividade básica

2. JavaScript Moderno
   - Variáveis (let/const)
   - Funções
   - Arrays e objetos
   - Destructuring
   - Arrow functions
   - Promises/Async/Await

3. TypeScript Básico
   - Tipos básicos
   - Interfaces
   - Classes
   - Decorators
   - Generics básicos

## Fase 2: Backend (1-2 semanas)

### 2.1 Node.js + Express Básico (3-4 dias)
1. Criar projeto Node.js
   ```bash
   mkdir backend-contacts
   cd backend-contacts
   npm init -y
   ```

2. Instalar dependências básicas
   ```bash
   npm install express typescript ts-node @types/node @types/express
   npm install -D nodemon
   ```

3. Configurar TypeScript
   ```bash
   npx tsc --init
   ```

4. Criar estrutura básica
   ```
   src/
   ├── server.ts
   ├── routes/
   ├── controllers/
   └── models/
   ```

### 2.2 TypeORM + PostgreSQL (4-5 dias)
1. Instalar TypeORM e PostgreSQL
   ```bash
   npm install typeorm reflect-metadata pg @types/pg
   ```

2. Configurar conexão com banco
   - Criar arquivo ormconfig.json
   - Configurar entidades
   - Criar migrations

3. Criar entidade Contact
   ```typescript
   @Entity()
   class Contact {
     @PrimaryGeneratedColumn()
     id: number;

     @Column()
     name: string;

     @Column()
     email: string;

     @Column()
     phone: string;
   }
   ```

4. Implementar rotas CRUD
   - GET /contacts
   - GET /contacts/:id
   - POST /contacts
   - PUT /contacts/:id
   - DELETE /contacts/:id

## Fase 3: Frontend com Angular (2-3 semanas)

### 3.1 Angular Básico (1 semana)
1. Instalar Angular CLI
   ```bash
   npm install -g @angular/cli
   ```

2. Criar projeto
   ```bash
   ng new frontend-contacts
   cd frontend-contacts
   ```

3. Estudar conceitos fundamentais
   - Componentes
   - Templates
   - Data binding
   - Diretivas
   - Pipes
   - Serviços
   - Injeção de dependência

### 3.2 Implementação do CRUD (1-2 semanas)
1. Criar componentes
   ```bash
   ng generate component contacts/contact-list
   ng generate component contacts/contact-form
   ng generate component contacts/contact-detail
   ```

2. Criar serviço
   ```bash
   ng generate service contacts/contact
   ```

3. Criar interface
   ```typescript
   interface Contact {
     id?: number;
     name: string;
     email: string;
     phone: string;
   }
   ```

4. Implementar funcionalidades
   - Listar contatos
   - Adicionar contato
   - Editar contato
   - Excluir contato
   - Validação de formulários
   - Mensagens de feedback

### 3.3 Estilização e UX (3-4 dias)
1. Implementar layout responsivo
2. Adicionar confirmações de ações
3. Implementar loading states
4. Adicionar mensagens de erro/sucesso
5. Melhorar navegação

## Fase 4: Integração e Deploy (1 semana)

### 4.1 Integração (2-3 dias)
1. Configurar CORS no backend
2. Testar integração completa
3. Tratar erros
4. Implementar interceptors no Angular

### 4.2 Deploy (2-3 dias)
1. Preparar backend para produção
2. Preparar frontend para produção
3. Configurar variáveis de ambiente
4. Deploy do banco de dados
5. Deploy do backend (Heroku/Railway)
6. Deploy do frontend (Vercel/Netlify)

## Recursos de Aprendizado

### Documentação Oficial
- [Angular.io](https://angular.io/)
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [TypeORM](https://typeorm.io/)
- [PostgreSQL](https://www.postgresql.org/docs/)

### Cursos Gratuitos Recomendados
1. Angular
   - Angular University no YouTube
   - Traversy Media Angular Crash Course

2. Node.js
   - Node.js Crash Course (Traversy Media)
   - freeCodeCamp Node.js Course

3. TypeORM
   - TypeORM Zero to Hero (Ben Awad)

### Dicas de Estudo
1. Faça um módulo por vez
2. Pratique cada conceito isoladamente
3. Use o console.log() frequentemente para debug
4. Mantenha um repositório Git do projeto
5. Faça commits frequentes
6. Documente suas dúvidas e aprendizados
7. Use o Discord da comunidade Angular para tirar dúvidas

## Tempo Estimado Total: 4-6 semanas
- Preparação: 1 semana
- Backend: 1-2 semanas
- Frontend: 2-3 semanas
- Integração e Deploy: 1 semana
