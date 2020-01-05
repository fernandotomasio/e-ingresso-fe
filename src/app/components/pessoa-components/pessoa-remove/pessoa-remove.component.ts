import {Component, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';
import {MatDialog} from '@angular/material';
import {PessoaService} from '../../../core/pessoa.service';

@Component({
  selector: 'ein-pessoa-remove',
  templateUrl: './pessoa-remove.component.html',
  styleUrls: ['./pessoa-remove.component.scss']
})
export class PessoaRemoveComponent implements OnInit {

  @Input() oid: number;
  @Output() deleted = new EventEmitter();

  mensagem: string;

  constructor(private service: PessoaService, public dialog: MatDialog) {}

  ngOnInit(): void {

  }
  @HostListener('click', [ '$event.target' ])
  remove() {
    const dialogRef = this.dialog.open(PessoaRemoveDialogComponent);

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
  selector: 'ein-pessoa-remove-dialog',
  templateUrl: 'pessoa-remove-dialog.html',
})
export class PessoaRemoveDialogComponent {}

