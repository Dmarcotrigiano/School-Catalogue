/* Let’s put your knowledge of classes to the test by creating a digital school catalog for the New York City Department of Education. 
The Department of Education wants the catalog to hold quick reference material for each school in the city.

We need to create classes for primary and high schools. 
Because these classes share properties and methods, each will inherit from a parent School class. 
Our parent and three child classes have the following properties, getters, setters, and methods:

School

Properties: name (string), level (one of three strings: 'primary', 'middle', or 'high'), and numberOfStudents (number)
Getters: all properties have getters
Setters: the numberOfStudents property has a setter
Methods: .quickFacts() and .pickSubstituteTeacher() (this is a static method)

Primary
Includes everything in the School class, plus one additional property
Properties: pickupPolicy (string)

Middle
Does not include any additional properties or methods

High
Includes everything in the School class, plus one additional property
Properties: sportsTeams (array of strings)*/


class School  {
    constructor(name){
    this._name = name;
    this._level;
    this._numberOfStudents;
    }
    get name(){
      return this._name;
    }
    get level(){
      return this._level;
    }
    get numberOfStudents(){
      return this._numberOfStudents;
    }
    set numberOfStudents(value){
      if (typeof(value) === "number"){
     this._numberOfStudents = value;
      } else console.log('Invalid input: numberOfStudents must be set to a number.');
     
    }
    quickFacts(){
    
      console.log(`${this.name} educates ${this.numberOfStudents} students at the ${this.level} school level.`);
      if (this.pickupPolicy != null) {console.log(`The pickup policy at ${this.name} is: ${this.pickupPolicy}`)} 
      else {console.log(`${this.name} does not have a pickup policy`)};
      };
    static pickSubstituteTeacher(substituteTeachers){
      const randomTeacherIndex = Math.floor(Math.random() * substituteTeachers.length);
      return substituteTeachers[randomTeacherIndex];
    };
    }
    
    class Primary extends School {
      constructor(name, pickupPolicy, level){
        super(name);
        this.pickupPolicy;
        this._level = 'primary';
      }
    }
    
    class Middle extends School {
      constructor(name){
        super(name);
      }
    }
    
    class High extends School {
      constructor(name, sportsTeams){
        super(name);
        this.sportsTeams = [];
      }
    }
    
    const lorraineHansbury = new Primary('Lorraine Hansbury');
    lorraineHansbury.numberOfStudents = 514;
    lorraineHansbury.pickupPolicy = 'Students must be picked up by a parent, guardian, or a family member over the age of 13.';
    lorraineHansbury.quickFacts();
    
    
    const subToday = School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']);
    console.log(`Today the substitute teacher is: ${subToday}`);
    
    /*Output
    Lorraine Hansbury educates 514 students at the primary school level.
The pickup policy at Lorraine Hansbury is: Students must be picked up by a parent, guardian, or a family member over the age of 13.
Today the substitute teacher is: Jamal Crawford */