/* Attempted questions 3,6,7,9,11,12,15,10*/
$('#Assignment').on("click", function () {
    revealQuestion();
});

function revealQuestion() {
    let assignment = $('#inputGroupSelect01').val();
    document.getElementById(assignment).style.display = "block";
    document.getElementById('refresh').style.display = "block";
}
$('#refresh').on("click", function () {
    hideQuestions();
});

function hideQuestions() {
    document.getElementById('refresh').style.display = "none";
    let x = document.getElementsByClassName("questions");
    for (d = 0; d < x.length; d++) {
        x[d].style.display = "none";
    };


}


// 3. Reverse String
// Define function: reverseStr(someStr)
// Reverse and return the String.

$('#q3Button').on("click", function () {
    reversesStr();
});

function reversesStr() {
    let q3Str = $('#q3').val();
    let a = q3Str.split("");
    let b = a.reverse();
    $('#q3Output').html(b);
};

// 6. Even Number
// Define function: isEven(someNum)
// Return true if even, false if odd.
// Do not use % operator.

$('#q6Button').on("click", function () {
    isEven();
});

function isEven() {
    let q6Num = $('#q6').val();
    if (q6Num == 0) {
        $('#q6Output').html('Not Valid')
    }
    else if (q6Num & 1) {
        $('#q6Output').html('ODD');
    }
    else {
        $('#q6Output').html('EVEN');
    }
}

// 7. Palindrome
// Define function isPalindrome(someStr)
// Return true if someStr is a palindrome, otherwise return false

$('#q7Button').on("click", function () {
    isPalindrome();
});

function isPalindrome() {
    let q7Str = $('#q7').val();
    let a = q7Str.split("");
    let b = $('#q7').val().split("");
    a.reverse();
    let q7Str1 = a.toString();
    let q7Str2 = b.toString();
    var n = q7Str1.localeCompare(q7Str2);
    if (!n) {
        $('#q7Output').html('This is a Palindrome');
    }
    else {
        $('#q7Output').html("Don't waste time!");
    }
};

// 9. Object literal
// Define function traverseObject(someObj)
// Print every property and it's value.

$('#q9Button').on("click", function () {
    traverseObject();
});



function createObject(basic, sport, mascot, number, okay) {
    this.basic = basic;
    this.sport = sport;
    this.mascot = mascot;
    this.countries_lived_in = number;
    this.pudding = okay;
}
function traverseObject(someObj) {
    var someObj = new createObject($('#q9sub1').val(), $('#q9sub2').val(), $('#q9sub3').val(), $('#q9sub4').val(), $('#q9sub5').val());

    let a = Object.entries(someObj);
    let d;
    for (d = 0; d < a.length; d++) {
        var b = a[d].toString();
        var e = b.replace(",", ":");
        var g = document.createElement("li");
        g.innerHTML = e;
        $('#things').append(g);
    }

}




// 10. Delete Element
// Define function deleteElement(someArr)
// Print length
// Delete the third element in the array.
// Print length
// The lengths should be the same.

$('#q10Button').on("click", function () {
    deleteElement();
});

function deleteElement() {
    let q10Num = $('#q10').val();
    if (q10Num.length < 3) {
        $('#q10Out1').html('Invalid Input');
        $('#q10Out2').html('');
        $('#q10Out3').html('');
    }
    else {
        $('#q10Out1').html("The array's length is: " + q10Num.length);
        let a = q10Num.split("");
        a[2] = "";
        a.toString();
        $('#q10Out2').html("The array is now: " + a);
        $('#q10Out3').html("The array's length is: " + a.length);
    }
}



// 11. Splice Element
// Define function spliceElement(someArr)
// Print length
// Splice the third element in the array.
// Print length
// The lengths should be one less than the original length.

$('#q11Button').on("click", function () {
    spliceElement();
});

function spliceElement() {
    let q11Str = $('#q11').val();
    if (q11Str.length < 3) {
        $('#q11Out1').html('Invalid Input');
        $('#q11Out2').html('');
        $('#q11Out3').html('');
    }
    else {
        $('#q11Out1').html("The array's length is: " + q11Str.length);
        let a = q11Str.split("");
        a.splice(2, 1);
        $('#q11Out2').html("The array is now: " + a);
        $('#q11Out3').html("The array's length is: " + a.length);
    }
};


// 12. Defining an object using a constructor
// Define a function Person(name, age)
// The following line should set a Person object to the variable john:
// 	var john = new Person("John", 30);

$('#q12Button').on("click", function () {
    var a = $('#q12Sub1').val();
    console.log(a);
    var a = new Person($('#q12Sub2').val(), $('#q12Sub3').val());
    b = JSON.stringify(a)
    $('#q12Output').html(b);
});


function Person(awesome, ancient) { //Object creation with a function constructor
    this.name = awesome;
    this.age = ancient;
}


// 13. Defining an object using an object literal
// Define function getPerson(name, age)
// The following line should set a Person object to the variable john:
// 	var john = getPerson("John", 30);



// function getPerson(a, b) {
//     let person = {         //creation of an object protoype with parameters name and age
//         name: a,
//         age: b,
//     }
//     return person;

// };



// 15.  Descending order
// Your task is to make a function that can take any non-negative 
// integer as a argument and return it with its digits in descending 
// order. Essentially, rearrange the digits to create the highest possible number.

$('#q15Button').on("click", function () {
    question15();
});

function question15() {
    let q15Num = $('#q15').val();
    let numList = q15Num.split("");
    numList.sort(function (a, b) { return b - a });
    /*When the sort() method compares two values, it sends the values to the compare function, 
    and sorts the values according to the returned (negative, zero, positive) value.*/
    //console.log(numList); console test
    $('#q15Output').html(numList);
};



