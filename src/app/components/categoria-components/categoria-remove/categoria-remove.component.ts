import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { CategoriaService } from '../../../core/categoria.service';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'ein-categoria-remove',
  templateUrl: './categoria-remove.component.html',
  styleUrls: ['./categoria-remove.component.scss']
})
export class CategoriaRemoveComponent implements OnInit {
  @Input() oid: number;
  @Output() deleted = new EventEmitter();

  mensagem: string;

  constructor(private service: CategoriaService, public dialog: MatDialog) {}

  ngOnInit(): void {

  }
  @HostListener('click', [ '$event.target' ])
  remove() {
    const dialogRef = this.dialog.open(CategoriaRemoveDialogComponent);

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
  selector: 'ein-categoria-remove-dialog',
  templateUrl: 'categoria-remove-dialog.html',
})
export class CategoriaRemoveDialogComponent {}
