import React, { useEffect, useState } from "react";
import { VideosLink } from "../data/links";
import { styled } from "styled-components";
import ReactPlayer from "react-player";

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 20px;
`
const Center = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
`

const StyledButton = styled.a`
    background-color: black;
    border: 1px solid black;
    color: white;
    text-decoration: none;
    width: 10rem;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Consolas;
    margin-top: 20px;

    &:hover {
        background-color: white;
        color: black;
    }
`

function Videos() {
    const [requestIsEnd, SetRequestIsEnd] = useState();
    const [videos, setVideos] = useState([]);

    const VideosRequest = () => {
        return fetch(VideosLink)
            .then((res) => res.json());
    }

    useEffect(() => {
        VideosRequest().then((res) => {
            const videoItems = res.items.map((item) => item);
            setVideos(videoItems);
            SetRequestIsEnd(true);
        });
        // eslint-disable-next-line
    }, []);

    if (!requestIsEnd) {
        return 'Loading...';
    }

    return (
        <>
            <Container>
                {videos.map((video, index) => <ReactPlayer
                    url={`https://www.youtube.com/watch?v=${video.id.videoId}`}
                    controls={true}>
                </ReactPlayer>
                )}
            </Container>
            <Center>
                <StyledButton href="https://youtube.com">
                    Zobacz więcej
                </StyledButton>
            </Center>
        </>
    );
}

export default Videos;