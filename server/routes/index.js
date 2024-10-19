import express from 'express'
import { UserRoutes } from './UserRoutes.js'
const Router = express.Router()

Router.use('/user', UserRoutes)

export const API = Router