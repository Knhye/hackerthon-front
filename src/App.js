import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const ChatAppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  height: 100vh; /* 전체 화면 높이 */
  background-color: #f0f0f0;
`;

const InputContainer = styled.div`
  display: flex;
  gap: 10px;
  padding: 10px;
  width: 100%;
  max-width: 600px;
  height: 5%; /* 고정 높이 */
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 5%;
`;

const ChatContainer = styled.div`
  width: 100%;
  height: 50%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const MessagesContainer = styled.div`
  flex-grow: 1;
  height: calc(100% - 20px); /* 고정 높이로 스크롤 활성화 */
  overflow-y: auto;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Message = styled.div`
  background-color: ${(props) => (props.isUser ? "#007bff" : "#e5e5e5")};
  color: ${(props) => (props.isUser ? "#fff" : "#000")};
  padding: 10px;
  border-radius: 10px;
  max-width: 80%;
  align-self: ${(props) => (props.isUser ? "flex-end" : "flex-start")};
  margin-bottom: 5px;
  overflow-wrap: break-word; /* 긴 텍스트 줄바꿈 */
`;

const Input = styled.input`
  flex-grow: 1;
  padding: 10px;
  font-size: 16px;
  border: 2px solid #ccc;
  border-radius: 5px;
  outline: none;

  &:focus {
    border-color: #007bff;
  }
`;

const SendButton = styled.button`
  padding: 10px;
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const ChatApp = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const handleSendMessage = () => {
    if (inputValue.trim() !== "") {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: inputValue, isUser: true }
      ]);
      setInputValue("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <ChatAppContainer>
      <InputContainer>
        <Input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="메시지를 입력하세요..."
        />
        <SendButton onClick={handleSendMessage}>
          <FontAwesomeIcon icon={faPaperPlane} />
        </SendButton>
      </InputContainer>
      <ChatContainer>
        <MessagesContainer>
          {messages.map((msg, index) => (
            <Message key={index} isUser={msg.isUser}>
              {msg.text}
            </Message>
          ))}
          <div ref={messagesEndRef} />
        </MessagesContainer>
      </ChatContainer>
    </ChatAppContainer>
  );
};

export default ChatApp;