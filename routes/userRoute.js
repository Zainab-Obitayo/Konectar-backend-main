import express from "express";
// import isLoggedIn from "../middlewares/isLoggedIn";
const router = express.Router();

import {
    farmerWaitlist
} from "../controller/userController.js";

router.post("/waitlist", farmerWaitlist);

export default router;

