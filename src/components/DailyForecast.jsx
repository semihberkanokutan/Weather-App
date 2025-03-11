import styled from "styled-components"
import DailyForecaseItem from "./DailyForecastItem"

const DailySection = styled.section`
    display: flex;
    padding: 2rem;
    flex-direction: column;
    gap: 1.4rem;

    & h4 {
        color: #AAB396;
        text-transform: uppercase;
    }

    & .daily-items {
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        height: 100%;

        & > *:not(:first-child) {
            border-left: 0.1px solid #AAB396;
        }


        @media (max-width: 576px) {
            display: flex;  
            flex-direction: column;
            gap: 14px;

            & > *:not(:first-child) {
                border-left: none;
                border-top: 0.1px solid #AAB396;
                padding-top: 14px;
            }
        }
    }
`

export default function DailyForecast({tempData, imgSrcData}) {
    return (
        <DailySection>
            <h4>Today's Forecast</h4>
            <div className="daily-items">
                <DailyForecaseItem temperature={tempData[0]} hour="6:00 AM" imgSrc={imgSrcData[0]}/>
                <DailyForecaseItem temperature={tempData[1]} hour="9:00 AM" imgSrc={imgSrcData[1]}/>
                <DailyForecaseItem temperature={tempData[2]} hour="12:00 PM" imgSrc={imgSrcData[2]}/>
                <DailyForecaseItem temperature={tempData[3]} hour="3:00 PM" imgSrc={imgSrcData[3]}/>
                <DailyForecaseItem temperature={tempData[4]} hour="6:00 PM" imgSrc={imgSrcData[4]}/>
                <DailyForecaseItem temperature={tempData[5]} hour="9:00 PM" imgSrc={imgSrcData[5]}/>
            </div>
            
        </DailySection>
    )
}