import { Component } from "@angular/core";

@Component({
    selector: "ng2-card",
    template: `
        <div class="ng2-cards-c ng2-component ">
        <h4>Cards</h4>
        <hr />
        
        <div class="row">
            <div class="cards-container card-0 four columns">
                <p>Card 0</p>
            </div>
            <div class="cards-container card-1 four columns">
                <p>Card 0</p>
            </div>
            <div class="cards-container card-2 four columns">
                <p>Card 0</p>
            </div>
        </div>
        
         <div class="row">
            <div class="cards-container card-3 four columns">
                <p>Card 0</p>
            </div>
            <div class="cards-container card-4 four columns">
                <p>Card 0</p>
            </div>
            <div class="cards-container card-5 four columns">
                <p>Card 0</p>
            </div>
        </div>
            
           
        </div>
    `,
    styles:[".ng2-cards-c .cards-container{ padding: 15px; margin-bottom: 25px }"]
})
export class CardComponent implements OnInit {
}
