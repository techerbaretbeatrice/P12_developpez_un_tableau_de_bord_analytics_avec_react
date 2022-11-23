import './App.css';
import { DataProvider } from './context/DataContext';
import UserProfile from './pages/UserProfile';


function App() {
  return (
    <div className="App">
      <DataProvider>
        <UserProfile />
      </DataProvider>
    </div>
  );
}

export default App;
