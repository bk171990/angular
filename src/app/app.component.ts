import { Component, OnInit } from '@angular/core';
import { OdooRPCService } from 'angular5-odoo-jsonrpc';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [OdooRPCService]
})
export class AppComponent implements OnInit{

  projectList;
  ngOnInit(){
    let self =  this;
    self.projectList = [];
    self.odooRPC.init({
      odoo_server: "http://demo.opensysknw.com"
    });
    self.odooRPC.login('demo.opensysknw.com', 'admin', 'admin').then(res => {
      console.log('login success');
    }).catch( err => {
      console.error('akshay', err);
    })
  }
  constructor( private odooRPC: OdooRPCService){
  }}