import express from 'express'
import { StatusCodes } from 'http-status-codes'
import User from '../models/UserModel.js'
import asyncHandler from 'express-async-handler'
import { generateToken } from '../utils/GenerateToken.js'
const Router = express.Router()
//Login
Router.post('/login',
    asyncHandler(async (req, res) => {
        const { email, pwd } = req.body;
        const user = await User.findOne({ email })

        if (user && await (user.matchPassword(pwd))) {
            res.json({
                __id: user.__id,
                fullName: user.fullName,
                email: user.email,
                telephone: user.telephone,
                avatar: user.telephone,
                isAdmin: user.isAdmin,
                createdAt: user.createdAt,
                token: generateToken(user.__id)
            })
        } else {
            res.status(StatusCodes.UNAUTHORIZED)
            throw new Error('Invalid email or password')
        }
    })
)

//Register
Router.post('/register',
    asyncHandler(async (req, res) => {
        const { email, pwd, fullName, telephone, avatar } = req.body;

        const userExisted = await User.findOne({ email })
        if (userExisted)
            res.status(StatusCodes.BAD_REQUEST)
        else {
            const user = await User.create({
                email,
                pwd,
                fullName,
                telephone,
                avatar
            })
            if (user) {
                res.status(StatusCodes.CREATED).json({
                    email: user.email,
                    pwd: user.pwd,
                    telephone: user.telephone,
                    avatar: user.avatar,
                    fullName: user.fullName,
                    isAdmin: user.isAdmin,
                    token: generateToken(user.__id)
                })
            } else {
                res.status(StatusCodes.BAD_REQUEST)
                throw new Error('Invalid User Data')
            }
        }
    })
)


export const UserRoutes = Router