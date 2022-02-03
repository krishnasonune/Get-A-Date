import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AppComponent } from './app.component';
import { InputComponent } from './input/input.component';
import { ResultComponent } from './result/result.component';
import { LayoutComponent } from './layout/layout.component';
import { FormsModule } from '@angular/forms';
import { ServService } from './service/serv.service';
import { routing } from './approuting';
import { LoadingComponent } from './loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    ResultComponent,
    LayoutComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    MatProgressSpinnerModule
  ],
  providers: [ServService],
  bootstrap: [AppComponent]
})
export class AppModule { }
