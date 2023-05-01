import express from 'express'
import mongoose from 'mongoose'
import passport from 'passport'
import passportInit from './passport'

async function basicInit(app: ReturnType<typeof express>) {
    await mongoose.connect(process.env.MONGO_URI as string)

    app.use(passport.initialize())
    passportInit(passport, process.env.JWT_ACCESS_SECRET as string)
    app.use(express.json())
    app.use(express.urlencoded({ extended: true }))
}

export default basicInit
