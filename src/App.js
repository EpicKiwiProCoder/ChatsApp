import './App.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase-config';
import { SignIn, SignOut } from './components/Auth';
import { ChatInput } from './components/ChatInput';
import { UserCardPanel } from './components/UserCardPanel';
import { ChatPanel } from './components/ChatPanel'
import { Navbar } from './components/Navbar';

function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-4 border border-secondary rounded">
            <div className="row">
              <UserCardPanel />
            </div>

          </div>
          <div className="col-6 border border-primary rounded">

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
