import './App.css';
import ButtonAppBar from './components/appBar/AppBar'
import ResponsiveDrawer from './components/sideBar/SideBar'
import EnhancedTable from './components/table/table';
function App() {
  return (
    <div className="App">
    <div className='appBar'>
    <ButtonAppBar />
    </div>
      <ResponsiveDrawer />
      <EnhancedTable />
    </div>
  );
}

export default App;
