import { Component, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgModel, Validators } from '@angular/forms';
import { ConsumerService } from 'src/app/consumer-service.service';
import { Menu } from 'src/app/models/menu.model';

@Component({
  selector: 'app-add-menu-component',
  templateUrl: './add-menu-component.component.html',
  styleUrls: ['./add-menu-component.component.css']
})
export class AddMenuComponentComponent {
titre: any;
description: any; 
menuForm!: FormGroup;
menu : Menu = new Menu();
message: { [key: string]: string } = {
  required: 'Ce champ est obligatoire',
  minlength: 'La description doit contenir au moins 10 caractères',
};
 constructor(private fb: FormBuilder,private consumerService:ConsumerService) {}
 ngOnInit() {

  this.menuForm = this.fb.group({
    titre: ['', Validators.required],
    description: ['', [Validators.required, Validators.minLength(10)]]
  });
}
 getErrorMessage(controlName: string): string[] {
  const control = this.menuForm.get(controlName);
  if (control && control.errors && control.touched) {
    return Object.keys(control.errors).map(key => this.message[key] || key);
  }
  return [];
}
submit(){
  console.log(this.menuForm);

  this.menu.title=this.menuForm.value.titre;
  this.menu.description=this.menuForm.value.description;
  this.menu.approved=false;
  this.menu.mark=0;
  console.log(this.menu);
  this.consumerService.add<Menu>('menus',this.menu).subscribe({
    next: (response) => {
      console.log('Menu added successfully', response);
    },
    error: (error) => {
      console.error('Error adding menu', error);
    }
  });
}
}
