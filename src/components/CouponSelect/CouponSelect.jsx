import { useEffect, useState } from "react";
import styled from "styled-components";
import deleteIcon from "../../assets/icon-delete.svg";

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
const Selector = styled.select`
  width: 100%;
  border: 1px solid #bdbdbd;
  border-radius: 5px;
  color: #828282;
  font-size: 14px;
  line-height: 18px;
  padding: 11px 14px;
  option {
    background: #ffffff;
    font-size: 14px;
    line-height: 18px;
    &:hover {
      background: #f8f5ff;
      border-radius: 5px;
    }
  }
`;

const CouponSelect = ({ couponData, setCoupon }) => {
  const [value, setValue] = useState(0);
  const [selected, setSeleted] = useState([]);

  const onChangeHandler = ({ target }) => {
    const inputValue = target.value;
    setValue(inputValue);
    if (selected.find((select) => select === inputValue)) return;
    setSeleted((prev) => [...prev, inputValue]);
    setCoupon([...selected]);
  };

  const handleDeleteBtn = ({ target }) => {
    setSeleted((prev) => [...prev.filter((selectedItem) => !(selectedItem === target.dataset.id))]);
    setCoupon([...selected]);
  };

  return (
    <Container>
      <Selector defaultValue={value} onChange={onChangeHandler}>
        <option value="0" disabled>
          쿠폰 선택
        </option>
        {couponData &&
          couponData.map((coupon) => (
            <option key={coupon.id} value={coupon.id}>
              {coupon.couponName}
            </option>
          ))}
      </Selector>
      <CouponList>
        {selected &&
          selected.map((couponId) => {
            const { couponName } = couponData.find((item) => item.id === parseInt(couponId));
            return (
              <CouponItem value={couponId} key={couponId}>
                <span>{couponName}</span>
                <DeleteBtn src={deleteIcon} data-id={couponId} onClick={handleDeleteBtn} />
              </CouponItem>
            );
          })}
      </CouponList>
    </Container>
  );
};

export default CouponSelect;
