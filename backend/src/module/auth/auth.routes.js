import {Router} from "express";

const router = Router();

router.post("/register", validate(RegisterDto), controller.register())




export default router