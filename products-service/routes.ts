import controllers from './controllers'
import express from 'express'
import passport from 'passport'

export default express.Router()
    .get(
        '/',
        passport.authenticate('jwt', { session: false }),
        controllers.getAll,
    )
    .get(
        '/:id',
        passport.authenticate('jwt', { session: false }),
        controllers.getOne,
    )
    .post(
        '/',
        passport.authenticate('jwt', { session: false }),
        controllers.create,
    )
    .put(
        '/:id',
        passport.authenticate('jwt', { session: false }),
        controllers.update,
    )
    .delete(
        '/:id',
        passport.authenticate('jwt', { session: false }),
        controllers.remove,
    )
