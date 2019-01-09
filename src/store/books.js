export default {
    state: {
      books:[
        {
            id: 'bookId1',
            title: 'Ghoul Book',
            description: '1st book',
            imageId: 'bookImageId1',
            imageSrc: 'http://classic.battle.net/war3/images/undead/units/portraits/ghoul.gif',
            parts: [
              {
                id: 'book1PartId1',
                title: 'Attack'
              },
              {
                id: 'book1PartId2',
                title: 'Defense'
              }
            ],
            level: ['L1', 'L2'],
            rating: 4.5
        },
        {
            id: 'bookId2',
            title: 'Crypt Fiend Book',
            description: '2nd book',
            imageId: 'bookImageId2',
            imageSrc: 'http://classic.battle.net/war3/images/undead/units/portraits/cryptfiend.gif',
            parts: [
              {
                id: 'book2PartId1',
                title: 'Attack'
              },
              {
                id: 'book2PartId2',
                title: 'Defense'
              }
            ],
            level: ['L1', 'L4'],
            rating: 5.0
        },
        {
            id: 'bookId3',
            title: 'Gargoyle Book',
            description: '3rd book',
            imageId: 'bookImageId3',
            imageSrc: 'http://classic.battle.net/war3/images/undead/units/portraits/gargoyle.gif',
            parts: [
              {
                id: 'book3PartId1',
                title: 'Attack'
              },
              {
                id: 'book3PartId2',
                title: 'Defense'
              }
            ],
            level: ['L1', 'L8'],
            rating: 4
        }
      ],
      bookParts:[
        {
          bookId: 'bookId1',
          bookPartId: 'book1PartId1',
          bookTitle: 'Ghoul Book',
          partTitle: 'Attack'
        },
        {
          bookId: 'bookId2',
          bookPartId: 'book2PartId1',
          bookTitle: 'Crypt Fiend Book',
          partTitle: 'Attack'
        },
        {
          bookId: 'bookId3',
          bookPartId: 'book3PartId1',
          bookTitle: 'Gargoyle Book',
          partTitle: 'Attack'
        }
      ]
    },
    mutations: {
      SET_BOOKS(state, payload){
        state.books = payload
      },
      SET_BOOKPARTS(state, payload){
        state.bookParts = payload
      }
    },
    getters: {
      getBooks: (state) => state.books,
      getParts: (state) => state.bookParts
    }
    
  }