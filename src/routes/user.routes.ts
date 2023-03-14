import express from 'express'
import controller from '../services/users/user.controller'

const router = express.Router();

router.get('/get', controller.getUsers)
router.get('/create', controller.createUser)


export = router;