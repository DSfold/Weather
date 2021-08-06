import './App.css';
import { useDispatch, useSelector} from 'react-redux'
import Search from './components/Search/Search';
import Weather from './components/Weather/Weather';
import Alert from './components/Alert/Alert';
import { setAlert } from './store/actions/alertActions';
import { setError } from './store/actions/weatherActions';

function App() {
  const dispatch = useDispatch();
  const weatherData = useSelector((state)=>state.weather.data);
  const loading = useSelector((state)=>state.weather.loading);
  const error = useSelector((state)=>state.weather.error);
  const alertMsg = useSelector((state)=>state.weather.message);

  return (
    <div className="App">
        <div>
          <Search title='Enter city name to get the weather'/>
          {loading ? <h2>Loading...</h2> : weatherData && <Weather data={weatherData}/>}
          {alertMsg && <Alert message={alertMsg} onClose={()=>dispatch(setAlert(''))}/>}
          {error && <Alert message={error} onClose={()=>dispatch(setError())}/>}
        </div>
    </div>
  );
}

export default App;
