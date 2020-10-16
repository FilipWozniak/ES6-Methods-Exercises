// TASK 1
console.log("TASK 1");

const prices = [10.99, 5.99, 3.99, 6.59];
const tax = 0.19;

const taxation = new Array(prices.length).fill().map((_, i) => ({ ID: i, Price: (prices[i] * (1 + tax)).toFixed(2) }));

console.log(taxation);

// TASK 2
console.log("TASK 2");

let filtering = taxation.filter(function (e) {
    return e.Price > 6.00;
});

console.log(filtering);

// TASK 3
console.log("TASK 3");

const sum = taxation.reduce((partial, a) => partial + Number(a.Price), 0);

console.log(sum);

// TASK 4
console.log("TASK 4");

const personnel = [
    {
        ID: 5,
        name: "Luke Skywalker",
        pilotingScore: 98,
        shootingScore: 56,
        isForceUser: true
    },
    {
        ID: 82,
        name: "Sabine Wren",
        pilotingScore: 73,
        shootingScore: 99,
        isForceUser: false
    },
    {
        ID: 22,
        name: "Zeb Orellios",
        pilotingScore: 20,
        shootingScore: 59,
        isForceUser: false
    },
    {
        ID: 15,
        name: "Ezra Bridger",
        pilotingScore: 43,
        shootingScore: 67,
        isForceUser: true
    },
    {
        ID: 11,
        name: "Caleb Dume",
        pilotingScore: 71,
        shootingScore: 85,
        isForceUser: true
    }
];

const scores = personnel
    .filter(person => {
        return person.isForceUser === true;
    })
    .map(person => {
        return { ...person, totalScore: person.pilotingScore + person.shootingScore };
    })
    .reduce((partial, person) => partial + Number(person.totalScore), 0);

console.log(scores);

// TASK 5
console.log("TASK 5");

const newSubjects = ['APBD', 'TPO', 'SAD'];
const sNumber = 'S16983';

const personPart1 = {
    name: "Anna",
    surname: "Doe",
    indexNumber: "SXXXXX"
};

const personPart2 = {
    email: "XXXXX@pjwstk.edu.pl",
    phone: "444-444-444",
    subjects: ["PRO2"]
};

function combine(part1, part2, subjects, number) {
    student = {...part1, ...part2};
    if(subjects instanceof Array) {
        student.subjects.push(...subjects);
    }
    else {
        throw "Array Required"
    }
    student.indexNumber = number;
    return student;
}

console.log(combine(personPart1, personPart2, newSubjects, sNumber));

// TASK 6 (ADDITIONAL)
console.log("TASK 6 (ADDITIONAL)");

const sleep = ms => new Promise(r => setTimeout(r, ms));

(async () => {
    console.time("Slept for");
    await sleep(3000);
    console.timeEnd("Slept for");
})();

// TASK 7 (ADDITIONAL)
console.log("TASK 7 (ADDITIONAL)");

const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const myPromise = number =>
    sleep(Math.floor(Math.random() * 6000) + 1000).then(() => {
        console.log('Number: ' + number)
    });

myArray.reduce(
    (p, x) =>
        p.then(_ => myPromise(x)),
    Promise.resolve()
);