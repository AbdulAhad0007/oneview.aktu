const students = [
    { rollNo: "2302401550001", dob: "06/30/2004", page: "student/ahad.html" },
    { rollNo: "2302400100079", dob: "02/12/2005", page: "student/rashad.html" },
    { rollNo: "2302400100085", dob: "03/30/2005", page: "student/pandu.html" },
    { rollNo: "2302400100056", dob: "07/01/2005", page: "student/matlum.html" },
    { rollNo: "2302400100090", dob: "11/20/2004", page: "student/baccha.html" },
    { rollNo: "2302400100092", dob: "03/18/2005", page: "student/shahnawaz.html" },
    { rollNo: "2302400100119", dob: "02/05/2007", page: "student/zaid.html" },
    { rollNo: "2302401550004", dob: "06/21/2003", page: "student/almas.html" },
    { rollNo: "2302401550016", dob: "05/30/2005", page: "student/nishant.html" },
    { rollNo: "2302401550020", dob: "05/25/2006", page: "student/rashid.html" },
    { rollNo: "2302400100077", dob: "07/02/2005", page: "student/raja.html" },
    { rollNo: "2302400109010", dob: "08/19/1999", page: "student/shaalam.html" }
];

function handleSubmit(event) {
    event.preventDefault();
    const isCheckboxChecked = document.getElementById("recaptcha-checkbox").checked;

    if (!isCheckboxChecked) {
        alert("Please confirm you're not a robot by clicking the checkbox.");
        return;
    }
    const rollNo = document.getElementById("txtRollNo").value.trim();
    const dobInput = document.getElementById("txtDOB").value;
    const dobParts = dobInput.split("-");
    const formattedDOB = `${dobParts[1]}/${dobParts[2]}/${dobParts[0]}`;
    const student = students.find(
        (student) => student.rollNo === rollNo && student.dob === formattedDOB
    );
    if (student) {
        window.location.href = student.page;
    } else {
        alert("Invalid roll number or date of birth. Please try again.");
    }
}
document.getElementById("loginForm").addEventListener("submit", handleSubmit);

function PrintDiv(){
    alert("An error occured, try again after some time");
}