import React, { useEffect, useState } from "react";

const NewChat = ({ id, message, updateChatWindow, index, onValueChange }) => {
  const [textareaValue, setTextareaValue] = useState("");
  const [childElements, setChildElements] = useState([]);

  useEffect(() => {
    if (message != "") {
      const newChildElement = (
        <span className="message-left" key={childElements.length}>
          {message}
        </span>
      );
      setChildElements([...childElements, newChildElement]);
    }
  }, [message]);

  const handleTextareaChange = (event) => {
    setTextareaValue(event.target.value);
  };

  const handleSend = () => {
    onValueChange(textareaValue);
    if (textareaValue != "") {
      const newChildElement = (
        <span className="message-right" key={childElements.length}>
          {textareaValue}
        </span>
      );
      setChildElements([...childElements, newChildElement]);
      setTextareaValue("");
    }
  };

  const handleClick = () => {
    console.log("close clicked :");
    updateChatWindow(id);
  };

  return (
    <div className="chat-div">
      <div className="heading-div">
        <h4>Chat : {index + 1}</h4>
        <button className="btn-close" onClick={handleClick}>
          ❌
        </button>
      </div>
      <div id="container" className="message-display-div">
        {childElements.map((child) => (
          <>
            <div className="message" key={child.key}>
              {child}
            </div>
          </>
        ))}
      </div>
      <div className="message-type-div">
        <textarea
          className="textarea-message"
          value={textareaValue}
          onChange={handleTextareaChange}
          placeholder="Type Your Message Here"
          name=""
          id=""
          cols="28"
          rows="2"
        ></textarea>
        <button className="btn-send" onClick={handleSend}>
          ▶
        </button>
      </div>
    </div>
  );
};

export default NewChat;
