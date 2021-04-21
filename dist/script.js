// vue js
var app = new Vue ({

  el: '#root',

  data:{

    logo:"logo.png",

    // menu voice

    menu:[
      {
        id:1,
        voice:"Home",
        new:false
      },
      {
        id:2,
        voice:"Services",
        new:false
      },
      {
        id:3,
        voice:"About",
        new:false
      },
      {
        id:4,
        voice:"Videos",
        new:false
      },
      {
        id:5,
        voice:"Blog",
        new:false
      },
      {
        id:6,
        voice:"Store",
        new:true
      },
    ],

    // social icons

    socialIcons:[
      {
        id: 1,

        name: "facebook",

        link:"facebook-f"
      },
      {
        id: 2,

        name: "twitter",

        link:"twitter"
      },
      {
        id: 3,

        name: "youtube",

        link:"youtube"
      },
      {
        id: 4,

        name: "instagram",

        link:"instagram"
      },
      {
        id: 5,

        name: "linkedin",

        link:"linkedin-in"
      }

    ],

    // recent posts

    posts:[
      {
        id:1,

        title:"The best protein shake"

      },
      {
        id:2,

        title:"Ultimate cardio workout"

      },
      {
        id:3,

        title:"New juices available now"

      },
      {
        id:4,

        title:"Tips to find training partners"

      },
      {
        id:5,

        title:"20 best healthy recipes"

      },
    ]

  }

})
