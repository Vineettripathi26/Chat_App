import { useState } from "react";
import NewChat from "./NewChat";

const Chat = () => {
  const [chatWindow, setChatWindow] = useState([]);
  const [value, setValue] = useState("");

  const handleValueChange = (newValue) => {
    setValue(newValue);
  };

  const addChatWindow = () => {
    const newChatWindow = {
      id: new Date().valueOf(),
    };
    setChatWindow([...chatWindow, newChatWindow]);
    setValue("")
  };

  const handleClear = () => {
    setChatWindow([]);
  };

  const updateChatWindow = (id) => {
    setChatWindow(chatWindow.filter((item) => item.id !== id));
  };

  return (
    <>
      <h1 className="heading">Welcome To The Chat App</h1>
      <div className="btn-heading-div">
      <button className="btn" onClick={addChatWindow}>
        New Chat
      </button>
      <button className="btn" onClick={handleClear}>
        Clear All Chat Windows
      </button>
      </div>
      <div className="chat-parent-div">
        {chatWindow.map((item, index) => {
          return (
            <NewChat
              key={item.id}
              {...item}
              index={index}
              message={value}
              updateChatWindow={updateChatWindow}
              onValueChange={handleValueChange}
            ></NewChat>
          );
        })}
      </div>
    </>
  );
};

export default Chat;
