import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../interface/category';  // Import the Category interface

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private readonly url = 'https://quizapi.io/api/v1/questions';
  private readonly categoriesUrl = 'https://quizapi.io/api/v1/categories'; 

  constructor(private http: HttpClient) {}

  public getCategories(): Observable<Category[]> {
    const headers = new HttpHeaders({
      'X-Api-Key': 'qynrzn7IoJBuNOTyBQyrblNYRk4VcszDkxpy1yCT' 
    });

    return this.http.get<Category[]>(this.categoriesUrl, { headers });
  }

  public getQuizQuestions(difficulty: string, limit: number, category: string): Observable<any[]> {
    const headers = new HttpHeaders({
      'X-Api-Key': 'qynrzn7IoJBuNOTyBQyrblNYRk4VcszDkxpy1yCT'
    });

    return this.http.get<any[]>(`${this.url}?difficulty=${difficulty}&limit=${limit}`, { headers });
  }
}
