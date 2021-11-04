import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Data } from '../models/data.model';

@Injectable({
    providedIn: 'root'
})

export class DataService {

    apiUrl = ''

    constructor(private _http: HttpClient) {}

    getSearch() {
        return this._http.get<Data[]>(this.apiUrl);
    }

}