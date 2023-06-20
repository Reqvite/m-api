import express from 'express'
import { ctrl } from '../../controllers/user'

export const router = express.Router()

router.post('/register', ctrl.register) 
