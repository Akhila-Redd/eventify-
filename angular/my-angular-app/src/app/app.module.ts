
// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { FormsModule } from '@angular/forms'; 
// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { AdminComponent } from './admin/admin.component';
// import { AttendeeComponent } from './attendee/attendee.component';
// import { OrganizerComponent } from './organizer/organizer.component';
// import { AboutusComponent } from './aboutus/aboutus.component';
// import { ReactiveFormsModule } from '@angular/forms';
// import { HttpClientModule } from '@angular/common/http';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { ToastrModule } from 'ngx-toastr';
// import { RouterModule } from '@angular/router';
// // import { NgChartsModule } from 'ng2-charts';

// @NgModule({
//   declarations: [
//     AppComponent,
//     AdminComponent,
//     AttendeeComponent,
//     OrganizerComponent,
//     AboutusComponent,
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule,
//     FormsModule,
//     ReactiveFormsModule,
//     HttpClientModule,
//     // NgChartsModule,
//     BrowserAnimationsModule,
//     RouterModule,
//     ToastrModule.forRoot()

//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }

// // import { NgModule } from '@angular/core'; 

// // import { BrowserModule } from '@angular/platform-browser'; 

 

// // import { AppRoutingModule } from './app-routing.module'; 

// // import { AppComponent } from './app.component'; 

// // import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 

// // import { HttpClientModule } from '@angular/common/http'; 

// // import { AdminComponent } from './admin/admin.component'; 

// // import { OrganizerComponent } from './organizer/organizer.component'; 

// // import { AttendeeComponent } from './attendee/attendee.component'; 

// // import { AboutusComponent } from './aboutus/aboutus.component'; 

// // import { NgChartsModule } from 'ng2-charts'; 

// // import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 

// // import { ToastrModule } from 'ngx-toastr'; 

 

// // @NgModule({ 

// //   declarations: [ 

// //     AppComponent, 

// //     AdminComponent, 

// //     OrganizerComponent, 

// //     AttendeeComponent, 

// //     AboutusComponent 

// //   ], 

// //   imports: [ 

// //     BrowserModule, 

// //     AppRoutingModule, 

// //     FormsModule, 

// //     ReactiveFormsModule, 

// //     HttpClientModule, 

// //     NgChartsModule, 

// //     BrowserAnimationsModule, // Import the animations module 

// //     ToastrModule.forRoot(),   // Import ToastrModule and configure it 

// //     // Other modules 

// //   ], 

// //   providers: [], 

// //   bootstrap: [AppComponent] 

// // }) 

// // export class AppModule { } 


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Both FormsModule and ReactiveFormsModule
import { HttpClientModule } from '@angular/common/http'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { RouterModule } from '@angular/router';

// Import components
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { AttendeeComponent } from './attendee/attendee.component';
import { OrganizerComponent } from './organizer/organizer.component';
import { AboutusComponent } from './aboutus/aboutus.component';

// Optionally uncomment if using charts
// import { NgChartsModule } from 'ng2-charts'; 

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AttendeeComponent,
    OrganizerComponent,
    AboutusComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // For ngModel (template-driven forms)
    ReactiveFormsModule, // For formGroup (reactive forms)
    HttpClientModule, // For HTTP calls
    // NgChartsModule, // Uncomment if you want to use charts
    BrowserAnimationsModule, // For animations (toastr and others)
    RouterModule, // For routing
    ToastrModule.forRoot(), // Configure Toastr for notifications
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
