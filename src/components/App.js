import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";

// pass this data down as props to the child component(s) that need it!
import user from "../data/user";
console.log(user);
console.log(user.bio)


function App() {
  return (
    <div>
      <NavBar />
      <Home city={user.city} name={user.name} color={user.color}/>
      <About link1={user.links.github} link2={user.links.linkedin} bio={user.bio}/>
    </div>
  );
}

export default App;
