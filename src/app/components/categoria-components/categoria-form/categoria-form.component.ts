import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { CategoriaService } from '../../../core/categoria.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import Cropper from 'cropperjs';

@Component({
  selector: 'ein-categoria-form',
  templateUrl: './categoria-form.component.html',
  styleUrls: ['./categoria-form.component.scss']
})
export class CategoriaFormComponent implements OnInit {

  edit = false;
  @Input() oid: number;
  form: FormGroup;
  @Output() saved = new EventEmitter<any>();
  @Output() canceled = new EventEmitter();

  @ViewChild('image', { static: false })
  imageElement: ElementRef;

  imageDestination: any;
  imageSource: any = 'https://picsum.photos/300/200?'

  private cropper: Cropper;

  constructor(private service: CategoriaService,
              private fb: FormBuilder,
              private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.form = this.fb.group({
      oid: this.fb.control(''),
      titulo: this.fb.control('', Validators.required),
      descricao: this.fb.control(''),
    });

    if (this.oid) {
      this.service.find(this.oid)
        .subscribe(data =>
          this.form.patchValue({
            oid: data.oid,
            titulo: data.titulo,
            descricao: data.descricao,
          }));
    }
  }

  onSubmit() {
    if (this.form.valid) {
      this.service.save(this.form.value).subscribe(response => {
        this.saved.emit(response);
      });
    }
  }

  onCancel() {
    this.canceled.emit('canceled');
  }

  selectImage(event) {
    const imageFile = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      this.imageSource = reader.result;
      this.cropper = new Cropper(this.imageElement.nativeElement, {
        zoomable: false,
        scalable: false,
        aspectRatio: 1,
        crop: () => {
          const canvas = this.cropper.getCroppedCanvas();
          this.imageDestination = canvas.toDataURL('image/png');
        }
      });
    };
    reader.readAsDataURL(imageFile);

  }

  sanitize(url) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }
  done() {
    this.edit = false;
    this.cropper.destroy();
  }
}
