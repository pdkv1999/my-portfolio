import { Component, HostListener } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { RevealDirective } from '../shared/reveal.directive';

interface Project {
  title: string;
  subtitle: string;
  groups: string[];
  tags: string[];
  role: string;
  summary: string;
  impact: string;
  images: string[];
  slide: number;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgFor, NgIf, RevealDirective],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Campus Dining Scheduler',
      subtitle: 'Hackathon app to simplify campus dining reservations',
      groups: ['Full-Stack', 'Hackathon'],
      tags: ['Web App', 'Scheduling', 'UX'],
      role: 'Full-stack developer',
      summary: 'A campus dining scheduler built at a hackathon, guiding students from meal-type selection through table booking to a confirmed reservation.',
      impact: 'Designed the end-to-end booking flow across five screens — meal options, table selection, menu picks and confirmation — turning a multi-step manual process into a few taps.',
      images: [
        'assets/streamling-campus-dining/1-login.png',
        'assets/streamling-campus-dining/2-meal-options.png',
        'assets/streamling-campus-dining/3-table-options.png',
        'assets/streamling-campus-dining/4-menu-selection.png',
        'assets/streamling-campus-dining/5-confirmation.png',
      ],
      slide: 0,
    },
    {
      title: 'Todo Management Application',
      subtitle: 'Full-stack task manager with pagination, filtering and sorting',
      groups: ['Full-Stack', 'Web App'],
      tags: ['CRUD', 'Pagination', 'Filtering'],
      role: 'Full-stack developer',
      summary: 'A task-management web app supporting create and update workflows alongside pagination, filtering and sorting for larger task lists.',
      impact: 'Implemented server-backed pagination and multi-criteria filtering/sorting so the list stays usable as task volume grows.',
      images: [
        'assets/todo-application/1-createtodo.png',
        'assets/todo-application/2-updatetodo.png',
        'assets/todo-application/3-pagination.png',
        'assets/todo-application/4-pagination.png',
        'assets/todo-application/5-filtering.png',
        'assets/todo-application/6-sorting.png',
      ],
      slide: 0,
    },
    {
      title: 'Employee Management System',
      subtitle: 'CRUD system for managing employee records',
      groups: ['Full-Stack', 'Web App'],
      tags: ['CRUD', 'Admin Tool'],
      role: 'Full-stack developer',
      summary: 'An internal-style employee management system covering the full record lifecycle — add, update and delete — behind a clean admin UI.',
      impact: 'Built consistent create/update/delete flows with confirmation safeguards to prevent accidental data loss.',
      images: [
        'assets/employee-management-system/1-employee-management-system-homepage.png',
        'assets/employee-management-system/2-employee-management-system-addemployee.png',
        'assets/employee-management-system/3-employee-management-system-updateemployee.png',
        'assets/employee-management-system/4-employee-management-system-deleteemployee.png',
        'assets/employee-management-system/5-employee-management-system-deleteemployee2.png',
      ],
      slide: 0,
    },
    {
      title: 'Rock Paper Scissor Game',
      subtitle: 'Browser game with multi-round scoring',
      groups: ['Frontend', 'Game'],
      tags: ['JavaScript', 'Game Logic'],
      role: 'Frontend developer',
      summary: 'A browser-based Rock-Paper-Scissors game with round-by-round outcomes and support for playing multiple sets in a row.',
      impact: 'Implemented game-state logic to track scores across multiple sets and surface a clear win/lose/draw outcome each round.',
      images: [
        'assets/rock-paper-scissor/1-Rock paper Scissor-home.png',
        'assets/rock-paper-scissor/2-Rock paper Scissor-gamestart.png',
        'assets/rock-paper-scissor/3-Rock paper Scissor-outcome.png',
        'assets/rock-paper-scissor/4-Rock paper Scissor-multiplesets.png',
      ],
      slide: 0,
    },
    {
      title: 'Calculator Application',
      subtitle: 'Web calculator with action history',
      groups: ['Frontend', 'Web App'],
      tags: ['JavaScript', 'UI'],
      role: 'Frontend developer',
      summary: 'A web-based calculator supporting chained operations with a visible history of recent actions.',
      impact: 'Added a clearable action history alongside core calculator operations for a more transparent, undo-friendly experience.',
      images: [
        'assets/calculator/1-calculator-main page.png',
        'assets/calculator/2-calculator-action.png',
        'assets/calculator/3-calculator-someactions.png',
        'assets/calculator/4-calculator-someactions-clearhistory.png',
      ],
      slide: 0,
    },
  ];

  activeProject: Project | null = null;

  prevSlide(project: Project, event: Event): void {
    event.preventDefault();
    event.stopPropagation();
    project.slide = (project.slide - 1 + project.images.length) % project.images.length;
  }

  nextSlide(project: Project, event: Event): void {
    event.preventDefault();
    event.stopPropagation();
    project.slide = (project.slide + 1) % project.images.length;
  }

  goToSlide(project: Project, index: number, event: Event): void {
    event.preventDefault();
    event.stopPropagation();
    project.slide = index;
  }

  openCaseStudy(project: Project): void {
    this.activeProject = project;
    document.body.style.overflow = 'hidden';
  }

  closeCaseStudy(): void {
    this.activeProject = null;
    document.body.style.overflow = '';
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.activeProject) this.closeCaseStudy();
  }
}
