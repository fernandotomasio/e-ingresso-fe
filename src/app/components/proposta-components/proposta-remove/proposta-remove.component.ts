import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material';
import { PropostaService } from '../../../core/proposta.service';

@Component({
  selector: 'app-proposta-remove',
  templateUrl: './proposta-remove.component.html',
  styleUrls: ['./proposta-remove.component.scss']
})
export class PropostaRemoveComponent implements OnInit {
  @Input() oid: number;
  @Output() deleted = new EventEmitter();

  mensagem: string;

  constructor(private service: PropostaService, public dialog: MatDialog) {}

  ngOnInit() {
  }

  @HostListener('click', [ '$event.target' ])
  remove() {
    const dialogRef = this.dialog.open(PropostaRemoveDialogComponent);

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
  selector: 'app-proposta-remove-dialog',
  templateUrl: 'proposta-remove-dialog.html',
})
export class PropostaRemoveDialogComponent {}
