import { ApiService } from './../../service/api.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cartdetails',
  templateUrl: './cartdetails.component.html',
  styleUrls: ['./cartdetails.component.scss']
})
export class CartdetailsComponent {

  
  id:any;
  data:any;
  constructor(private api : ApiService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.getOne();
}
getOne(){
 this.api.getProductById(this.id).subscribe(data=>{
  this.data=data
  console.log(this.data);
 })
}
}
