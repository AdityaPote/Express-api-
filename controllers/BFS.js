const Node = require("../models/NodeModel");

const BFS = async (req, res) => {
  try {
    const start = parseInt(req.body.start);
    let queue = [start];
    let visited = new Set();
    visited.add(start);
    while (queue.length > 0) {
      const current = queue.shift();
      const { left, right } = await Node.findOne({ value: current });
      if (left != -1 && !visited.has(left)) {
        queue.push(left);
        visited.add(left);
      }
      if (right != -1 && !visited.has(right)) {
        queue.push(right);
        visited.add(right);
      }
    }
    res.status(200).json({ bfs: Array.from(visited) });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server Error" });
  }
};

module.exports = BFS;
