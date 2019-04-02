import { Component, OnInit, Input } from '@angular/core';
import { Planets } from "../models/Planets";

@Component({
  selector: "app-list-item",
  templateUrl: "./list-item.component.html",
  styleUrls: ["./list-item.component.scss"]
})
export class ListItemComponent implements OnInit {
  @Input() planet: Planets;
  constructor() {}

  ngOnInit() {}
}
