const { isAuthenticated } = require("../../middlewares/auth");
const { uploadValidator } = require("./videoValidator"); // NOVA IMPORTAÇÃO

var express = require("express");
var router = express.Router();

const videoController = require("./videoController");
const videoMulter = require("../../middlewares/videoMulter");
const asyncHandler = require("../../middlewares/asyncHandler");

// Rota para exibir o formulário de upload de vídeo (protegida por autenticação)
router.get("/upload", isAuthenticated, asyncHandler(videoController.renderUploadPage));
// Rota para processar o upload de vídeo (protegida por autenticação)
router.post("/upload", isAuthenticated, videoMulter.fields([
  { name: "video", maxCount: 1 },
  { name: "thumbnail", maxCount: 1 },
]), asyncHandler(videoController.uploadVideo));
// Rota para streaming de vídeo
router.get("/video/:id/stream", isAuthenticated, asyncHandler(videoController.streamVideo));
// Rota para exibir a página de reprodução de vídeo
router.get("/video/:id", isAuthenticated, asyncHandler(videoController.renderVideoPage));

module.exports = router;
