import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { IndicacaoService } from '../../../core/indicacao.service';
import { MatDialog } from '@angular/material';
import { EventoRemoveDialogComponent } from '../../evento-components/evento-remove/evento-remove.component';

@Component({
  selector: 'ein-indicacao-remove',
  templateUrl: './indicacao-remove.component.html',
  styleUrls: ['./indicacao-remove.component.scss']
})
export class IndicacaoRemoveComponent implements OnInit {
  @Input() oid: number;
  @Output() deleted = new EventEmitter();

  mensagem: string;

  constructor(private service: IndicacaoService, public dialog: MatDialog) {}

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
  selector: 'ein-indicacao-remove-dialog',
  templateUrl: 'indicacao-remove-dialog.html',
})
export class IndicacaoRemoveDialogComponent {}
