



document.addEventListener('DOMContentLoaded',function() {

    let optionsSelect = document.getElementById('optionSelect');

    // Get the containers
     let container1 = document.getElementById('container1');
     
    let container2 = document.getElementById('container2');
    let container3 = document.getElementById('container3');
    console.log(container1,container2,container3);

    // Show Container 1 and Container 2 by default
    container1.style.display = 'block';
    container2.style.display = 'block';
    container3.style.display = 'none';

    // Add event listener for the select element
    optionsSelect.addEventListener('change', function () {
        // Get the selected option value
        let selectedOption = optionsSelect.value;

        // Toggle visibility based on the selected option
        if (selectedOption === 'option1') {
            container1.style.display = 'block';
            container2.style.display = 'block';
            container3.style.display = 'none';
        } else if (selectedOption === 'option2') {
            container1.style.display = 'block';
            container2.style.display = 'none';
            container3.style.display = 'block';
        }
    });


 // Get references to the input elements in Container 1
 let headerColor=document.getElementById('headerColor');
 let headTextColor=document.getElementById('headTextColor');
 let userNameInput = document.getElementById('userName');
 let jobTitleInput = document.getElementById('jobTitle');
 let professionalSummaryInput = document.getElementById('summary');
 let skillsInput = document.getElementById('skills');
 let userEmailInput = document.getElementById('userEmail');
 let phoneNumberInput = document.getElementById('phoneNumber');
 let placeInput = document.getElementById('place');


 
 // Get references to the elements in Container 2 where data will be rendered
 let nameSection = document.querySelector('.nameSection');
 let c1_nameElement = document.getElementById('c1-name');
 let c2_nameElement = document.getElementById('c2-name');

 let c1_professionalTitleElement = document.getElementById('c1-professnal');
 let c2_professionalTitleElement = document.getElementById('c2-professnal');
 
 let skillContent2=document.getElementById('c2-skillContent');
 let skillContent3=document.getElementById('c3-skillContent');

 let c2_phoneNumberOutput=document.getElementById('c2-phoneNumberOutput');
 let c3_phoneNumberOutput=document.getElementById('c3-phoneNumberOutput');

 let c2_emailOutput=document.getElementById('c2-emailOutput');
 let c3_emailOutput=document.getElementById('c3-emailOutput');

 let c2_placeOutput=document.getElementById('c2-placeOutput');
 let c3_placeOutput=document.getElementById('c3-placeOutput');

 let c2_professionalSumOutput=document.getElementById('c2-summaryOutput');
 let c3_professionalSumOutput=document.getElementById('c2-summaryOutput');

 // Event listener for the 'input' event on userNameInput

 headerColor.addEventListener('input', updateHeaderColor);
 userNameInput.addEventListener('input', updateName);
 jobTitleInput.addEventListener('input', updateJobTitle);
 skillsInput.addEventListener('input',updateSkills);
 userEmailInput.addEventListener('input',updateUserEmail);
 phoneNumberInput.addEventListener('input',updatePhoneNumber);
 placeInput.addEventListener('input',updatePlace);
 professionalSummaryInput.addEventListener('input',updateSummary)
 




function updateHeaderColor() {
    nameSection.style.backgroundColor = headerColor.value;
   
}

function updateName() {
    c1_nameElement.textContent = userNameInput.value;
    c2_nameElement.textContent = userNameInput.value;
}

function updateJobTitle() {
    c1_professionalTitleElement.textContent = jobTitleInput.value;
    c2_professionalTitleElement.textContent = jobTitleInput.value;
    
}
function updateSkills() {
    skillContent2.textContent = skillsInput.value;
    skillContent3.textContent = skillsInput.value;

}

function updateUserEmail() {
    c2_emailOutput.textContent = userEmailInput.value;
    c3_emailOutput.textContent = userEmailInput.value;
}

function updatePhoneNumber() {
    c2_phoneNumberOutput.textContent = phoneNumberInput.value;
    c3_phoneNumberOutput.textContent = phoneNumberInput.value;
}

function updatePlace() {
    c2_placeOutput.textContent = placeInput.value;
    c3_placeOutput.textContent = placeInput.value;

}

function updateSummary() {
    c2_professionalSumOutput.textContent = professionalSummaryInput.value;
    c3_professionalSumOutput.style.paddingBottom="10px";
}

// ------------------------creating all the input containers dynamically------------------

// let  container1 = document.getElementById('container1');
let  employmentButton = document.getElementById('employment');
let  projectButton=document.getElementById('project');
let eduBack=document.getElementById('edBack');
let educationButton=document.getElementById('education');


 
// Event listener for the "Add Employment" button

employmentButton.addEventListener('click', function () {
    // Create a new employment container
    var employmentContainer = document.createElement('div');
    employmentContainer.classList.add('employmentContainer');
    
    //start date
    var startLabel1=document.createElement('label');
    startLabel1.setAttribute('for', 'dateStart');
    startLabel1.textContent = 'Start Date';

    var startDateInput = document.createElement('input');
    startDateInput.type = 'date';
    startDateInput.placeholder = 'dd-mm-yyyy';
    startDateInput.classList.add('details2');
    startDateInput.id = 'employSD';

    // End Date
    var endDateLabel = document.createElement('label');
    endDateLabel.setAttribute('for', 'dateEnd');
    endDateLabel.textContent = 'End Date';

    var endDateInput = document.createElement('input');
    endDateInput.type = 'date';
    endDateInput.placeholder = 'dd-mm-yy';
    endDateInput.classList.add('details2');
    endDateInput.id = 'employED';
 
    // Job Title
    var jobTitleInput = document.createElement('input');
    jobTitleInput.type = 'text';
    jobTitleInput.placeholder = 'Job-Title';
    jobTitleInput.classList.add('details2');
    jobTitleInput.id = 'employJT';

    // Employer
    var employerInput = document.createElement('input');
    employerInput.type = 'text';
    employerInput.placeholder = 'Employer';
    employerInput.classList.add('details2');
    employerInput.id = 'employER';

    // Job Description
    var jobDescriptionTextarea = document.createElement('textarea');
    jobDescriptionTextarea.name = 'description';
    jobDescriptionTextarea.placeholder = 'Description';
    jobDescriptionTextarea.id = 'employJobDesc';
    jobDescriptionTextarea.cols = '30';
    jobDescriptionTextarea.rows = '7';
    jobDescriptionTextarea.style.border = 'none';
    jobDescriptionTextarea.style.borderRadius = '4px';

    // Append elements to employmentContainer
    employmentContainer.appendChild(startLabel1);
    employmentContainer.appendChild(startDateInput);
    employmentContainer.appendChild(endDateLabel);
    employmentContainer.appendChild(endDateInput);
    employmentContainer.appendChild(jobTitleInput);
    employmentContainer.appendChild(employerInput);
    employmentContainer.appendChild(jobDescriptionTextarea);

    container1.insertBefore(employmentContainer, projectButton);


    // Get references to the input elements in Container 1
 let employSD=document.getElementById('employSD');
 let employED=document.getElementById('employED');
 let employJT=document.getElementById('employJT');
 let employER=document.getElementById('employER');
 let employJobDesc=document.getElementById('employJobDesc');

 // Get references to the elements in Container 2 & 3where data will be rendered

 let c2_employSDOutput=document.getElementById('c2-startDateS');
 let c3_employSDOutput=document.getElementById('c3-startDateS');
 let c2_employEDOutput=document.getElementById('c2-endDateE');
 let c3_employEDOutput=document.getElementById('c3-endDateE');
 let c2_employJTOutput=document.getElementById('c2-jobTitleOutput');
 let c3_employJTOutput=document.getElementById('c3-jobTitleOutput');
 let c2_employEROutput=document.getElementById('c2-employersNameO');
 let c3_employEROutput=document.getElementById('c3-employersNameO');
 let c2_employJobDescOutput=document.getElementById('c2-proffDescOut');
 let c3_employJobDescOutput=document.getElementById('c3-proffDescOut');

    // Event Listener for employment Container
    employSD.addEventListener('input', updateEmploySD);
    employED.addEventListener('input', updateEmployED);
    employJT.addEventListener('input', updateJobTitle);
    employER.addEventListener('input', updateEmployer);
    employJobDesc.addEventListener('input', updateJobDesc);
    
    
    


    function updateEmploySD() {
        c2_employSDOutput.textContent = employSD.value;
        c3_employSDOutput.textContent = employSD.value;

    }
     
    function updateEmployED() {
        c2_employEDOutput.textContent = employED.value;
        c3_employEDOutput.textContent = employED.value;
    }

    function updateJobTitle() {
        c2_employJTOutput.textContent = employJT.value;
        c3_employJTOutput.textContent = employJT.value;
    }

    function updateEmployer() {
        c2_employEROutput.textContent = employER.value;
        c3_employEROutput.textContent = employER.value;
    }

    function updateJobDesc() {
        c2_employJobDescOutput.textContent = employJobDesc.value;
        c3_employJobDescOutput.textContent = employJobDesc.value;
    }



});


// Event listener for the "Add Project" button
projectButton.addEventListener('click', function () {

    var projectsContainer = document.createElement('div');
    projectsContainer.classList.add('projectsContainer');

    // Start Date
    var startDateLabel = document.createElement('label');
    startDateLabel.setAttribute('for', 'dateStart');
    startDateLabel.textContent = 'Start Date';

    var startDateInput = document.createElement('input');
    startDateInput.type = 'date';
    startDateInput.placeholder = 'dd-mm-yyyy';
    startDateInput.classList.add('details2');
    startDateInput.id = 'projectSD';

    // End Date
    var endDateLabel = document.createElement('label');
    endDateLabel.setAttribute('for', 'dateEnd');
    endDateLabel.textContent = 'End Date';

    var endDateInput = document.createElement('input');
    endDateInput.type = 'date';
    endDateInput.placeholder = 'dd-mm-yy';
    endDateInput.classList.add('details2');
    endDateInput.id = 'projectED';

    // Project Title
    var projectTitleInput = document.createElement('input');
    projectTitleInput.type = 'text';
    projectTitleInput.placeholder = 'Project Title';
    projectTitleInput.classList.add('details2');
    projectTitleInput.id = 'projectTI';

    // Project Description
    var projectDescriptionTextarea = document.createElement('textarea');
    projectDescriptionTextarea.name = 'desc';
    projectDescriptionTextarea.placeholder = 'Project Description';
    projectDescriptionTextarea.id = 'projectDesc';
    projectDescriptionTextarea.cols = '30';
    projectDescriptionTextarea.rows = '7';
    projectDescriptionTextarea.style.border = 'none';
    projectDescriptionTextarea.style.borderRadius = '4px';

    // Append elements to projectsContainer
    projectsContainer.appendChild(startDateLabel);
    projectsContainer.appendChild(startDateInput);
    projectsContainer.appendChild(endDateLabel);
    projectsContainer.appendChild(endDateInput);
    projectsContainer.appendChild(projectTitleInput);
    projectsContainer.appendChild(projectDescriptionTextarea);


    container1.insertBefore(projectsContainer, eduBack);


 // Get references to the input elements in Container 1
    let projectSD=document.getElementById('projectSD');
    let projectED=document.getElementById('projectED');
    let projectTI=document.getElementById('projectTI');
    let projectDesc=document.getElementById('projectDesc');

// Get references to the elements in Container 2 where data will be rendered

let c2_projectSDOutput=document.getElementById('c2-startDateSP');
let c3_projectSDOutput=document.getElementById('c3-startDateSP');
let c2_projectEDOutput=document.getElementById('c2-endDateEP');
let c3_projectEDOutput=document.getElementById('c3-endDateEP');
let c2_projectTIOutput=document.getElementById('c2-projectTitleOutput');
let c3_projectTIOutput=document.getElementById('c3-projectTitleOutput');
let c2_projectDescOutput=document.getElementById('c2-projectDescOutput');
let c3_projectDescOutput=document.getElementById('c3-projectDescOutput');


   // Event Listener for employment Container
   projectSD.addEventListener('input', updateProjectSD);
   projectED.addEventListener('input', updateProjectED  );
   projectTI.addEventListener('input', updateProjectTitle);
   employJobDesc.addEventListener('input', updateProjectDesc);


function updateProjectSD(){
    c2_projectSDOutput.textContent=projectSD.value;
    c3_projectSDOutput.textContent=projectSD.value;
}

function updateProjectED (){
    c2_projectEDOutput.textContent=projectED.value;
    c3_projectEDOutput.textContent=projectED.value;
}

function updateProjectTitle(){
    c2_projectTIOutput.textContent=projectTI.value;
    c3_projectTIOutput.textContent=projectTI.value;
    
}

function updateProjectDesc(){
    c2_projectDescOutput.textContent=projectDesc.value;
    c3_projectDescOutput.textContent=projectDesc.value;
}


});

    educationButton.addEventListener('click', function () {
    // Create a new education container
    var educationContainer = document.createElement('div');
    educationContainer.classList.add('educationContainerInput');

    // Start Date
    var startDateLabel = document.createElement('label');
    startDateLabel.setAttribute('for', 'dateStart');
    startDateLabel.textContent = 'Start Date';

    var startDateInput = document.createElement('input');
    startDateInput.type = 'date';
    startDateInput.placeholder = 'dd-mm-yyyy';
    startDateInput.classList.add('details2');
    startDateInput.id = 'educationSD';

    // End Date
    var endDateLabel = document.createElement('label');
    endDateLabel.setAttribute('for', 'dateEnd');
    endDateLabel.textContent = 'End Date';

    var endDateInput = document.createElement('input');
    endDateInput.type = 'date';
    endDateInput.placeholder = 'dd-mm-yy';
    endDateInput.classList.add('details2');
    endDateInput.id = 'educationED';

    // Qualification
    var qualificationInput = document.createElement('input');
    qualificationInput.type = 'text';
    qualificationInput.placeholder = 'Qualification';
    qualificationInput.classList.add('details2');
    qualificationInput.id = 'educationEQ';

    // School/College
    var schoolCollegeInput = document.createElement('input');
    schoolCollegeInput.type = 'text';
    schoolCollegeInput.placeholder = 'School/College';
    schoolCollegeInput.classList.add('details2');
    schoolCollegeInput.id = 'educationSC';

    // Education Description
    var educationDescriptionTextarea = document.createElement('textarea');
    educationDescriptionTextarea.name = 'desc';
    educationDescriptionTextarea.placeholder = 'Description';
    educationDescriptionTextarea.id = 'educationDesc';
    educationDescriptionTextarea.cols = '30';
    educationDescriptionTextarea.rows = '7';
    educationDescriptionTextarea.style.border = 'none';
    educationDescriptionTextarea.style.borderRadius = '4px';

    // Append elements to educationContainer
    educationContainer.appendChild(startDateLabel);
    educationContainer.appendChild(startDateInput);
    educationContainer.appendChild(endDateLabel);
    educationContainer.appendChild(endDateInput);
    educationContainer.appendChild(qualificationInput);
    educationContainer.appendChild(schoolCollegeInput);
    educationContainer.appendChild(educationDescriptionTextarea);

    // Append educationContainer to the DOM
    educationButton.appendChild(educationContainer);

    container1.insertBefore(educationContainer, educationButton.nextSibling);


// Get references to the input elements in Container 1
let educationSD=document.getElementById('educationSD');
let educationED=document.getElementById('educationED');
let educationSC=document.getElementById('educationSC');
let educationEQ=document.getElementById('educationEQ');
let educationDesc=document.getElementById('educationDesc');

// Get references to the elements in Container 2 where data will be rendered

let c2_educationSDOutput=document.getElementById('c2-startDateSE');
let c2_educationEDOutput=document.getElementById('c2-endDateEE');
let c2_educationEQOutput=document.getElementById('c2-eduQualification');
let c2_educationSCOutput=document.getElementById('c2-eduSchool');
let c2_educationDescOutput=document.getElementById('c2-eduDesc');

let c3_educationSDOutput=document.getElementById('c3-startDateSE');
let c3_educationEDOutput=document.getElementById('c3-endDateEE');
let c3_educationEQOutput=document.getElementById('c3-eduQualification');
let c3_educationSCOutput=document.getElementById('c3-eduSchool');
let c3_educationDescOutput=document.getElementById('c3-eduDesc');


// Event Listener for employment Container
educationSD.addEventListener('input', updateEducationSD);
educationED.addEventListener('input', updateEducationED);
educationSC.addEventListener('input', updateEducationTitle);
educationEQ.addEventListener('input', updateEducationEQ);
educationDesc.addEventListener('input', updateEducationDesc);



function updateEducationSD(){
    c2_educationSDOutput.textContent=educationSD.value;
    c3_educationSDOutput.textContent=educationSD.value;
}

function updateEducationED (){
    c2_educationEDOutput.textContent=educationED.value;
    c3_educationEDOutput.textContent=educationED.value;
}

function updateEducationTitle(){
    c2_educationSCOutput.textContent=educationSC.value;
    c3_educationSCOutput.textContent=educationSC.value;

}

function updateEducationEQ(){
    c2_educationEQOutput.textContent=educationEQ.value;
    c3_educationEQOutput.textContent=educationEQ.value;
}

function updateEducationDesc(){
    c2_educationDescOutput.textContent=educationDesc.value;
    c3_educationDescOutput.textContent=educationDesc.value;
    
}


});







});



function generatePDF() {
    let selectedContainer;
    const selectedOption = document.getElementById('optionSelect').value;

    if (selectedOption === 'option1') {
        selectedContainer = document.getElementById('container2');
    } else if (selectedOption === 'option2') {
        selectedContainer = document.getElementById('container3');
    } 

    selectedContainer.style.width = '100%';

    // Optional: Set pdfOptions (e.g., page size, orientation)
    const pdfOptions = {
        margin: 10,
        filename: 'resume.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    // Call html2pdf with the selected container
    html2pdf().from(selectedContainer).set(pdfOptions).save();
    setTimeout(function () {
        // Reset the width of the selected container to its original value (optional)
        selectedContainer.style.width = '60%';
    });
}

