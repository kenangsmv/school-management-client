import React, { useState } from "react";
import styles from "./Meet.module.scss";
import {
  ZegoUIKitPrebuilt,
  ZegoRoomManager,
} from "@zegocloud/zego-uikit-prebuilt";
import api from "../../api";

import { useParams } from "react-router-dom";

const Meet = () => {
  const { meetID } = useParams();
  let teacher = JSON.parse(localStorage.getItem("teacher"));

  const [meetLink, setMeetLink] = useState();

  const courseMeeting = async (element) => {
    const appID = 1011601381;
    const serverSecret = "b0a75a3f8acfa27d01e46223db0c1777";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      meetID,
      Date.now().toString(),
      "name"
    );

    const zp = ZegoUIKitPrebuilt.create(kitToken);

    let sharedLinks = [
      {
        name: "Meeting link",
        url:
          window.location.origin +
          window.location.pathname +
          "?roomID=" +
          meetID,
      },
    ];
    setMeetLink(sharedLinks.url);
    zp.joinRoom({
      container: element,
      scenario: {
        mode: ZegoUIKitPrebuilt.VideoConference,
      },
      sharedLinks,
    });
  };

  return (
    <div className={styles["meet"]}>
      <div ref={courseMeeting} className={styles["meet-screen"]} />
    </div>
  );
};

export default Meet;
