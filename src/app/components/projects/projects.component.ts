import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  
  constructor(private router: Router) {}
  projects = [
    {
      id: 1,
      title: 'Taşınmaz Yönetim Projesi',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg',
      technologies: ['C#','Angular', '.NET', 'Postre Sql', 'OpenLayers']
    },
    {
      id: 2,
      title: 'Employee Task & Report Management System',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      technologies: ['.NET Core 8', 'React', 'Docker', 'MS SQL Server']
    },
    {
      id: 3,
      title: 'Online Course Projesi',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
      technologies: ['.Net Web API','Angular', 'TypeScript', 'PostgreSQL']
    },
    {
      id: 4,
      title: 'Öğrenci Kurs Yönetimi',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',
      technologies: ['C#', '.NET', 'Entity Framework', 'SQL']
    },
    {
      id: 5,
      title: 'HTML CSS JavaScript Örnek Projeler',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      technologies: ['HTML5', 'CSS3', 'JavaScript']
    },
    {
      id: 6,
      title: 'ASP.NET MVC CV Projesi',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg',
      technologies: ['ASP.NET', 'MVC', 'C#', 'Bootstrap']
    },
    {
      id: 7,
      title: 'ADO.NET Müşteri Projesi',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg',
      technologies: ['ADO.NET', 'C#', 'SQL Server']
    }
  ];

  goToDetail(projectId: number) {
    this.router.navigate(['/project', projectId]);
  }
}
