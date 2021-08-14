import {capitaliseFirst} from '@/utils/string'

enum RANK {
  ACE = 'ACE',
  KING = 'KING',
  LADY = 'QUEEN',
  VALET = 'JACK',
  TEN = 'TEN',
  NINE = 'NINE',
}

enum SUIT {
  HEARTS = 'HEARTS',
  DIAMONDS = 'DIAMONDS',
  CLOVERS = 'CLOVERS',
  SPADES = 'SPADES',
}

class Card {
  readonly rank: RANK
  readonly suit: SUIT
  readonly value: number
  readonly name: string

  constructor(rank: RANK, suit: SUIT, value: number) {
    this.rank = rank
    this.suit = suit
    this.value = value
    this.name = `${capitaliseFirst(rank.toString().toLowerCase())} of
     ${capitaliseFirst(suit.toString().toLowerCase())}`.replaceAll(
      /\s{2,}/g,
      ' '
    )
  }
}

const allCards = Object.values(RANK)
  .map((rank, index) =>
    Object.values(SUIT).map((suit) => new Card(rank, suit, 6 - index))
  )
  .flat()

export {SUIT, RANK, Card, allCards}
