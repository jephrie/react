import { useEffect, useState } from 'react';

type CurrentWeatherData = {
    location: {
        name: string;
    };
    current: {
        temp_c: number;
        condition: {
            icon: string;
            text: string;
        }
    };
}

type CurrentWeather = {
    isLoading: boolean;
    currentWeather?: CurrentWeatherData;
}

export const useCurrentWeather = (city: string): CurrentWeather => {
    const [isLoading, setIsLoading] = useState(true);
    const [currentWeather, setCurrentWeather] = useState<CurrentWeatherData>();

    useEffect(() => {
        setIsLoading(true);
        
        const fetchCurrentWeatherData = async (city: string) => {
            const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=e3b83cdf4fb941539b3234154262201&q=${city}&aqi=no`);
            const json = await response.json();
            if (response.ok) {
                setCurrentWeather(json);
                setIsLoading(false)
            }
        };

        fetchCurrentWeatherData(city);
    }, [city]);

    return {
      isLoading,
      currentWeather,
    };
}