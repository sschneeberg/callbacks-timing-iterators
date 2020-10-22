//timing fcn practice
function alarm() {
    console.log("Wake up!");
}

let alarm1 = setTimeout(alarm, 10000);
let alarm2 = setTimeout(alarm, 15000);

function sayHello(name) {
    let msg = 'Hello, ' + name + '. How are you?';
    console.log(msg);
}

setTimeout(sayHello, 5000, 'simone');

function annoy() {
    console.log('Are we there yet?');
}

function stopIt(fcnVar) {
    clearInterval(fcnVar);
}

let annoyed = setInterval(annoy, 1000);
setTimeout(stopIt, '3000', annoyed);

//iterator practice
const sei1019 = ['Mike', 'Rome', 'Pete', 'Dexter'];

const longNames = sei1019.map((name) => {
    if (name.length > 4) {
        return `${name}'s name is long`;
    } else {
        return 'short name redacted';
    }
})

console.log(longNames);

const longNames2 = sei1019.filter((name) => {
    return name.length > 4;
});

console.log(longNames2);