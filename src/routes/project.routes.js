const { Router } = require("express");
const { find, findOne, create, deleate } = require("../services/project.services");
const router = Router();

router.get("/", find);
router.get("/:id", findOne);
router.delete("/:id", deleate);
router.post("/", create);

module.exports = router;
