import { Component, OnInit } from '@angular/core';
import * as FusionCharts from 'fusioncharts';

import { CommenService } from 'src/app/services/commen.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  // userdata="";



  constructor(private commen: CommenService) { }

  viscard = false;


  finalresponsedata: any;
  worlddata() {
    this.commen.getwolddata().subscribe(responseList => {
      this.finalresponsedata = responseList;
      // console.log(this.finalresponsedata)
    })
  }


  con: any
  rec: any
  det: any
  // userdata: any
  databycountryname: any
  userdataselected = "";
  compareChange(event: any) {
    var compare = event.target.value;
    if (event.target.value < 1) {
      this.con = 0
      this.rec = 0
      this.det = 0
      this.viscard = false;
    }
    // console.log(compare)
    this.userdataselected = compare;
    this.commen.getwolddatabyname(this.userdataselected).subscribe(responseList => {
      this.databycountryname = responseList;

      if (this.databycountryname != 0) {
        this.con = this.databycountryname.confirmed.value
        this.rec = this.databycountryname.recovered.value
        this.det = this.databycountryname.deaths.value
        this.viscard = true
      }
      else {
        this.con = 0
        this.rec = 0
        this.det = 0
      }
    })
  }




  salesChart: any
  revenueChart: any
  finalresponsedatagraph: any
  chartrender() {
    this.commen.getwolddata().subscribe(responseList => {
      this.finalresponsedatagraph = responseList;

      if (this.finalresponsedatagraph != 0) {
        var con = this.finalresponsedatagraph.confirmed.value
        var rec = this.finalresponsedatagraph.recovered.value
        var det = this.finalresponsedatagraph.deaths.value

        this.salesChart = new FusionCharts({
          type: 'column2d',
          renderAt: 'chart-container',
          width: '500',
          height: '300',
          dataFormat: 'json',
          insertMode: "prepend",
          dataSource: {
            "chart": {
              "caption": "Total Cases",
              "subCaption": "Overall",
              "xAxisName": "Month",
              "yAxisName": "",
              "numberPrefix": "",
              "theme": "fusion",
              "bgColor": "#33ccff"
            },

            "data": [{
              "label": "Confrimed",
              "value": con
            }, {
              "label": "Recovered",
              "value": rec
            }, {
              "label": "Deaths",
              "value": det
            }]
          },
        })
          .render();





        this.revenueChart = new FusionCharts({
          type: 'pie2d',
          renderAt: 'chart-container1',
          width: '500',
          height: '300',
          dataFormat: 'json',
          dataSource: {
            "chart": {
              "caption": "Total Cases",
              "subCaption": "Overall",
              "numberPrefix": "",
              "showPercentInTooltip": "0",
              "decimals": "1",
              //Theme
              "theme": "fusion",
              "bgColor": "#33ccff"
            },
            "data": [{
              "label": "Confrimed",
              "value": con
            }, {
              "label": "Recovered",
              "value": rec
            }, {
              "label": "Deaths",
              "value": det
            }]
          }
        }).render();
      }
    })
  }

















  ngOnInit(): void {
    this.worlddata();
    this.chartrender();
  }


  ngOnChange(): void {

  }

}
