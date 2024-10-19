import express from 'express'
import { StatusCodes } from 'http-status-codes'
const Router = express.Router()

Router.get('/login', (req, res) => {
    res.status(StatusCodes.OK).json({ message: 'Router is already' })
})


export const UserRoutes = Router