import express from 'express'
import cors from 'cors'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({
  log: ['query', 'info', 'warn', 'error']
})

const app = express()
app.use(cors())
app.use(express.json())

app.get('/users', async (req, res) => {
  const users = await prisma.user.findMany({
    include: { posts: { include: { comments: true } } }
  })
  res.send(users)
})

app.get('/users/:id', async (req, res) => {
  const id = Number(req.params.id)

  const user = await prisma.user.findFirst({
    where: { id: id },
    include: { posts: { include: { comments: true } } }
  })

  if (user) {
    res.send(user)
  } else {
    res.status(404).send({ error: 'User not found.' })
  }
})

app.get('/posts', async (req, res) => {
  const posts = await prisma.post.findMany({
    include: { user: true, comments: true }
  })
  res.send(posts)
})

app.get('/posts', async (req, res) => {
  const posts = await prisma.post.findMany()
  res.send(posts)
})

app.listen(4000, () => {
  console.log(`Server up: http://localhost:4000`)
})
