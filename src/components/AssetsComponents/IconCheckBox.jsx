import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import checkBoxOn from "../../assets/icon-check-box-ON.png";
import checkBoxOff from "../../assets/icon-check-box-OFF.png";
import { CartContext } from "../../pages/CartPage/CartPage";

const CheckBox = styled.button`
  width: 16px;
  height: 16px;
  margin-left: 20px;
  border-radius: 2px;
  border: none;
  background-image: url(${(props) => (props.toggle ? checkBoxOn : checkBoxOff)});
`;

const IconCheckBox = ({ cartId, allSelected, appendSelected }) => {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle((current) => !current);
    appendSelected(cartId);
  };

  useEffect(() => {
    setToggle(allSelected);
  }, [allSelected]);
  return <CheckBox type="checkbox" toggle={toggle} onClick={handleClick} />;
};

export default IconCheckBox;
