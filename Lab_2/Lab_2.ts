
// TASK 1 --------------------------------------------
interface PrizeLogger
{
    (string:string):void;
}

function print(string:string) {
    console.log(`${string} :)`)
}

//Worker не працює
interface Employee{
    id:number;
    name:string;
    surname:string;
    available:boolean;
    salary:number;
    markPrize:PrizeLogger;
}

function getAllWorkers(): Employee[] {

    let workers:Employee[] = [
        {id: 1, name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000, markPrize: print},
        {id: 2, name: 'Petro', surname: 'Petrov', available: true, salary: 1500, markPrize: print},
        {id: 3, name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600, markPrize: print},
        {id: 4, name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300, markPrize: print}
    ]
    return workers

}
console.log(`\nGetAllWorkers: `)
console.log(getAllWorkers())
function getWorkerById(
    workers: Employee[],
    id: number
) : Employee | null {

    for (let worker of workers) {
        if (worker.id === id) {
            return worker
        }
    }
    return null
}

function printWorker(worker:Employee)
{

    console.log(`${worker.name} ${worker.surname} got salary ${worker.salary}`)
}

console.log(`\ngetWorkerById 1: `)
let worker = getWorkerById(getAllWorkers(), 1);

if (worker !== null) {
    printWorker(worker)
} else {
    console.log("Worker not found");
}

// TASK 2 --------------------------------------------

interface Person {
    name: string;
    email: string;
}

interface Author extends Person {
    numBooksPublished: number;
}

interface Librarian extends Person {
    department: string;
    assistCustomer(custName: string): void;
}

class UniversityLibrarian implements Librarian {
    name: string;
    email: string;
    department: string;

    constructor(name: string, email: string, department: string) {
        this.name = name;
        this.email = email;
        this.department = department;
    }

    assistCustomer(custName: string): void {
        console.log(`${this.name} is assisting ${custName}`);
    }
}

let favoriteAuthor: Author = {
    name: "Maksym",
    email: "maksym@knu.ua",
    numBooksPublished: 3
};

// let favoriteLibrarian: Librarian = {
//     name: "Maksym",
//     email: "maksym@knu.ua",
//     department: "Advertising",
//     assistCustomer(custName: string) {
//         console.log(`Assisting ${custName}`);
//     }
// };

let favoriteLibrarian = new UniversityLibrarian(
    "Maksym",
     "maksym@knu.ua",
    "Advertising"
);

favoriteLibrarian.assistCustomer("Bob");

// TASK 3 --------------------------------------------

abstract class ReferenceItem{

    // title:string;
    // year:number;
    //
    // constructor(newTitle:string, newYear:number)
    // {
    //     this.title = newTitle;
    //     this.year=newYear;
    //     console.log("Creating new ReferenceItem....")
    //
    // }

    private __publisher:string;
    static department:string = "Advertising";

    publisherGetter():string
    {

        return this.__publisher.toUpperCase();

    }

    publisherSetter(newPublisher:string):void
    {

        this.__publisher = newPublisher;

    }


    constructor(public title:string, protected year:number){}

    printItem() {
        console.log(`${this.title} was published in ${this.year} by ${ReferenceItem.department}`);
    }

    abstract printCitation():void;

}

// let ref = new ReferenceItem("Fit :(", 20021);
// ref.publisherSetter("jurnalchik");
// ref.printItem();
// console.log(ref.publisherGetter());

class Encyclopedia extends ReferenceItem{

    constructor(title:string, year:number, public edition:number)
    {
        super(title, year);
    }

    printItem() {
        console.log(`${this.title} was published in ${this.year} by ${ReferenceItem.department}`);
        console.log(`Edition:${this.edition}`);
    }

    printCitation(){

        console.log("I don`t want to learn python for IDA");
    }
}

let refBook = new Encyclopedia("Fit :(", 20021, 3);
refBook.printItem();
