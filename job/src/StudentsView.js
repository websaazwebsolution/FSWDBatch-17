import React from "react";

function StudentsView({students}) {
  return (
    <div>
  <p>testing</p>
  {students.map((student, index) => (
    <div key={index}>
      <h2>Student Name: {student.name}</h2>
      <p>Age: {student.age}</p>
      <p>Grade: {student.grade}</p>
    </div>
  ))}
</div>
  );
}

export default StudentsView;
