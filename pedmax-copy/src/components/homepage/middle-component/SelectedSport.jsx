import React from "react";
import UpcomingAccordion from "./UpcomingAccordion";
import { useParams } from "react-router-dom";
import SelectedLeague from "./SelectedLeague";

const SelectedSport = (props) => {
  const { tournament_id } = useParams();
  return (
    <>
      {!tournament_id ? (
        <>
          <h3 className={"status-titles"}>Sport Name </h3>
          <UpcomingAccordion sport_id={props.sport_id} />
        </>
      ) : (
        <>
          <SelectedLeague />
        </>
      )}
    </>
  );
};

export default SelectedSport;
