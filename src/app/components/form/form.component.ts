import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ListService } from '../../services/list.service';

@Component({
  selector: 'app-form',
  standalone: false,
  
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  formulario!: FormGroup;

  userCreate!: any
  constructor(private fb: FormBuilder, private http: HttpClient, private listService: ListService) {
    this.formulario = this.fb.group({
      name: ['', [Validators.required]],
      occupation: ['', [Validators.required]],
      newsletter: [Boolean]
    })
  }

  onSubmit() {
    this.listService.insertUser(this.formulario.value).subscribe((user) => (this.userCreate = user))
  }
}
