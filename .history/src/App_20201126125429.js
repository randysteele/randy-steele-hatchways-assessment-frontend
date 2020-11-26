import './App.css';
import StudentList from './StudentList';


componentDidMount() 
  axios.get(`https://api.hatchways.io/assessment/students/`)
    .then(res =>  {
      const students = res.data.students;
      this.setState({students});
    })



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
