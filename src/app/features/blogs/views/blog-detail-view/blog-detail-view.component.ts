import { AsyncPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-blog-detail-view',
  standalone: true,
  imports: [AsyncPipe, RouterLink],
  templateUrl: './blog-detail-view.component.html',
  styleUrl: './blog-detail-view.component.scss',
})
export class BlogDetailViewComponent {
  @Input() slug!: string;
  blogId: number;
  blogDetail$: Observable<{ id: string; name: string }>;

  constructor(private router: Router) {}
  ngOnInit() {
    this.blogDetail$ = of({ id: this.slug, name: 'Thach' });
  }

  goToBlogsPage() {
    this.router.navigate(['/blogs']);
  }
}
