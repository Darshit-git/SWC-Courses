const mongoose = require("mongoose");

let bookmarkSchema = new mongoose.Schema({
  video: { type: mongoose.ObjectId, ref: "Media" },
  timestamp: { type: String },
  text: { type: String },
});

let courseSchema = new mongoose.Schema({
  course: { type: mongoose.ObjectId, ref: "Course" },
  completed_videos: [{ type: mongoose.ObjectId, ref: "Media" }],
  last_view: new mongoose.Schema({
    video: { type: mongoose.ObjectId, ref: "Media" },
    timestamp: { type: String },
  }),
  Bookmarks: [bookmarkSchema],
});

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true },
  name: { type: String, required: true },
  isAdmin: { type: Boolean, default: false },
  role: { type: String, default: "NA" },
  accessToken: { type: String, required: true},
  outlookId: { type: String, required: true },
  contact: { type: Number, length: 10 },
  coursesTeach: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }],
  coursesTaken: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }],
  enrolled_courses: [courseSchema],
});

module.exports = mongoose.model("User", UserSchema);
