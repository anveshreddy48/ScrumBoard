"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
// import { CustomersComponent } from './customers/customers.component';
// import { CustomersGridComponent } from './customers/customers-grid.component';
// import { CustomerEditComponent } from './customers/customer-edit.component';
// import { CustomerEditReactiveComponent } from './customers/customer-edit-reactive.component';
var stories_component_1 = require("./stories/stories.component");
var routes = [
    { path: 'stories', component: stories_component_1.StoriesComponent },
    // { path: 'customers', component: CustomersComponent},
    // { path: 'customers/:id', component: CustomerEditComponent},
    //{ path: 'customers/:id', component: CustomerEditReactiveComponent },
    { path: '**', pathMatch: 'full', redirectTo: '/stories' } //catch any unfound routes and redirect to home page
];
exports.appRouting = {
    routes: router_1.RouterModule.forRoot(routes),
    components: [stories_component_1.StoriesComponent]
};
//# sourceMappingURL=app.routing.js.map