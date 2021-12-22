import { Component} from '@angular/core';
import { DummyService } from './dummy.service'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'routing-demo';
  data:any=[];
  constructor(private dummy:DummyService)
  {
    this.dummy.getdummyData().subscribe(data=>
      {
        console.warn(data);
        this.data=data;
      })
  }
}