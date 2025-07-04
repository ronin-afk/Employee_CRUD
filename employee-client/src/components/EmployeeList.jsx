import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import BASE_URL from "../api";
import './EmployeeList.css';

function EmployeeList() {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        axios.get(BASE_URL)
        .then(res => setEmployees(res.data))
        .catch(err => console.error("Error fetching employees:", err));
    }, []);

    const handleDelete = (id) => {
        axios.delete(`${BASE_URL}/${id}`)
        .then(() => setEmployees(employees.filter(emp => emp.id !== id)))
        .catch(err => console.error("Delete failed:", err));
    };

    return (
        <div className="table-container">
        <h2>Employee Table</h2>
        <Link className="add-btn" to="/add">➕ ADD</Link>
        <table>
            <thead>
            <tr>
                <th>Name</th><th>Email</th><th>Phone</th><th>Dept</th><th>Salary</th><th>Actions</th>
            </tr>
            </thead>
            <tbody>
            {employees.map(emp => (
                <tr key={emp.id}>
                <td>{emp.name}</td>
                <td>{emp.email}</td>
                <td>{emp.phone}</td>
                <td>{emp.department}</td>
                <td>{emp.salary}</td>
                <td>
                    <div className="action-buttons">
                        <Link className="edit-btn" to={`/edit/${emp.id}`}>EDIT</Link>
                        <button className="delete-btn" onClick={() => handleDelete(emp.id)}>DELETE</button>
                    </div>
                </td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>
    );
}

export default EmployeeList;
