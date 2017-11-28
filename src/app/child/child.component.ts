import { Component, Input } from '@angular/core';

import { Skills } from '../shared/data';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  selectSkill: string; // skill list item selected by the user

  @Input() skills: Skills[];

  // The disclosure and hiding of a list of skills
  toggle( skill, event) {
    event.stopPropagation();

    if (this.selectSkill === skill.name) {
      this.selectSkill = null;
    } else {
      this.selectSkill = skill.name;
    }
  }
}
