import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AwarenessProgramComponent } from './awareness-program/awareness-program.component';
import { ConsentManagementToolComponent } from './consent-management-tool/consent-management-tool.component';
import { DataProtectionComponent } from './data-protection/data-protection.component';
import { GrievanceRedressalComponent } from './grievance-redressal/grievance-redressal.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComplianceAssistanceComponent } from './compliance-assistance/compliance-assistance.component';
import { ContractReviewComponent } from './contract-review/contract-review.component';
import { ReadinessReviewComponent } from './readiness-review/readiness-review.component';
import { GapAnalysisComponent } from './gap-analysis/gap-analysis.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { CareersComponent } from './careers/careers.component';
import { BlogsComponent } from './blogs/blogs.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { CaseStudiesComponent } from './case-studies/case-studies.component';
import { NewsListingComponent } from './news-listing/news-listing.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FinesPanalitiesComponent } from './fines-panalities/fines-panalities.component';
import { ToastrModule } from 'ngx-toastr';

import { ContactUsFormComponent } from './contact-us-form/contact-us-form.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AwarenessProgramComponent,
    ConsentManagementToolComponent,
    DataProtectionComponent,
    GrievanceRedressalComponent,
    HeaderComponent,
    FooterComponent,
    ComplianceAssistanceComponent,
    ContractReviewComponent,
    ReadinessReviewComponent,
    GapAnalysisComponent,
    AboutusComponent,
    CareersComponent,
    BlogsComponent,
    BlogDetailsComponent,
    CaseStudiesComponent,
    NewsListingComponent,
    ContactUsComponent,
    FinesPanalitiesComponent,

    ContactUsFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(), // ToastrModule added
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
