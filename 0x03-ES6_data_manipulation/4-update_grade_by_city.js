export default function updateStudentGradeByCity(students, location, grades) {
  return students
    .filter((student) => student.location === location)
    .map((student) => {
      const obj = { ...student };
      for (const grade of grades) {
        if (student.id === grade.studentId) {
          obj.grade = grade.grade;
          return obj;
        }
      }
      obj.grade = 'N/A';
      return obj;
    });
}
