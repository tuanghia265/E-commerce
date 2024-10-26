import jwt from 'jsonwebtoken'
import { env } from '../config/environment.js'
export const generateToken = (id) => {
    return jwt.sign({ id }, env.JWT_SECRET, {
        expiresIn: '30d',
    })
}