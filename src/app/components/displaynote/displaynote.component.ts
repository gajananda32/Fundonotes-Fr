import { Component, EventEmitter, Input,OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UpdateNoteComponent } from '../update-note/update-note.component';

@Component({
  selector: 'app-displaynote',
  templateUrl: './displaynote.component.html',
  styleUrls: ['./displaynote.component.scss']
})
export class DisplaynoteComponent implements OnInit {

@Input() noteList:any;
Title:any;
descrption:any;

constructor(public dialog:MatDialog){}

openDialog(notes:any){
  const dialogRef=this.dialog.open(UpdateNoteComponent,{
    width:'500px',
    height:'auto',
    data:notes,
  });
  dialogRef.afterClosed().subscribe(response=>{
    console.log("this dialog was closed");
    this.Title=response;
  })
}

ngOnInit(): void {
  
}
}
