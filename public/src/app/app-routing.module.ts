import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewTaskComponent } from "./new-task/new-task.component";
import { ShowTaskComponent } from "./show-task/show-task.component";
import { AllTasksComponent } from "./all-tasks/all-tasks.component";


const routes: Routes = [
  {
    path: "new",
    component: NewTaskComponent
  },
  {
    path: ":id",
    component: ShowTaskComponent
  },
  {
    path: "",
    component: AllTasksComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
