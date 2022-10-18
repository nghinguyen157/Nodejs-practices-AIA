const userService = require("../service/user-service");


exports.createUser = async (req, res) => {
    try {
      const user = await userService.createUser(req.body);
      res.json({ data: user, status: "success" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

exports.findAllUser = async (req, res) => {
    try {
      console.log("find all users");
      const user = await userService.getAllUser(req.body);
      res.json({ data: user, status: "success" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

exports.getUserById = async (req, res) => {
    try {
      const user = await userService.getUserById(req.params.id);
      res.json({ data: user, status: "success" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

  exports.updateUser = async (req, res) => {
    try {
      const user = await userService.updateUser(req.params.id, req.body);
      res.json({ data: user, status: "success" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };