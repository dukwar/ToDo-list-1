import {UPDATE_FILTER} from "../constants";


const initialState = {
    activeFilter: 'all'
}

const buttons = (state= initialState, {type, id}) => {
    switch (type) {
        case UPDATE_FILTER:
            return {
                ...state,
                activeFilter: id
            }



        default:
            return state

    }
}

export default buttons