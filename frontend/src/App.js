import bg from "./img/bg.png";
import "./App.css";
import { styled } from "styled-components";
import { MainLayout } from "./styles/Layouts";
import { Orb } from "./components/Orb/Orb";
import { Navigation } from "./components/Navigation/Navigation";
import { useMemo, useState } from "react";
import { Dashboard } from "./components/Dashboard/Dashboard";
import { Expenses } from "./components/Expenses/Expenses";
import { Incomes } from "./components/Incomes/Incomes";
import { useGlobalContext } from "./context/globalContext";

function App() {
  const [active, setActive] = useState(1);

  const global = useGlobalContext();
  // Function to display the data
  const displayData = () => {
    switch (active) {
      case 1:
        return <Dashboard />;
      case 2:
        return <Expenses />;
      case 3:
        return <Incomes />;
      case 4:
        return <Expenses />;
      default:
        return <Dashboard />;
    }
  };

  const OrgMemo = useMemo(() => {
    return <Orb />;
  }, []);

  return (
    <AppStyled bg={bg} className="App">
      {OrgMemo}
      <MainLayout>
        <Navigation active={active} setActive={setActive} />
        <main>{displayData()}</main>
      </MainLayout>
    </AppStyled>
  );
}

export default App;

const AppStyled = styled.div`
  height: 100vh;
  background-image: url(${(props) => props.bg});
  position: relative;
  main {
    flex: 1;
    background: rgba(252, 246, 249, 0.78);
    border: 3px solid #ffffff;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    overflow: auto;
    overflow-x: hidden;
    &::-webkit-scrollbar {
      width: 0;
    }
  }
`;
