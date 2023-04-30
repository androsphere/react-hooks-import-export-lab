import React from "react";
import * as loginInfo from "../data/user";

function Home() {
  return (
    <div id="home">
      <h1>
        {loginInfo.username} is a Web Developer from {loginInfo.city}
      </h1>
    </div>
  );
}
export default Home;