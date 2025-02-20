// import ....
const express = require("express");
const { authCheck } = require("../middlewares/authCheck");
const router = express.Router();
// import controller
const { payment } = require("../controllers/stripe");
const { saveOrder } = require("../controllers/user");

router.post("/user/create-payment-intent", authCheck, saveOrder);

module.exports = router;
