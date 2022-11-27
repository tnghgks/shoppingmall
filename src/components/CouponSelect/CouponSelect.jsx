import { useState } from "react";
import styled from "styled-components";
import deleteIcon from "../../assets/icon-delete.svg";
import Selector from "../AssetsComponents/Selector";

const Container = styled.ul`
  width: 600px;
  margin-bottom: 40px;
  padding-top: 16px;
`;

const CouponList = styled.ul`
  width: 100%;
  margin-top: 16px;
`;

const CouponItem = styled.li`
  width: 100%;
  margin-top: 10px;
  background: #f3f0fb;
  border-radius: 5px;
  padding: 11px 14px;
  font-size: 14px;
  line-height: 18px;
  display: flex;
  justify-content: space-between;
  &:first-child {
    margin-top: 0px;
  }
`;

const DeleteBtn = styled.img`
  cursor: pointer;
`;

const CouponSelect = () => {
  const [value, setValue] = useState(0);
  const onChangeHandler = (event) => {
    setValue(event.target.value);
  };
  return (
    <Container>
      <Selector value={value} onChange={onChangeHandler} />
      <CouponList>
        <CouponItem>
          <span>Hack Your Life 개발자 노트북 파우치 2,000원 할인 쿠폰</span>
          <DeleteBtn src={deleteIcon} />
        </CouponItem>
        <CouponItem>
          <span>Hack Your Life 개발자 노트북 파우치 배송비 무료 쿠폰</span>
          <DeleteBtn src={deleteIcon} />
        </CouponItem>
      </CouponList>
    </Container>
  );
};

export default CouponSelect;
