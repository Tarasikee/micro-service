import controllers from './controllers'
import express from 'express'
import passport from 'passport'

export default express.Router()
    .post(
        '/login',
        controllers.login,
    )
    .post(
        '/register',
        controllers.register,
    )
    .post(
        '/check',
        passport.authenticate('jwt', { session: false }),
        controllers.check,
    )
