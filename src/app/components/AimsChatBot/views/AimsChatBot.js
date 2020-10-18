import React from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from 'styled-components';

const AimsChatBot = (props) => {
  const config = {
    width: "300px",
    height: "400px",
    floating: true,
  };

  const theme = {
    background: '#f5f8fb',
    headerBgColor: '#EF6C00',
    botBubbleColor: '#EF6C00',
    userBubbleColor: '#fff',
  };

  const steps = [
    {
      id: "1",
      message: "Welcome to AIMS, What is your name?",
      trigger: "2",
    },
    {
      id: "2",
      user: true,
      trigger: "3",
    },
    {
      id: "3",
      message: "Hi {previousValue}, nice to meet you!",
      end: true,
    },
  ];
  return (
    <ThemeProvider theme={theme}>
      <ChatBot
        recognitionEnable={true}
        
        steps={steps}
        {...config}
      />
    </ThemeProvider>
  );
};
export default AimsChatBot;
