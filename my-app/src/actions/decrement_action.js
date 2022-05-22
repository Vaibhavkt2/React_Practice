
const decrementAction = (count) => {
    let new_count = count - 1;
    return {
      type: 'DECREMENT',
      payload: new_count
    }
}

export default decrementAction;