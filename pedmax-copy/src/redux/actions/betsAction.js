const setBets = (id, data)=>{
  return {
    type: "SET_BETS",
    id: id,
    data: data,
  };
}

const removeBets = (id) =>{
  return {
    type: "REMOVE_BETS",
    id: id,
  }
}

const editBets = (id, inputVal) =>{
  return {
    type: "EDIT_BETS",
    id: id,
    inputVal: inputVal,
  }
}

export { setBets, removeBets, editBets };