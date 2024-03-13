const getStudentsByLocation = (studentArray, location) => studentArray.filter(
  (student) => student.location === location,
);

export default getStudentsByLocation;
