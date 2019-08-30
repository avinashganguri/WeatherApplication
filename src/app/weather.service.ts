import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  public url;
  public  url2;
  constructor(private http: HttpClient) {
  }
  getTemp(code, city) {
    this.url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=3cec8443c643b4ec19ad9196eaa33ddc&units=imperial';
    return this.http.get(this.url);
  }
  getForecast(code, city) {
    this.url2 = 'http://api.openweathermap.org/data/2.5/forecast?q=' + city + '&APPID=3cec8443c643b4ec19ad9196eaa33ddc&units=imperial';
    return this.http.get(this.url2);
  }
}
