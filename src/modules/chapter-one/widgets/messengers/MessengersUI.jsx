import React, { useEffect, useRef, useState } from "react";
import { ButtonPrimary, ButtonSecondary } from "./components/ButtonsUI";
import ChatBody from "./components/ChatBody";
import moment from "moment";

export default function MessengersUI() {
  const chatArr = [
    {
      id: 1,
      message: "Hi",
      from: "Febry",
      date: "2024-02-22 10:30:00",
    },

    {
      id: 2,
      message: "Iya?",
      from: "Isnan",
      date: "2024-02-22 10:35:00",
    },

    {
      id: 3,
      message: "Apakah itu Micro-Frontend?",
      from: "Febry",
      date: "2024-02-22 10:37:00",
    },

    {
      id: 4,
      message: "Hah?",
      from: "Isnan",
      date: "2024-02-22 10:40:00",
    },

    {
      id: 5,
      message: "Tf!?",
      from: "Isnan",
      date: "2024-02-22 10:40:00",
    },

    {
      id: 6,
      message:
        "Arsitektur pada bagian FrontEnd aplikasi yang berpusat pada independensi suatu fitur dengan fitur lainnya",
      from: "Febry",
      date: "2024-02-22 10:42:00",
    },

    {
      id: 7,
      message: "Bruh",
      from: "Isnan",
      date: "2024-02-22 10:43:00",
    },
  ];

  const [myChat, setMyChat] = useState(chatArr);
  const [writeChat, setWriteChat] = useState("");
  const endOfMessageRef = useRef(null);

  const scrollToBottom = () => {
    endOfMessageRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const HandlerSendChat = (e) => {
    e.preventDefault();

    const objChat = {
      id: 100,
      message: writeChat,
      from: "Febry",
      date: moment().format("YYYY-MMM-DD HH:mm"),
    };

    setMyChat([...myChat, objChat]);
    setWriteChat("");
  };

  useEffect(() => {
    scrollToBottom();
  }, [myChat]);

  return (
    <div className="card my-3">
      <div className="card-header d-flex justify-content-between flex-row">
        <h5 className="card-title my-auto">
          <span className="fw-bold mb-2" style={{ color: "gray" }}>
            Chat
          </span>
        </h5>

        <div className="card-toolbar">
          <ButtonSecondary
            items={{
              title: "Create new chat",
              btn_class: "btn-link",
            }}
          >
            <i className="bi bi-pencil-square"></i>
          </ButtonSecondary>
        </div>
      </div>

      <div className="card-body p-0">
        <div
          className="chat-message px-2 bg-light-primary"
          style={styleMessage.chatBox}
        >
          <ChatBody data={myChat} />
          <div ref={endOfMessageRef}></div>
        </div>

        <div className="chat-send bg-light p-3">
          <form
            method="post"
            autoComplete="off"
            onSubmit={(e) => HandlerSendChat(e)}
          >
            <div className="d-flex justify-content-between align-items-center">
              <input
                type="text"
                className="form-control me-2"
                autoFocus={true}
                value={writeChat}
                onChange={(e) => setWriteChat(e.target.value)}
              />

              <ButtonPrimary
                items={{
                  title: "Create new chat",
                  btn_class: "btn-icon",
                }}
              >
                <i className="bi bi-send"></i>
              </ButtonPrimary>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

const styleMessage = {
  chatBox: {
    minHeight: "200px",
    maxHeight: "45vh",
    overflowY: "auto",
  },
};
