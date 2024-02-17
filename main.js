(function () {
    let studentData = [];

    
        fetch('students.json')
            .then(function(response){
                if(!response.ok){
                    throw new console.error("Failed to load data at level 1");
                }
                return response.json();
            })
            .then(data => {
                studentData = data.students;
                let studentInfo = document.getElementById('studentInfo');
                studentInfo.innerHTML = "<ul>";
                studentData.forEach(student => {
                    studentInfo.innerHTML += `<li>Student: ${student.name} | Age: ${student.age} | Major: ${student.major} | Grade: ${student.grade}</li>`;
                });
                studentInfo.innerHTML += "</ul>"
                
            }).catch(error => {
                console.error("Error fetching data", error);
                alert('Error fetching data at level 2');
            })
})();