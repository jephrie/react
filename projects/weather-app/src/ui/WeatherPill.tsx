import './WeatherPill.css';

type Props = {
    iconSource: string;
    description: string;
    locationName: string;
    temperatureInCelcius: number;
}

export const WeatherPill = ({
    iconSource,
    description,
    locationName,
    temperatureInCelcius,
}: Props) => {
    return (
        <div className='weather-pill'>
            <div><b>{locationName}</b></div>
            <div><img src={iconSource} alt='weather icon' className='weather-icon'/></div>
            <div>{description}</div>
            <div>{temperatureInCelcius}</div>
        </div>
    );
};