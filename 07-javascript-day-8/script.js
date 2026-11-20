let fullName = document. querySelector("#fname");
let activity = document.querySelector("#activity");
let searchedName = document.querySelector("#searchingName");
let registerButton = document.querySelector("#registerStudentButton");
let priorityButton = document.querySelector("#priorityRegisterButton");
let searchButton = document.querySelector("#searchButton");
let registeredStudentList = document.querySelector("#registeredStudentsList");
let searchedStudent = document.querySelector("#searchResult");
let total = document.querySelector("#totalCount");
let removeFirst = document.querySelector("#removeFirstButton");
let removeLast = document.querySelector("#removeLastButton");
let nameError = document.querySelector("#nameError");
let activityError = document.querySelector("#activityError");
let searchNameError = document.querySelector("#searchNameError");
let students = [
    { fullName: "Amaya", activity: "Coding" },
    { fullName: "Nimal", activity: "Robotics" },
    { fullName: "Ravi", activity: "Web Design" }
];
let activityDetails;
total.textContent = students.length;


function registerList (students){
    registeredStudentList.innerHTML = "";
    for(const student of students){
        registeredStudentList.innerHTML += `<li> ${student.fullName} - ${student.activity} </li>`;
        
    }

} 
function activityDeclare(activityNumber){
    if(activityNumber !== ""){
        switch(activityNumber){
            case "1" :{
                activityDetails = "Coding";
                break;
            }
            case "2" :{
                activityDetails = "Robotics";
                break;
            }
            case "3" :{
                activityDetails = "Web Design";
                break;
            }
            case "4" :{
                activityDetails = "AI";
                break;
            }
        }
    }
}
function errorFind(name,activityNumber){
    nameError.textContent = "";
    activityError.textContent = "";

    if(name === ""){
        nameError.textContent = '*enter the name';
    }
    if(activityNumber === ""){
        activityError.textContent = '*select the activity';
    }
}


registerList(students);


registerButton.addEventListener("click",function(e){
    e.preventDefault();
    let name = fullName.value.trim();
    let activityNumber = activity.value;
    
    errorFind(name,activityNumber);

    activityDeclare(activityNumber);

    if(name !=="" && activityNumber !== ""){
        // totalRegisterdStudents++;
        students.push({
            fullName: name,
            activity: activityDetails
        });
        total.textContent = students.length;
        registerList (students);
        fullName.value = "";
        activity.value = "";
        
    }
    

})

priorityButton.addEventListener("click",function(a){
    // a.preventDefault();
    let name = fullName.value.trim();
    let activityNumber = activity.value;

    errorFind(name,activityNumber);

    activityDeclare(activityNumber);
    if(name !=="" && activityNumber !== ""){
        students.unshift({
            fullName : name ,
            activity : activityDetails});
        
        total.textContent = students.length;
        registerList (students);
        fullName.value = "";
        activity.value = "";
    }        
})


removeFirst.addEventListener("click",function(){
    if (students.length > 0) {
        students.shift();
        registerList(students);
        total.textContent = students.length;
    } else {
        alert("No students to remove!");
    }
})


removeLast.addEventListener("click",function(){
    if (students.length > 0) {
        students.pop();
        registerList(students);
        total.textContent = students.length;
    } else {
        alert("No students to remove!");
    }
})


searchButton.addEventListener("click", function() {
    let name = searchedName.value.trim();

    searchNameError.textContent = "";
    searchedStudent.innerHTML = "";

    if (name === "") {
        searchNameError.textContent = '*enter a name to search';
        return;
    }

    let result = students.find(function(student) {
        return student.fullName.toLowerCase() === name.toLowerCase();
    });

    if (result === undefined) {
        searchedStudent.innerHTML = "No Result";
    }
    else {
        searchedStudent.innerHTML = `
            <li>${result.fullName} - ${result.activity}</li>
        `;
    }
    searchedName.value = "";
});
