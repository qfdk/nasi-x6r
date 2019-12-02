import { Component, OnInit } from '@angular/core';
import { Resultat } from '../dataType/ModelType';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  num1: number;
  num2: number;
  num3: number;

  res: Resultat;

  listRest = {
    "1": {
      "name": "大安",
      "description": "大安事事昌，求财在坤方，失物去不远，宅舍保安康<br>行人身未动，病者主无妨，将军回田野，仔细更推详",
      "isLucky": true
    },
    "2": {
      "name": "留连",
      "description": "留连事难成，求谋日未明，官事凡宜缓，去者未回程<br>失物南方见，急讨方心称，更须防口舌，人口且平平",
      "isLucky": false
    },
    "3": {
      "name": "速喜",
      "description": "速喜喜来临，求财向南行，失物申未午，逢人路上寻<br>官事有福德，病者无祸侵，田宅六畜吉，行人有信音",
      "isLucky": true
    },
    "4": {
      "name": "赤口",
      "description": "赤口主口舌，官非切宜防，失物速速讨，行人有惊慌<br>六畜多作怪，病者出西方，更须防咀咒，诚恐染瘟皇",
      "isLucky": false
    },
    "5": {
      "name": "小吉",
      "description": "小吉最吉昌，路上好商量，阴人来报喜，失物在坤方<br>行人即便至，交关甚是强，凡事皆和合，病者叩穷苍",
      "isLucky": true
    },
    "6": {
      "name": "空亡",
      "description": "空亡事不祥，阴人多乖张，求财无利益，行人有灾殃<br>失物寻一见，官事有刑伤，病人逢暗鬼，解禳保安康",
      "isLucky": false
    }
  }

  isResDisplayed: boolean;

  constructor() { }

  ngOnInit() {
  }

  randomValues(nb) {
    if (nb === 1) {
      this.num1 = this.generateValue();
    } else if (nb === 2) {
      this.num2 = this.generateValue();
    } else if (nb === 3) {
      this.num3 = this.generateValue();
    }
    this.isResDisplayed = false;
  }

  calculer() {
    if (this.num1 && this.num2 && this.num3) {
      var tmp = (this.num1 + this.num2 + this.num3 - 2) % 6;
      if (tmp === 0) {
        tmp = 6;
      }
      this.res = this.listRest[tmp];
      this.isResDisplayed = true;
    } else {
      alert("检查数字！");
    }
  }

  generateValue() {
    return Math.ceil(Math.random() * 100);
  }

  numberChanged(event) {
    this.isResDisplayed = false;
  }
}
