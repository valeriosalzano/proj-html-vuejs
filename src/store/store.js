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
      reviews:[
        {
          date: 3,
          author: 'admin',
          rating: 5
        },{
          date: '',
          author: 'admin',
          rating: 5
        }
      ]

    },{
      name: 'hipster black top',
      price: 57,
      discount: '', 
      tags: ['women','top','hipster'],
      sold: 80,
      img: 'hipster_black_top.jpg',
      reviews:[
        
      ]

    },{
      name: 'black leather suit',
      price: 176,
      discount: '', 
      tags: ['men','jackets'],
      sold: 40,
      img: 'black_leather_suit.jpg',
      reviews:[
        
      ]

    },{
      name: 'spring printed dress',
      price: 47,
      discount: '', 
      tags: ['women','dress'],
      sold: 200,
      img: 'spring_printed_dress.jpg',
      reviews:[
        {
          date: 1,
          author: 'admin',
          rating: 5
        }
      ]

    },{
      name: 'modern love tee',
      price: 30,
      discount: '', 
      tags: ['women','modern'],
      sold: 150,
      img: 'modern_love_tee.jpg',
      reviews:[
        
      ]

    },{
      name: 'blue jacket & stripe tee',
      price: 580,
      discount: '', 
      tags: ['men','jackets','suits'],
      sold: 50,
      img: 'blue_jacket_and_white_stripe_tee.jpg',
      reviews:[
        
      ]

    },{
      name: 'modern black leather suit',
      price: 96,
      discount: '', 
      tags: ['men','jackets'],
      sold: 20,
      img: 'modern_black_leather_suit.jpg',
      reviews:[
        
      ]

    },{
      name: 'black leather jacket',
      price: 125,
      discount: '', 
      tags: ['women','jackets'],
      sold: 130,
      img: 'black_leather_jacket.jpg',
      reviews:[
        
      ]

    },{
      name: 'blue leather jacket',
      price: 80,
      discount: 20, 
      tags: ['men','jackets'],
      sold: 20,
      img: 'blue_leather_jacket.jpg',
      reviews:[
        
      ]

    },{
      name: 'modern leather boots',
      price: 50,
      discount: 20, 
      tags: ['shoes','accessories'],
      sold: 20,
      img: 'modern_leather_boots.jpg',
      reviews:[
        
      ]

    },{
      name: 'leather belts',
      price: 80,
      discount: '', 
      tags: ['accessories'],
      sold: 20,
      img: 'casual_leather_belts.jpg',
      reviews:[
        
      ]

    },{
      name: 'brown dress shoes',
      price: 75,
      discount: '', 
      tags: ['accessories'],
      sold: 20,
      img: 'brown_dress_shoes.jpg',
      reviews:[
        
      ]

    },{
      name: 'leather gloves',
      price: 45,
      discount: '', 
      tags: ['accessories','gloves'],
      sold: 20,
      img: 'leather_gloves.jpg',
      reviews:[
        {
          date: 2,
          author: 'Beardman',
          rating: 5
        },{
          date: '',
          author: '',
          rating: 5
        },{
          date: '',
          author: '',
          rating: 5
        }
      ]

    },
  ],
  testimonialsData: [
    {
      name: 'Darío Pineda',
      company: 'Theme Fusion',
      text: 'Curabitur non tristique tortor. Vestibulum aliquet suscipit ipsum in volutpat. Donec vel lacinia sem, vitae semper nulla. In hac habitasse platea dictumst. Mauris consectetur est et nibh sadip hendrerit bibendum.',
      img: 'man_testimonial.png',
    },{
      name: 'Cersei Lannister',
      company: 'Casterly Rock',
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet libero dolore culpa, quas magnam laboriosam exercitationem quos qui quasi, asperiores optio eaque id vel officiis perspiciatis vitae porro quam recusandae?',
      img: 'woman_testimonial.png',
    }
  ],
  blogData: [
    {
      title: 'Aenean lobortis sapien enim viverra',
      date: 'September 9th, 2015',
      comments: 0,
      text: 'Donec finibus sit amet orci eget ultricies. Praesent posuere ante ut erat fringilla,',
      img: 'post_img_12-700x441.jpg'
    },{
      title: 'Duis ac massa semper maximus',
      date: 'September 9th, 2015',
      comments: 0,
      text: 'Donec finibus sit amet orci eget ultricies. Praesent posuere ante ut erat fringilla,',
      img: 'post_img_11-700x441.jpg'
    },{
      title: 'Nunc fermint nulla eu justo sem id',
      date: 'September 9th, 2015',
      comments: 0,
      text: 'Donec finibus sit amet orci eget ultricies. Praesent posuere ante ut erat fringilla,',
      img: 'post_img_10-700x441.jpg'
    },
  ]
})