import React from 'react'
import Header from './Header'
import Pages from './Pages'
import {HashRouter} from "react-router-dom";
import PreJunior from "./pages/PreJunior";
import Error404 from "./pages/Error404";

function HW5() {
  return (
    <div>
      {/*в gh-pages лучше работает HashRouter*/}
      <HashRouter>

        <Header/>

        <Pages/>
        <PreJunior/>
        <Error404/>
      </HashRouter>


    </div>
  )
}

export default HW5
