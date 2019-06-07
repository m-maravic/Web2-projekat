import { Component, OnInit } from '@angular/core';
import { DropdownElement } from 'src/app/shared/classes';
import { LinijePrivremeno } from 'src/app/shared/constants';

@Component({
  selector: 'app-uredi-linije',
  templateUrl: './uredi-linije.component.html',
  styleUrls: ['./uredi-linije.component.css']
})
export class UrediLinijeComponent implements OnInit {
  
  dropdownToPass: DropdownElement[];
  tableHeader: string[];

  constructor() { }

  ngOnInit() {
    this.dropdownToPass = [
      {
        label: "Linije",
        value: LinijePrivremeno
      }
    ];

    this.tableHeader = ["Redni broj", "Naziv", " "];

  }

}
