const express = require("express");
const {
    createUser,
    findAllUser,
    getUserById,
    updateUser
} = require("../controllers/user-controller");
 
const router = express.Router();
 
router.route("/").post(createUser).get(findAllUser);
router.route("/:id").get(getUserById).patch(updateUser);
 
module.exports = router;