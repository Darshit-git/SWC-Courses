let Course = require("../models/course");
let Media = require("../models/media");
let User = require("../models/user");
const fs = require("fs");
const dirname = require('../dirname');
const path = require("path");
const ffprobe = require("ffprobe-static");
let pathToFfmpeg = require("ffmpeg-static");
//const { getVideoDurationInSeconds } = require("get-video-duration");

const ffmpeg = require("fluent-ffmpeg");  // Correctly importing ffprobe-static

exports.encodeVideo = async (job, done) => {
    try {
        const videoPath = job.data.videoPath;
        const outputFormat = job.data.outputFormat || 'mp4';
        const outputDir = path.join(dirname, 'encoded_videos');

        if (!fs.existsSync(outputDir)) {
            fs.mkdirSync(outputDir);
        }

        const outputFilePath = path.join(outputDir, `${path.basename(videoPath, path.extname(videoPath))}.${outputFormat}`);

        // const duration = await getVideoDurationInSeconds(videoPath);
        // console.log(`Video duration: ${duration} seconds`);

        // Set paths for ffmpeg and ffprobe explicitly
        ffmpeg.setFfmpegPath(pathToFfmpeg);  // Set path for ffmpeg
        ffmpeg.setFfprobePath(ffprobe.path);  // Set path for ffprobe

        ffmpeg(videoPath)
            .output(outputFilePath)
            .videoCodec('libx264')
            .format(outputFormat)
            .on('start', (commandLine) => {
                console.log(`Spawned Ffmpeg with command: ${commandLine}`);
            })
            .on('progress', (progress) => {
                console.log(`Processing: ${progress.percent}% done`);
            })
            .on('error', (err) => {
                console.error(`Error encoding video: ${err.message}`);
                done(err);
            })
            .on('end', () => {
                console.log('Video encoding complete');
                done(null, { outputFilePath, duration });
            })
            .run();
    } catch (err) {
        console.error(`Error processing job: ${err.message}`);
        done(err);
    }
};

