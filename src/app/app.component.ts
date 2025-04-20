import { Component, ViewChild } from '@angular/core';
import { QuizService } from './services/quiz.service';
import { QuizComponent } from './quiz/quiz.component';
import { ResultComponent } from './result/result.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Quiz App';
  
  public questionsLimit: number;
  public difficulty: string;
  public selectedCategory: string = '';
  public playerName: string = '';
  
  public showMainMenu: boolean;
  public showQuizScreen: boolean;
  public showResultScreen: boolean;
  
  public spinner: boolean;

  public categories: any[] = []; 
  public histories: any[] = []; 

  @ViewChild('quiz', { static: true }) quiz!: QuizComponent;
  @ViewChild('result', { static: true }) result!: ResultComponent;

  constructor(private quizService: QuizService) {
    this.questionsLimit = 20;
    this.difficulty = "Easy";
    this.showMainMenu = true;
    this.loadHistories(); 
    this.getCategories(); 
  }

  getCategories(): void {
    this.quizService.getCategories().subscribe((response) => {
      this.categories = response; 
    });
  }


  loadHistories(): void {
    const storedHistories = localStorage.getItem('gameHistories');
    if (storedHistories) {
      this.histories = JSON.parse(storedHistories);
    }
  }


  saveHistories(): void {
    localStorage.setItem('gameHistories', JSON.stringify(this.histories));
  }

  quizQuestions(): void {
    if (!this.playerName.trim()) {
      alert("Please enter your name.");
      return;
    }
    
    this.toggleSpinner();
    this.quizService.getQuizQuestions(this.difficulty, this.questionsLimit, this.selectedCategory)
      .subscribe((response) => {
        this.quiz.questions = response;
        this.quiz.reset();
        this.quiz.showQuestion(0);
        this.showMainMenu = false;
        this.showQuizScreen = true;
        this.toggleSpinner();
      });
  }

  finalResult(result: any): void {
    result.playerName = this.playerName; 
    this.histories.push({ ...result, date: new Date() });
    this.saveHistories(); 
    this.result.finalResult = result;
    this.showQuizScreen = false;
    this.showResultScreen = true;
  }

  showMainMenuScreen(): void {
    this.showResultScreen = false;
    this.showMainMenu = true;
  }

  toggleSpinner(): void {
    this.spinner = !this.spinner;
  }
}
