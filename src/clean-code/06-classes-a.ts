(() => {

type Gender = 'M'|'F';

    class Person {    
        constructor(
            public name: string,
            public gender: Gender,
            public birthDate: Date
        ){}
    }

    const newPerson = new Person('Juan', 'M', new Date('1990-01-01'));

    console.log(newPerson);

})();