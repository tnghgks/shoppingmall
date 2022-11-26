import styled from "styled-components";
import { useState } from "react";
import checkBoxOn from "../../assets/icon-check-box-ON.png";
import checkBoxOff from "../../assets/icon-check-box-OFF.png";

const CheckBox = styled.div`
  width: 16px;
  height: 16px;
  margin-left: 20px;
  border-radius: 2px;
  background-image: url(${(props) => (props.toggle ? checkBoxOn : checkBoxOff)});
`;

const IconCheckBox = () => {
  const [toggle, setToggle] = useState(false);
  const handleClick = () => {
    setToggle((current) => !current);
  };
  return <CheckBox type="checkbox" toggle={toggle} onClick={handleClick} />;
};

export default IconCheckBox;
