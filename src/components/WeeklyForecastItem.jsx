import styled from "styled-components"

const WeeklyForecastItemBuild = styled.div`
    display: flex;
    align-items:center;
    justify-content: space-between;

    & div {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 12px;

        & img {
            width: 50px;
        }

        & p {
            color: #fff;
            font-weight: bold;
        }

        
    }

    & > p {
        color: #fff;
        font-weight: bold;

        & span {
            color: #AAB396;
            margin-left: 6px;
        }
    }

    & > span {
        color: #AAB396;
        font-weight: bold;
    }

    @media screen and (max-width: 576px) {

        & div {
            & img {
                width: 44px;
            } 

            & p {
                font-size: 14px;
            }
        }
    }
`

export default function WeeklyForecastItem({maxHeat, minHeat, day="Day", imgSrc, weatherContext}) {
    return (
        <WeeklyForecastItemBuild>
            <span>{day}</span>
            <div>
                <img src={imgSrc} alt="" />
                <p>{weatherContext}</p>
            </div>
            <p>{maxHeat}<span>/{minHeat}</span></p>
        </WeeklyForecastItemBuild>
    )
}