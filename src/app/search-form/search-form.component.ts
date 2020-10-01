import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css'],
})
export class SearchFormComponent implements OnInit {
  searchTerm: string = '';

  search() {
    this.passSearchTerm.emit(this.searchTerm);
  }

  @Output() passSearchTerm = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}
}
