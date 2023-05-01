import dotenv from 'dotenv'
import { exec } from 'child_process'

function run() {
    dotenv.config()

    console.info('Starting services...')

    console.info('Users service')
    exec('npm run service:users', {
        cwd: './users-service',
        env: {
            ...process.env,
        },
    })

    console.info('Products service')
    exec('npm run service:products', {
        cwd: './products-service',
        env: {
            ...process.env,
        },
    })
}

run()
