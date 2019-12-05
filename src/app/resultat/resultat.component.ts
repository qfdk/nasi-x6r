import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-resultat',
  templateUrl: './resultat.component.html',
  styleUrls: ['./resultat.component.css']
})
export class ResultatComponent implements OnInit {

  @Input()
  resultats;

  constructor() {
    console.log(this.resultats);
  }

  ngOnInit() {
  }

}
