
import './App.css'
import EmployeeForm from './components/EmployeeForm'
import EmployeeList from './components/EmployeeList'
import Rain from './Rain'
import { Route, Routes } from 'react-router-dom'

function App() {
  

  return (
    <>
      <Rain count={24} />
      <div>
        <h1>Employee Management</h1>
        <Routes>
          <Route path="/" element={<EmployeeList />} />
          <Route path="/add" element={<EmployeeForm />} />
          <Route path="/edit/:id" element={<EmployeeForm />} />
        </Routes>
      </div>
    </>
  )
}

export default App
