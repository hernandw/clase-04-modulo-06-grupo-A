import express from 'express'
import appRouter from './routes/appRoutes.js'
import userRouter from './routes/userRoutes.js'
import productRouter from './routes/productRoutes.js'
import exphbs from 'express-handlebars'
import path from 'path'
import 'dotenv/config'

const __dirname =path.resolve()

const app = express()

const PORT = process.env.PORT || 3000

//Middlewares
app.use(express.json())

//Configuracion de Handlebars
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'src/views'))

app.engine('hbs', exphbs.engine({
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, 'src/views/layouts'),
    extname: '.hbs'
}))

//Rutas
app.use('/', appRouter)
app.use('/', userRouter)
app.use('/', productRouter)

app.listen(PORT, ()=>{
    console.log(`Server running on port http://localhost:${PORT}`)
} )


