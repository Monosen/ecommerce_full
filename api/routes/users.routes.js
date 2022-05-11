const express = require('express')

// Controllers
const {
  createUser,
  getUserById,
  updateUser,
  disableUserAccount,
  loginUser
} = require('../controllers/users.controller')

// Middlewares
const { protectSession } = require('../middlewares/auth.middleware')
const {
  createUserValidations,
  updateUserValidations,
  loginUserValidations,
  validateResult
} = require('../middlewares/validators.middleware')

const router = express.Router()

router
  .route('/')
  .post(createUserValidations, validateResult, createUser)
  .patch(protectSession, updateUserValidations, validateResult, updateUser)
  .delete(protectSession, disableUserAccount)

router.post('/login', loginUserValidations, validateResult, loginUser)

router.get('/get-user', protectSession, getUserById)

module.exports = { userRouter: router }
