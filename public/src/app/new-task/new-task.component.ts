import { Component, OnInit } from '@angular/core';
import { HttpService } from "../http.service";

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {
  newTask = {
    title: "",
    description: "",
    completed: false
  };

  constructor(private _http: HttpService) { }

  ngOnInit() {
  }
  handleSubmit() {
    this._http.createTask(this.newTask).subscribe((task: any) => {
      console.log("task object: ", task);
      this.newTask = {
        title: "",
        description: "",
        completed: false
      };
    });
  }

}
