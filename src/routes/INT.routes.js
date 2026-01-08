import express from 'express'
import { INTcontrollers } from '../controllers/INT.controllers.js'

const router=express.Router()

router.post('/INT',INTcontrollers)



export default router