/*  Ejercicio 1
Aplicar lo visto hasta esta clase para modelar un 
sistema educativo donde:
•  Los profesores deben tener un listado de sus 
alumnos.
• Cada alumno debe saber su nota e informar 
si está aprobado o no (es decir si la nota es 
mayor que 7). 
• La escuela debe tener un registro de los 
alumnos y maestros, y debe poder 
matricular/contratar y expulsar/despedir a los  */

import Student from './student'
import Teacher from './teacher'
import * as fs from 'fs';

let students:Student[]=[];

const data= fs.readFileSync('./student.json','utf8');
const children=JSON.parse(data);
    for(let i=0; i<children.lenght;i++){
    students.push(children[i]);
    }

let teacher:Teacher[]=[];

const data1=fs.readFileSync("./teacher.json","utf8");
const miss=JSON.parse(data1);
    for(let i=0; i<miss.lenght;i++){
    teacher.push(miss[i]);
    }

export default class SchoolManager{
    consultStudents(){
        console.log(students);
        }
    approved(name:string,array:Student[]){
        let value:any=array.find((students)=> students.name===(name));
            console.log(value);
        if(value.note >=7){
            console.log(name, "estas Aprobado");
        } 
            else{
            console.log(name, "esta desaprobado");

            }
        }
        enroll(name:Student,array:Student[]){
            array.push(name);
            console.log(array);
        }

       hire(name:Teacher,array:Teacher[]){
        array.push(name);
        console.log(array);
       }

       dismiss(name:string,array:Teacher[]){
        let dismiss=array.findIndex((tutor)=>tutor.name===name);
        if(dismiss>=0){
            array.splice(dismiss,1);
            console.log(dismiss,"fue despedido");
        }
       }
        }

let administrator= new SchoolManager;
//let oscar: Teacher= new Teacher("Oscar", "Ramos");
let federico: Student= new Student("Federico","Morales", 8);
//administrator.consultStudents();//mal array vacio
//console.log(administrator.consultStudents);//mal
//administrator.approved("Emiliano",students);//no funciona
//console.log(Teacher);//funciona
//console.log(Student);//funciona
administrator.enroll(federico,students);
//administrator.dismiss("ricardo", teacher);//no funiona vacio
//administrator.hire(oscar, teacher);//No funciona,se rompe
