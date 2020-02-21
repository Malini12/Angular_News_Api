import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  API_KEY = "616c97059d7545d7b1cbe69d94265849";
  constructor(private httpClient: HttpClient) {}
  public getNews() {
    return this.httpClient.get(
      `https://newsapi.org/v2/everything?q=<query_string>&apiKey=${this.API_KEY}`
    );
  }
}
