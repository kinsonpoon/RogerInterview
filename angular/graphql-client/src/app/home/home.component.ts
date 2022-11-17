import { Component, OnInit } from '@angular/core';
import {PageTemplateService} from "./pageTemplate.service";
import {Entry} from "../model/entry";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  pageTemplates: Entry[] = [];
  skip: number = 0;
  limit: number = 100;
  total: number = 0;

  constructor(private pageTemplateService: PageTemplateService) { }

  async getData(){
    this.pageTemplateService.getPageTemplates(0,100).then((data)=>{
      this.skip = data.skip;
      this.limit = data.limit;
      this.total = data.total;
      data.items.forEach((item: any)=>{
        this.pageTemplates.push(new Entry(item));
      });
      console.log(this.pageTemplates);
    });

  }

  ngOnInit(): void {
    this.getData()
  }

}
