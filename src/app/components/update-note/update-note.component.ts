import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NoteService } from 'src/app/services/noteService/note.service';

@Component({
  selector: 'app-update-note',
  templateUrl: './update-note.component.html',
  styleUrls: ['./update-note.component.scss']
})
export class UpdateNoteComponent implements OnInit {
  title: any;
  description: any;
  id: any;
  constructor(private noteService: NoteService,
    public dialogRef: MatDialogRef<UpdateNoteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }
  ngOnInit(): void {
    this.title = this.data.Title
    this.description = this.data.descrption;
    this.id = this.data._id;
    console.log(this.data)
  }
  close(): void {
    let data = {
      Title: this.title,
      descrption: this.description,
      _id: this.id
    }
    console.log(this.data);
    this.noteService.updateNote(data).subscribe((response: any) => {
      console.log(response)
    })
    this.dialogRef.close();
  }
}
