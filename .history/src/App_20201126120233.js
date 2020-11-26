import './App.css';
import StudentList from './StudentList';

students.forEach((student) => {
  const grades = student.grades
  const sum = grades.reduce(add)
  const average = `${(sum / (grades.length))}%`
})





function App() {
  return (
    <div className="App">
    <StudentList />
    </div>
  );
}

export default App;
