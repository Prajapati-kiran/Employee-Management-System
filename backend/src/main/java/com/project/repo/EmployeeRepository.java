package com.project.repo;

import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.project.model.Employee;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long> {

}
