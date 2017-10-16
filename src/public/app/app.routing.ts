import { RouterModule, Routes } from '@angular/router';

// import { CustomersComponent } from './customers/customers.component';
// import { CustomersGridComponent } from './customers/customers-grid.component';
// import { CustomerEditComponent } from './customers/customer-edit.component';
// import { CustomerEditReactiveComponent } from './customers/customer-edit-reactive.component';
import { StoriesComponent } from './stories/stories.component';

import { IRouting } from './shared/interfaces';

const routes: Routes = [
  { path: 'stories', component: StoriesComponent },
  // { path: 'customers', component: CustomersComponent},
  // { path: 'customers/:id', component: CustomerEditComponent},
  //{ path: 'customers/:id', component: CustomerEditReactiveComponent },
  { path: '**', pathMatch:'full', redirectTo: '/stories' } //catch any unfound routes and redirect to home page
];

export const appRouting: IRouting = { 
    routes: RouterModule.forRoot(routes),
    components: [ StoriesComponent ]
};
