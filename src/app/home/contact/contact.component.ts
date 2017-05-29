import { Component, OnInit, Input } from '@angular/core';
import { ParseApiService as Parse } from '../../parse-api/parse-api.service';

@Component({
  selector: 'wyf-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit 
{
  constructor(private parse: Parse) {}
  
  ngOnInit() {
  }

  submitForm(n: string, e: string, i: string, m: string): void
  {
    console.log("Submitting form", [arguments]);
    let Table = this.parse.Api.Object.extend('ContactForm');
    let table = new Table();

    let user = {
      name: n,
      email: e,
      inquiry: i,
      message: m
    };

    table.save(user, { 
      success: function(res){ console.info(["Response", arguments]) },
    	error: function(err){ console.info(["Error", arguments]) }
    });
  }

}
