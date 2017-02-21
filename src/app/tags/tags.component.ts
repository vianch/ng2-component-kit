import { Component, EventEmitter } from "@angular/core";

@Component({
    selector: "ng2-tag",
    template: `
<div class="ng2-tags-wrapper ng2-component">
    <h4>Tags</h4>
     <hr />
    <ul class="ng2-tags">
        <li class="ng2-tag ng2-tag-color-1">
            Futbol
        </li>
        <li class="ng2-tag ng2-tag-color-2">
            Copa
        </li>
        <li class="ng2-tag ng2-tag-color-3">
            Colombia
        </li>
        <li class="ng2-tag ng2-tag-color-4">
            Bogota
        </li>
        <li class="ng2-tag ng2-tag-color-5">
            Torneo
        </li>
        <li class="ng2-tag ng2-tag-color-6">
           Jugador
        </li>
    </ul>
</div>
`,
})
export class TagComponent {

}
