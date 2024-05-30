import React, { useEffect, useState } from "react";
import { MyFriend } from "./widgets/data/DataChat";
import { Messegers } from "./widgets/data/DataChat";
import ContactsUI from "./widgets/contacts/ContactsUI";
import MessengersUI from "./widgets/messengers/MessengersUI";
import axios from "axios";

export default function ChapterThree() {
  const myProfile = { id: "0419029203", name: "Febry" };

  const [selectedUser, setSelectedUser] = useState(0);
  const [selectedChat, setSelectedChat] = useState([]);

  const [myFriends, setMyFriends] = useState({
    loading: false,
    data: [],
    messages: "",
  });

  useEffect(() => {
    FETCH_CONTACT_CHAT();
  }, []);

  const FETCH_CONTACT_CHAT = () => {
    setMyFriends({ loading: true, data: [], message: "" });
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "http://localhost:3000/api/user/fetch-all",
      headers: {},
    };

    axios
      .request(config)
      .then((response) => {
        const result = response.data.data;
        if (result) {
          setMyFriends({ loading: false, data: result, message: "" });
        } else {
          setMyFriends({
            loading: false,
            data: [],
            message:
              "Unable to establish a connection to the server. Please try again later.",
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const HandlerSelectedChat = (data) => {
    setSelectedUser(data);
    const the_msg = [...Messegers];
    const findChatByUserID = the_msg.find(
      (item) => item.user_id === data.user_id
    );
    if (findChatByUserID) {
      setSelectedChat(findChatByUserID.messages);
    } else {
      setSelectedChat([]);
    }
  };

  return (
    <div id="chapter-3">
      <h1 className="text-white mb-5">Chapter two: Connection to Middleware</h1>
      <div className="px-3">
        <div className="row">
          <div className="col-2 col-lg-3 col-xxl-4 px-0">
            {myFriends.loading ? (
              <div>Loading</div>
            ) : myFriends.messages ? (
              <div>{myFriends.messages}</div>
            ) : Object.values(myFriends.data).length > 0 ? (
              <ContactsUI
                myAccount={myProfile}
                friends={myFriends.data}
                selectedUser={selectedUser}
                HandlerSelectedChat={HandlerSelectedChat}
              />
            ) : (
              ""
            )}
          </div>
          <div className="col-10 col-lg-9 col-xxl-8 px-0">
            {myProfile ? (
              <MessengersUI
                profile={myProfile}
                selectedUser={selectedUser}
                selectedChat={selectedChat}
              />
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
