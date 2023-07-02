import React from "react";
import styles from "./Meet.module.scss";
import {
  ZegoUIKitPrebuilt,
  ZegoRoomManager,
} from "@zegocloud/zego-uikit-prebuilt";
import { useParams } from "react-router-dom";

const Meet = () => {
  const { meetID } = useParams();
  let teacher = JSON.parse(localStorage.getItem("teacher"));

  const courseMeeting = async (element) => {
    const appID = 1011601381;
    const serverSecret = "b0a75a3f8acfa27d01e46223db0c1777";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      meetID,
      Date.now().toString(),
      teacher.name
    );

    const zp = ZegoUIKitPrebuilt.create(kitToken);
    zp.joinRoom({
      container: element,
      scenario: {
        mode: ZegoUIKitPrebuilt.VideoConference,
      },
    });
  };

  return (
    <div className={styles["meet"]}>
      <div ref={courseMeeting} className={styles["meet-screen"]} />
    </div>
  );
};

export default Meet;
