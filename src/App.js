import "./App.css";
import Admin from "./pages/admin/Admin";
import Student from "./pages/student/Student";
import Teacher from "./pages/teacher/Teacher";
import Landing from "./pages/landing/Landing";
import Login from "./pages/login/Login";
import { Routes, Route, useNavigate } from "react-router-dom";
import Dashboard from "./components/student-infos/Dashboard";
import Exams from "./components/exams/Exams";
import ExamRoom from "./components/exam-room/ExamRoom";
import Register from "./components/register/Register";
import Courses from "./components/courses/Courses";
import Create from "./components/create/Create";
import CreateExam from "./components/create-exam/CreateExam";
import CourseSelection from "./components/course-selection/CourseSelection";
import Database from "./components/admin-database/Database";
import ExamResults from "./components/exam-results/ExamResults";
import TeacherDashboard from "./components/teacher-dashboard/TeacherDashboard";
import Meet from "./pages/meet/Meet";
import TeacherCourseRoom from "./components/teacher-courseroom/TeacherCourseRoom";

function App() {
  return (
    <div className="App h-100">
      <Routes>
        <Route path="/" element={<Landing></Landing>} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/admin" element={<Admin></Admin>}>
          <Route path="/admin/registeruser" element={<Register></Register>} />
          <Route path="/admin/create" element={<Create></Create>} />
          <Route path="/admin/database" element={<Database></Database>} />
        </Route>
        <Route path="/teacher/*" element={<Teacher />}>
          <Route path="course/exam/:courseID" element={<CreateExam />} />
          <Route
            path="teacher-dashboard/:teacherID"
            element={<TeacherDashboard />}
          />
          <Route path=":teacherID/:courseID" element={<TeacherCourseRoom />} />
        </Route>

        <Route path="/course/meet/:meetID" element={<Meet></Meet>} />

        <Route path="/student" element={<Student></Student>}>
          <Route path="/student/exams/:examID" element={<ExamRoom />} />

          <Route path="/student/genel-bilgiler" element={<Dashboard />}>
            <Route
              path="/student/genel-bilgiler/courses/:studentID"
              element={<Courses />}
            />

            <Route
              path="/student/genel-bilgiler/exams/:studentID"
              element={<Exams />}
            />

            <Route
              path="/student/genel-bilgiler/grades/:studentID"
              element={<ExamResults />}
            />
            <Route
              path="/student/genel-bilgiler/course-selection/:studentID"
              element={<CourseSelection />}
            />
          </Route>
          {/* <Route path="update" element={<StudentInfo />} /> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
