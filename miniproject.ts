

interface Iundergrad{
     name: string;
     age: number;
     gender: 'female';
     nationality: string;
     gpa: number;
}

class Students implements Iundergrad {
    
     name: string;
     age: number;
     gender: 'female';
     nationality: string;
     gpa: number;
     
     constructor(name: string, age:number, gender: string, nationality:string, gpa:number) {
         this.name = name;
         this.age=age;
          this.gender = 'female';
          this.nationality = nationality;
          this.gpa = gpa;
     }
 
     displayStudent(): void {
          console.log(`This person is ${this.gender}`);
          console.trace(this.gender);
     }
     getNationality(): void{
          console.log(`The ${this.gender} student, ${this.name}, aged ${this.age}, is from ${this.nationality} with a GAP of ${this.gpa}.`)
     }
}



class UnderGraduates extends Students {
     batch: number;
     constructor(name: string, age:number, gender: string, nationality:string, gpa:number, batch:number) {
          super(name, age, gender, nationality, gpa);
          this.batch = batch;
     }
     showUndergrad(): void{
          console.log(`The ${this.gender} student, ${this.name}, aged ${this.age}, is from ${this.nationality} with a GPA of ${this.gpa} from batch ${this.batch}.`)
     }
}

var student1: Students = new Students("Sandra Kid", 21, '', "France", 4.5);
student1.displayStudent();
student1.getNationality();

var underGrad1: UnderGraduates = new UnderGraduates("James Tin", 23, 'male', "Germany", 3.6, 1234);
underGrad1.displayStudent;
underGrad1.showUndergrad();
