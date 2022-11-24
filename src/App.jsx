import Router from "./pages/Router";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
@import url("//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css");
${reset}
* {box-sizing:border-box;}
body{
  font-family: "Spoqa Han Sans Neo";
}

`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
}
export default App;
