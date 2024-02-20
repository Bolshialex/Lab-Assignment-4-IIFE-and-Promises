(function () {
    let studentDataTask1 = [];
    let studentInfoTask2 = [];
    let greaterAgeBtn = document.getElementById('greaterThan');
    let avgAgeBtn = document.getElementById('avgAge');
    let oddIndex = document.getElementById('oddIndex');
    
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
        })


    

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
        
        }
            , 2000)
            
    }).catch(error => {
        console.error("Error fetching data", error);
        alert('Error fetching data after calling the fetchData function');
    })


    greaterAgeBtn.addEventListener('click', () => {
        let resultPlacement = document.getElementById('results');
        const ulElement = document.createElement('ul');
        
        if(resultPlacement.firstElementChild){
        }
        else{
        
            resultPlacement.appendChild(ulElement);

            const filteredAge = studentDataTask1.filter(students => students.age > 20);

            filteredAge.forEach(student => {
                const liElement = document.createElement('li');
                ulElement.appendChild(liElement).innerText += `Student: ${student.name} | Age: ${student.age} | Major: ${student.major} | Grade: ${student.grade}\n`;
            });
        }
    })

    avgAgeBtn.addEventListener('click', () => {
        let studentAgeSum = 0;
        studentDataTask1.forEach(student => {
            studentAgeSum += student.age;
        })

        let avgAge = studentAgeSum / (studentDataTask1.length);
        
        //clear the box and place the avg age into a message
    })

    oddIndex.addEventListener('click', () => {
        let resultPlacement = document.getElementById('results');
        const ulElement = document.createElement('ul');
        resultPlacement.appendChild(ulElement);

        for(let i = 1; i<studentDataTask1.length; i+=2){
            const liElement = document.createElement('li');
            ulElement.appendChild(liElement).innerText += `Student: ${studentDataTask1[i].name} | Age: ${studentDataTask1[i].age} | Major: ${studentDataTask1[i].major} | Grade: ${studentDataTask1[i].grade}\n`;
        }

    })

})();