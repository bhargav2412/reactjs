import React, { useLayoutEffect, useRef } from "react";

const Chat = () => {
  const chatRef = useRef(null);

  useLayoutEffect(() => {
    chatRef.current.scrollTop = chatRef.current.scrollHeight;
  }, []);

  return (
    <div
      ref={chatRef}
      style={{ height: "150px", border: "1px solid #ccc", overflowY: "scroll" }}
    >
      <p>Hello</p>
      <p>Hi</p>
      <p>How are you?</p>
      <p>I'm fine, what about you?</p>
      <p>I'm also fine</p>
      <p>Nice to talk with you.</p>
      <p>Same to you</p>
    </div>
  );
};

export default Chat;
