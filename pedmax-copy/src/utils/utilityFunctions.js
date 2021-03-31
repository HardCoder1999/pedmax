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
        if (market.outcomes[t].name === "X") values["X"] = value;
        else if (market.outcomes[t].name === "1") values["1"] = value;
        else if (market.outcomes[t].name === "2") values["2"] = value;
      }
    }
  }
  return values;
}

export { groupBy, assign1x2 };
