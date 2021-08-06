import { useState } from "react"
import { useDispatch } from "react-redux"
import { setAlert } from "../../store/actions/alertActions";
import { getWeather, setLoading } from "../../store/actions/weatherActions";
import './Search.css'

const Search = ({title})=>{
    const [city, setCity] = useState('');
    const dispatch = useDispatch();

    const changeHandler = (e) =>{
        setCity(e.target.value)
    }

    const submitHandler = (e) =>{
        e.preventDefault();
        if(!city.trim()){
            return dispatch(setAlert('City is required'));
        }
        dispatch(setLoading());
        dispatch(getWeather(city));
        setCity('')
    }


    return(
        <div className='searchBox'>
            <h1 className='title'>{title}</h1>
            <div>
            <input type='text'
             placeholder='Enter city name'
             value={city}
             onChange={changeHandler}
             ></input>
             </div>
             <div>
             <button className='searchBtn' onClick={submitHandler}>Search</button>
             </div>
        </div>
    )
}

export default Search;