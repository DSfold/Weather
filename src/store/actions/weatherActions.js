import {GET_WEATHER, SET_LOADING, SET_ERROR} from '../constants';

export const getWeather = (city) => {
    return async dispatch => {
        try{
            const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}`)
            if(!res.ok){
                const resData = await res.json();
                throw new Error(resData.message);
            }
            const resData = await res.json();
            dispatch({
                type: GET_WEATHER,
                payload: resData
            });
        }catch(err){
            dispatch({
                type: SET_ERROR,
                payload: err.message
            })
        }
    }
}

export const setLoading = () =>{
    return{
        type: SET_LOADING,
    }
}

export const setError =()=>{
    return{
        type: SET_ERROR,
        payload:''
    }
}