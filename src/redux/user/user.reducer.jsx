import {UserActionTypes} from './user.types';

const INITIAL_STATE={
    currrentUser:null
}

const userReducer=(state=INITIAL_STATE,action)=>{
switch(action.type){
    case UserActionTypes.SET_CURRENT_USER:
        return{
            ...state,
            currrentUser: action.payload
        }

    default:
        return state;
}
}

export default userReducer;