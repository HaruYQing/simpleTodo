import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
// import { TasksService } from './app/features/home/components/tasks-list.service';

// bootstrapApplication(AppComponent, {
//   ...appConfig,
//   providers: [TasksService],
// }).catch((err) => console.error(err));
bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);
