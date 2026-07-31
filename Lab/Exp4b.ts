namespace Library {

    const maxBooks = 5;

    export function validateBooks(count: number): boolean {
        return count <= maxBooks;
    }

    export function validateMemberID(id: string): boolean {
        const memberRegex = /^M[0-9]{4}$/;
        return memberRegex.test(id.toUpperCase());
    }

    export namespace Fine {

        export function calculateFine(daysLate: number): number {
            return daysLate * 10;
        }

    }
}

const booksIssued = 3;
const memberID = "M1234";

console.log(`Books Allowed? ${Library.validateBooks(booksIssued)}`);
console.log(`Member ID Valid? ${Library.validateMemberID(memberID)}`);

const lateDays = 7;
const fine = Library.Fine.calculateFine(lateDays);

console.log(`Fine for ${lateDays} days is ₹${fine}`);
