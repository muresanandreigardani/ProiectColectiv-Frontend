import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ApiProvider } from 'src/app/services/api-provide';

@Component({
  selector: 'app-add-friends',
  templateUrl: './add-friends.component.html',
  styleUrls: ['./add-friends.component.scss']
})
export class AddFriendsComponent {
  public sent: boolean = false;
  @Input()
  public username: string;
  @Output()
  public refresh2: EventEmitter<any> = new EventEmitter();

  constructor(
    private apiProvider: ApiProvider
  ) { }

  public addNewFriend() {
    this.apiProvider.sendRequest(this.username).subscribe(data => {
      this.sent = !this.sent;
      console.log(data);
      setTimeout(() => {
        this.refresh2.emit();
      }, 1500);
    });
  }

}
