import express from 'express'
import appRouter from './routes/appRoutes.js'
import userRouter from './routes/userRoutes.js'
import productRouter from './routes/productRoutes.js'
import 'dotenv/config'

const app = express()

const PORT = process.env.PORT || 3000

//Middlewares
app.use(express.json())

//Rutas
app.use('/', appRouter)
app.use('/', userRouter)
app.use('/', productRouter)

app.listen(PORT, ()=>{
    console.log(`Server running on port http://localhost:${PORT}`)
} )
