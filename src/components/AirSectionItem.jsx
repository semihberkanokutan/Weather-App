import styled from "styled-components"

const AirSectionBuild = styled.div`
    display: flex;
    gap: 12px;
    

    & div {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    & i {
        font-size: 1.3rem;
        color: #dedede;
    }

    & span {
        font-size: 1.1rem;
        color: #B7B7B7;
    }

    & p {
        font-size: 1.6rem;
        color: #fff;
        font-weight: bold;
    }

    @media screen and (max-width: 576px) {
        align-items: center;
        justify-content: space-between;


        & div {
            flex-direction: row;
            align-items: center;
            gap: 20px;
        }
    }
`

export default function AirSectionItem({iconClassName, sectionTitle, value}) {
    return (
        <AirSectionBuild>
            <i className={iconClassName}></i>
            <div>
                <span>{sectionTitle}</span>
                <p>{value}</p>
            </div>
        </AirSectionBuild>
    )
}