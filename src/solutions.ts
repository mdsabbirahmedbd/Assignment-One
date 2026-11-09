
const multiplyValue = (value : number , multiplier? : number) : number => {
      if(multiplier === undefined)return value * 2
      return value * multiplier
}

type input = string | number | boolean
type output = string | number
const processInput = (value : input) : output =>{
      if(typeof value === 'string'){
        return value.toLowerCase().trim()
      }
      if (typeof value === 'number'){
        return value * 10
      }

    return value ? 'Active' : 'Inactive'
      
      
}


type Coordinate  = readonly [latitude :number, longitude : number, locationName : string]
const formatCoordinate  = (cordinate :  Coordinate) : string => {
    const [latitude, longitude, locationName] = cordinate
    return `Location: ${locationName} (${latitude}, ${longitude})`;
}

const concatenateArrays = <t>(...arrays : t[][]) : t[] => {
 return ([] as t[]).concat(...arrays);
}


interface Course {
    title : string;
    students : number;
    isPublished : boolean;
}
const getPopularCourses = (courses : Course[] , minStudents : number) : Course[] => {
       return courses.filter(course => course.students >= minStudents && course.isPublished)
}


const pluckValues  = <t, k extends keyof t>(items : t[] , key : k) : t[k][] => {
      return items.map(items => items[key])
}

class Employee {
  constructor(
    protected name : string,
    private baseSalary: number,
  ){}

  getDetails() : string {
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
  }
}


class Manager extends Employee {
   constructor(name : string,baseSalary : number, private department : string){
      super(name,baseSalary)
   }
   getRoleInfo(){
    return `Manager of ${this.department}: ${this.name}`
   }
}



const validateAgeAsync = async (age : number) : Promise<string> => {
  if (age < 18) {
    throw new Error("Access Denied: Must be 18 or older");
  }

  return new Promise<string>((resolve) => {
    
    setTimeout(() => {
      resolve("Access Granted");
    }, 1000);

  });
}
