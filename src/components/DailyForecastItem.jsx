import styled from "styled-components"

const DailyForecaseItemBuild = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    @media screen and (max-width: 1024px) {
        gap: 20px;    
    }

    @media (max-width: 576px) {
      flex-direction: row;
    }
    
    & img {
        width: 50px;
    }

    & p {
        
        &:first-child {
            color: #AAB396;
            font-weight: bold;
            //font-size: 14px;
        }

        &:last-child {
            color: #fff;
            font-weight: bold;
            font-size: 1.4rem;
        }
    }
`


export default function DailyForecaseItem({temperature, hour, imgSrc}) {
    const degreeUnicod = '\u00B0'

    return (
        <DailyForecaseItemBuild>
            <p>{hour}</p>
            <img src={imgSrc} alt="" />
            <p>{temperature}{degreeUnicod}</p>
        </DailyForecaseItemBuild>
    )
}