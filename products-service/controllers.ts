import { Request, Response } from 'express'
import errorHandler from 'utils/error-handler'
import productSchema from './model'

type User = {
    id?: string
}

async function getAll(req: Request, res: Response) {
    try {
        const products = await productSchema.find({
            user: (req.user as User)?.id,
        })

        return res.json({
            success: true,
            data: products,
        })
    } catch (_e: unknown) {
        errorHandler(res, _e as Error)
    }
}

async function getOne(req: Request, res: Response) {
    try {
        const product = await productSchema.findOne({
            _id: req.params.id,
            user: (req.user as User)?.id,
        })

        return res.json({
            success: true,
            data: product,
        })
    } catch (_e: unknown) {
        errorHandler(res, _e as Error)
    }
}

async function create(req: Request, res: Response) {
    try {
        const product = await productSchema.create({
            ...req.body,
            user: (req.user as User)?.id,
        })

        return res.json({
            success: true,
            data: product,
        })
    } catch (_e: unknown) {
        errorHandler(res, _e as Error)
    }
}

async function update(req: Request, res: Response) {
    try {
        const product = await productSchema.findOneAndUpdate({
            _id: req.params.id,
            user: (req.user as User)?.id,
        }, req.body, {
            new: true,
        })

        return res.json({
            success: true,
            data: product,
        })
    } catch (_e: unknown) {
        errorHandler(res, _e as Error)
    }
}

async function remove(req: Request, res: Response) {
    try {
        await productSchema.findOneAndDelete({
            _id: req.params.id,
            user: (req.user as User)?.id,
        })

        return res.json({
            success: true,
        })
    } catch (_e: unknown) {
        errorHandler(res, _e as Error)
    }
}

export default { getAll, getOne, create, update, remove }
