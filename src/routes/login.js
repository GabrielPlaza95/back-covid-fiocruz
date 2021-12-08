import { Router } from "express";
import passport from "passport";

import { TOKEN } from "../consts.js";

const router = Router();

router.post(
  "/",
  passport.authenticate("local", {
    failureRedirect: "/login",
    failureFlash: true,
  }),
  (req, res) => {
    return res.json({message: "success", isLogged: true, token: TOKEN})
  }
);

export default router;
