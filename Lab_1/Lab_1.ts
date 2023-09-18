
// TASK 1 --------------------------------------------
enum Category {
    Business_analyst,
    Developer,
    Designer,
    QA,
    Scrum_master
}

function getAllWorkers() {

    let workers = [
        {name: `Ivan`, surname: `Ivanov`, available: true, salary: 1000, category: Category.Business_analyst, id: 1},
        {name: `Petro`, surname: `Petrov`, available: true, salary: 1500, category: Category.Developer, id: 2},
        {name: `Vasyl`, surname: `Vasyliev`, available: false, salary: 1600, category: Category.Designer, id: 3},
        {name: `Evgen`, surname: `Zhukov`, available: true, salary: 1300, category: Category.QA, id: 4}
    ]
    return workers

}
console.log(`\nGetAllWorkers: `)
console.log(getAllWorkers())


function logFirstAvailable(
    workers: {name: string, surname: string, available: boolean, salary: number, category: Category, id: number}[] = getAllWorkers()
){
    console.log(`Workers amount: ` + workers.length)
    for (let worker of workers) {
        if(worker.available == true){
            console.log(worker.name + ' ' + worker.surname)
            return
        }
    }
}
console.log(`\nLogFirstAvailable: `)
logFirstAvailable(getAllWorkers())

// TASK 2 --------------------------------------------
function getWorkersNamesByCategory(
    workers: {name: string, surname: string, available: boolean, salary: number, category: Category, id: number}[],
    category: Category = Category.Developer
){

    let new_workers: Array<String> = []

    workers.forEach((worker) => {
        if(worker.category == category){
            new_workers.push(worker.name)
        }
    })
    return new_workers
}

function logWorkersNames(names : String[]) {
    console.log(names);
}

console.log(`\ngetWorkersNamesByCategory: `)
logWorkersNames(getWorkersNamesByCategory(getAllWorkers(), Category.QA))

// TASK 3 --------------------------------------------

function getAllDevelopersNameAndSurname(
    workers: {name: string, surname: string, available: boolean, salary: number, category: Category, id: number}[]
) {

    workers.forEach((worker) => {
        if (worker.category == Category.Developer) {
            console.log(worker.name + " " + worker.surname)
        }
    })
}
console.log(`\ngetAllDevelopersNameAndSurname: `)
getAllDevelopersNameAndSurname(getAllWorkers())

function getWorkerById(
    workers: {name: string, surname: string, available: boolean, salary: number, category: Category, id: number}[],
    id: number
) {

    for (let worker of workers) {
        if (worker.id === id) {
            return worker
        }
    }
    return null
}

console.log(`\ngetWorkerById 1: `)
console.log(getWorkerById(getAllWorkers(), 1))

// TASK 4 --------------------------------------------

function createCustomerID(name: string, id: number): string{
    return name.concat(id.toString())
}

type createCustomerID = (name: string, id: number) => string;

const IdGenerator: createCustomerID = (name: string, id: number) => {
    return name.concat(id.toString())
};

let myId = IdGenerator(`Ann`, 10)

console.log(`\ncreateCustomerID Ann, 10: `)
console.log(myId)

function createCustomer(name: string, age?: number, city?: string){
    console.log(`${name}${age ? ` ${age}` : ''}${city ? ` ${city}` : ''}`)
}

console.log(`\ncreateCustomer with 1 parameter: `);
createCustomer(`Bob`);
console.log(`\ncreateCustomer with 2 parameters: `);
createCustomer(`Bob`, 7);
console.log(`\ncreateCustomer with 3 parameters: `);
createCustomer(`Bob`, 7, `Odesa`);

console.log(`\ngetWorkersNamesByCategory without parameters: `);
logWorkersNames(getWorkersNamesByCategory(getAllWorkers()))

console.log(`\nLogFirstAvailable without parameters: `)
logFirstAvailable()

function checkoutWorkers(customer: string, workerIDs: number []){

    let workers: any = [];

    console.log(customer);
    for(let number of workerIDs){
        let worker = getWorkerById(getAllWorkers(), number)
        if (worker.available) {

            workers.push(worker);
        }
    }

    return workers;
}

console.log("\ncheckoutWorkers with Ann, 1, 2, 4: ");

let myWorkers = checkoutWorkers('Ann', [1, 2, 4]);
myWorkers.forEach((worker) => {
    console.log(worker.name + " " + worker.surname)
});