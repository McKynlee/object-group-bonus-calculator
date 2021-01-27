$(document).ready(function () {
  console.log('jQuery is running');

  const employees = [
    {
      name: 'Atticus',
      employeeNumber: '2405',
      annualSalary: '47000',
      reviewRating: 3,
    },
    {
      name: 'Jem',
      employeeNumber: '62347',
      annualSalary: '63500',
      reviewRating: 4,
    },
    {
      name: 'Scout',
      employeeNumber: '6243',
      annualSalary: '74750',
      reviewRating: 5,
    },
    {
      name: 'Robert',
      employeeNumber: '26835',
      annualSalary: '66000',
      reviewRating: 1,
    },
    {
      name: 'Mayella',
      employeeNumber: '89068',
      annualSalary: '35000',
      reviewRating: 1,
    },
  ];

  // YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

  // Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
  // This problem is massive! Break the problem down. Use the debugger.
  // What is the fewest lines of code I can write and test to get just a little closer?

  // This is not a race. Everyone on your team should understand what is happening.
  // Ask questions when you don't.

  console.log(employees);

  function employeeLog(array) {
    for (let i = 0; i < array.length; i++) {
      console.log(createNewEmployee(array[i]));
    }
  }

  function createNewEmployee(employeeObject) {
    let employeeBonus = Number(calculateBonus(employeeObject));
    let BonusPercentage = Number(employeeBonus / employeeObject.annualSalary);
    let newEmployee = {
      name: employeeObject.name,
      bonusPercentage: BonusPercentage, // add bonus percentage
      totalCompensation:
        Number(employeeObject.annualSalary) + Number(employeeBonus), // add total compensation
      totalBonus: employeeBonus, // add total bonus
    };
    // displayNewEmployees(employeeObject);  //this causes a lot of errors
    return newEmployee;
  }

  function calculateBonus(employee) {
    let bonus = 0;
    let bonusPercentage = 0;
    if (employee.reviewRating === 5) {
      bonusPercentage = 0.1;
      bonus = bonusPercentage * employee.annualSalary;
      console.log('5 star review- yay! Bonus=', bonus); //testing
    } else if (employee.reviewRating === 4) {
      bonusPercentage = 0.06;
      bonus = bonusPercentage * employee.annualSalary;
    } else if (employee.reviewRating === 3) {
      bonusPercentage = 0.04;
      bonus = bonusPercentage * employee.annualSalary;
    }
    if (employee.employeeNumber.length === 4) {
      bonusPercentage += 0.05;
      bonus *= 1.05;
    }
    if (employee.annualSalary >= 65000) {
      bonusPercentage -= 0.01;
      bonus *= 0.99;
      console.log(
        `${employee.name}'s salary is greater than $65k, bonus is $ ${bonus} and bonus % = ${bonusPercentage}`
      ); //testing
    }
    if (bonusPercentage > 0.13) {
      bonus = 0.13 * employee.annualSalary;
      console.log(
        `${employee.name}'s bonus over 13%, so dropping it down to: ${bonus}`
      ); //testing
    }
    if (bonusPercentage < 0) {
      bonus = 0;
      bonusPercentage = 0;
      console.log(
        `${employee.name}'s bonus less than 0%, so bringing it up to: ${bonus}.${bonusPercentage}%`
      ); //testing
    }
    return Number(bonus);
  }

  console.log(
    'Employee at index=0 will have bonus = $',
    calculateBonus(employees[0])
  ); //testing

  console.log(employeeLog(employees));

  let scout = {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5,
  };

  // console.log("Scout's bonus is:", calculateBonus(scout)); //Trying to debug
  // console.log('Scout created as new employee:', createNewEmployee(scout));

  function displayNewEmployees(inputArray) {
    let empOnDom = $('#js-newEmployee');
    empOnDom.empty();
    for (employee of inputArray) {
      empOnDom.append(`<li> ${employee} </li>`);
    }
    return true;
  }

  console.log(displayNewEmployees(employees));
});
