const express = require("express")

const adminController = require("../controllers/admin-controller")
const authMiddleware = require("../middlewares/auth-middleware")
const adminMiddleware = require("../middlewares/admin-middleware")
const router = express.Router()

router.route("/users").get(authMiddleware ,adminMiddleware,adminController.getAllusers)
router.route("/users/:id").get(authMiddleware ,adminMiddleware,adminController.getUserById)
router.route("/users/delete/:id").delete(authMiddleware,adminMiddleware,adminController.deleteUser)
router.route("/contacts").get(authMiddleware,adminMiddleware, adminController.getAllContacts)

module.exports = router 