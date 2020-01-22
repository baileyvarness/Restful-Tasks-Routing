import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from "@angular/router";
import { HttpService } from "../http.service";

@Component({
  selector: 'app-show-task',
  templateUrl: './show-task.component.html',
  styleUrls: ['./show-task.component.css']
})
export class ShowTaskComponent implements OnInit {
  taskToShowDetailsFor = {};

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _http: HttpService
  ) { 
  }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      console.log("params.id: ", params.id);
      this._http.getTask(params.id).subscribe((data: any) => {
        console.log("data: ", data);
        if (data.hasOwnProperty("errors")) {
          return this._router.navigate(["/"]);
        }
        this.taskToShowDetailsFor = data.task;
      });
    });
  }
}