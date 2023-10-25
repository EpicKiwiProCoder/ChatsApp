import '../stylesheets/App.css';

import { ChatInput } from '../components/ChatInput';
import { UserCardPanel } from '../components/UserCardPanel';
import { ChatPanel } from '../components/ChatPanel'
import { Navbar } from '../components/Navbar';

export const App = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-5 border-start border-end border-secondary border-2 p-5 pt-3 mt-4">
            <UserCardPanel />
          </div>
          <div className="col-7 border-end border-secondary border-2 p-5 pt-3 mt-4">
            <div className="row">
              <ChatPanel />
            </div>
            <div className="row ps-5 pe-5 pb-5 fixed-bottom">
              <ChatInput />
            </div>
          </div>
          <div className="col-1"></div>
        </div>
      </div >

    </>
  );
}