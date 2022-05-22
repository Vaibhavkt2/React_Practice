const incrementAction = (count) => {
    let new_count = count + 1;
    return {
      type: 'INCREMENT',
      payload: new_count
    }
}

  export default incrementAction;