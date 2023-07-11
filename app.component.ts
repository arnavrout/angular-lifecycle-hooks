import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-lifecycle-hooks';

  inputText = ""; //value that user will enter

  destroy = true;

  onSubmitBtn(inputElement: HTMLInputElement) {
    this.inputText = inputElement.value;
  }

  destroyComponents() {
    this.destroy = false;
  }
}
