import './App.css';
import { Auth } from './components/Auth';
import { ChatInput } from './components/ChatInput';
// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';

// const auth = firebase.auth();
// const firestore = firebase.firestore();

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Auth />
        <ChatInput />
      </header>
    </div>
  );
}

export default App;
