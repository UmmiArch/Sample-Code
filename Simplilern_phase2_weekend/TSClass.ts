class Employee{
private empId : number = 0;
 private empName : String = "";
 private empSalary : number=0.0;
 public empComp: string = 'piramal foundation';
 protected empDepartment : string; 

  constructor(empId:number, empName:String, empSalary:number, empDepartment : string){
     this.empId = empId;
     this.empName = empName;
     this.empSalary = empSalary;
     this.empDepartment = empDepartment;

}

getEmployeeDetails() : string{
    return '${this.empID}, ${this.empName},${this.empSalary}';
    }
}

let emp = new Employee(32423424,"Rama Raju",44242.67, "HR");
emp.getEmployeeDetails();
console.log(emp.getEmployeeDetails());



 class FullEmpDeatails extends Employee{
 
    private numberOfWorkingDaysWorking : number = 20;
    getNumberOfWorkingDays() : number{
             //return '${this.empId} ${this.empName} ${this.empSalary} ${this.empDepartment}';
        return this.numberOfWorkingDaysWorking;   
    }

}

class Company{
    emp1 = new Employee(32423425,"Ramaji",44242.67, "HR");
    displayCompanyNameOfEmp() : string{

        return this.emp1.empComp;

    }
}

