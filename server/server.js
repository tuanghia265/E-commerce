import express from 'express'
import { env } from './config/environment.js'
import connectDatabase from './config/MongoDB.js'
import { API } from './routes/index.js'
const app = express()
app.use(express.json())
connectDatabase()
app.use('/api', API)
app.listen(env.APP_PORT, env.APP_HOST, console.log(`Server is running on http://${env.APP_HOST}:${env.APP_PORT}, powered by ${env.AUTHOR}`))
