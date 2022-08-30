var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Employee = (function () {
    function Employee(empId, empName, empSalary, empDepartment) {
        this.empId = 0;
        this.empName = "";
        this.empSalary = 0.0;
        this.empComp = 'piramal foundation';
        this.empId = empId;
        this.empName = empName;
        this.empSalary = empSalary;
        this.empDepartment = empDepartment;
    }
    Employee.prototype.getEmployeeDetails = function () {
        return '${this.empID}, ${this.empName},${this.empSalary}';
    };
    return Employee;
}());
var emp = new Employee(32423424, "Rama Raju", 44242.67, "HR");
emp.getEmployeeDetails();
console.log(emp.getEmployeeDetails());
var FullEmpDeatails = (function (_super) {
    __extends(FullEmpDeatails, _super);
    function FullEmpDeatails() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.numberOfWorkingDaysWorking = 20;
        return _this;
    }
    FullEmpDeatails.prototype.getNumberOfWorkingDays = function () {
        return this.numberOfWorkingDaysWorking;
    };
    return FullEmpDeatails;
}(Employee));
var Company = (function () {
    function Company() {
        this.emp1 = new Employee(32423425, "Ramaji", 44242.67, "HR");
    }
    Company.prototype.displayCompanyNameOfEmp = function () {
        return this.emp1.empComp;
    };
    return Company;
}());
//# sourceMappingURL=TSClass.js.map