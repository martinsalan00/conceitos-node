# ⚙️✨ Backend – Gerenciamento de Usuários  

🚀 **API REST poderosa para cadastro, listagem, atualização e exclusão de usuários!**  

---

## 🧩 **Sobre o Projeto**  
Este é o 💻 **backend** do sistema.  
Ele é responsável por fornecer todos os dados para o frontend e manipular as informações no banco.  

📚 **Stack Principal**:
- 🟩 **Node.js** + **Express**  
- 🗄️ **MongoDB** com **Prisma**  
- 🔐 Suporte a CORS e JSON  

---

## 🛠️ **Funcionalidades da API**  

| 🚦 Método | 🛣️ Rota           | 📝 Descrição                    |
|-----------|------------------|--------------------------------|
| ➕ POST   | `/usuarios`       | Criar um novo usuário           |
| 📄 GET    | `/usuarios`       | Listar todos os usuários        |
| ✏️ PUT    | `/usuarios/:id`   | Atualizar um usuário existente  |
| 🗑️ DELETE | `/usuarios/:id`   | Excluir um usuário existente    |

---

## 📦 **Como Rodar Localmente**  

1️⃣ Clone o repositório.  
2️⃣ Instale as dependências com `npm install`.  
3️⃣ Crie um arquivo `.env` com a string de conexão do MongoDB.  
4️⃣ Gere o cliente do Prisma com `npx prisma generate`.  
5️⃣ Rode o servidor com `npm run dev` e acesse `http://localhost:3000`.  

💡 **Dica:** O servidor responde automaticamente em JSON e lida com BigInt.

---
