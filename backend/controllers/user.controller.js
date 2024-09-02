const express = require("express");
const User = require("../models/user");
const Course = require("../models/course");

const router = express.Router({ mergeParams: true });

exports.getAllCoursesTaken = async (req, res) => {
        try {
                let user = User.findById(req.user.id).populate('coursesTaken');
                return res.status(200).json({ status: "Success", coursesTeach: user.coursesTaken });
        }
        catch (error) {
                console.log(error.message);
                return res
                        .status(424)
                        .json({ status: "Failed", message: "Request Failed" });
        }
}

exports.getAllCoursesTeach = async (req, res) => {
        try {
                let user = await User.findById(req.user.id).populate('coursesTeach');
                console.log(user.name);
                return res.status(200).json({ status: "Success", coursesTeach: user.coursesTeach });
        }
        catch (error) {
                console.log(error.message);
                return res
                        .status(424)
                        .json({ status: "Failed", message: "Request Failed" });
        }
}