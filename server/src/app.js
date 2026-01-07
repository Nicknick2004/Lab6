const express = require('express')
const app = express()
const port = 8081

app.use(express.json())

// 🔹 ทดสอบว่า server ทำงาน
app.get('/', (req, res) => {
  res.send('CoffeeShop API is running')
})

// 🔹 mock data (แทน database ชั่วคราว)
let coffees = [
  {
    id: 1,
    name: 'Americano',
    price: 50,
    type: 'iced',
    description: 'Dark and Strong (iced)'
  }
]

// 🔹 GET ทั้งหมด
app.get('/api/coffees', (req, res) => {
  res.json(coffees)
})

// 🔹 GET ตาม id
app.get('/api/coffee/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const coffee = coffees.find(c => c.id === id)

  if (!coffee) {
    return res.status(404).json({ message: 'Coffee not found' })
  }

  res.json(coffee)
})

// 🔹 POST เพิ่มกาแฟ
app.post('/api/coffees', (req, res) => {
  const newCoffee = {
    id: coffees.length + 1,
    ...req.body
  }

  coffees.push(newCoffee)
  res.status(201).json(newCoffee)
})

// 🔹 PUT แก้ไขกาแฟ
app.put('/api/coffee/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const index = coffees.findIndex(c => c.id === id)

  if (index === -1) {
    return res.status(404).json({ message: 'Coffee not found' })
  }

  coffees[index] = { id, ...req.body }
  res.json(coffees[index])
})

// 🔹 DELETE ลบกาแฟ
app.delete('/api/coffee/:id', (req, res) => {
  const id = parseInt(req.params.id)
  coffees = coffees.filter(c => c.id !== id)

  res.json({ message: 'Coffee deleted' })
})

app.listen(port, () => {
  console.log(`CoffeeShop Server running on port ${port}`)
})
