const router = require("express").Router();
const fs = require("fs");
const multer = require("multer");
const upload = multer({ dest: "public/img" });

router.post("/", upload.single("img"), (req, res, next) => {
  const filename = req.file.filename + "." + req.file.mimetype.split("/")[1];

  fs.renameSync(
    req.file.path,
    req.file.path + "." + req.file.mimetype.split("/")[1]
  );

  req.filname = filename;

  next();
});

module.exports = router;
