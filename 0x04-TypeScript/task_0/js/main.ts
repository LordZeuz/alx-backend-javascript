interface Student {
  firstName: string,
  lastName: string,
  age: number,
  location: string
}

const student1: Student = {
  firstName: "Christian",
  lastName: "Ahlidjah",
  age: 25,
  location: "Ghana"
}

const student2: Student = {
  firstName: "Abigail",
  lastName: "Ahlidjah",
  age: 30,
  location: "Ghana"
}

const studentsList: Array<Student> = [student1, student2];

document.addEventListener('DOMContentLoaded', () => {
  const bodyHtml = document.getElementsByTagName('body')[0];
  const tableHtml = document.createElement('table');
  const borderDefinition = 'solid #000000 1px';
  tableHtml.style.borderCollapse = 'collapse';
  tableHtml.style.border = borderDefinition;

  studentsList
    .map((student) => {
      const row = document.createElement('tr');
      Object.entries(student).forEach(([key, value]) => {
        const data = document.createElement('td');
        data.textContent = value; // Use textContent to set plain text
        data.style.border = borderDefinition;
        data.style.padding = '7px';
        row.appendChild(data);
      });
      return row;
    })
    .forEach((row) => {
      tableHtml.appendChild(row);
    });

  bodyHtml.appendChild(tableHtml);
});
