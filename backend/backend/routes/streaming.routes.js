const express = require('express');
const router = express.Router({ mergeParams: true });

const courseController = require('../controllers/course.controller')
const streamingController = require('../controllers/streaming.controller')
const { IsAdmin } = require('../middlewares/auth')

router.get("/video/:id/:video_id", streamingController.getVideo);
router.patch("/video/:video_id", streamingController.updateVideo);

router.post(
  "/video/:id/:video_id/bookmark/",
  streamingController.addBookmark
);

router.delete(
  "/video/:id/:video_id/bookmark/:book_id/",
  streamingController.deleteBookmark
);

module.exports = router;