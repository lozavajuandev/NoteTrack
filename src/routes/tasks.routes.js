const { Router, json } = require("express");
const {
  find,
  findOne,
  Create,
  deleate,
  update,
} = require("../services/tasks.services");
const router = Router();

router.get("/", find);

router.get("/:id", findOne);

router.post("/", Create);

router.delete("/:id", deleate);

router.put("/:id", update);

module.exports = router;

