import { defaults } from 'react-sweet-state';

import Calculator from './view/calculator';
import Footer from './view/footer';
import './App.css';

// Make sweet state appear in Redux DevTools in
// Vite development (https://vitejs.dev/guide/env-and-mode)
defaults.devtools = import.meta.env.DEV;

const App = () => {
  return (
    <>
      <Calculator />
      <Footer />
    </>
  );
};

export default App;
