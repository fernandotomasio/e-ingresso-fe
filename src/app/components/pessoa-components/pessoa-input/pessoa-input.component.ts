import { Component, forwardRef, Inject, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { PessoaService } from '../../../core/pessoa.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface PessoaDialogData {
  oid: string;
}

@Component({
  selector: 'app-pessoa-input',
  templateUrl: './pessoa-input.component.html',
  styleUrls: ['./pessoa-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PessoaInputComponent),
      multi: true,
    }
  ]
})
export class PessoaInputComponent implements ControlValueAccessor {

  value: any;
  description = '';
  constructor(private dialog: MatDialog) {}

  onChange: (id: any) => void;
  onTouched: () => void;
  disabled: boolean;

  writeValue(value: number): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }


  openDialog(): void {
    const dialogRef = this.dialog.open(PessoaDialogComponent, {

    });

    dialogRef.afterClosed().subscribe(result => {
      this.value = result ? result.oid : '';
      this.description = result ? result.description : '';
      this.onChange(this.value)
      this.onTouched();
    });
  }
}


@Component({
  selector: 'app-pessoa-dialog',
  templateUrl: 'pessoa-dialog.component.html',
})
export class PessoaDialogComponent {

  constructor(private service: PessoaService,
              public dialogRef: MatDialogRef<PessoaDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: PessoaDialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSelect(event) {
    this.service.find(event).subscribe(response => {
      this.dialogRef.close({ oid: response.oid, description: response.nome });
    });
  }


  onCancel() {
  }

}
