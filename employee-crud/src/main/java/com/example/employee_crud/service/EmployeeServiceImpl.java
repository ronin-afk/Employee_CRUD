package com.example.employee_crud.service;

import com.example.employee_crud.entity.Employee;
import com.example.employee_crud.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class EmployeeServiceImpl implements EmployeeService {

    @Autowired
    private EmployeeRepository repo;

    @Override
    public List<Employee> getAllEmployees() {
        return repo.findAll();
    }

    @Override
    public Employee getEmployeeById(Long id) {
        return repo.findById(id).orElseThrow(() -> new RuntimeException("Employee not found with id: " + id));
    }

    @Override
    public Employee createEmployee(Employee emp) {
        return repo.save(emp);
    }

    @Override
    public Employee updateEmployee(Long id, Employee emp) {
        Employee e = getEmployeeById(id);
        e.setName(emp.getName());
        e.setEmail(emp.getEmail());
        e.setPhone(emp.getPhone());
        e.setDepartment(emp.getDepartment());
        e.setSalary(emp.getSalary());
        return repo.save(e);
    }

    @Override
    public Employee partialUpdateEmployee(Long id, Map<String, Object> updates) {
        Employee employee = getEmployeeById(id);

        if (updates.containsKey("name")) {
            employee.setName((String) updates.get("name"));
        }
        if (updates.containsKey("email")) {
            employee.setEmail((String) updates.get("email"));
        }
        if (updates.containsKey("phone")) {
            employee.setPhone((String) updates.get("phone"));
        }
        if (updates.containsKey("department")) {
            employee.setDepartment((String) updates.get("department"));
        }
        if (updates.containsKey("salary")) {
            Object salaryObj = updates.get("salary");
            if (salaryObj instanceof Number) {
                employee.setSalary(((Number) salaryObj).doubleValue());
            }
        }

        return repo.save(employee);
    }


    @Override
    public void deleteEmployee(Long id) {
        repo.deleteById(id);
    }
}
