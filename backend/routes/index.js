import express from 'express'
import { Router } from 'express'
import { LoginController, SignupController } from '../controller/authController.js'
import { sendEmail } from '../controller/email.js'


export const route = express.Router()

route.post('/createUser', SignupController)

route.post('/Login', LoginController)

route.post('/sendEmail', sendEmail)