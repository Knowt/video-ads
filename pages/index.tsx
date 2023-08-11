import {VideoPlayer} from "@/components/VideoPlayer";
import React from "react";


const Home = () => {
    return (
        <div
            style={{
                width: "100%",
                minHeight: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <div
                style={{
                    width: "50%",
                }}
            >
                <VideoPlayer/>

            </div>
        </div>
    )
}

export default Home
