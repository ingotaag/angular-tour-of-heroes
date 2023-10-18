import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})

export class InMemoryDataService implements InMemoryDbService{

  createDb() {
    const heroes=[
      {id:12,name:"Dr. Nice",class:"Warrior",level:1},
      { id: 13, name: 'Bombasto' ,class:"Cleric",level:5},
      { id: 14, name: 'Celeritas' ,class:"Wizard",level:3},
      { id: 15, name: 'Magneta',class:"Rogue",level:4 },
      { id: 16, name: 'RubberMan' ,class:"Warlock",level:2},
      { id: 17, name: 'Dynama',class:"Barbarian",level:5 },
      { id: 18, name: 'Dr. IQ' ,class:"Bard",level:6},
      { id: 19, name: 'Magma' ,class:"Ranger",level:2},
      { id: 20, name: 'Tornado',class:"Monk",level:9 }
      ];

      return {heroes};      
  }

  genId(heroes:Hero[]):number {
    return heroes.length>0?Math.max(...heroes.map(hero=>hero.id))+1:11;
  }

  
  constructor() { }
}
