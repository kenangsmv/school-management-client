import React, { useState } from "react";
import styles from "./TeacherCourseRoom.module.scss";
import { useNavigate, useParams } from "react-router-dom";

const TeacherCourseRoom = () => {
  const navigate = useNavigate();
  const { courseID } = useParams();
  const [roomCode, setRoomCode] = useState("");
  const [meetActive, setMeetActive] = useState(false);

  const startMeeting = (event) => {
    event.preventDefault();
    navigate(`/course/meet/${courseID}`);
    // navigate(`/teacher/${teacherID}/${courseID}/meet/${courseID}`);
  };

  return (
    <div className={styles["course-room"]}>
      <button>Create Exams</button>
      <button onClick={() => setMeetActive(true)}>Start Meet</button>
      {meetActive && (
        <form onSubmit={startMeeting}>
          <input
            value={courseID}
            onChange={(e) => setRoomCode(e.target.value)}
            type="text"
            required
            readOnly
          />
          <button type="submit">start meeting</button>
        </form>
      )}
    </div>
  );
};

export default TeacherCourseRoom;
