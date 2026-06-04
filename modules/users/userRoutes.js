var express = require("express");
var router = express.Router();
const userController = require("./userController");
const { registerValidator, loginValidator, profileUpdateValidator } = require("./userValidator");
const { isAuthenticated } = require("../../middlewares/auth");
const profileMulter = require("../../middlewares/profileMulter");
const asyncHandler = require("../../middlewares/asyncHandler");

router.get("/register", userController.renderRegisterForm);
router.post("/register", registerValidator, asyncHandler(userController.register)); // Adicionado validator e asyncHandler
router.get("/login", userController.renderLoginForm);
router.post("/login", loginValidator, asyncHandler(userController.login)); // Adicionado validator e asyncHandler
router.get("/logout", userController.logout);

// Rotas de perfil
router.get("/profile/edit", isAuthenticated, asyncHandler(userController.renderEditProfile)); // Adicionado asyncHandler
router.post("/profile/edit", isAuthenticated, profileMulter.single("profilePicture"), profileUpdateValidator, asyncHandler(userController.updateProfile));
router.get("/profile/:username", isAuthenticated, asyncHandler(userController.renderPublicProfile)); // Adicionado asyncHandler
router.get("/feed", isAuthenticated, asyncHandler(userController.renderFeed));

module.exports = router;