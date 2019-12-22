import { Component, OnInit } from '@angular/core';
import { ToastService } from 'ng-zorro-antd-mobile';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css']
})
export class ToastComponent implements OnInit {

  constructor(private _toast: ToastService) { }

  ngOnInit() {
  }

  showToast() {
    const toast = this._toast.show('This is a toast tips !!!', 0);
    setTimeout(() => {
      this._toast.hide();
    }, 3000);
  }

  showToastNoMask() {
    const toast = this._toast.info('Toast without mask !!!', 4000, null, false);
  }

  showToastTop() {
    const toast = this._toast.info('Toast position top', 4000, null, false, 'top');
  }

  showToastBottom() {
    const toast = this._toast.info('Toast position top', 4000, null, false, 'bottom');
  }

  showCustomIcon(event) {
    const toast = this._toast.info(event);
  }

  successToast() {
    const toast = this._toast.success('Load success !!!', 3000, () => {
      console.log('success');
    });
  }

  failToast() {
    const toast = this._toast.fail('Load failed !!!', 1000);
  }

  offline() {
    const toast = this._toast.offline('Network connection failed !!!', 1000);
  }

  loadingToast() {
    const toast = this._toast.loading('Loading...', 3000, () => {
      console.log('Load complete !!!');
    });
  }

}
