import {createStore} from "redux"

const init = {
    da : null

}

const red = (state=init,action) => {
    switch(action.type){
        case "cart":
            return{
                ...state, da : action.datas
            }

            default:
            return state
    }
}

const carts = createStore(red);

export default carts