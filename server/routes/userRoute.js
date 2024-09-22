const express = require("express");
const router = express.Router();
const {create,print,del, getone, update} = require("../controllers/Use");


router.put("/update/:id",update);

router.post("/create",create);

router.get("/print",print);

router.delete("/del/:id",del);

router.get("/getone/:id",getone);





module.exports = router;




