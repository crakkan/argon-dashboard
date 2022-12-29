import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';
// import { ApiService } from 'src/app/service/api.service';

// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2
} from "../../variables/charts";

// interface userList{
//   pageName : string;
//   visitor : number;
//   uniqueUser : number;
//   bounceRate : number;
// }

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  code:climate[]=[
    {userName: 'komal', companyName: 'zee', vatNumber: 5554, address: 'somalia', productKey: 56565},
    {userName: 'chanchal', companyName: 'nth', vatNumber: 5554, address: 'vanuazela', productKey: 56565},
    {userName: 'nirmal', companyName: 'tham', vatNumber: 5554, address: 'quba', productKey: 56565},
    {userName: 'sonena', companyName: 'zee', vatNumber: 5554, address: 'somalia', productKey: 56565},
    {userName: 'komal', companyName: 'zee', vatNumber: 5554, address: 'somalia', productKey: 56565}
  ]

  product:productkey[]=[
    {companyName: 'amazon', vat: 5.6, productKey: 15554},
    {companyName: 'google', vat: 1.6, productKey: 15554},
    {companyName: 'alibaba', vat: 8.6, productKey: 15554},
    {companyName: 'zomato', vat: 7.6, productKey: 15554},
    {companyName: 'coke', vat: 5.6, productKey: 15554},
    {companyName: 'nike', vat: 3.6, productKey: 15554},
  ]

  user:usersList[]=[
    {icon:1, userName: 'karan', companyName: 'olx', number: 45454445, address: 'kolkata'},
    {icon:2, userName: 'lenin', companyName: 'microsoft', number: 45454445, address: 'mumbai'},
    {icon:3, userName: 'stalin', companyName: 'google', number: 45454445, address: 'delhi'},
    {icon:4, userName: 'adolf', companyName: 'amazon', number: 45454445, address: 'belgiam'},
    {icon:5, userName: 'hitler', companyName: 'jp morgan', number: 45454445, address: 'new york'},
    {icon:6, userName: 'muselini', companyName: 'finearts', number: 45454445, address: 'dublin'},
  ]

  traffic: Strafic[]=[
    {referral: 'Facebook', visitors: 1450, rate: 60},
    {referral: 'Twitter', visitors: 1450, rate: 60},
    {referral: 'Linkdin', visitors: 1450, rate: 60},
    {referral: 'Youtube', visitors: 1450, rate: 60}
  ]

  users:userList[]=[

    {pageName: 'argon', visitor: 45454, uniqueUser: 454, bounceRate:54},
    {pageName: 'argon/index.html', visitor: 45454, uniqueUser: 454, bounceRate:54},
    {pageName: 'argon/chart.html', visitor: 45454, uniqueUser: 454, bounceRate:54},
    {pageName: 'argon/login.html', visitor: 45454, uniqueUser: 454, bounceRate:54}
  ]

  // constructor(private appService : ApiService){}
  // userList
  public datasets: any;
  public data: any;
  public salesChart;
  public clicked: boolean = true;
  public clicked1: boolean = false;

  ngOnInit(): void {

    // this.userList = this.appService.postallUsers();
    

    this.datasets = [
      [0, 20, 10, 30, 15, 40, 20, 60, 60],
      // [0, 20, 5, 25, 10, 30, 15, 40, 40]
    ];
    this.data = this.datasets[0];


    // var chartOrders = document.getElementById('chart-orders');

    parseOptions(Chart, chartOptions());


    // var ordersChart = new Chart(chartOrders, {
    //   type: 'bar',
    //   options: chartExample2.options,
    //   data: chartExample2.data
    // });

    var chartSales = document.getElementById('chart-sales');

    this.salesChart = new Chart(chartSales, {
			type: 'line',
			options: chartExample1.options,
			data: chartExample1.data
		});
  }


  public updateOptions() {
    this.salesChart.data.datasets[0].data = this.data;
    this.salesChart.update();
  }

}
class userList{
  pageName : string;
  visitor : number;
  uniqueUser : number;
  bounceRate : number;
}
class Strafic{
  referral : string;
  visitors : number;
  rate : number;
}
class usersList{
  icon : number;
  userName : string;
  companyName : string;
  number : number;
  address : string;
}
class productkey{
  companyName : string;
  vat : number;
  productKey : number;
}
class climate{
  userName: string;
  companyName: string;
  vatNumber: number;
  address: string;
  productKey: number;
}
