import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import BASE_URL from "../api";
import "./EmployeeForm.css";

function EmployeeForm() {
  const [employee, setEmployee] = useState({
    name: "",
    email: "",
    phone: "",
    department: "",
    salary: "",
  });

  const { id } = useParams();
  const navigate = useNavigate();
  const isEdit = !!id;

  useEffect(() => {
    if (isEdit) {
      axios
        .get(`${BASE_URL}/${id}`)
        .then((res) => setEmployee(res.data))
        .catch((err) => console.error("Failed to load employee", err));
    }
  }, [id]);

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const request = isEdit
      ? axios.put(`${BASE_URL}/${id}`, employee)
      : axios.post(BASE_URL, employee);

    request
      .then(() => navigate("/"))
      .catch((err) => console.error("Submit failed:", err));
  };

  return (
    <div className="form-container">
      <h2>{isEdit ? "Update Employee" : "Add New Employee"}</h2>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          name="name"
          value={employee.name}
          onChange={handleChange}
          placeholder="Enter full name"
          required
        />

        <label>Email</label>
        <input
          name="email"
          value={employee.email}
          onChange={handleChange}
          type="email"
          placeholder="Enter email address"
          required
        />

        <label>Phone</label>
        <input
          name="phone"
          value={employee.phone}
          onChange={handleChange}
          placeholder="Enter phone number"
          required
        />

        <label>Department</label>
        <input
          name="department"
          value={employee.department}
          onChange={handleChange}
          placeholder="Enter department"
          required
        />

        <label>Salary</label>
        <input
          name="salary"
          type="number"
          value={employee.salary}
          onChange={handleChange}
          placeholder="Enter salary"
          required
        />

        <button type="submit" className="save-btn">
          {isEdit ? "Update Employee" : "Add Employee"}
        </button>
      </form>
    </div>
  );
}

export default EmployeeForm;
