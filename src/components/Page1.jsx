import React from "react";
import {useLocation} from 'react-router-dom';
import Page1Table from "./Page1Table";

function Page1() {
  const location = useLocation();
  return (
    <div>
    <h1>Hello { location.state.id }</h1>
      <Page1Table />
    </div>
  );
}

export default Page1;
