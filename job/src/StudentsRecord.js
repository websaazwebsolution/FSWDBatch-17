import React from 'react'
import StudentsView from './StudentsView';

function StudentsRecord() {
    const students = [
        {name: 'abdullah waseem', age:20 , grade: 'A'},
        {name: 'Hasan waseem', age:14 , grade: 'A'},
        {name: 'Ali Khan', age:22 , grade: 'B'},
        {name: 'Mubarak', age:25 , grade: 'C'},
        {name: 'Ahmed', age:30 , grade: 'D'},
        {name: 'khan', age:40 , grade: 'A'},
        {name: 'waseem', age:50 , grade: 'B'},
    ];
  return (

    <div>StudentsRecord

        <StudentsView  students={students}/>
    </div>
  )
}

export default StudentsRecord