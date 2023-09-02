import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import { useState } from "react";
import ActionProvider from "./ActionProvider";
import MessageParser from "./MessageParser";
import config from "./config";
import botSvg from "../../utils/bot.svg";
const ChatBot = () => {
  const [hideChatPanel, setHideChatPanel] = useState(true);
  return (
    <div>
      {!hideChatPanel && (
        <div className="App">
          <header className="App-header">
            <Chatbot
              config={config}
              actionProvider={ActionProvider}
              messageParser={MessageParser}
            />
          </header>
        </div>
      )}
      <div className="botDiv">
        <button
          className="botBtn"
          onClick={() => setHideChatPanel(!hideChatPanel)}
        >
          <img src={botSvg} alt="Bot svg" />{" "}
        </button>
      </div>
    </div>
  );
};

export default ChatBot;
