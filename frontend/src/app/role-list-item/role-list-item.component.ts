import { Component, Input, OnInit } from '@angular/core';
import { TemplateRole } from '../models/template-role';

@Component({
  selector: 'a.app-role-list-item',
  templateUrl: './role-list-item.component.html'
})
export class RoleListItemComponent {
  @Input() templateRole: TemplateRole;
}