import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { IndicacaoService } from '../../../core/indicacao.service';
import { MatDialog } from '@angular/material';

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
    const dialogRef = this.dialog.open(IndicacaoRemoveDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
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
