import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { AccountService } from '../_services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users:any = null;
  
  constructor(private accountService: AccountService) { 
    this.accountService.getAll()
            .pipe(first())
            .subscribe(users => {console.log(users); this.users = users});
  }

  ngOnInit(): void {
  }
  
  
deleteUser(id: string) {
  const user = this.users.find((x: { id: string; }) => x.id === id);
  user.isDeleting = true;
  this.accountService.delete(id)
      .pipe(first())
      .subscribe(() => this.users = this.users.filter((x: { id: string; }) => x.id !== id));
}

}
