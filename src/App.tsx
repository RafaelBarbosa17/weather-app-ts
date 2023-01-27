
import { Weather } from './components/weather/weather';
import { Clock } from './components/weather/clock';
import './index.css'

// Component principal do aplicativo;
export const App = () => {
  return (
    <div className="App">
        <Weather />
        <Clock />
    </div>
  );
}

