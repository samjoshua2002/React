export  const increment =()=>{
    return{
        type:'INCREMENT'
    };
};
export  const decrement =()=>{
    return{
        type:'DECREMENT'
    };
};
export const addition = (num1, num2) => {
    return {
        type: 'ADDITION',
        payload: { num1, num2 }
    };
};

export const subtraction = (num1, num2) => {
    return {
        type: 'SUBTRACTION',
        payload: { num1, num2 }
    };
};

export const multiplication = (num1, num2) => {
    return {
        type: 'MULTIPLICATION',
        payload: { num1, num2 }
    };
};

export const division = (num1, num2) => {
    return {
        type: 'DIVISION',
        payload: { num1, num2 }
    };
};
