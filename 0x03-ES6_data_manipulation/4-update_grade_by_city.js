const updateStudentGradeByCity = (studentArray, location, newGrades) => studentArray
  .filter((student) => location === student.location)
  .map((student) => {
    const newGrade = newGrades.find((grade) => grade.studentId === student.id);

    return { ...student, grade: newGrade ? newGrade.grade : 'N/A' };
  });

export default updateStudentGradeByCity;
