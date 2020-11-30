import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Hero } from '../hero'
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {


  // second part

  heroes= HEROES;

  selectedHero:Hero;
 
// -----------------
  // first part

  // hero: Hero ={
  //   id:1,
  //   name:'Windstorm'
  // }

  //hero1:'Windstorm1';
  
//  king : Hero={

//    id:2,
//    name: 'Ali Raza'
//    }
  
  

  constructor() { }

  ngOnInit() {
  }
  
  onSelect(hero:Hero):void{
    this.selectedHero=hero;
  }

}
