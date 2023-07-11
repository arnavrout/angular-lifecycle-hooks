import { Component, Input, OnInit, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit,OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() //This Input decorator is used to pass data from parent to child class
  valueEntered = "Input Data";

  constructor() {
    console.log("Constructor called");
    console.log(this.valueEntered); 
  }

  //it is the only lifecycle hook that takes an argument
  ngOnChanges(change: SimpleChanges) { // ngOnChanges will only be called when there is changes in previous and current value of input text(here it is "valueEntered")
    console.log("ngOnChanges called"); 
    console.log(change); 
  }

  ngOnInit() {
    //ngOnInIt gets fired only once, right after the first change detection cycle
    console.log("ngOnInit called");
    console.log(this.valueEntered); //by the time this ngOnInit gets called, input property of components are updated
  }

  //This hook gets called everytime change detection cycle gets called, even if there is no change in input bound property
  ngDoCheck() {
    console.log("ngDoCheck called");
  }

  //This hook only gets called once during the first change detection cycle
  ngAfterContentInit() {
    console.log("ngAfterContentInit called");
  }

  //This hook gets called for every change detection cycle, even when the projected content changes (we have added ng-content to the reference to h4 tag in aap.component.html)
  ngAfterContentChecked() {
    console.log("ngAfterContentChecked called");
  }

  //This hook only gets called once during the first change detection cycle
  ngAfterViewInit() {
    console.log("ngAfterViewInit called");
  }

  //This hook gets called for every change detection cycle
  ngAfterViewChecked() {
    console.log("ngAfterViewChecked called");
  }

  //it is called just before the component or directive gets destroyed
  ngOnDestroy() {
    console.log("ngOnDestroy called"); //we have create a button and assigned it to app-demo selector by *ngIf, when the button is clicked the component will be removed and ngOnDestroy gets called
  }

}
