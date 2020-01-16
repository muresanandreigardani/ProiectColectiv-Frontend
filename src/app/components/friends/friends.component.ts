import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ApiProvider } from 'src/app/services/api-provide';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss']
})
export class FriendsComponent {
  @Input()
  public username: any;
  @Output()
  public refresh: EventEmitter<any> = new EventEmitter();

  constructor(
    private apiProvider: ApiProvider
  ) { }

  public addNewFriend() {
    this.apiProvider.addNewFriend(this.username.friendsRequest).subscribe(data => {
      console.log(data);
      this.refresh.emit();
    });
  }

  public removeFriend() {
    this.apiProvider.removeFriend(this.username.friendsRequest).subscribe(data => {
      console.log(data);
      this.refresh.emit();
    });
  }

}
