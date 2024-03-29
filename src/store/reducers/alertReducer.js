import { SET_ALERT } from "../constants";

const initialState = {
    message:''
};

export default (state = initialState, action) =>{
    switch(action.type){
        case SET_ALERT:
            return{
                message: action.payload
            }
        default:
            return state;    
    }
}