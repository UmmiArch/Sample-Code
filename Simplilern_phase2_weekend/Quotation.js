var skills = ["h"];
skills.push("java Script");
skills[0] = "HTML";
console.log(skills);
var techSkills = ["java Script", 15, 18];
console.log(techSkills);
var week;
(function (week) {
    week[week["Sunday"] = 0] = "Sunday";
    week[week["Monday"] = 1] = "Monday";
    week[week["Tuesday"] = 2] = "Tuesday";
    week[week["Wednesday"] = 3] = "Wednesday";
    week[week["Thursday"] = 4] = "Thursday";
    week[week["Friday"] = 5] = "Friday";
    week[week["Saturday"] = 6] = "Saturday";
})(week || (week = {}));
function isITSunday(day) {
    var isSunday;
    switch (day) {
        case week.Sunday:
            isSunday = true;
            break;
        case week.Monday:
            isSunday = false;
            break;
        default:
            isSunday = false;
            break;
        case week.Tuesday:
            isSunday = false;
            break;
        case week.Wednesday:
            isSunday = false;
            break;
        case week.Thursday:
            isSunday = false;
            break;
        case week.Friday:
            isSunday = false;
            break;
        case week.Saturday:
            isSunday = false;
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
var value;
value = 55;
console.log(value);
value = "Rama";
console.log(value);
var applicationStatus;
(function (applicationStatus) {
    applicationStatus[applicationStatus["Inprogress"] = 0] = "Inprogress";
    applicationStatus[applicationStatus["Processed"] = 1] = "Processed";
    applicationStatus[applicationStatus["Rejected"] = 2] = "Rejected";
})(applicationStatus || (applicationStatus = {}));
console.log(applicationStatus.Inprogress);
var checkStatus = {
    appId: 342242,
    appStatus: applicationStatus.Rejected,
    comments: "Resubmitl the aadhar card...."
};
function checkAppStatus() {
    if (checkStatus.appStatus === applicationStatus.Rejected) {
        console.log("send an email to the application to resubmit aadhar card... ");
    }
}
checkAppStatus();
//# sourceMappingURL=Quotation.js.map