
import { Router } from "express";
import * as uc from './user.controller.js'
const router = Router()

router.get('/', uc.getalluser)
router.get('/', uc.adduser)


export default router