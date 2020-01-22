import { Component, OnInit } from '@angular/core';
import { HttpService } from "../http.service";

@Component({
  selector: 'app-all-tasks',
  templateUrl: './all-tasks.component.html',
  styleUrls: ['./all-tasks.component.css']
})
export class AllTasksComponent implements OnInit {
  tasks = [];

  constructor(private _http: HttpService) { }

  ngOnInit() {
  }
  getTasksOnClick() {
    this._http.getTasks().subscribe((tasks: any) => {
      console.log("tasks object: ", tasks);
      this.tasks = tasks["tasks"];
    });
  }

}
