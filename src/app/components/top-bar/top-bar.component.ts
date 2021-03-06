import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  @Input() title: string;
	@Input() selected: boolean;
  @Output() add = new EventEmitter();
  @Output() remove = new EventEmitter();
	@Output() edit = new EventEmitter();

  constructor() { }

  ngOnInit() {

  }

  onAdd() {
    console.log('top-bar add');
    this.add.emit();
  }

  onRemove() {
  	this.remove.emit();
  }

  onEdit() {
  	this.edit.emit();
  }

}
