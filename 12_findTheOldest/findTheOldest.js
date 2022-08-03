const findTheOldest = function(array) {
    
    let ageArray = array.map(person => {
        let name = person.name;
        let birth = person.yearOfBirth;
        let death;

        if (!person.yearOfDeath) {
            death = new Date().getFullYear();
        } else {
            death = person.yearOfDeath;
        }

        let age = death - birth;

        return {name: name, age: age };
    });

  

    ageArray.sort((a, b) => {
        if (a.age > b.age) {
            return 1;
        } else {
            return -1;
        }
    });

    return ageArray[ageArray.length - 1];
};

// Do not edit below this line
module.exports = findTheOldest;
