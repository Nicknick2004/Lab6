// src/routes.js
const CoffeeController = require('./controllers/CoffeeController')

module.exports = (app, prefix = '') => {
  app.get(`${prefix}/coffees`, CoffeeController.index)
  app.post(`${prefix}/coffee`, CoffeeController.create)
  app.put(`${prefix}/coffee/:coffeeId`, CoffeeController.put)
  app.delete(`${prefix}/coffee/:coffeeId`, CoffeeController.remove)
  app.get(`${prefix}/coffee/:coffeeId`, CoffeeController.show)
}
