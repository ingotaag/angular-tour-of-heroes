import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HeroService} from '../hero.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent {
  constructor(private heroService: HeroService) {}
  heroes:Hero[]=[];
  selectedHero?: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes() {
    this.heroService.getHeroes().subscribe(heroes=>this.heroes=this.heroes);

  }

  ngOnInit() {
    this.getHeroes();
  }
}