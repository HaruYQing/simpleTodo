import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatDatepickerModule,
    MatButtonModule,
    MatCardModule,
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.scss',
})
export class AddTaskComponent {
  onSubmit() {
    alert('Subbmitted!');
  }
}
