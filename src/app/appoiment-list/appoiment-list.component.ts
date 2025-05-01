import { Component, OnInit } from '@angular/core';
import { Appoiment } from '../models/appoiment';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-appoiment-list',
  imports: [FormsModule, CommonModule],
  templateUrl: './appoiment-list.component.html',
  styleUrl: './appoiment-list.component.css'
})
export class AppoimentListComponent implements OnInit{
   

    newTitle:string = "";
    newDate: Date =  new Date()
    appoiments: Appoiment[] = []

    ngOnInit(): void {
      console.log("Loaded...");

      let getAppoiments =  localStorage.getItem("appoiments");
      this.appoiments = getAppoiments ? JSON.parse(getAppoiments): []
    }

    addAppoiment(){
      if (this.newTitle.trim().length && this.newDate) {
        let appoiment : Appoiment = {
          id:Date.now(),
          title:this.newTitle,
          date:this.newDate
        }
        this.appoiments.push(appoiment);
        this.newTitle = "";
        this.newDate = new Date();
        localStorage.setItem("appoiments", JSON.stringify(this.appoiments))
     
      }
   
    }
    deleteappoiment(index: number) {
      this.appoiments.splice(index, 1);
      localStorage.setItem("appoiments", JSON.stringify(this.appoiments))
    }
    
}
