function groupBy(Data) {
  let modifiedData = {};
  if (Data) {
    for (let value of Data) {
      if (value.tournament.id in modifiedData) {
        modifiedData[value.tournament.id].data.push(value);
      } else {
        modifiedData[value.tournament.id] = {
          id: value.tournament.id,
          title: value.tournament.title,
          data: [value],
        };
      }
    }
  }
  return modifiedData;
}

function assign1x2(market) {
  let values = {
    1: "-",
    X: "-",
    2: "-",
    id1: "",
    id2: "",
    idX: "",
  };

  if (market === null || market === undefined || market.length === 0)
    return values;
  else {
    if (
      market.outcomes === null ||
      market.outcomes === undefined ||
      market.length === 0
    )
      return values;
    else {
      for (let t of Object.keys(market.outcomes)) {
        let value = market.outcomes[t].odds;
        let id = market.outcomes[t].uid;
        if (market.outcomes[t].name === "X"){
          values["X"] = value;
          values["idX"] = id;
        }
        else if (market.outcomes[t].name === "1") {
          values["1"] = value;
          values["id1"] = id;
        }
        else if (market.outcomes[t].name === "2") {
          values["2"] = value;
          values["id2"] = id;
        }
      }
    }
  }
  return values;
}

export { groupBy, assign1x2 };
