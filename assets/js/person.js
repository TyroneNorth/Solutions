class Person {
    constructor(eMail,fName,lName,comment) {
        this.fName=fName;
        this.lName=lName;
        this.eMail=eMail;
        this.comment=comment;
        this.fullName=function() {
            return this.fName+" "+this.lName;
        };
    }
}

var personArray = new Array();

function addPerson(Person) {
    personArray.push(Person);
};

function delPerson(Person) {
    personArray.pop(Person);
};

function fullName(Person) {
    return Person.fName + " " + Person.lName;
}

