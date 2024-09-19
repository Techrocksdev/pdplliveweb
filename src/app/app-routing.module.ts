import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AwarenessProgramComponent } from './awareness-program/awareness-program.component';
import { ConsentManagementToolComponent } from './consent-management-tool/consent-management-tool.component';
import { DataProtectionComponent } from './data-protection/data-protection.component';
import { GrievanceRedressalComponent } from './grievance-redressal/grievance-redressal.component';
import { ComplianceAssistanceComponent } from './compliance-assistance/compliance-assistance.component';
import { ContractReviewComponent } from './contract-review/contract-review.component';
import { GapAnalysisComponent } from './gap-analysis/gap-analysis.component';
import { ReadinessReviewComponent } from './readiness-review/readiness-review.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { NewsListingComponent } from './news-listing/news-listing.component';
import { FinesPanalitiesComponent } from './fines-panalities/fines-panalities.component';
import { BlogsComponent } from './blogs/blogs.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { CaseStudiesComponent } from './case-studies/case-studies.component';
import { CareersComponent } from './careers/careers.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'awareness-program',
    component: AwarenessProgramComponent,
  },
  {
    path: 'consent-management-tool',
    component: ConsentManagementToolComponent,
  },
  {
    path: 'data-protection',
    component: DataProtectionComponent,
  },
  {
    path: 'grievance-redressal',
    component: GrievanceRedressalComponent,
  },
  {
    path: 'compliance-assistance',
    component: ComplianceAssistanceComponent,
  },
  {
    path: 'contract-review',
    component: ContractReviewComponent,
  },
  {
    path: 'gap-analysis',
    component: GapAnalysisComponent,
  },
  {
    path: 'readiness-review',
    component: ReadinessReviewComponent,
  },
  {
    path: 'about',
    component: AboutusComponent,
  },
  {
    path: 'contact',
    component: ContactUsComponent,
  },
  {
    path: 'news',
    component: NewsListingComponent,
  },
  {
    path: 'fines',
    component: FinesPanalitiesComponent,
  },
  {
    path: 'blogs',
    component: BlogsComponent,
  },
  {
    path: 'blog-details',
    component: BlogDetailsComponent,
  },
  {
    path: 'case-studies',
    component: CaseStudiesComponent,
  },

  {
    path: 'career',
    component: CareersComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      enableTracing: false,
      scrollPositionRestoration: 'top',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
