export interface adminServiceInterface {
  onModuleInit();
  postStudent(AdminDto);
  addStudent(studentDto);
  getStudents(GetStudentDto);
}
