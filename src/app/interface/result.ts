export interface Result {
    total: number;
    correct: number;
    wrong: number;
    correctPercentage: number;
    wrongPercentage: number;
}
export interface Question {
    category: string;
    type: string;
    difficulty: string;
    question: string;
    correct_answer: string;
    incorrect_answers: string[];
}