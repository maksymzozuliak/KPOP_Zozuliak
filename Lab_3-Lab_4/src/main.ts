import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import {NameListModule} from "./name_list/name_list.module";
import {GradeModule} from "./grade/grade.module";
const platform = platformBrowserDynamic();
platform.bootstrapModule(GradeModule);
