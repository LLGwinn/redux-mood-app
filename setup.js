const INITIAL_STATE = {mood: '(-＿-)'};

function moodReducer(state=INITIAL_STATE, action) {
    switch (action.type) {
        case 'HAPPY':
            return {...state, mood: action.payload}
        case 'STRESSED':
            return {...state, mood: action.payload}
        case 'FRUSTRATED':
            return {...state, mood: action.payload}
        case 'SURPRISED':
            return {...state, mood: action.payload}
        default:
            return state
    }
}

