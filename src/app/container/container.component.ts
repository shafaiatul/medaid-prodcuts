import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UserService } from './../services/user.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ContainerComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

}
