import { Injectable } from '@angular/core';
import { Curriculum } from 'src/models/curriculum.model';
import { resume } from 'src/mockup-data/mock-curriculum';

@Injectable({
  providedIn: 'root'
})
export class CurriculumService {

  constructor() { }

  getResume(): Curriculum {
    return resume;
  }
}

