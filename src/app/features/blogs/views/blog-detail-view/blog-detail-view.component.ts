import { AsyncPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-blog-detail-view',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './blog-detail-view.component.html',
  styleUrl: './blog-detail-view.component.scss',
})
export class BlogDetailViewComponent {
  @Input() slug!: string;
  blogId: number;
  blogDetail$: Observable<{ id: string; name: string }>;

  constructor(private router: Router) {}
  ngOnInit() {
    this.blogDetail$ = of({ id: this.slug, name: 'Thach' }); //TODO fix get slug and fix build ssr
  }

  goToBlogsPage() {
    this.router.navigate(['/blogs']);
  }
}
