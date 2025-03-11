import styled from "styled-components"
import WeeklyForecastItem from "./WeeklyForecastItem"
import { useState } from "react";

const WeeklySection = styled.section`
    grid-row: 1 / 5;
    grid-column: 2;
    display: flex;
    flex-direction: column;
    padding: 2rem;
    gap: 2rem;

    & h4 {
        color: #AAB396;
        text-transform: uppercase;
    }

    & .weekly-items {
        display: grid;
        grid-template-rows: repeat(7, 1fr);
        height: 100%;

        & > *:not(:first-child) {
            border-top: 0.1px solid #AAB396 !important;

            @media screen and (max-width: 1024px) {
                padding-top: 20px;    
            }
        }

        & > *:not(:last-child) {
            //border-bottom: 0.001px solid #dedede !important;
        }

        @media screen and (max-width: 1024px) {
            gap: 20px;    
        }
    }

    
`

export default function WeeklyForecast({weeklyData, daysData, imgSrcData, contextData}) {

    return (
        <WeeklySection>
            <h4>7-day forecast</h4>
            <div className="weekly-items">
                <WeeklyForecastItem 
                    maxHeat={weeklyData[0].max} 
                    minHeat={weeklyData[0].min} 
                    day={daysData[0]}
                    imgSrc={imgSrcData[0]}
                    weatherContext={contextData[0]}
                />
                <WeeklyForecastItem 
                    maxHeat={weeklyData[1].max} 
                    minHeat={weeklyData[1].min} 
                    day={daysData[1]}
                    imgSrc={imgSrcData[1]}
                    weatherContext={contextData[1]}
                />
                <WeeklyForecastItem 
                    maxHeat={weeklyData[2].max} 
                    minHeat={weeklyData[2].min} 
                    day={daysData[2]}
                    imgSrc={imgSrcData[2]}
                    weatherContext={contextData[2]}
                />
                <WeeklyForecastItem 
                    maxHeat={weeklyData[3].max} 
                    minHeat={weeklyData[3].min} 
                    day={daysData[3]}
                    imgSrc={imgSrcData[3]}
                    weatherContext={contextData[3]}
                />
                <WeeklyForecastItem 
                    maxHeat={weeklyData[4].max} 
                    minHeat={weeklyData[4].min} 
                    day={daysData[4]}
                    imgSrc={imgSrcData[4]}
                    weatherContext={contextData[4]}
                />
                <WeeklyForecastItem 
                    maxHeat={weeklyData[5].max} 
                    minHeat={weeklyData[5].min} 
                    day={daysData[5]}
                    imgSrc={imgSrcData[5]}
                    weatherContext={contextData[5]}
                />
                <WeeklyForecastItem 
                    maxHeat={weeklyData[6].max} 
                    minHeat={weeklyData[6].min} 
                    day={daysData[6]}
                    imgSrc={imgSrcData[6]}
                    weatherContext={contextData[6]}
                />
            </div>
        </WeeklySection>
    )
}