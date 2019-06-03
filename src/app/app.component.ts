import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  checkboxCurrent: number = 0;
  checkboxLimit: number = 3;
  disableCheckbox: boolean = false;
  checkedIds: number[] = [];

  getDisabledStatus(order):boolean {
    if( (this.checkboxCurrent != this.checkboxLimit) ||    
      ( (this.checkboxCurrent == this.checkboxLimit) && 
      (this.checkedIds.indexOf(order.id.toString()) != -1) )){
        return false;
      }else {
        return true;
      }
  }

  orders = [
    { id: 1, displayName: 'order 1' },
    { id: 2, displayName: 'order 2' },
    { id: 3, displayName: 'order 3' },
    { id: 4, displayName: 'order 4' },
    { id: 5, displayName: 'order 5' }
  ];

  onChange(event: any) {
    if (event.srcElement.checked) {
      this.checkboxCurrent++;
      this.checkedIds.push(event.target.value);
    }else{
      this.checkboxCurrent--;
      let index = this.checkedIds.indexOf(event.target.value);
      this.checkedIds.splice(index, 1);
    }
  }

}
