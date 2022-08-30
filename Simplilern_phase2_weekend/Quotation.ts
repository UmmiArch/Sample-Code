var skills = ["h"];

skills.push("java Script");
skills[0] = "HTML"

console.log(skills);

//tupels in ts 

let techSkills = ["java Script", 15 ,18];
console.log(techSkills);

// Enumaretion of ts

enum week {
    Sunday,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday
}
   function isITSunday(day:week){
    let isSunday:boolean;

    switch(day){
        case week.Sunday:
            isSunday=true;
            break;

         case week.Monday:
             isSunday=false;
             break;
         default:
            isSunday= false;
            break;
            
         case week.Tuesday:
            isSunday=false;
            break;
            
         case week.Wednesday:
            isSunday=false;
            break;

         case week.Thursday:
            isSunday=false;
            break;

            case week.Friday:
            isSunday=false;
            break;

         case week.Saturday:
            isSunday=false;
            break;

    }
       return isSunday;

   }
    console.log(isITSunday(week.Sunday));
    console.log(isITSunday(week.Monday));
    console.log(isITSunday(week.Tuesday));
    console.log(isITSunday(week.Wednesday));
    console.log(isITSunday(week.Thursday));
    console.log(isITSunday(week.Friday));
    console.log(isITSunday(week.Saturday));


    let value:any;
    value=55;
    console.log(value);
    value = "Rama";
    console.log(value);



    enum applicationStatus{
      Inprogress,
      Processed,
      Rejected
    }

    console.log(applicationStatus.Inprogress);

    const checkStatus ={
      appId: 342242,
      appStatus : applicationStatus.Rejected,
      comments : "Resubmitl the aadhar card...."
    }
      function checkAppStatus(){
      if(checkStatus.appStatus ===applicationStatus.Rejected){
         console.log("send an email to the application to resubmit aadhar card... ")
      }
      }

      checkAppStatus();