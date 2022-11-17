import { Component, OnInit } from '@angular/core';
import {PageTemplateService} from "./pageTemplate.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  pageTemplates: any

  constructor(private pageTemplateService: PageTemplateService) { }

  async getData(){
    console.log('get')
    this.pageTemplateService.getPageTemplates().then((data)=>{
      console.log(data)
    });

  }

  ngOnInit(): void {
    console.log('yo')
    this.getData()
  }

}
