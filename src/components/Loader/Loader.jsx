import styled from "styled-components";

const Container = styled.main`
  width: 100%;
  height: 100%;
  font-weight: 700;
  font-size: 36px;
  line-height: 44px;
  text-align: center;
`;

const Loader = () => {
  return <Container>Loading...</Container>;
};

export default Loader;
