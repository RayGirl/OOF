const studentRecordForm = document.querySelector('.student-record form');
  const studentInfoDiv = document.querySelector('#student-info');

  studentRecordForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const studentNumber = document.querySelector('#student-number').value;
    const name = document.querySelector('#name').value;
    const gitRepos = document.querySelector('#git-repos').value.split('\n');

    const studentInfo = `
      <h3>Student Information</h3>
      <p>Student Number: ${studentNumber}</p>
      <p>Name: ${name}</p>
      <p>Git Repositories:</p>
      <ul>
        ${gitRepos.map((repo) => `<li>${repo}</li>`).join('')}
      </ul>
    `;

    studentInfoDiv.innerHTML = studentInfo;
  });