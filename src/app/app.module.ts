import { NgModule } from "@angular/core";

import {AppComponent} from "./app.component";
import {CoreModule} from "./core/";
import {SharedModule} from "./shared/";
import {ColorComponent} from "./color/color.component";

@NgModule({
    imports: [
        CoreModule,
        SharedModule
    ],
    declarations: [
        AppComponent,
        ColorComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {
}
