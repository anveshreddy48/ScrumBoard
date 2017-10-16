import { Component, OnInit } from '@angular/core';
import { DataService } from './../core/data.service';

@Component({
  moduleId: module.id,
  selector: 'stories',
  templateUrl: 'stories.component.html'
})
export class StoriesComponent implements OnInit {

  stories: any;

  constructor(private dataService: DataService) { }
 
  ngOnInit() {
    this.getBacklogStories();
  }

  getBacklogStories() {
    this.dataService.getBacklogStories()
    .subscribe((response: any) => {
      console.log('component response', response);
      this.stories = response;
    },
    (err: any) => console.log(err),
    () => console.log('Backlog stories are now retrieved'));
  }
}