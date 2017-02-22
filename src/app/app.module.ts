import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { CoreModule } from "./core/";
import { SharedModule } from "./shared/";
import { ColorComponent } from "./color/color.component";
import { TextComponent } from "./text/text.component";
import { TagComponent }  from "./tags/tags.component";
import { CardComponent } from "./cards/cards.component";

@NgModule({
    imports: [
        CoreModule,
        SharedModule
    ],
    declarations: [
        AppComponent,
        ColorComponent,
        CardComponent,
        TextComponent,
        TagComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {
}
