import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Shrtcodemodel } from 'src/app/interface/shrtcodemodel';
import { GenerateShrtcodeService } from 'src/app/service/generate-shrtcode.service';
import {
  Input,
  initTE,
} from "tw-elements";
@Component({
  selector: 'app-shrtcode',
  templateUrl: './shrtcode.component.html',
  styleUrls: ['./shrtcode.component.css']
})
export class ShrtcodeComponent implements OnInit {
  public items: Shrtcodemodel[] = [];
  public urlValid: boolean = false;

  checkoutForm = this.formBuilder.group({
    url: ''
  });

  constructor(
    private generateShrtCodeService: GenerateShrtcodeService,
    private formBuilder: FormBuilder,
  ) { }



  onSubmit(): void {
    if (this.checkoutForm.value.url == "") {
      this.urlValid = true
      return
    } else {
      this.urlValid = false
    }
    const inputElement = document.getElementById('floatingInput');
    if (inputElement) {
      inputElement.classList.add('border-green-500', 'focus:border-green-600');
    }

    let getUrl: string = this.checkoutForm.value.url ? this.checkoutForm.value.url : ""


    this.generateShrtCodeService.GenerateShrtcode(getUrl).subscribe(response => {
      const inputElement = document.getElementById('floatingInput');
      if (inputElement) {
        inputElement.classList.add('border-green-500', 'focus:border-green-600');
      }
      const shrtmodel: Shrtcodemodel = { original_link: getUrl, short_link: response.result.full_short_link} 
      this.items.push(shrtmodel)
    }, error => {
      const inputElement = document.getElementById('floatingInput');
      if (inputElement) {
        inputElement.classList.add('border-red-500', 'focus:border-red-600');
      }
    })
  }

  ngOnInit() {
    initTE({ Input });
  }
}
