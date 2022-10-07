const express = require("express");
const router = express.Router();
const {
    readFiles
} = require("../controllers/files-controller");

router.route("/").get(readFiles);

module.exports = router;