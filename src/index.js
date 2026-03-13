import express from 'express'
import appRouter from './routes/appRoutes.js'
import 'dotenv/config'

const app = express()

const PORT = process.env.PORT || 3000

//Rutas
app.use('/', appRouter)

app.listen(PORT, ()=>{
    console.log(`Server running on port http://localhost:${PORT}`)
} )
