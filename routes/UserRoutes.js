import express from "express"
import { createUser, getuserById, getusers,toupdateuser,deleteuser,} from "../controller/userController.js";
import { createuser, manyusercreate} from "../controller/userController.js";


// import { authentication } from "../middleware/auth.js";




     const router = express.Router();
// -------------------------------------
     router.post('/create', createuser)
     router.post('/many' ,manyusercreate)
// -------------------------------------

router.post('/user', createUser)
router.get('/user',getusers)
router.get('/user/:id',getuserById)
router.put('/user/:id',toupdateuser)
router.delete('/user/:id',deleteuser)



export default router;