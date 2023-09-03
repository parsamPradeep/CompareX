import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

import LearningOptions from "./components/LearningOptions/LearningOptions";
import LinkList from "./components/LinkList/LinkList";

const config = {
  botName: "AI Assistance",
  initialMessages: [
    createChatBotMessage("Hi, I'm here to help. What do you want to learn?", {
      widget: "learningOptions",
    }),
  ],
  customComponents: {
    header: () => (
      <div
        style={{
          backgroundColor: "white",
          padding: "5px",
          borderRadius: "3px",
          color: "black",
          borderBottom: "2px solid grey",
          fontSize: "1rem",
          fontWeight: "500",
        }}
      >
        AI Assistance
      </div>
    ),
  },
  customStyles: {
    botMessageBox: {
      backgroundColor: "#ff2020",
    },
    chatButton: {
      backgroundColor: "#ff2020",
    },
  },
  widgets: [
    {
      widgetName: "learningOptions",
      widgetFunc: (props) => <LearningOptions {...props} />,
    },
    {
      widgetName: "projectLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Learn about Project A",
            url: "https://www.google.com/",
            id: 1,
          },
          {
            text: "Learn about Project B",
            url: "https://www.google.com/",
            id: 2,
          },
          {
            text: "Learn about Project C",
            url: "https://www.google.com/",
            id: 3,
          },
        ],
      },
    },
  ],
};

export default config;
