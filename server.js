import express from 'express'
import cors from 'cors'
import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()

const app = express()
app.use(express.json())
app.use(cors())

// Função utilitária para serializar BigInt em string
function serializeBigInt(obj) {
  return JSON.parse(
    JSON.stringify(obj, (key, value) =>
      typeof value === "bigint" ? value.toString() : value
    )
  );
}

app.post('/usuarios', async (req, res) => {
  try {

  console.log("📩 Dados recebidos no POST /usuarios:", req.body) // <--- debug

    const user = await prisma.user.create({
      data: {
        email: req.body.email,
        age: BigInt(req.body.age), // Prisma espera BigInt
        name: req.body.name,
      },
    });

    res.status(201).json({
      message: "Usuário criado com sucesso!",
      user: serializeBigInt(user),
    });
  } catch (error) {
    console.error("❌ Erro no POST /usuarios:", error) // <-- Mostra o erro completo
    res.status(500).json({ error: error.message }) // <-- Retorna a mensagem real
  }
});


app.get('/usuarios', async (req, res) => {
  try {
    const users = await prisma.user.findMany()
    res.status(200).json(serializeBigInt(users))
  } catch (error) {
    console.error("❌ Erro no GET /usuarios:", error)
    res.status(500).json({ error: "Erro ao buscar usuários" })
  }
})



app.put('/usuarios/:id', async (req, res) => {
  try {
    const user = await prisma.user.update({
      where: { id: req.params.id },
      data: {
        email: req.body.email,
        age: BigInt(req.body.age),
        name: req.body.name
      }
    });

    res.status(200).json({
      message: "Usuário atualizado com sucesso!",
      user: serializeBigInt(user)
    });
  } catch (error) {
    console.error("❌ Erro no PUT /usuarios:", error);
    res.status(500).json({ error: "Erro ao atualizar usuário" });
  }
});




app.delete('/usuarios/:id', async (req, res) => {
  try {
    const id = req.params.id;

    // só verifique se é string não vazia
    if (!id) {
      return res.status(400).json({ error: "ID inválido" });
    }

    await prisma.user.delete({
      where: { id }, // string direto
    });

    res.status(200).json({ message: "Usuário deletado com sucesso!" });
  } catch (error) {
    console.error("❌ Erro no DELETE /usuarios:", error);
    res.status(500).json({ error: error.message });
  }
});




app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000 🚀")
})