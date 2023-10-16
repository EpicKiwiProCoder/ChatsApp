import './App.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import { SignIn, SignOut } from './components/Auth';
import { ChatInput } from './components/ChatInput';
import { auth } from './firebase-config';
import { UserCardPanel } from './components/UserCardPanel';

function App() {
  const [user] = useAuthState(auth);

  if (user) {
    return (
      <div className="App">

        <div className="container">
          <div className="row">
            <div className="col-4 border border-secondary rounded">

              <div className="row">
                <SignOut />
              </div>
              <div className="row">
                <UserCardPanel />
              </div>

            </div>
            <div className="col-6 border border-primary rounded full-height">

              <div className="row">

              </div>
              <div className="row p-5">
                <ChatInput />
              </div>

            </div>
            <div className="col-2"></div>
          </div>
        </div >

      </div >
    );


  } else {
    return (
      <div className="App">
        <header className="App-header">
          <SignIn />
        </header>
      </div>
    );
  }

}

export default App;
