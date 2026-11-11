import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProjectPage, ProjectSection, projectPages } from './project-data';

@Component({
  imports: [RouterLink],
  selector: 'app-project-detail',
  styleUrl: './project-detail.css',
  templateUrl: './project-detail.html',
})
export class ProjectDetail {
  private readonly route = inject(ActivatedRoute);
  protected readonly project = projectPages.find(
    (project) => project.slug === this.route.snapshot.paramMap.get('slug'),
  );

  protected sectionMedia(
    project: ProjectPage,
    section: ProjectSection,
    index: number,
  ) {
    return section.media ?? project.media?.[index];
  }

  protected mediaIsLeft(project: ProjectPage, index: number): boolean {
    if (!this.sectionMedia(project, project.sections[index], index)) {
      return false;
    }

    const precedingMediaCount = project.sections
      .slice(0, index)
      .filter((section, sectionIndex) => this.sectionMedia(project, section, sectionIndex))
      .length;

    return precedingMediaCount % 2 === 1;
  }

  protected assetUrl(slug: string, fileName: string): string {
    return `/assets/projects/${slug}/${fileName}`;
  }

  protected additionalMedia(project: ProjectPage) {
    return project.media?.slice(project.sections.length) ?? [];
  }

  protected resourceUrl(slug: string, url: string): string {
    return url.startsWith('http') ? url : this.assetUrl(slug, url);
  }
}
