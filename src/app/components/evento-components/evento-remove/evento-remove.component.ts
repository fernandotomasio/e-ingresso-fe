import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { CategoriaService } from '../../../core/categoria.service';
import { MatDialog } from '@angular/material';
import { EventoService } from '../../../core/evento.service';

@Component({
  selector: 'app-evento-remove',
  templateUrl: './evento-remove.component.html',
  styleUrls: ['./evento-remove.component.scss']
})
export class EventoRemoveComponent implements OnInit {

  @Input() oid: number;
  @Output() deleted = new EventEmitter();

  mensagem: string;

  constructor(private service: EventoService, public dialog: MatDialog) {}

  ngOnInit(): void {

  }
  @HostListener('click', [ '$event.target' ])
  remove() {
    const dialogRef = this.dialog.open(EventoRemoveDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this.confirm();
      }
    });
  }

  confirm(): void {
    this.service.remove(this.oid).subscribe(() => {
      this.deleted.emit('deleted');
    });
  }

  decline(): void {
  }



}

@Component({
  selector: 'app-evento-remove-dialog',
  templateUrl: 'evento-remove-dialog.html',
})
export class EventoRemoveDialogComponent {}
