import { Component, OnInit, Input } from '@angular/core';
import { Resultat } from '../dataType/ModelType';

@Component({
  selector: 'app-resultat',
  templateUrl: './resultat.component.html',
  styleUrls: ['./resultat.component.css']
})
export class ResultatComponent implements OnInit {

  @Input()
  resultat: Resultat;

  constructor() {
    console.log(this.resultat);
  }

  ngOnInit() {
  }

}
