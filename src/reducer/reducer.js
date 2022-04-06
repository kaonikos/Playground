import {Actions} from './actions'

const initState = {
    displayedScreen: 'splash',
}

const reducer = (currentState = initState, action) => {
    switch (action.type) {
        case Actions.SetDisplayedScreen:
            return{
                ...currentState,
                displayedScreen: action.payload
            }
        default: return currentState
    }
}

export default reducer
