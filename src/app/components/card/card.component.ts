import {Component, Input} from '@angular/core';
import {CardModel} from "../../interfaces";
import {CardsService} from "../../services/cards.service";

@Component({
  selector: 'div[app-card]',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() card: CardModel;

  constructor(
    private cardsService: CardsService
  ) {}

  removeCard(id: any) {
    this.cardsService.removeCard(id);
  }
}
