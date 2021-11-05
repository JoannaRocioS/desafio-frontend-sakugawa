import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from '../interface/country';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class DataService {

    // Url de la API que estoy usando
    apiUrl = 'https://restcountries.com/v3.1/'

    constructor(private _http: HttpClient) {}
 
    // Endpoint que le pega a la api
    getData(search : string): Observable<Country[]> {
        return this._http.get<Country[]>(this.apiUrl + 'name/' + search)
    }

}