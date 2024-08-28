import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { StartPageComponent } from './pages/start-page/start-page.component';
import { HomePageComponent } from './pages/home/home-page.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { MatIconModule } from '@angular/material/icon';
import { WriterPageComponent } from './pages/writer-page/writer-page.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { EntryPickerComponent } from './components/entry-picker/entry-picker.component';
import { FormsModule } from '@angular/forms';
import { ReaderPageComponent } from './pages/reader-page/reader-page.component';
import { ReaderPickerComponent } from './components/reader-picker/reader-picker.component';



@NgModule({
  declarations: [
    AppComponent,
    StartPageComponent,
    HomePageComponent,
    TopBarComponent,
    WriterPageComponent,
    EntryPickerComponent,
    ReaderPageComponent,
    ReaderPickerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    MatNativeDateModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
