import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/noteService/note.service';

@Component({
  selector: 'app-createnotes',
  templateUrl: './createnotes.component.html',
  styleUrls: ['./createnotes.component.scss']
})
export class CreatenotesComponent implements OnInit {

  isShow = false;
  title: any;
  description: any;
  constructor(private note: NoteService) {

  }
  ngOnInit(): void {

  }
  Show() {
    this.isShow = true;
  }
  close() {
    this.isShow = false;
    // if ((this.title != null && this.title != "") || (this.description != null && this.description != "")) {
    //   console.log(this.title, this.description)
      let data = {
        Title: this.title,
        descrption: this.description,
        colour:""
      }
      //console.log("data----------",data);
      this.note.createNote(data).subscribe((response: any) => {
        console.log(response);
      })
    }
  }
//}
