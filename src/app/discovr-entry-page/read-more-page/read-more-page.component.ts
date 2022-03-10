import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-read-more-page',
  templateUrl: './read-more-page.component.html',
  styleUrls: ['./read-more-page.component.css']
})
export class ReadMorePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  cardData = [
    { header:'Accuracy:',para:'Industry leading accuracy across hundreds of datasets'},
    { header:'Speed:',para:'Best in class speed of processing achieved. Processed 8.5 million data points in less than 20seconds on Windows 10 and less than 6 seconds on Ubuntu on an ordinary laptop!'},
    { header:'Explainability:',para:'User defined Key column references provides relevant feature, its weightage and value with range of common values and whether is high or low'},
    { header:'Categorical Columns:',para:'Handles both numeric and categorical data.'},
    { header:'Deterministic:',para:'For same input data, the output is exactly same. Most other algorithms provide different result each time we run.'},
    { header:'Real time Streaming Data:',para:' Handles streaming data one row at a time with milliseconds response'},
    { header:'Intelligent Sorting:',para:'The rows are sorted in descending order of anomaly score, thus the row with the highest anomaly  is shown at the top. For each row, key columns are sorted in descending order according to their weightage. So, the first key column in each row is always the one with the highest weightage'},
  ]
}
