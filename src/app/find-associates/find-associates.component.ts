import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user-service/user.service';

@Component({
  selector: 'app-find-associates',
  templateUrl: './find-associates.component.html',
  styleUrls: ['./find-associates.component.css']
})
export class FindAssociatesComponent implements OnInit {

  searchText: string = "";
  users = [];

  constructor(private userService : UserService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(
      list => {
        this.users = list.map(item => {
          return {
            $key: item.key,
            ...item.payload.val()
          };
        });
      }
    );
  }

  filterCondition(user){
    return (user.city.toLowerCase() + user.state.toLowerCase()).indexOf(this.searchText.toLowerCase()) != -1;
  }

}
