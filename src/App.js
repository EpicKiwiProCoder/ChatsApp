import './App.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import { SignIn, SignOut } from './components/Auth';
import { ChatInput } from './components/ChatInput';
import { auth } from './firebase-config';

function App() {
  const [user] = useAuthState(auth);

  if (user) {
    return (
      <div className="App border" style={{ height: "100%" }}>

        <div className="container">
          <div className="row">
            <div className="col-3 border border-secondary rounded">

              <div className="row">
                <SignOut />
              </div>
              <div className="row">

              </div>

            </div>
            <div className="col-6">

              <div className="row border border-primary rounded">
                Bericht
              </div>
              <div className="row sticky-bottom m-5">
                <ChatInput />
              </div>

            </div>
            <div className="col-3 col-outline"></div>
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
