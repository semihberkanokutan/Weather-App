import styled from "styled-components"

const BasicSection = styled.section`
    display: flex;
    justify-content: space-between;
    padding: 2rem;

    & img {
       height: 160px;
    }

    & h2 {
        color: #fff;
    }

    & .temperature {
        color: #fff;
        font-weight: bold;
        font-size: 3.2rem;
    }

    & .city {
        font-size: 2.2rem;
    }

    & .rain-ratio {
        color: #dedede;
    }

    @media screen and (max-width: 576px) {
        flex-direction: column;

        & > div:first-child {
            gap: 12px;
        }
    }
`

export default function BasicInfo({cityName, temperature, chanceOfRain, image}) {
    const degreeUnicod = '\u00B0'

    return (
        <BasicSection>
            <div style={{display:"flex", flexDirection:"column", justifyContent:"space-between"}}>
                <div>
                    <h2 className="city">{cityName}</h2>
                    <p className="rain-ratio">Chance of rain: {chanceOfRain}%</p>
                </div>
                <p className="temperature">{temperature}{degreeUnicod}</p>
            </div>
            <div style={{display:"grid", placeItems:"center"}}>
                <img src={image} alt="" />
            </div>
        </BasicSection>
    )
}