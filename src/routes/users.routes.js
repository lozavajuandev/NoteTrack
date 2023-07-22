const { Router } = require("express");
const { find, findOne, create, del, update } = require("../services/users.services");
const router = Router();

router.get("/", find);
router.get("/:id", findOne);
router.post("/", create);
router.delete('/:id', del)
router.put('/:id', update)

module.exports = router;
