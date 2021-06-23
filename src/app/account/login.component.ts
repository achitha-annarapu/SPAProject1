import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms'
import { AccountService } from '../_services';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hasRouteAccess:string = '1';
  errorMessage:string;
  constructor(private router: Router,private accountService: AccountService, private route:ActivatedRoute) { 
    this.errorMessage = "";
    this.hasRouteAccess = "1"
  }
 
  ngOnInit(): void {
  }
  login(form:NgForm){
    this.accountService.login(form.value.userName, form.value.pwd)
            .pipe(first())
            .subscribe({
                next: () => {
                    const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
                    this.router.navigateByUrl(returnUrl);
                },
                error: error => {
                  this.errorMessage = "user name or password wrong";
                }
            });
      

  }

}
