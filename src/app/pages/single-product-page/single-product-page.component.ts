import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {CardModel} from "../../interfaces";
import {CardsService} from "../../services/cards.service";

@Component({
  selector: 'app-single-product-page',
  templateUrl: './single-product-page.component.html',
  styleUrls: ['./single-product-page.component.scss']
})
export class SingleProductPageComponent implements OnInit {

  product: CardModel | undefined;

  constructor(
    private route: ActivatedRoute,
    private cardsService: CardsService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.product = this.cardsService.getCardByID(params.id);
    });
  }

}
