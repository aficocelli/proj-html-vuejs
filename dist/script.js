// vue js
var app = new Vue ({

  el: '#root',

  data:{

    logo:"logo.png",

    price: 39,

    // carousel

    images:["blog1.jpg", "blog2.jpg", "blog3.jpg", "video1.jpg", "video2.jpg", "video3.jpg",],

    index:0,

    demosOn:false,

    // mailing

    newMail:null,

    reg: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,

    // menu voice

    menu:[
      {
        id:1,
        voice:"Home",
        new:false,
        link:"home"
      },
      {
        id:2,
        voice:"Services",
        new:false,
        link:"service"
      },
      {
        id:3,
        voice:"About",
        new:false,
        link:"about"
      },
      {
        id:4,
        voice:"Videos",
        new:false,
        link:"video"
      },
      {
        id:5,
        voice:"Blog",
        new:false,
        link:"blog"
      },
      {
        id:6,
        voice:"Store",
        new:true,
        link:""
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
    ],

    // contact

    contact:[
      {
        type: "Address: ",
        visible: false,
        value: "4746 Tipple Road Michigan 48449"
      },
      {
        type: "Mobile: ",
        visible: true,
        value: "1.800.000"
      },
      {
        type: "Email: ",
        visible: true,
        value: "info@your-company.com"
      },
    ],

    mailing:[],

    mailOk: false,

    showNavbar: true,

    lastScrollPosition: 0
  },

  methods:{

    // carousel right button

    rightBtn:function(){

      this.index++;

      if(this.index == this.images.length){

        this.index = 0;
      }

    },

    // carousel left button
    leftBtn:function(){

      this.index--;

      if(this.index == -1){

        this.index = this.images.length - 1;

      }
    },

    // open carousel
    playCarousel:function(){

      this.demosOn = true;
    },

    // close carousel

    stopCarousel:function(){

      this.demosOn = false;
    },

    // add mail

    validationMail:function(){

      return (this.newMail == "")? "" : (this.reg.test(this.newMail)) ? this.mailOk = true : this.mailOk = false;

    },
    addMail: function(){
      if(this.mailOk){

        this.mailing.push(this.newMail);

        this.newMail = null;

      } else{
        alert("mail errata");
      }
    },

    // scoll event
    
    handleScroll: function(){
      let currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
      if (currentScrollPosition < 0) {
        return
      }
      if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 60) {
        return
      }
      this.showNavbar = currentScrollPosition < this.lastScrollPosition;

      this.lastScrollPosition = currentScrollPosition;

    }
  },

  mounted(){
    window.addEventListener('scroll', this.handleScroll);
  },

  beforeDestroy () {
    window.removeEventListener('scroll', this.handleScroll);
  },

})
