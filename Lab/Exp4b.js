"use strict";
var Library;
(function (Library) {
    const maxBooks = 5;
    function validateBooks(count) {
        return count <= maxBooks;
    }
    Library.validateBooks = validateBooks;
    function validateMemberID(id) {
        const memberRegex = /^M[0-9]{4}$/;
        return memberRegex.test(id.toUpperCase());
    }
    Library.validateMemberID = validateMemberID;
    let Fine;
    (function (Fine) {
        function calculateFine(daysLate) {
            return daysLate * 10;
        }
        Fine.calculateFine = calculateFine;
    })(Fine = Library.Fine || (Library.Fine = {}));
})(Library || (Library = {}));
const booksIssued = 3;
const memberID = "M1234";
console.log(`Books Allowed? ${Library.validateBooks(booksIssued)}`);
console.log(`Member ID Valid? ${Library.validateMemberID(memberID)}`);
const lateDays = 7;
const fine = Library.Fine.calculateFine(lateDays);
console.log(`Fine for ${lateDays} days is ₹${fine}`);
