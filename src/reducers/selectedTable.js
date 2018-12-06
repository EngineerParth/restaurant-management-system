import {SELECT_TABLE} from '../constants/constants.js'

const selectedTable = (status = null, action) => {
    switch(action.type){
        case SELECT_TABLE:
            if(status === action.id) return null
            else return action.id
        default:
            return status
    }
}

export default selectedTable