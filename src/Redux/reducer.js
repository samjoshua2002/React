const initial={
     count :0,
}
const CounterReducer =(state = initial,action)=>{
    switch (action.type) {
        case 'INCREMENT':
            return{
                ...state,
                count: state.count+1
            };
            case 'DECREMENT':
            return{
                ...state,
                count: state.count-1
            };
            
            
    
        default:
            return state;
    }
};