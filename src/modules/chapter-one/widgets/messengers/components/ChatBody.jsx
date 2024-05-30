import moment from "moment";
import React from "react";

export default function ChatBody({ data }) {
  const listData = data;
  const me = "Febry";

  return (
    <div className="chat-items">
      {listData.map((value, index) => (
        <div
          className="chat-item"
          style={styleChatItems.chatBubbleItems}
          key={index}
        >
          <div
            className="chat text-white rounded my-2 p-2"
            style={
              value.from === me
                ? styleChatItems.chatBubbleSender
                : styleChatItems.chatBubbleReceiver
            }
          >
            <span className="me-3">{value.message}</span>
            <span className="chat-date" style={{ fontSize: "11px" }}>
              {moment(value.date).format("HH:mm")}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

const styleChatItems = {
  chatBubbleItems: {
    display: "flex",
    flexDirection: "column",
  },

  chatBubbleSender: {
    textAlign: "right",
    backgroundColor: "#a198a7",
    alignSelf: "flex-end",
  },

  chatBubbleReceiver: {
    backgroundColor: "#a83aef",
    alignSelf: "flex-start",
  },
};
