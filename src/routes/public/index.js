import { Router } from 'express';

import api from "./api";
import auth from "./auth";
import users from "./users";
import apiConfig from "../../../config/api.json";
import verifyToken from "../../middleware/verifyToken";

const router = Router();

router.use(api);

router.use(`/v${apiConfig.version}/auth/`, auth);
var loggedRoutes = Router();
loggedRoutes.use(verifyToken);
loggedRoutes.use(`/v${apiConfig.version}/users/`, users);
router.use( loggedRoutes);
export default router;
