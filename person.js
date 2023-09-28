class Person {
    constructor(name, jobTitle, gender, age, phoneNumber, emailId, city, state) {
        this.name = name;
        this.jobTitle = jobTitle;
        this.gender = gender;
        this.age = age;
        this.phoneNumber = phoneNumber;
        this.emailId = emailId;
        this.city = city;
        this.state = state;
    }

    getInfo() {
        return `Hi, my name is ${this.name}, and I work as a ${this.jobTitle}. I am ${this.age} years old, ${this.gender}. To contact me, you can call me at ${this.phoneNumber} or email me at ${this.emailId}. I am from ${this.city}, ${this.state}.`;
    }
}

var name = "Vishnu Prasad";
var jobTitle = "Developer";
var gender = "Male";
var age = 28;
var phoneNumber = "967765****";
var emailId = "Vishnuravichandran.28@gmail.com";
var city = "Coimbatore";
var state = "Tamil Nadu";

var person = new Person(name, jobTitle, gender, age, phoneNumber, emailId, city, state);
console.log(person.getInfo());
