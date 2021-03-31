import React from 'react';
import UpcomingAccordion from './UpcomingAccordion';
import { useLocation, useParams } from "react-router-dom"
import SelectedLeague from './SelectedLeague';

const SelectedSport = (props)=>{
  let location = useLocation();
  const sportName = location.Props.sportName;
  const { tournament_id }  = useParams();
  return (
    <>
      {!tournament_id ? (
          <>
          <h3 className={"status-titles"}>{ sportName }</h3>
      <UpcomingAccordion sport_id={props.sport_id}/>
          </>
        ) : (
          <>
            <SelectedLeague />
          </>
        )}
    </>
    
  );
}

export default SelectedSport;