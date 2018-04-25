/*eslint-env browser*/

function displayMenu() {
    "use strict";
    window.console.log("welcome to the employee management application");
    window.console.log("");
    window.console.log("Command Menu");
    window.console.log("show- show all employees");
    window.console.log("add- add an employee");
    window.console.log("del- delete an employee");
    window.console.log("exit- exit the program");
    window.console.log("");    
}
function show(employees) {
    "use strict";
    var i = 1;
    employees.forEach(function (employee) {
       window.console.log(String(i) + "." + employee);
        i += 1;
    });    
}

function add(employees) {
    "use strict";
    var employee = window.prompt("Enter the employee's name");
    employees.push(employee);
    window.console.log(employee + "was added");
    window.console.log("");
}
function del(employees) {
    "use strict";
    var num, employee;
    num = parseInt(window.prompt("enter number to delete"), 10);
    if (num < 1 || num > em)
}
function main() {
    "use strict";
    var xhr, i, command, employees = [];
    displayMenu();
    xhr = new XMLHttpRequest();
    xhr.open("GET", "data/employees.json");
    xhr.send();
    xhr.addEventListener("readystatechange", function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var jsonData = JSON.parse(xhr.responseText);
            for (i = 0; i < employees.length; i += 1) {
                employees.push(jsonData.employees[i].name);
            } 
            while (true) {
                command = window.prompt("enter command");
                if (command != null) {
                    if (command.toLowerCase() === "show") {
                        show(employees);
                    
                } else if (command.toLowerCase === "add") {
                    add(employees);
                    
                } else if (command.toLowerCase() === "del") {
                    del(employees);
                    
                } else if (command.toLowerCase() === "exit") {
                    break;
                } else {
                   window.console.log("That is not a valid command");
                }
                    
                } else {
                    window.alert("That is not a valid command");
                }
                
            }
        }
        
    });
   
}
main();
