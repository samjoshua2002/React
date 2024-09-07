const initial = {
    count: 0,
    result: 0 
};

const CounterReducer = (state = initial, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                count: state.count + 1
            };
        case 'DECREMENT':
            return {
                ...state,
                count: state.count - 1
            };
        case 'ADDITION':
            return {
                ...state,
                result: action.payload.num1 + action.payload.num2 
            };
        case 'SUBTRACTION':
            return {
                ...state,
                result: action.payload.num1 - action.payload.num2 
            };
        case 'MULTIPLICATION':
            return {
                ...state,
                result: action.payload.num1 * action.payload.num2 
            };
        case 'DIVISION':
            if (action.payload.num2 === 0) {
                console.error('Division by zero is not allowed');
                return state;
            }
            return {
                ...state,
                result: action.payload.num1 / action.payload.num2 
            };
        default:
            return state;
    }
};

export default CounterReducer;
