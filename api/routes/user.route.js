import express from 'express'
import userFunction from '../controllers/user.controller.js'

const router = express.Router()


router.get('/', userFunction)


export default router