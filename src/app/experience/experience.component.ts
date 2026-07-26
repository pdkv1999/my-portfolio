import { Component } from '@angular/core';
import { NgFor, NgIf, NgClass } from '@angular/common';
import { RevealDirective } from '../shared/reveal.directive';

interface TimelineItem {
  year: string;
  title: string;
  company: string;
  location: string;
  details: string[];
  tags: string[];
  open: boolean;
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [NgFor, NgIf, NgClass, RevealDirective],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
  timeline: TimelineItem[] = [
    {
      year: 'Feb 2026 – Apr 2026',
      title: 'Full Stack Java Engineer (Contract)',
      company: "Children's Health Ireland",
      location: 'Dublin, Ireland',
      details: [
        'Designed and developed Java 17 / Spring Boot backend services and ReactJS frontends for an enterprise platform; evaluated complex user requests and clarified functional requirements for new features.',
        'Wrote hands-on code and performed code reviews; demonstrated standards to deliver high-quality products and guided junior engineers on adherence to quality standards.',
        'Deployed on Azure cloud with Docker containers; maintained CI/CD pipelines (GitHub Actions) with JUnit and Selenium automated tests achieving 90% coverage.',
        'Operated production environments with an SRE mindset: monitoring, alerting, incident response and reliability improvements.',
      ],
      tags: ['Java 17', 'Spring Boot', 'ReactJS', 'Azure', 'Docker'],
      open: true,
    },
    {
      year: 'Jun 2025 – Dec 2025',
      title: 'Senior Full Stack Java Engineer (Contract)',
      company: 'PrimaHealth',
      location: 'Cork, Ireland',
      details: [
        'Designed and developed 6 software solutions using Java 17, Spring Boot, REST APIs and Microservices based on business needs; built ReactJS / AngularJS responsive, mobile-first frontends.',
        'Applied OOAD and design patterns (Factory, Strategy, Repository, Observer) to build scalable, maintainable applications; deployed on Tomcat and Reactor Netty application servers.',
        'Designed database solutions across Oracle, PostgreSQL (relational) and MongoDB, Cassandra (NoSQL); implemented mobile data synchronisation and offline storage patterns.',
        'Built automated testing frameworks: JUnit/TestNG unit tests, Selenium/Cucumber E2E tests, Rest-Assured/Karate API tests — achieving 90% coverage across all services.',
        'Deployed on AWS and GCP cloud platforms with Docker and Kubernetes; maintained Jenkins and GitHub Actions CI/CD pipelines with automated quality gates.',
        'Used GitHub Copilot daily for AI-assisted development; mentored 3 engineers on code quality, design patterns and testing standards.',
        'Operated with an SRE mindset: production monitoring, incident response, postmortems and reliability improvements achieving 99.7% uptime.',
      ],
      tags: ['Spring Boot', 'Microservices', 'AWS', 'Kubernetes', 'Mentoring'],
      open: false,
    },
    {
      year: 'Sep 2024 – May 2025',
      title: 'Software Engineering Tutor (Freelance)',
      company: 'University College Cork',
      location: 'Cork, Ireland',
      details: [
        'Delivered teaching on Java full stack, OOAD, design patterns, ReactJS, automated testing and CI/CD to 40+ postgraduate engineers.',
        'Mentored students on quality standards and SRE practices alongside coursework.',
      ],
      tags: ['Teaching', 'Java', 'Mentoring'],
      open: false,
    },
    {
      year: 'Oct 2021 – Aug 2024',
      title: 'Full Stack Java Engineer → Senior Engineer',
      company: 'Oracle Cerner (Healthcare IT)',
      location: 'Bangalore, India',
      details: [
        'Designed and developed 12+ full stack applications using Java 17, Spring Boot, Microservices and REST APIs with ReactJS/AngularJS frontends for a platform serving 3,000+ users across 12 international organisations.',
        'Applied OOAD and design patterns to build scalable, maintainable enterprise applications; built retail-adjacent, customer-facing transactional workflows (billing, scheduling, inventory management).',
        'Designed database solutions across Oracle, PostgreSQL, MySQL (relational) and MongoDB, Cassandra (NoSQL); implemented mobile data sync and offline storage for field-deployed applications.',
        'Built comprehensive automated testing: JUnit/TestNG, Selenium, Playwright, Cucumber, Rest-Assured, Karate — 500+ tests, 90% coverage.',
        'Deployed on AWS, GCP and Azure with Docker and Kubernetes; maintained Jenkins and GitHub Actions CI/CD, reducing deployment cycle by 70%.',
        'Used GitHub Copilot and Claude Code daily; contributed to the hiring process (referrals, candidate interviews, recruiting events).',
        'Operated production environments with an SRE mindset: monitoring, alerting, on-call rotation and incident response; maintained 99.9% uptime across all owned services.',
        'Mentored 5 development team members on quality standards and design patterns; 3 received promotions within 18 months.',
      ],
      tags: ['Java 17', 'Microservices', 'AWS · GCP · Azure', '99.9% uptime', 'Leadership'],
      open: false,
    },
    {
      year: 'Mar 2020 – Oct 2021',
      title: 'Full Stack Java Developer',
      company: 'Cognizant Technology Solutions (CTS)',
      location: 'Hyderabad, India',
      details: [
        'Developed Java/Spring Boot REST APIs and ReactJS frontends; implemented JUnit/Selenium automated tests; deployed on AWS with Docker in Agile sprints.',
      ],
      tags: ['Java', 'Spring Boot', 'AWS', 'Agile'],
      open: false,
    },
  ];

  toggle(item: TimelineItem): void {
    item.open = !item.open;
  }
}
