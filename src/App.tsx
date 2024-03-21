import { defaults } from 'react-sweet-state';

import './App.css';
import LazyCurrency from './ui';

// Make sweet state appear in Redux DevTools in
// Vite development (https://vitejs.dev/guide/env-and-mode)
defaults.devtools = import.meta.env.DEV;

const App = () => <LazyCurrency />;

export default App;
