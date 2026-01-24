import { useCurrentWeather } from '../data/useCurrentWeather';
import { LoadingWeatherPill } from '../ui/LoadingWeatherPill';
import { WeatherPill } from '../ui/WeatherPill';

type Props = {
    city: string;
}

export const WeatherCell = ({ city }: Props) => {
    const data = useCurrentWeather(city);

    if (data.isLoading) {
        return <LoadingWeatherPill />;
    } else if (!data.currentWeather) {
        throw new Error('There was an issue getting weather data. Please refresh the page.');
    } else {
        const { currentWeather } = data;
        return (
            <WeatherPill
                description={currentWeather.current.condition.text}
                iconSource={currentWeather.current.condition.icon}
                locationName={currentWeather.location.name}
                temperatureInCelcius={currentWeather.current.temp_c}
            />
        );
    }
}