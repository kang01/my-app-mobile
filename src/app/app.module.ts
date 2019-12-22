import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { NgZorroAntdMobileModule } from "ng-zorro-antd-mobile";
import { HomeComponent } from "./page/home/home.component";
import { TabBarComponent } from "./page/tab-bar/tab-bar.component";
import { TabsComponent } from "./page/tabs/tabs.component";
import { ButtonComponent } from "./page/button/button.component";
import { DatePickerComponent } from "./page/date-picker/date-picker.component";
import { ToastComponent } from "./page/toast/toast.component";
import { ImageComponent } from "./page/image/image.component";
import { InputComponent } from "./page/input/input.component";
import { ModalComponent } from "./page/modal/modal.component";
import { PullToRefreshComponent } from "./page/pull-to-refresh/pull-to-refresh.component";
import { ScrollComponent } from "./components/common/scroll/scroll.component";
import { FormateDatePipe } from "./pipe/formate-date.pipe";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TabBarComponent,
    TabsComponent,
    ButtonComponent,
    DatePickerComponent,
    ToastComponent,
    ImageComponent,
    InputComponent,
    ModalComponent,
    PullToRefreshComponent,
    ScrollComponent,
    FormateDatePipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgZorroAntdMobileModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
