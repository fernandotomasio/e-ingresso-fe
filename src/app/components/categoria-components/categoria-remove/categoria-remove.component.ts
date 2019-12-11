import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CategoriaService } from '../../../core/categoria.service';

@Component({
  selector: 'ein-categoria-remove',
  templateUrl: './categoria-remove.component.html',
  styleUrls: ['./categoria-remove.component.scss']
})
export class CategoriaRemoveComponent implements OnInit {
  @Input() oid: number;
  @Output() deleted = new EventEmitter();

  mensagem: string;

  constructor(private service: CategoriaService) {}

  ngOnInit(): void {

  }

  remove() {

  }

  confirm(): void {
    this.service.remove(this.oid).subscribe(() => {
      this.deleted.emit('deleted');
    });
  }

  decline(): void {
  }



}
