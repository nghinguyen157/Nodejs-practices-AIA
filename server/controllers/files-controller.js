const fileService = require("../service/files-service");

exports.readFiles = async (req,res) => {
    try {
        const result = await fileService.readFiles();
        res.json({ data: result , status: "success" });
      } catch (err) {
        res.status(500).json({ error: err.message });
    }
};