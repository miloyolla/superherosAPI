import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormGroup, FormBuilder, Validators } from'@angular/forms';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  superheroImage;
  form: FormGroup;

  constructor(public authService: AuthService, public formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({superhero: [null, [Validators.required]]});
  }

  ngOnInit(): void {

  }

  getSuperHeroImage(form){
    console.log(form)
    this.authService.getSuperHeroImage(form.value).subscribe(
      (res) => {
        console.log(res);
        this.superheroImage = res.image.url;
      });
  }

}
