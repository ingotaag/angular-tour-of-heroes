import { Observable, of } from 'rxjs';
import { Hero } from './hero';
import { Injectable } from '@angular/core';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  private heroesUrl = 'api/heroes';

  getHeroes(): Observable<Hero[]> {
    return this.http
      .get<Hero[]>(this.heroesUrl)
      .pipe(catchError(this.handleError<Hero[]>('getHeroes', [])));
  }

  log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  getHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;

    return this.http
      .get<Hero>(url)
      .pipe(
        tap(
          (_) => this.log(`fetched hero id=${id}`),
          catchError(this.handleError<Hero>(`getHero id=${id}`))
        )
      );
  }

  updateHero(hero: Hero):Observable<any> {
      return this.http.put(this.heroesUrl,hero,this.httpOptions).pipe(
        tap(_=>this.log(`updated hero id=${hero.id}`)),
        catchError(this.handleError<any>('updateHero'))
      );

  }

addHero(hero:Hero) {
  return this.http.post<Hero>(this.heroesUrl,hero,this.httpOptions)
  .pipe(
    tap((newHero:Hero)=>this.log(`added hero w/ id=${newHero.id}`)),
    catchError(this.handleError<Hero>('addHero'))
    );
  

}

deleteHero(id:number) {
  
}
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`$(operation) failed $(error.message)`);
      return of(result as T);
    };
  }
}
