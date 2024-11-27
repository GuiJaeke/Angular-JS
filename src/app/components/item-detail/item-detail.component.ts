import { Component, OnInit } from '@angular/core';
import { User } from '../../user';
import { ActivatedRoute } from '@angular/router';
import { ListService } from '../../services/list.service';

@Component({
  selector: 'app-item-detail',
  standalone: false,
  
  templateUrl: './item-detail.component.html',
  styleUrl: './item-detail.component.css'
})
export class ItemDetailComponent{
  user?: User 

constructor(private listService: ListService, private route: ActivatedRoute) {
  this.getUser()
}

getUser(): void {
  const id = Number(this.route.snapshot.paramMap.get("id"))

  this.listService.getUser(id).subscribe((user) => (this.user = user))
}

;}
