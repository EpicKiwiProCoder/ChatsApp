import './App.css';

import { ChatInput } from '../components/ChatInput';
import { UserCardPanel } from '../components/UserCardPanel';
import { ChatPanel } from '../components/ChatPanel'
import { Navbar } from '../components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-4 border-start border-end border-secondary border-2 pt-3">
            <div className="row">
              <UserCardPanel />
            </div>

          </div>
          <div className="col-6 border-end border-secondary border-2 pt-3">
            <div className="row">
              <ChatPanel />
            </div>
            <div className="row p-5 fixed-bottom">
              <ChatInput />
            </div>
          </div>
          <div className="col-2"></div>
        </div>
      </div >

    </div >
  );
}

export default App;
