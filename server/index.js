const express = require('express')

const PORT = process.env.PORT || 3001

const app = express();

app.get('/api', (request, response) => {
  response.json({ message: "Hello from server!" })
})



app.listen(PORT, () => {

  console.log(`\n\n\t 🚀  Server listening on ${PORT} 💯 `)
})