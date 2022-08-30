var EmpCompany = /** @class */ (function () {
    function EmpCompany(empId, empName, empSalary, empDepartment) {
        this.empId = 0;
        this.empName = "";
        this.empSalary = 0.0;
        this.empComp = 'piramal foundation';
        this.empId = empId;
        this.empName = empName;
        this.empSalary = empSalary;
        this.empDepartment = empDepartment;
    }
    EmpCompany.prototype.getEmployeeDetails = function () {
        return '${this.empId} ${this.empName} ${this.empSalary} ${this.empDepartment}';
    };
    return EmpCompany;
}());
var empp = new EmpCompany(32423424, "Raja Ram", 44433, 'HR');
console.log(empp.getEmployeeDetails());
