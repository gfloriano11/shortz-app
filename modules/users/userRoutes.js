var express = require("express");
var router = express.Router();
const userController = require("./userController");
const authMiddleware = require("../../middlewares/auth");
const upload = require("../../middlewares/profileMulter");
// Rota para exibir o formulário de cadastro
router.get("/register", userController.renderRegisterForm);
// Rota que processa o formulário de cadastro
router.post("/register", userController.register);
// Rota para exibir o formulário de login
router.get("/login", userController.renderLoginForm);
// Rota para processar o formulário de login
router.post("/login", userController.login);
// Rota para processar o logout
router.get("/logout", userController.logout);
// Rota para exibir o feed de vídeos (protegida por autenticação)
router.get("/feed", authMiddleware, userController.renderFeed);
// Rota para exibir o perfil do usuário (protegida por autenticação)
router.get("/profile/edit", authMiddleware, userController.renderEditProfileForm);
// Rota de atualização (Protegida + Upload de 1 arquivo chamado 'profilePicture')
router.post("/profile/edit", authMiddleware, upload.single("profilePicture"), userController.updateProfile);
// Rota para exibir o perfil público de um usuário
router.get("/profile/:username", authMiddleware, userController.renderPublicProfile);
module.exports = router;
