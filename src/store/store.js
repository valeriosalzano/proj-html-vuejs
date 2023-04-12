import { reactive } from 'vue'

export const store = reactive({
  productsData: [
    {
      name: 'black leather jacket',
      price: 235,
      discount: 35, 
      tags: ['men','jackets','jeans'],
      sold: 100,
      img: 'black_elegant_leather_jacket.jpg',
      reviews:{
        text: '',
        author: 'admin',
        rating: 5
      }

    },{
      name: 'hipster black top',
      price: 57,
      discount: '', 
      tags: ['women','top','hipster'],
      sold: 80,
      img: 'hipster_black_top.jpg',
      reviews:{
        text: '',
        author: '',
        rating: ''
      }

    },{
      name: 'black leather suit',
      price: 176,
      discount: '', 
      tags: ['men','jackets'],
      sold: 40,
      img: 'black_leather_suit.jpg',
      reviews:{
        text: '',
        author: '',
        rating: ''
      }

    },{
      name: 'spring printed dress',
      price: 47,
      discount: '', 
      tags: ['women','dress'],
      sold: 200,
      img: 'spring_printed_dress.jpg',
      reviews:{
        text: '',
        author: 'admin',
        rating: 5
      }

    },{
      name: 'modern love tee',
      price: 30,
      discount: 5, 
      tags: ['women','modern'],
      sold: 150,
      img: 'modern_love_tee.jpg',
      reviews:{
        text: '',
        author: '',
        rating: ''
      }

    },{
      name: 'blue jacket & stripe tee',
      price: 580,
      discount: '', 
      tags: ['men','jackets','suits'],
      sold: 50,
      img: 'blue_jacket_and_white_stripe_tee.jpg',
      reviews:{
        text: '',
        author: '',
        rating: ''
      }

    },{
      name: 'modern black leather suit',
      price: 96,
      discount: '', 
      tags: ['men','jackets'],
      sold: 20,
      img: 'modern_black_leather_suit.jpg',
      reviews:{
        text: '',
        author: '',
        rating: ''
      }

    },{
      name: 'black leather jacket',
      price: 125,
      discount: '', 
      tags: ['women','jackets'],
      sold: 130,
      img: 'black_leather_jacket.jpg',
      reviews:{
        text: '',
        author: '',
        rating: ''
      }

    },{
      name: 'blue leather jacket',
      price: 80,
      discount: 20, 
      tags: ['men','jackets'],
      sold: 20,
      img: 'blue_leather_jacket.jpg',
      reviews:{
        text: '',
        author: '',
        rating: ''
      }

    },{
      name: 'modern leather boots',
      price: 50,
      discount: 20, 
      tags: ['shoes','accessories'],
      sold: 20,
      img: 'modern_leather_boots.jpg',
      reviews:{
        text: '',
        author: '',
        rating: ''
      }

    },{
      name: 'leather belts',
      price: 80,
      discount: '', 
      tags: ['accessories'],
      sold: 20,
      img: 'casual_leather_belts.jpg',
      reviews:{
        text: '',
        author: '',
        rating: ''
      }

    },{
      name: 'brown dress shoes',
      price: 75,
      discount: '', 
      tags: ['accessories'],
      sold: 20,
      img: 'brown_dress_shoes.jpg',
      reviews:{
        text: '',
        author: '',
        rating: ''
      }

    },{
      name: 'leather gloves',
      price: 45,
      discount: '', 
      tags: ['accessories','gloves'],
      sold: 20,
      img: 'leather_gloves.jpg',
      reviews:{
        text: '',
        author: 'Beardman',
        rating: 5
      }

    },
  ]
})