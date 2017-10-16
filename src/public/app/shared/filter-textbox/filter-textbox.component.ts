import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'filter-textbox',
  template: `
    <form id="searchMember">
         Filter:
         <input type="text" name="filter"
                [(ngModel)]="model.filter" 
                (keyup)="filterChanged($event)"  />
    </form>
  `,
   styles: ['#searchMember { width: 100%; }']
})
export class FilterTextboxComponent {

  
    model: { filter: string } = { filter: null };
    
    @Output()
    changed: EventEmitter<string> = new EventEmitter<string>();

    filterChanged(event: any) {
      event.preventDefault();
      this.changed.emit(this.model.filter); //Raise changed event
    }
}
