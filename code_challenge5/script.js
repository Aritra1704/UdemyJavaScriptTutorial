
class TownElements {
    constructor(name, buildYear) {
        this.name = name;
        this.buildYear = buildYear;
    }

    calculateAge () {
        var age = new Date().getFullYear() - this.buildYear;
        return age;
    }
}

class Park extends TownElements {
    constructor(name, buildYear, numofTrees, parkArea) {
        super(name, buildYear);
        this.numofTrees = numofTrees;
        this.parkArea = parkArea;
    }

    treeDensity() {
        return (this.numofTrees / this.parkArea);
    }
}

function averageAge() {
    let totalAge = 0;
    parks.forEach(element => {
        totalAge += element.calculateAge();
    });
    return (totalAge / parks.size);
}

function allTreeDensity() {
    parks.forEach(cur => {
        console.log(`${cur.name} has a tree density of ${cur.treeDensity()} trees per square km.`);
    });
}

function parkWithThouTree() {
    parks.forEach(cur => {
        if(cur.numofTrees > 1000)
            console.log(`${cur.name} has more than 1000 trees.`);
    });
}

class Street extends TownElements {
    constructor(name, buildYear, streetLength, streetSize = 'normal') {
        super(name, buildYear);
        this.streetLength = streetLength;
        this.streetSize = streetSize;
    }
}

function streetLength () {
    let totalStreetLength = 0;
    streets.forEach(element => {
        totalStreetLength += element.streetLength;
    });
    return totalStreetLength;
}

function streetClassification() {
    streets.forEach(cur => {
        console.log(`${cur.name}, built in ${cur.buildYear}, is a ${cur.streetSize} street.`);
    });
}

let countPark = 0, countStreet = 0;

const parks = new Map();
parks.set(++countPark, new Park('Green Park', 1900, 800, 15));
parks.set(++countPark, new Park('National Park', 1850, 1200, 19));
parks.set(++countPark, new Park('Oak Park', 1950, 600, 11));

const streets = new Map();
streets.set(++countStreet, new Street('Ocean Avenue', 1900, 11, 'small'));
streets.set(++countStreet, new Street('Evergreen Street', 1950, 23, 'huge'));
streets.set(++countStreet, new Street('4th Street', 1970, 12));
streets.set(++countStreet, new Street('Sunset Boulevard', 1995, 19, 'big'));

console.log(`----PARKS REPORT-----`);
console.log(`Our ${parks.size} parks have an average age of ${averageAge()} years.`);
allTreeDensity();
parkWithThouTree();
console.log(`----STREETS REPORT-----`);
console.log(`Our ${streets.size} streets have a total length of ${streetLength()} km, with an average of ${(streetLength()/streets.size)} km.`);
streetClassification();


