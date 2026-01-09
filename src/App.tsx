import logo from './logo.svg'
import './App.scss'
import { CityWeather} from './components/weather';
import { useSeason } from "./hooks/useSeason.ts";

function App() {

  useSeason();

  const places = [
    {title: 'Галич', city: 'Galich,ru'},
    {title: 'Костанай', city: 'Kostanay,kz'},
    {title: 'ГОА', city: 'Vasco Da Gama,in'}
  ]

  const placeList = places.map((place, index) =>
    <CityWeather key={index} title={place.title} city={place.city}/>
  );

  return (
    <>
      <div className="wrapper">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="gerb" title="Герб Галича"></div>
        <div className="container">
          {placeList}
        </div>
      </div>
    </>
  )
}

export default App
