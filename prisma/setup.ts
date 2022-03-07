import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// const users = [
//   {
//     email: 'nicolas@email.com',
//     name: 'Nicolas'
//   },
//   {
//     email: 'rinor@email.com',
//     name: 'Rinor'
//   },
//   {
//     email: 'arita@email.com',
//     name: 'Arita'
//   }
// ]

// const posts = [
//   {
//     title: 'My first post',
//     content: 'Welcome to my first post',
//     userId: 1
//   },
//   {
//     title: 'My second post',
//     content: 'Welcome to my second post',
//     userId: 1
//   },
//   {
//     title: 'This is cool',
//     content: 'My first post, too!',
//     userId: 2
//   }
// ]

const comments = [
  {
    content: 'First comment!',
    userId: 1,
    postId: 1
  },
  {
    content: 'Second comment!',
    userId: 1,
    postId: 2
  },
  {
    content: 'Third comment!',
    userId: 2,
    postId: 1
  },
  {
    content: 'Fourth comment!',
    userId: 3,
    postId: 1
  }
]

async function createStuff () {
  // for (const user of users) {
  //   await prisma.user.create({ data: user })
  // }
  // for (const post of posts) {
  //   await prisma.post.create({ data: post })
  // }
  for (const comment of comments) {
    await prisma.comment.create({ data: comment })
  }
}

createStuff()
