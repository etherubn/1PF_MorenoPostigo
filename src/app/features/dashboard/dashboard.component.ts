import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  
  sidebarItems= [
    {label: "Alumnos",icon:"chevron_left" ,url:"/heroes/list"},
    {label: "Profesores",icon:"chevron_left" ,url:"/heroes/new-hero"},
    {label: "Cursos",icon:"chevron_left" ,url:"/heroes/search"},
  ]
  

}
