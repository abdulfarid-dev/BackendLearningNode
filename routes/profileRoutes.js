import express from "express";
import { createProfile, getProfile } from "../controller/profileController.js";

const router=express.Router()


router.post('/profile',createProfile)
router.get('/profile',getProfile)


export default router;