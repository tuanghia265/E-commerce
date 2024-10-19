import 'dotenv/config'

export const env = {
    MONGODB_URI: process.env.MONGODB_URI,
    APP_PORT: process.env.APP_PORT,
    APP_HOST: process.env.APP_HOST,
    AUTHOR: process.env.AUTHOR,
    DB_NAME: process.env.DB_NAME
}