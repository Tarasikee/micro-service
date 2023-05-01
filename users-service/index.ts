import basicInit from 'utils/basic-init'
import express from 'express'
import router from './routes'

async function init() {
    const app = express()
    await basicInit(app)
    const port = process.env.USERS_SERVICE

    //routes
    app.use('/users', router)

    app.listen(port, () => {
        console.info(`Users service is listening on port ${port}`)
    })
}

init().catch(console.error)
