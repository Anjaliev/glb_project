import express from "express";
import multer from "multer";
import { fileCreate, fileGet, fileGetId } from "../Function/uploadFunction.js";

const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

router.post("/file-create", upload.single("file"), fileCreate);
router.get("/file-get", fileGet);
router.get("/file-getId/:id", fileGetId);

export default router;
