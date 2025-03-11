import styled from "styled-components"

const LoadingScreenBuild = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: #000;

    @media screen and (max-width: 1024px) {
        height: 100vh;    
    }

    display: none;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    @keyframes example {
        0% {transform: scale(1); opacity: 1;}
        50% {transform: scale(1.2); opacity: 0.5;}
        100% {transform: scale(1); opacity: 1;}
    }

    & div {
        width: 100px;
        height: 100px;
        background: #fff;
        border-radius: 50%;

        animation-name: example;
        animation-duration: .4s;
        animation-iteration-count: infinite;

    }

    &.active {
        display:flex;
    }


`

export default function LoadingScreen({isActive}) {
    return (
        <LoadingScreenBuild className={isActive}>
            <div></div>
            <div></div>
            <div></div>
        </LoadingScreenBuild>   
    )
}