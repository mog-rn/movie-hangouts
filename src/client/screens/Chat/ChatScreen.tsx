import { View, Text, TextInput, Button } from "react-native";
import React, { useEffect, useState } from "react";
import MainLayout from "../../layouts/MainLayout";
import { io } from "socket.io-client";

const ChatScreen = () => {
  const socket = io("https://movie-hangouts-api-gdmai4z3ya-ue.a.run.app");

  const [messages, setMessages] = useState([]);
  const [messageText, setMessageText] = useState("");
  const [joined, setJoined] = useState(false);
  const [name, setName] = useState("");
  const [typingDisplay, setTypingDisplay] = useState("");

  useEffect(() => {
    socket.on("connect", () => {
      console.log(socket.connected); // true
    });

    socket.emit("findAllMessages", {}, (data) => {
      setMessages(data);
    });

    socket.on("message", (message) => setMessages([...messages, message]));

    socket.on("disconnect", () => {
      console.log(socket.connected); // false
    });

    socket.on("typing", ({ name, isTyping }) => {
      if (isTyping) {
        setTypingDisplay(`${name} is typing...`);
      } else {
        setTypingDisplay("");
      }
    });
  }, []);

  console.log(messages);

  const joinRoom = () => {
    socket.emit("join", { name: setName(name) }, () => {
      setJoined(true);
    });
  };

  const sendMessage = () => {
    socket.emit("createMessage", { text: messageText }, (data) => {
      setMessageText("");
    });
  };

  let timeout;
  const emitTyping = () => {
    socket.emit("typing", { isTyping: true });
    timeout = setTimeout(() => {
      socket.emit("typing", { isTyping: false });
    }, 1000);
  };

  return (
    <MainLayout>
      {!joined ? (
        <View>
          <Text className="text-white">Enter your name</Text>
          <TextInput
            className="bg-white mb-5 h-12 px-5"
            value={name}
            onChangeText={(newName) => setName(newName)}
          />
          <Button title="send" onPress={joinRoom} />
        </View>
      ) : (
        <View>
          {messages.map((message, id) => (
            <Text className="text-white" key={id}>
              [{message.name}]: {message.text}
            </Text>
          ))}

          <View>
            <Text className="text-white">{typingDisplay}</Text>
            <TextInput
              className="bg-white mb-5 h-12"
              value={messageText}
              onKeyPress={emitTyping}
              onChangeText={(newText) => setMessageText(newText)}
            />
            <Button title="send" onPress={sendMessage} />
          </View>
        </View>
      )}
    </MainLayout>
  );
};

export default ChatScreen;
