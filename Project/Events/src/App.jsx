import { RouterProvider } from 'react-router-dom';
import { routes } from './routes';
import { ThemeProvider } from 'styled-components';
import { theme } from './themes';
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={routes} />
    </ThemeProvider>
  );
};

export default App;
