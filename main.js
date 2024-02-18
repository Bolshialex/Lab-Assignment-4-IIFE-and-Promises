(function () {
    let studentDataTask1 = [];

    
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


    let studentInfoTask2 = [];

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
    

})();