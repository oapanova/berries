import './App.css'
import BerriesPage from "./pages/BerriesPage";
import { Provider } from "react-redux";
import store from "./store";
import type { FC } from "react";
import { ThemeProvider } from "@mui/material";
import theme from "./theme";

const App: FC = () => {
  return (
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <BerriesPage/>
        </ThemeProvider>
    </Provider>
  )
}

export default App
