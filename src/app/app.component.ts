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

  getDisabledStatus(name):boolean {
    if ( (name.value && this.checkboxCurrent == this.checkboxLimit)
      || (this.checkboxCurrent != this.checkboxLimit) ){
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
    //this.length = order.checked.length();
    if (event.srcElement.checked) {
      this.checkboxCurrent++;
    }else{
      this.checkboxCurrent--;
    }
  }

}
