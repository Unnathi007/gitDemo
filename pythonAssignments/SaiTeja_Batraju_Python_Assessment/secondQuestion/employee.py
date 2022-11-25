class BasicDetails:
    def __init__(self,empId,empName,empSalary):
        self.empId = empId
        self.empName = empName
        self.empSalary = empSalary
        
class EmployeeDetails(BasicDetails):
    def __init__(self, empId, empName, empSalary, empDesignation, empManager, empPhoneNumber):
        super().__init__(empId, empName, empSalary)
        self.empDesignation = empDesignation
        self.empManager = empManager
        self.empPhoneNumber = empPhoneNumber
        
