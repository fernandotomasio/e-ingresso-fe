import { Component, ElementRef, forwardRef, OnInit, ViewChild } from '@angular/core';
import Cropper from 'cropperjs';
import { DomSanitizer } from '@angular/platform-browser';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input-image-upload',
  templateUrl: './input-image-upload.component.html',
  styleUrls: ['./input-image-upload.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputImageUploadComponent),
      multi: true,
    }
  ]
})
export class InputImageUploadComponent implements OnInit,  ControlValueAccessor {

  value: any;

  noImageUrl = 'assets/images/no-image-with-text.jpg';
  destinationImage: any;
  sourceImage: any;

  @ViewChild('image', { static: false })
  imageElement: ElementRef;

  edit = false;

  onChange: (id: any) => void;
  onTouched: () => void;
  disabled: boolean;

  private cropper: Cropper;

  constructor( private sanitizer: DomSanitizer ) {
  }

  ngOnInit() {

  }

  writeValue(value: number): void {
    if (!value) {
      this.destinationImage = this.noImageUrl;
    } else {
      this.destinationImage = this.sanitize(value);
    }
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

  selectImage(event) {
    if (this.cropper) {
      this.closeCropper();
    }
    const imageFile = event.target.files[0];
    this.sourceImage = this.sanitize(URL.createObjectURL(imageFile));
  }

  openCropper() {
    this.edit = true;
    this.cropper = new Cropper(this.imageElement.nativeElement, {
      zoomable: false,
      scalable: false,
      aspectRatio: 1.5,
      viewMode: 2,
      crop: () => {
        const canvas = this.cropper.getCroppedCanvas();
        this.destinationImage = canvas.toDataURL('image/png');
      }
    });
  }

  closeCropper() {
    this.edit = false;
    if (this.destinationImage !== this.noImageUrl) {
      this.value = this.destinationImage;
      this.onChange(this.value);
      this.onTouched();
    }

    this.cropper.destroy();
  }

  sanitize(url) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }
  done() {
    this.closeCropper();
  }
}
