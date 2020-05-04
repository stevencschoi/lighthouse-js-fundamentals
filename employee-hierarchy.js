const employees = [
  { name: "Alice", manager: null, title: "CEO" },
  { name: "Bob", manager: "Alice", title: "Head of Marketing" },
  { name: "Carol", manager: "Alice", title: "Head of Engineering" },
  { name: "Darcy", manager: "Carol", title: "Systems Architect" },
  { name: "Edwin", manager: "Bob", title: "SEO Specialist" },
  { name: "Farah", manager: "Carol", title: "Senior Developer" },
  { name: "Georg", manager: "Carol", title: "Junior Developer" },
];

// Write a function that takes the employee list and outputs the number of direct reports each employee has. For this dataset, the output would be:

// {
//   'Alice': 2,
//   'Bob': 1,
//   'Carol': 3,
//   'Darcy': 0,
//   'Edwin': 0,
//   'Farah': 0,
//   'Georg': 0
// }

const directReports = (array) => {
  // need to retrieve each object.name in array and set the key to that name
  let result = {};
  for (const employee of array) {
    // if the employee does not exist in the object, add them
    if (!result[employee.name]) {
      result[employee.name] = 0;
      // if the employee.manager exists, increment count for that person
      if (employee.manager) {
        result[employee.manager]++;
      }
    }
  }
  return result;
};

// console.log(directReports(employees));

// Write a function that takes the employee list and outputs another array that contains an array of the names of an employee's direct reports instead of their manager's name, e.g.:

// [
//   { name: 'Alice', reports: ['Bob', 'Carol'], title: 'CEO' },
//   ...
// ]

// find index of a thing
const findIndex = (value, array) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i].name === value) {
      return [i];
    }
  }
};

const directReportNames = (array) => {
  let directReports = [];
  // for each employee, create an object with their name, reports and title
  for (const employee of array) {
    if (!directReports.includes(employee.name)) {
      let result = {
        name: employee.name,
        reports: [],
        title: employee.title,
      };
      directReports.push(result);
    }
    // if employee has a manager, push that employee's name to the manager's object reports array
    if (employee.manager) {
      // search through array for the object that has name = employee.manager (findIndex)

      // add the employee name to that object
      directReports[findIndex(employee.manager, directReports)].reports.push(
        employee.name
      );
    }
  }
  return directReports;
};

// console.log(directReportNames(employees));

// Modify the function to include indirect reports, too; i.e. if Alice is Bob's manager and Bob is Edwin's manager, Edwin is one of Alice's indirect reports.

const getIndirectReports = (array) => {
  let indirectReports = [];
  for (const employee of array) {
    if (!indirectReports.includes(employee.name)) {
      let result = {
        name: employee.name,
        reports: [],
        title: employee.title,
      };
      indirectReports.push(result);
    }

    if (employee.manager) {
      // check employee array for the manager's manager
      if (employees[findIndex(employee.manager, employees)].manager) {
        // add the employee.name to the manager's manager's reports

        indirectReports[
          findIndex(
            employees[findIndex(employee.manager, employees)].manager,
            indirectReports
          )
        ].reports.push(employee.name);
      }

      indirectReports[
        findIndex(employee.manager, indirectReports)
      ].reports.push(employee.name);
    }
  }
  return indirectReports;
};

// console.log(getIndirectReports(employees));
