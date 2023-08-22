import { Header } from "./components/Header";
import { Main } from "./App.styled";
import { Tasks } from "./components/Tasks";
import "./global.css";

const App = () => {
  return(
    <div>
      <Header/>

      <Main>
        <Tasks/>
      </Main>
    </div>
  );
}

export default App