package com.example.employee_crud.service;

import java.util.List;
import java.util.Map;

import com.example.employee_crud.entity.Employee;

public interface EmployeeService {
    List<Employee> getAllEmployees();
    Employee getEmployeeById(Long id);
    Employee createEmployee(Employee emp);
    Employee updateEmployee(Long id, Employee emp);
    void deleteEmployee(Long id);
    Employee partialUpdateEmployee(Long id, Map<String, Object> updates);
}
