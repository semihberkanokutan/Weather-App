import styled from 'styled-components'


const VideoBuild = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    overflow: hidden;

    & video {
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
`

export default function WeatherVideo({videoSrc}) {
    return (
        <VideoBuild>
            <video src={videoSrc} autoPlay loop></video>
        </VideoBuild>
    )
}