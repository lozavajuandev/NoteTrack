const { Router, json } = require("express");
const db = require("./../database");
const {
  find,
  findOne,
  Create,
  deleate,
  update,
} = require("../services/tasks.services");
const router = Router();

router.get("/tasks", find);

router.get("/tasks/:id", findOne);

router.post("/tasks", Create);

router.delete("/tasks/:id", deleate);

router.put("/tasks/:id", update);

module.exports = router;
