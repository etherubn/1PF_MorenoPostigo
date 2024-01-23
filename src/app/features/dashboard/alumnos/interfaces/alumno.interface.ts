import { Course } from "./course.type";

export interface Alumno {
    id: number;
    nombre: string;
    apellido: string;
    email: string;
    fechaNacimiento: Date;
    course: Course;
    nota: number;
  }