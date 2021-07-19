import { Injectable } from '@angular/core';
import cards from '../mock/cards.json'
import {CardModel, CardsInfo} from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  private cardsList: CardModel[] = cards;

  private isAddedWhenLoadedPage = false;

  constructor() {}

  public getAllCards() {
    const localStorageObj = JSON.parse( <string>localStorage.getItem('app-market-products') );
    if ( localStorageObj !== null ){
      if ( !this.isAddedWhenLoadedPage ){
        for ( let i = 0; i < localStorageObj.length; i++ ){
          this.cardsList.push(localStorageObj[i]);
        }
        this.isAddedWhenLoadedPage = true;
      }
    }
    return this.cardsList;
  }

  public getCardByID( id: string ) {
    return this.cardsList.find(item => item.id === id );
  }

  public removeCard( id: string ) {
    let localStorageObj = JSON.parse( <string>localStorage.getItem('app-market-products') );
    this.cardsList = this.cardsList.filter( item => item.id !== id );
    if ( localStorageObj !== null ){
      localStorageObj = localStorageObj.filter( (item: { id: string; }) => item.id !== id );
      if (localStorageObj.length === 0){
        localStorage.clear();
      } else {
        localStorage.setItem( 'app-market-products', JSON.stringify(localStorageObj) );
      }
    }
  }

  public getCardsInfo(): CardsInfo {
    const totalCards = this.cardsList.length;
    let totalPrice = 0;
    for ( let i = 0; i < totalCards; i++ ){
      totalPrice = +(+this.cardsList[i].price.replace(/\s/g, '') + totalPrice).toFixed(2);
    }
    return {
      totalCards: totalCards,
      totalPrice: totalPrice,
      averagePrice: +(totalPrice/totalCards).toFixed(2) || 0
    };
  }

  public removeAllCards() {
    this.cardsList = [];
    localStorage.clear();
  }

  public addNewCard(obj: CardModel) {
    let localStorageObj = JSON.parse( <string>localStorage.getItem('app-market-products') );
    if ( localStorageObj !== null ){
      localStorageObj.push(obj);
      localStorage.setItem( 'app-market-products', JSON.stringify(localStorageObj) );
    } else {
      localStorage.setItem( 'app-market-products', `[${JSON.stringify(obj)}]` );
    }
  }

}
