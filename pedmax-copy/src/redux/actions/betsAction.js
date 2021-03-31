const setBets = (data)=>{
  return {
    type: "SET_BETS",
    data: data,
  };
}

const removeBets = (id) =>{
  return {
    type: "REMOVE_BETS",
    id: id,
  }
}

export { setBets, removeBets };