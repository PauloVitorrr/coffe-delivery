import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/global";
import { defaultTheme } from "./styles/theme.ts/default";
import { Outlet } from "react-router-dom";
import { Header } from "./components/Header";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />

      <Header />
      <Outlet />
    </ThemeProvider>
  );
}

export default App;
