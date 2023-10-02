/*

Why pay a fortune teller when you can just program your fortune yourself?

Write a function named tellFortune that:
takes 4 arguments: number of children, partner's name, geographic location, job title.
outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
Call that function 3 times with 3 different values for the arguments.

*/

const names = [
    "Monika",
    "Carolina",
    "Summer",
];

const locations = [
    "Poland",
    "Portugal",
    "USA",
];

const jobs = [
    "Programmer",
    "Engineer",
    "Mathmatician",
];

const childrenNum = () => {
    return Math.random * 10;
}

const partnersName = () => {
    return names[Math.floor(Math.random()*names.length)];
}

const geoLocation = () => {
    return locations[Math.floor(Math.random()*locations.length)];
}

const jobTitle = () => {
    return jobs[Math.floor(Math.random()*jobs.length)];
}

function tellFortune(childrenNum, paternsName, geoLocation, jobTitle) {
    console.log(`You will be a ${jobTitle} in ${geoLocation}, and married to ${paternsName} with ${childrenNum} kids.`);
}

for(let i = 0; i < 3; i++) {
    tellFortune(childrenNum(), partnersName(), geoLocation(), jobTitle());
}