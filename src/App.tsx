import { ThemeProvider, createTheme } from "@mui/material";
import "./App.scss";
import CrowdfundingProductPage from "./Pages/CrowdfundingProductPage";
import { PageContext, usePageContext } from "./Components/context";

const theme = createTheme({
  typography: {
    body1: {
      fontSize: 18,
    },
    fontFamily: "Commissioner",
  },
  components: {
    MuiList: {
      defaultProps: {
        disablePadding: true,
      },
    },
    MuiListItem: {
      defaultProps: {
        disablePadding: true,
      },
    },
  },
});

function App() {
  const context = usePageContext();

  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <PageContext.Provider value={context}>
          <CrowdfundingProductPage />
        </PageContext.Provider>
      </div>
    </ThemeProvider>
  );
}

export default App;
