import "vidstack/styles/defaults.css";
import "vidstack/styles/community-skin/video.css";

import {MediaOutlet, MediaPlayer, MediaCommunitySkin} from "@vidstack/react";
import React from "react";

export const VideoPlayer = () => {

    return (
        <MediaPlayer
            src={"https://knowt-video-streaming-dev.s3.amazonaws.com/03a78343-3817-43aa-b8a2-72511d86b6a0.mp4"}
            thumbnails={"https://knowt-video-streaming-dev.s3.amazonaws.com/03a78343-3817-43aa-b8a2-72511d86b6a0-spritesheet.jpg"}
            crossorigin="">
            <MediaOutlet
            >
                <track
                    src="https://knowt-video-streaming-dev.s3.amazonaws.com/03a78343-3817-43aa-b8a2-72511d86b6a0-subtitles.vtt"
                    label="English" srcLang="en-US" kind="subtitles" default/>
                <track src={
                    "https://knowt-video-streaming-dev.s3.amazonaws.com/03a78343-3817-43aa-b8a2-72511d86b6a0-chapters.vtt"
                } label="English" srcLang="en-US" kind="chapters" default/>
            </MediaOutlet>
            <MediaCommunitySkin/>
        </MediaPlayer>
    )
        ;
};
