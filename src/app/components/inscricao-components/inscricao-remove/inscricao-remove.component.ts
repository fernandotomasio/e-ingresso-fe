import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { InscricaoService } from '../../../core/inscricao.service';
import { MatDialog } from '@angular/material';
import { EventoRemoveDialogComponent } from '../../evento-components/evento-remove/evento-remove.component';

@Component({
  selector: 'app-inscricao-remove',
  templateUrl: './inscricao-remove.component.html',
  styleUrls: ['./inscricao-remove.component.scss']
})
export class InscricaoRemoveComponent implements OnInit {
  @Input() oid: number;
  @Output() deleted = new EventEmitter();

  mensagem: string;

  constructor(private service: InscricaoService, public dialog: MatDialog) {}

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
  selector: 'app-inscricao-remove-dialog',
  templateUrl: 'inscricao-remove-dialog.html',
})
export class InscricaoRemoveDialogComponent {}
