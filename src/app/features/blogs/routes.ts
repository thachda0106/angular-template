import { Routes } from '@angular/router';

export const blogRoutes: Routes = [
  {
    path: 'blogs',
    title: 'Blogs page app',
    loadComponent: () =>
      import('../blogs/views/blogs-view/blogs-view.component').then(
        (m) => m.BlogsViewComponent,
      ),
  },
  {
    path: 'blogs/:slug',
    title: 'Blog detail page app',
    loadComponent: () =>
      import('../blogs/views/blog-detail-view/blog-detail-view.component').then(
        (m) => m.BlogDetailViewComponent,
      ),
  },
];
