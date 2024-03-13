const getStudentIdsSum = (studentArray) => studentArray
  .map((student) => student.id)
  .reduce((acca, id) => acca + id, 0);

export default getStudentIdsSum;
