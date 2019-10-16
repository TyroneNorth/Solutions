function submitF() {
    var fName = document.getElementById('fName').value_as_property;
    var lName = document.getElementById('lName').value_as_property;
    var eMail = document.getElementById('Email').value_as_property;
    var comment = document.getElementById('comment').value_as_property;
}

var newPerson = new Person(eMail, fName, lName, comment);
