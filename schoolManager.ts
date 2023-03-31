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

import {Student} from './Student'
import {Teacher} from './Teacher'
import * as fs from 'fs'
import * as readLineSync from 'readline-sync'



export class SchoolManager{
    dataStudent(){return JSON.parse(fs.readFileSync("./students.json","utf-8"))}
    dataTeacher(){return JSON.parse(fs.readFileSync("./teachers.json","utf-8"))}
    consultStudents(){
        console.log(this.dataStudent());
    }
    approved(name:string){
        let student:any=this.dataStudent().find((student:{name:string})=> student.name===name)
        console.log(student);
        if(student.note >=7){
            console.log(name, "Aprobado");
        } 
            else{
            console.log(name, "Desaprobado");

            }
        }
        enroll(){
            let name=readLineSync.question("Escriba el nombre del estudiante:-->");
            let lastName=readLineSync.question("Escriba el apellido del estudiante:-->");
            let note=Number(readLineSync.question("Escriba la nota del estudiante:-->"))
            let NewStudent= new Student(name,lastName,note);

            let students=[...this.dataStudent(),NewStudent];
            fs.writeFileSync("./students.json",JSON.stringify(students,null,2));
            console.log(this.dataStudent());
        }

       hire(){
        let name=readLineSync.question("Escriba el nombre del docente:-->");
        let lastName=readLineSync.question("escriba el apellido del docente:-->");
        let newTeacher=new Teacher(name,lastName);

        let teachers=[...this.dataTeacher(),newTeacher];
        fs.writeFileSync("./teachers.json",JSON.stringify(teachers,null,2));
            console.log(this.dataTeacher);
       }

       dismissTeacher(name:string){
            let teachers=this.dataTeacher();
            let dismissTeacher= teachers.findIndex((teacher:{name:string})=>teacher.name===name);
            if(dismissTeacher>=0){
                teachers.splice(dismissTeacher,1);
                console.log(name,"Fue despedido");
                fs.writeFileSync("./teachers.json",JSON.stringify(name,null,2));
                console.log(this.dataTeacher());
            }  
                else{
                console.log(name ,"sigue trabajando");
            }
        }
        expelStudent(name:string){
            let students=this.dataStudent();
            let expelStudent= students.findIndex((students:{name:string})=>students.name===name);
            if(expelStudent>=0){
                students.splice(expelStudent,1);
                console.log(name,"Fue expulsado");
                fs.writeFileSync("./students.json",JSON.stringify(name,null,2));
                console.log(this.dataStudent());
            }  
                else{
                console.log("sigue matriculado",name);
            }
        }  
    
        }
       
        

