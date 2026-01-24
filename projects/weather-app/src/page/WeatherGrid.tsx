import './WeatherGrid.css';

import { WeatherCell } from './WeatherCell';
import { ErrorBoundary } from '../ErrorBoundary';

const cities = [
    'Sydney', 'Shanghai', 'New York', 'Mumbai', 
    'London', 'Rome', 'Los Angeles', 'Oslo', 
    'Zurich', 'Paris', 'Tokyo', 'Singapore',
    'Seoul', 'Marrakesh', 'Barcelona', 'Lisbon',
    'Munich', 'Amsterdam', 'Copenhagen', 'Moscow',
    'Istanbul', 'Toronto', 'Vancouver', 'Rio De Janeiro',
    'Santiago', 'Buenos Aires', 'Panama City', 'Havana',
    'Manila', 'Ulaanbaatar', 'Athens', 'Budapest',
];

type Props = {
    resultSize: number;
}

export const WeatherGrid = ({ resultSize }: Props) => {
    const selectedCities = cities.slice(0, resultSize);
    return (
        <div className='pill-grid'>
            {selectedCities.map((city => 
                <div className='pill-cell' key={`${city}-cell`}>
                    <ErrorBoundary>
                        <WeatherCell city={city} />
                    </ErrorBoundary>
                </div>
            ))}
        </div>
    );
}