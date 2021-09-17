const express = require("express");

const {
    adminLogin,
    getAllStudents,
    getAllInstructors
} = require("../controllers/adminControllers");

const { adminProtect } = require("../middlewares/protectedRoutes");

const router = express.Router();


// Admin Login
router.route("/adminLogin").post(adminLogin);

// Get all students
router.route("/getAllStudents").get(adminProtect,getAllStudents)

// Get all instructors
router.route("/getAllInstructors").get(adminProtect,getAllInstructors)


module.exports = router;
