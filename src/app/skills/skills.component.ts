import { Component } from '@angular/core';
import { NgFor, NgStyle } from '@angular/common';
import { RevealDirective } from '../shared/reveal.directive';

type Side = 'black' | 'white';

interface Stone {
  side: Side;
  r: number;
  c: number;
  title: string;
  proof: string;
  skills: string[];
}

const BOARD_SIZE = 9;
const LINES = BOARD_SIZE - 1;
const PAD = 7;

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [NgFor, NgStyle, RevealDirective],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  readonly sideLabel: Record<Side, string> = { black: 'Build & Technical', white: 'Practice & Leadership' };

  stones: Stone[] = [
    { side: 'black', r: 6, c: 4, title: 'Backend Engineering', proof: '12+ full-stack apps · platform serving 3,000+ users across 12 organisations', skills: ['Java 17', 'Spring Boot', 'REST APIs', 'Microservices', 'Hibernate/JPA', 'Spring Security', 'GraphQL'] },
    { side: 'black', r: 7, c: 6, title: 'Frontend Engineering', proof: 'Responsive, mobile-first UIs shipped across 3 companies', skills: ['ReactJS', 'AngularJS', 'JavaScript', 'HTML5 / CSS / SCSS', 'Bootstrap', 'jQuery', 'NodeJS'] },
    { side: 'black', r: 6, c: 7, title: 'Data & Databases', proof: 'Relational + NoSQL design across 6+ database technologies', skills: ['Oracle', 'PostgreSQL', 'MySQL', 'MongoDB', 'Cassandra', 'Mobile data sync'] },
    { side: 'black', r: 5, c: 6, title: 'Cloud & DevOps', proof: 'CI/CD pipelines cut deployment cycle time by 70%', skills: ['AWS', 'GCP', 'Azure', 'Docker', 'Kubernetes', 'Jenkins', 'GitHub Actions', 'Maven', 'SonarQube'] },
    { side: 'black', r: 8, c: 5, title: 'AI-Assisted Development', proof: 'Daily GitHub Copilot & Claude Code user in production workflows', skills: ['GitHub Copilot', 'Claude Code', 'Cursor', 'Spark / Databricks (exposure)'] },
    { side: 'white', r: 3, c: 3, title: 'Testing & Quality', proof: '500+ automated tests · 90% coverage across services', skills: ['JUnit / TestNG', 'Selenium', 'Cucumber', 'Rest-Assured', 'Karate', 'Playwright', 'Appium', 'TDD'] },
    { side: 'white', r: 0, c: 5, title: 'SRE & Reliability', proof: '99.9% uptime maintained across all owned production services', skills: ['Monitoring', 'Alerting', 'On-call rotation', 'Incident response', 'Postmortems', 'Reliability engineering'] },
    { side: 'white', r: 2, c: 1, title: 'Architecture & Design', proof: 'OOAD and design patterns applied across enterprise applications', skills: ['OOAD', 'Factory pattern', 'Strategy pattern', 'Repository pattern', 'Observer pattern', 'Scalable system design'] },
    { side: 'white', r: 0, c: 1, title: 'Mentorship & Leadership', proof: 'Mentored 8+ engineers · 3 promoted within 18 months · taught 40+ postgraduates', skills: ['Code reviews', 'Mentoring', 'Agile ceremonies', 'Hiring & interviews', 'Teaching'] },
  ];

  boardLines = Array.from({ length: BOARD_SIZE }, (_, k) => this.pos(k));
  stars = [
    [2, 2], [2, 6], [6, 2], [6, 6], [4, 4],
  ].map(([r, c]) => ({ left: this.pos(c), top: this.pos(r) }));

  selectedIndex = 0;
  hoveredIndex: number | null = null;

  private pos(i: number): number {
    return PAD + (i / LINES) * (100 - 2 * PAD);
  }

  stoneStyle(stone: Stone) {
    return { left: `${this.pos(stone.c)}%`, top: `${this.pos(stone.r)}%` };
  }

  select(i: number): void {
    this.selectedIndex = i;
  }

  hover(i: number | null): void {
    this.hoveredIndex = i;
  }

  get displayed(): Stone {
    return this.stones[this.hoveredIndex ?? this.selectedIndex];
  }
}
