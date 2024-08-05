'use strict';

const self = this;

const displayMessage = function (id, message) {
    document.querySelector(id).textContent = message;
  };

const executeTest1 = function () {
    const harald = {
        name: "Harald",
        age: 52,
        printHello: function () {
            displayMessage('#_line01', this.name);        
        }
    }

    const flo = harald;
    flo.name = 'Florian';
    
    harald.printHello(); //"Florian"
}


const executeTest2 = function () {
    console.log(this);
    const message2 = typeof this;
    console.log(message2);
    displayMessage('#_line02', message2);  //"undefined"
}

const executeTest3 = function () {
    const result = 4 + "3";
    displayMessage('#_line03', result); //"43"
}

const executeTest4 = function () {
    const result = "4" - 3;
    displayMessage('#_line04', result); //1  
}


document.querySelector('#runbtn').addEventListener('click', function () {
    console.log(self);    
    console.log(this);
    executeTest1();
    executeTest2();
    executeTest3();
    executeTest4();
  } 
);




