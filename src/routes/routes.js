import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Landing from '../pages/Landing';
import Login from '../pages/Login';



// student
import StudentDashboard from '../pages/Student/StudentDashboard';
import ViewStudentProfile from '../pages/Student/ViewStudentProfile';
import EditStudentProfile from '../pages/Student/EditStudentProfile';
import AcademicRecords from '../pages/Student/AcademicRecords';
import ClinicalRotations from '../pages/Student/ClinicalRotations';
import Fees from '../pages/Student/Fees';
import Library from '../pages/Student/Library';
import ResearchProjects from '../pages/Student/ResearchProjects';
import Examinations from '../pages/Student/Examinations';
import MedicalRecords from '../pages/Student/MedicalRecords';
import StudentRegistration from '../pages/Student/StudentRegistration';



// teachar
import TeacherDashboard from '../pages/Teacher/TeacherDashboard';
import StudentList from '../pages/Teacher/ManageStudent/StudentList';
import StudentDetails from '../pages/Teacher/ManageStudent/StudentDetails';
import StudentAttendanceHistory from '../pages/Teacher/ManageStudent/StudentAttendanceHistory';
import ViewProfile from '../pages/Teacher/Profile/ViewProfile';
import EditProfile from '../pages/Principal/pricipal Profile/EditProfile';
import TeacherReports from '../pages/Teacher/Reports/TeacherReports';

// principle
import PrincipalDashboard from '../pages/Principal/Dashboard/PrincipalDashboard';
import PrincipalStudentList from '../pages/Principal/ManageStudent/StudentList';
import PrincipalEditStudent from '../pages/Principal/ManageStudent/EditStudent';
import PrincipalHODList from '../pages/Principal/ManageHOD/HODList';
import PrincipalHODDetails from '../pages/Principal/ManageHOD/HODDetails';
import PrincipalEditHOD from '../pages/Principal/ManageHOD/EditHOD';
import PrincipalTeacherList from '../pages/Principal/ManageTeacher/TeacherList';
import PrincipalTeacherDetails from '../pages/Principal/ManageTeacher/TeacherDetails';
import PrincipalEditTeacher from '../pages/Principal/ManageTeacher/EditTeacher';
import PrincipalCollegeProfile from '../pages/Principal/CollegeInfo/CollegeProfile';
import PrincipalEditCollegeInfo from '../pages/Principal/CollegeInfo/EditCollegeInfo';
import PrincipalReports from '../pages/Principal/Reports/PrincipalReports';
import PrincipalViewProfile from '../pages/Principal/pricipal Profile/ViewProfile';
import PrincipalEditProfile from '../pages/Principal/pricipal Profile/EditProfile';
import PrincipalViewApplication from '../pages/Principal/ManageStudent/PrincipalViewApplication';

// HOD imports
import HODDashboard from '../pages/HOD/Dashboard/HODDashboard';
import HODStudentList from '../pages/HOD/ManageStudent/StudentList';
import HODEditStudent from '../pages/HOD/ManageStudent/EditStudent';
import HODTeacherList from '../pages/HOD/ManageTeacher/TeacherList';
import HODTeacherDetails from '../pages/HOD/ManageTeacher/TeacherDetails';
import HODEditTeacher from '../pages/HOD/ManageTeacher/EditTeacher';
import HODDepartmentProfile from '../pages/HOD/DepartmentInfo/DepartmentProfile';
import HODEditDepartmentInfo from '../pages/HOD/DepartmentInfo/EditDepartmentInfo';
import HODViewProfile from '../pages/HOD/Profile/ViewProfile';
import HODEditProfile from '../pages/HOD/Profile/EditProfile';
import HODReports from '../pages/HOD/Reports/HODReports';

// Parent imports
import ParentDashboard from '../pages/Parent/Dashboard/ParentDashboard';
import ViewChildProfile from '../pages/Parent/ChildDetails/ViewChildProfile';
import ChildAcademics from '../pages/Parent/ChildDetails/ChildAcademics';
import ViewChildAttendance from '../pages/Parent/Attendance/ViewChildAttendance';
import ParentAttendanceReport from '../pages/Parent/Attendance/AttendanceReport';
import ViewPaymentHistory from '../pages/Parent/Payment/ViewPaymentHistory';
import ViewParentProfile from '../pages/Parent/parentProfile/ViewParentProfile';
import EditStudent from '../pages/Principal/ManageStudent/EditStudent';
import AddStudent from '../pages/Principal/ManageStudent/AddStudent';

//Admin imports
import AdminDashboard from "../pages/Admin/AdminDashboard"
import AdminReports from "../pages/Admin/AdminReports"
import ManageDepartment from "../pages/Admin/ManageDepartment"
import ManageDepartmentDetails from "../pages/Admin/ManageDepartmentView"

// Admin Manage College imports
import CollegeList from "../pages/Admin/ManageCollege";
import CollegeDetails from "../pages/Admin/CollegeDetails";
import AddNewCollege from "../pages/Admin/AddNewCollege";
// import AssignDepartment from "../pages/Admin/AssignDepartment";
import ManagePrincipals from "../pages/Admin/ManagePrincipals";
import ManageHODs from "../pages/Admin/ManageHODs";
import AddNewHOD from "../pages/Admin/AddNewHOD";
import ManageTeachers from "../pages/Admin/ManageTeachers";
import ManageStudents from "../pages/Admin/ManageStudents";
import ManageParents from "../pages/Admin/ManageParents";
import AdminViewApplication from "../pages/Admin/AdminViewApplication";


// Faculty imports
import FacultyDashboard from "../pages/Faculty/FacultyDashboard";
import FacultyCollegeList from "../pages/Faculty/CollegeList";
import FacultyCollegeDetails from "../pages/Faculty/CollegeDetails";
// import FacultyAssignDepartment from "../pages/Faculty/AssignDepartment";
import FacultyDepartmentList from "../pages/Faculty/DepartmentList";
import FacultyAddDepartment from "../pages/Faculty/AddDepartment";
// import FacultyEditDepartment from "../pages/Faculty/EditDepartment";
import FacultyViewDepartment from "../pages/Faculty/ViewDepartment";
import FacultyViewApplication from "../pages/Faculty/FacultyViewApplication";
import FacultyReports from "../pages/Faculty/FacultyReports";

// Admin Manage Department imports
import AddDepartment from "../pages/Admin/AddDepartment";



const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />

      <Route path="/login" element={<Login />} />

      {/* Student Routes */}
      <Route path="/student/registration" element={<StudentRegistration />} />
      <Route path="/student/dashboard" element={<StudentDashboard />} />
      <Route path="/student/profile" element={<ViewStudentProfile />} />
      <Route path="/student/profile/edit" element={<EditStudentProfile />} />
      <Route path="/student/academic-records" element={<AcademicRecords />} />
      <Route path="/student/clinical-rotations" element={<ClinicalRotations />} />
      <Route path="/student/fees" element={<Fees />} />
      <Route path="/student/library" element={<Library />} />
      <Route path="/student/research" element={<ResearchProjects />} />
      <Route path="/student/examinations" element={<Examinations />} />
      <Route path="/student/medical-records" element={<MedicalRecords />} />

      {/* Teacher Routes */}
      <Route path="/teacher/dashboard" element={<TeacherDashboard />} />
      <Route path="/teacher/manage-student" element={<StudentList />} />
      <Route path="/teacher/manage-student/studentdetails" element={<StudentDetails />} />
      <Route path="/teacher/manage-student/studentdetails/edit" element={<EditStudent />} />
      <Route path="/teacher/manage-student/attendance-history" element={<StudentAttendanceHistory />} />
      <Route path="/teacher/attendance/history" element={<StudentAttendanceHistory />} />
      <Route path="/teacher/profile" element={<ViewProfile />} />
      <Route path="/teacher/profile/edit" element={<EditProfile />} />
      <Route path="/teacher/reports" element={<TeacherReports />} />

      {/* Principal Routes */}
      <Route path="/principal/dashboard" element={<PrincipalDashboard />} />
      <Route path="/principal/manage-student" element={<PrincipalStudentList />} />
      <Route path="/principal/manage-student/add" element={<AddStudent />} />
      <Route path="/principal/manage-student/details" element={<StudentDetails />} />
      <Route path="/principal/manage-student/edit" element={<PrincipalEditStudent />} />
      <Route path="/principal/manage-hod" element={<PrincipalHODList />} />
      <Route path="/principal/manage-hod/details" element={<PrincipalHODDetails />} />
      <Route path="/principal/manage-hod/edit" element={<PrincipalEditHOD />} />
      <Route path="/principal/manage-teacher" element={<PrincipalTeacherList />} />
      <Route path="/principal/manage-teacher/details" element={<PrincipalTeacherDetails />} />
      <Route path="/principal/manage-teacher/edit" element={<PrincipalEditTeacher />} />
      <Route path="/principal/college-info" element={<PrincipalCollegeProfile />} />
      <Route path="/principal/college-info/edit" element={<PrincipalEditCollegeInfo />} />
      <Route path="/principal/view-application" element={<PrincipalViewApplication />} />
      <Route path="/principal/principalprofile" element={<PrincipalViewProfile />} />
      <Route path="/principal/profile/edit" element={<PrincipalEditProfile />} />
      <Route path="/principal/reports" element={<PrincipalReports />} />

      {/* HOD Routes */}
      <Route path="/hod/dashboard" element={<HODDashboard />} />
      <Route path="/hod/manage-student" element={<HODStudentList />} />
      <Route path="/hod/manage-student/edit" element={<HODEditStudent />} />
      <Route path="/hod/manage-teacher" element={<HODTeacherList />} />
      <Route path="/hod/manage-teacher/details" element={<HODTeacherDetails />} />
      <Route path="/hod/manage-teacher/edit" element={<HODEditTeacher />} />
      <Route path="/hod/department-info" element={<HODDepartmentProfile />} />
      <Route path="/hod/department-info/edit" element={<HODEditDepartmentInfo />} />
      <Route path="/hod/profile" element={<HODViewProfile />} />
      <Route path="/hod/profile/edit" element={<HODEditProfile />} />
      <Route path="/hod/reports" element={<HODReports />} />

      {/* Parent Routes */}
      <Route path="/parent/dashboard" element={<ParentDashboard />} />
      <Route path="/parent/child-details" element={<ViewChildProfile />} />
      <Route path="/parent/child-details/academics" element={<ChildAcademics />} />
      <Route path="/parent/attendance" element={<ViewChildAttendance />} />
      <Route path="/parent/attendance/report" element={<ParentAttendanceReport />} />
      <Route path="/parent/payment" element={<ViewPaymentHistory />} />
      <Route path="/parent/profile" element={<ViewParentProfile />} />

      {/* Admin Routes */}
      <Route path='/admin/dashboard' element={<AdminDashboard />} />
      <Route path='/admin/manage-department' element={<ManageDepartment />} />
      <Route path='/admin/manage-department/DepartmentView/:deptId' element={<ManageDepartmentDetails />} />
      <Route path='/admin/manage-department/add-department' element={<AddDepartment />} />
      <Route path='/admin/view-application' element={<AdminViewApplication />} />
      <Route path='/admin/reports' element={<AdminReports />} />

      {/* Admin Manage College Routes */}
      <Route path='/admin/manage-college' element={<CollegeList />} />
      <Route path='/admin/manage-college/add-college' element={<AddNewCollege />} />
      <Route path='/admin/manage-college/college-details' element={<CollegeDetails />} />
      {/* <Route path='/admin/manage-college/assign-department' element={<AssignDepartment />} /> */}
      <Route path='/admin/manage-college/manage-principals' element={<ManagePrincipals />} />
      <Route path='/admin/manage-college/manage-hods' element={<ManageHODs />} />
      <Route path='/admin/manage-college/manage-hods/add-new-hod' element={<AddNewHOD />} />
      <Route path='/admin/manage-college/manage-teachers' element={<ManageTeachers />} />
      <Route path='/admin/manage-college/manage-students' element={<ManageStudents />} />
      <Route path='/admin/manage-college/manage-parents' element={<ManageParents />} />

      {/* Faculty Routes */}
      <Route path='/faculty/dashboard' element={<FacultyDashboard />} />
      <Route path='/faculty/college-list' element={<FacultyCollegeList />} />
      <Route path='/faculty/college-details/:id' element={<FacultyCollegeDetails />} />
      <Route path='/faculty/department-list' element={<FacultyDepartmentList />} />
      <Route path='/faculty/add-department' element={<FacultyAddDepartment />} />
      <Route path='/faculty/view-department/:id' element={<FacultyViewDepartment />} />
      <Route path='/faculty/view-application' element={<FacultyViewApplication />} />
      <Route path='/faculty/reports' element={<FacultyReports />} />
    </Routes>
  );
};



export default AppRoutes;
