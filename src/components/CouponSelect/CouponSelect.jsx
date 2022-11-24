import { useState } from "react";
import styled from "styled-components";
import deleteIcon from "../../assets/icon-delete.svg";

const Container = styled.ul`
  width: 600px;
  margin-bottom: 40px;
`;

const Select = styled.select`
  width: 100%;
  border: 1px solid #bdbdbd;
  border-radius: 5px;
  margin: 16px 0px;
  color: #828282;
  font-size: 14px;
  line-height: 18px;
  padding: 11px 14px;
`;
const CouponList = styled.ul`
  width: 100%;
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
  const [value, setValue] = useState(1);
  const onChangeHandler = (event) => {
    setValue(event.target.value);
  };
  return (
    <Container>
      <Select value={value} onChange={onChangeHandler}>
        <option value="1" disabled>
          쿠폰 선택
        </option>
        <option value="2">하나</option>
        <option value="3">둘</option>
      </Select>
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
