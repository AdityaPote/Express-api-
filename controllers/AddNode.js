const Node = require("../models/NodeModel");

const AddNode = async (req, res) => {
  try {
    const { value, left, right } = req.body;
    const node = await Node.create({ value, left, right });
    res.status(200).json({ node });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server Error" });
  }
};

module.exports = AddNode;
