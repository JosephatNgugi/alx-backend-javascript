const getListStudentIds = (studentArray) => {
  if (!(studentArray instanceof Array)) {
    return [];
  }
  return studentArray.map((student) => student.id);
};

export default getListStudentIds;
