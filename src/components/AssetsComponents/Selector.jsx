import styled from "styled-components";

const SelectContainer = styled.select`
  width: 100%;
  border: 1px solid #bdbdbd;
  border-radius: 5px;
  color: #828282;
  font-size: 14px;
  line-height: 18px;
  padding: 11px 14px;
`;

const Select = ({ value = 0, onChangeHandler, optionData }) => {
  return (
    <SelectContainer value={value} onChange={onChangeHandler}>
      <option value="0" disabled>
        쿠폰 선택
      </option>
      {optionData &&
        optionData.map((option, index) => (
          <option key={index} value={option.optionName}>
            {option.optionName} {option.additionalFee ? `(+${option.additionalFee}원)` : ""}
          </option>
        ))}
    </SelectContainer>
  );
};

export default Select;
