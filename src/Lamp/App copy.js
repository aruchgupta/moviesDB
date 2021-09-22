import React, { useState } from "react";
import Lamp from "Lamp";
import LampSwitch from "LampSwitch";
import styled from "styled-components";

// const Star = () => React.createElement("div", null, "This is a star");

// const App = () => {
//   return Star();
// };

// const App = () => <div className="App">Start here.</div>;

const Room = styled.div`
  height: 500px;
  width: 500px;
  position: relative;
  border: 5px solid grey;
`;

const App = () => {
  const [isLampOneOn, setIsLampOneOn] = useState(false);

  const [isLampTwoOn, setIsLampTwoOn] = useState(true);

  const handleSwitchOne = () => setIsLampOneOn((prev) => !prev);
  const handleSwitchTwo = () => setIsLampTwoOn((prev) => !prev);

  return (
    <Room>
      <Lamp lampOn={isLampOneOn} position="left"></Lamp>
      <Lamp lampOn={isLampTwoOn} postion="right"></Lamp>
      <LampSwitch
        name="one"
        callback={handleSwitchOne}
        position="left"
        switchOn={isLampOneOn}
      ></LampSwitch>
      <LampSwitch
        name="one"
        callback={handleSwitchTwo}
        position="right"
        switchOn={isLampTwoOn}
      ></LampSwitch>
    </Room>
  );
};
export default App;
