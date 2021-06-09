import logo from './logo.svg';
import './App.css';
import AddTask from './components/AddTask'
import AllTasks from './components/AllTasks'
import SplitPane from 'react-split-pane';
import { MDBContainer } from 'mdbreact';

const styles = {
  background: '#000',
  width: '2px',
  cursor: 'col-resize',
  height: '100%',
};
function App() {
 

  return (
    <div className="App" style={{overflowY:"scroll"}} >
    <SplitPane split="vertical" minSize="50%" defaultSize="50%" resizerStyle={styles}>
       <AddTask />
       <AllTasks />
    </SplitPane>
        </div>
  );
}

export default App;
