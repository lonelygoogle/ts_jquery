interface Person {
    name: string,
    age: number,
    gender: string
}

class Teacher {
    constructor (private info:Person) {}
    getInfo <T extends keyof Person>(key: T): Person[T] {
        return this.info[key]
    }

}

const teacher = new Teacher ({
    name: 'hsq',
    age: 25,
    gender: 'male'
})

const test = teacher.getInfo('age')

console.log(teacher.getInfo('gender'))