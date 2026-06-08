/**
 * 1. Find the expensive products from the list of prices which is greater than 300.
 */
let prices = [100, 250, 500, 150, 700]
let exp_products = prices.filter((price) => price > 300)
// console.log(exp_products)

/**
 * 2. Find the average marks from the list of marks. 
 */
let marks_ar = [80, 90, 70, 85, 95]
let avg_marks = marks_ar.reduce((total, marks) => total + marks, 0) / marks_ar.length;
// console.log(avg_marks);

/**
 * 3. Find the number which has most occurence in the array
 */
let numbers = [1, 2, 3, 2, 4, 2, 5, 1, 1, 1]
let frequency = {};
let max_freq_idx = null;
numbers.forEach(((number) => {
    if (frequency[number]) {
        if (!max_freq_idx) {
            max_freq_idx = number;
        }
        frequency[number] += 1
    } else {
        frequency[number] = 1
    }
    max_freq_idx = (frequency[number] > frequency[max_freq_idx]) ? number : max_freq_idx
}))
//console.log(`Most Frequent Number: ${max_freq_idx} with occurence: ${frequency[max_freq_idx]}`)


/**
 * 4. Update user age in an object
 */
let user = {
    name: "Chirag",
    age: 20,
}
//console.log("Before:", user)
user.age = 21;
//console.log("After:", user)

/**
 * 5. Print user info
 */
let user2 = {
    name: "Chirag",
    age: 20,
    city: "Bhopal"
}
//console.log(Object.entries(user2))

Object.entries(user2).forEach(([key, value]) => {
    //console.log(`${key}: ${value}`)
})

/**
 * 6. Highest Paid Employee
 */
let employees = [
    { User1: 50000 },
    { User2: 30000 },
    { User3: 55000 },
    { User4: 70000 }
];
let highestPaidEmployee = employees.reduce((prev_emp, current_emp) => {
    return current_emp.salary > prev_emp.salary ? current_emp : prev_emp;
}, employees[0]);
//console.log("Highest Paid Employee:", highestPaidEmployee);


/** 7. Create greet function */

function greet(name) {
    console.log(`Hello  ${name}`)
}
// greet("Ritik")

/**
 * 8. Discount Calculate
 */
function calculateDiscount(price) {
    return price * .10;
}
// console.log(calculateDiscount(1000))

/**
 * 9. Dynamic Sum Function
 */
function sum(...numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
}
// console.log(sum(1, 2, 3, 4, 5))
// console.log(sum(3, 4, 5))

/**
 * 10. Find adult users
 */

let users = [
    { name: "Ritik", age: 20 },
    { name: "Aman", age: 16 },
    { name: "Priya", age: 25 }
];
function getAdults(users) {
    return users.filter((user) => user.age >= 18)
}
// console.log(getAdults(users));

/**
 * 11. Shopping Cart Total
 */

let cart = [
    { name: "Mouse", price: 500, qty: 2 },
    { name: "Keyboard", price: 1000, qty: 1 },
    { name: "Monitor", price: 10000, qty: 1 }
];

function getCartTotal(cart) {
    return cart.reduce((total, item) => total + item.price * item.qty, 0)
}

// console.log(getCartTotal(cart))

/**
 * 12. create grade sheet
 */

let students = [
    {
        name: "Ritik",
        marks: [80, 90, 85]
    },
    {
        name: "Aman",
        marks: [50, 40, 60]
    }
]

function generateReport(students) {
    return students.map((student) => {
        let total_marks = student.marks.reduce((total, mark) => total + mark, 0);
        let average_marks = total_marks / student.marks.length;
        let grade = "C";

        if (average_marks >= 80) {
            grade = "A";
        }
        if (average_marks >= 60) {
            grade = "B";
        }
        student.average_marks = average_marks;
        student.grade = grade;
        return student;
    })
}

console.log(generateReport(students));
