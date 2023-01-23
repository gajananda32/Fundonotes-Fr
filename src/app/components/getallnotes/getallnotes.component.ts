import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/noteService/note.service';

@Component({
  selector: 'app-getallnotes',
  templateUrl:'./getallnotes.component.html',
  styleUrls: ['./getallnotes.component.scss']
})
export class GetallnotesComponent implements OnInit{
 noteArray=[]
 constructor(private note:NoteService){}
 ngOnInit(): void {
  this.getAllNote();
 }
 getAllNote(){
  this.note.getAllNotes().subscribe((response:any)=>{
    console.log(response);
    this.noteArray=response.data
    console.log(this.noteArray);
  })
 }
 
}
