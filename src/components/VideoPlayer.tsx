"use client";

import { useEffect, useState } from "react";
import ReactPlayer from "react-player";

const VideoPlayer = () => {
    const [isClient, setIsClient] = useState(false);

    // Ensure this component only renders on the client
    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return <p>Loading video...</p>; // Fallback content for SSR
    }

    return (
        <div className="w-full h-full rounded-sm">
            <ReactPlayer

                url="https://youtu.be/yrqepZWDZ28?si=fHOUPR8gaT44ho-_"
                playing={true}
                loop={true}
                controls={false}
                width="100%"
                height="100%"
            />
        </div>
    );
};

export default VideoPlayer;
