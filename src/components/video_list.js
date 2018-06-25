import React from "react";
import VideoListDetail from "./video_list_detail";

const VideoList = (props) => {

    const videItems = props.videos.map((video) => {
        return (
        <VideoListDetail 
            onVideoSelect ={props.onVideoSelect}
            key={video.etag} 
            video={video} 
            />
        );
    });

    return(
        <ul className = "col-md-4 list-group" >
            {videItems}
        </ul>
    )
};

export default VideoList;