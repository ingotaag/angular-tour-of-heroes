import { Component,OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService} from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})

export class HeroesComponent {
  
  constructor(private heroService: HeroService,private messageService:MessageService) {}
  
  //Properties
  heroes:Hero[]=[];
  selectedHero?: Hero;
  
  //Methods
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add('Heroes-Componment: Selected heor id=$(hero.id)');
  }

  getHeroes() :void{
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);

  }

  ngOnInit() {
    this.getHeroes();
  }
}
