import './App.css';
import { BrowserRouter} from 'react-router-dom';
import ThemeRoutes from './ThemeRoutes';
import { RecoilRoot } from 'recoil';

function App() {
  return (
    <RecoilRoot>
    <BrowserRouter>
      <ThemeRoutes />
    </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;