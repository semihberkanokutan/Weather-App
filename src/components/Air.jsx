import styled from "styled-components"
import AirSectionItem from "./AirSectionItem.jsx"
const sunIcon = "fa-solid fa-sun"
const temperatureIcon = "fa-solid fa-temperature-half"
const dropletIcon = "fa-solid fa-droplet"
const windIcon = "fa-solid fa-wind"

const AirSection = styled.section`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding: 2rem;
    gap: 1.4rem;

    & h4 {
        grid-column: 1 / 3;
        color: #AAB396;
        text-transform: uppercase;
    }

    & .condition-block {
        display: flex;

        & div {
            display: flex;
            flex-direction: column;
        }
    }

    @media screen and (max-width: 576px) {
        display: flex;
        flex-direction: column;
    }
`

export default function Air({apparentTemperature, windSpeed, humidity, uvIndex}) {
    const degreeUnicod = '\u00B0'

    return (
        <AirSection>
            <h4>Air Conditions</h4>
            <AirSectionItem 
                iconClassName={temperatureIcon} 
                sectionTitle="Real Feel" 
                value={apparentTemperature + degreeUnicod}
            />
            <AirSectionItem 
                iconClassName={windIcon} 
                sectionTitle="Wind" 
                value={windSpeed + ' km/h'}
            />
            <AirSectionItem 
                iconClassName={dropletIcon} 
                sectionTitle="Humidity" 
                value={humidity + '%'}
            />
            <AirSectionItem 
                iconClassName={sunIcon} 
                sectionTitle="UV Index" 
                value={uvIndex}
            />
            
           
        </AirSection>
    )
}