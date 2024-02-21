(function () {
let studentDataTask1 = [];
let studentInfoTask2 = [];
let greaterAgeBtn = document.getElementById('greaterThan');
let avgAgeBtn = document.getElementById('avgAge');
let oddIndex = document.getElementById('oddIndex');
    
//Task 2 using am IIFE to get the data and display it right away    
fetch('students.json')
    .then(function(response){
        if(!response.ok){
            throw new console.error("Failed to load data at level 1");
        }
        return response.json();
    })
    .then(data => {
        studentDataTask1 = data.students;
        let studentInfo = document.getElementById('studentInfo');
        const ulElement = document.createElement('ul');
        studentInfo.appendChild(ulElement);
        studentDataTask1.forEach(student => {
            const liElement = document.createElement('li');
            ulElement.appendChild(liElement).innerText += `Student: ${student.name} | Age: ${student.age} | Major: ${student.major} | Grade: ${student.grade}\n`;
        });
    }).catch(error => {
        console.error("Error fetching data", error);
        alert('Error fetching data at level 2');
    });

        
//Task 3 using a function to gather the data and display it with a timeout
function fetchData(){
    return fetch('students.json')
        .then(function(response){
            if(!response.ok){
                throw new console.error("Failed to load data in fetchData");
            }
                return response.json();
            }
        );
}

//calling the fetchData, implementing a timeout to sim a display
fetchData()
    .then(data => {
        setTimeout(() => {
            studentInfoTask2 = data.students
            let studentInfo = document.getElementById('studentInfoDelay');
            const ulElement = document.createElement('ul');
            studentInfo.appendChild(ulElement);
            studentInfoTask2.forEach(student => {
                const liElement = document.createElement('li');
                ulElement.appendChild(liElement).innerText += `Student: ${student.name} | Age: ${student.age} | Major: ${student.major} | Grade: ${student.grade}\n`;
            });
        
        }, 2000)
    
    }).catch(error => {
        console.error("Error fetching data", error);
        alert('Error fetching data after calling the fetchData function');
});

//button 1 part of task 4 
//the button checks to see if there is something in its div.
//if yes, it clears and displays. If not, it displays the filtered by age data
greaterAgeBtn.addEventListener('click', () => {
    let resultPlacement = document.getElementById('results');
    const ulElement = document.createElement('ul');
        
    if(resultPlacement.firstElementChild){
        resultPlacement.innerHTML = "";
    }

        
    resultPlacement.appendChild(ulElement);

    const filteredAge = studentDataTask1.filter(students => students.age > 20);

    filteredAge.forEach(student => {
        const liElement = document.createElement('li');
        ulElement.appendChild(liElement).innerText += `Student: ${student.name} | Age: ${student.age} | Major: ${student.major} | Grade: ${student.grade}\n`;
    });
        
});

//Button 2 of part 4
//takes all the ages of the students and sums it and divides it by the length 
//Also checks if a clear is needed
avgAgeBtn.addEventListener('click', () => {
    let studentAgeSum = 0;
    studentDataTask1.forEach(student => {
        studentAgeSum += student.age;
    })
    let resultPlacement = document.getElementById('results');
    const pElement = document.createElement('p');
        
       

        
    let avgAge = studentAgeSum / (studentDataTask1.length);
    if(resultPlacement.firstElementChild){
        resultPlacement.innerHTML = "";
    }

    resultPlacement.appendChild(pElement);
    pElement.innerText = `The average age for all students is ${avgAge}.`;

        
});


//Button 3 of part 4
//takes the students array and iterates through the array with the odd index. Starting from 1
//chacks for children to clear if they exist
oddIndex.addEventListener('click', () => {

    let resultPlacement = document.getElementById('results');
    const ulElement = document.createElement('ul');

    if(resultPlacement.firstElementChild){
        resultPlacement.innerHTML = "";
    }

    resultPlacement.appendChild(ulElement);


    for(let i = 1; i<studentDataTask1.length; i+=2){
        const liElement = document.createElement('li');
        ulElement.appendChild(liElement).innerText += `Student: ${studentDataTask1[i].name} | Age: ${studentDataTask1[i].age} | Major: ${studentDataTask1[i].major} | Grade: ${studentDataTask1[i].grade}\n`;
    }

});

})();