import self from "../img/self.png";
import mock1 from "../img/mock1.png";
import mock2 from "../img/mock2.png";
import mock3 from "../img/mock3.png";
import mock4 from "../img/mock4.png";
import mock5 from "../img/mock5.png";

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
  firstName: "Sagar",
  lastName: "Chandresha",
  initials: "sc", // the example uses first and last, but feel free to use three or more if you like.
  position: "a Shopify Developer",
  selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
  gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
  baseColor: colors[0],
  miniBio: [
    // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
    {
      emoji: "☕",
      text: "fueled by coffee",
    },
    {
      emoji: "🌎",
      text: "based in the India",
    },
    {
      emoji: "💼",
      text: "Shopify Theme & Hydrogen Developer",
    },
    {
      emoji: "📧",
      text: "sagarchandresha0708@gmail.com",
    },
  ],
  socials: [
    {
      link: "https://github.com/sagar0708",
      icon: "fa fa-github",
      label: "github",
    },
    {
      link: "https://www.linkedin.com/in/sagar-chandresha-a6b4b21a6",
      icon: "fa fa-linkedin",
      label: "linkedin",
    },
    // Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
    // Just change the links so that they lead to your social profiles.
  ],
  bio: "Hello! I'm Sagar. I'm a Shopify Plus Developer | Shopify-Hydrogen Developer. I believe that client satisfaction is a must in any projects.",
  skills: {
    proficientWith: [
      "shopify theme",
      "shopify hydrogen",
      "liquid",
      "javascript",
      "jQuery",
      "html/css",
      "tailwind css",
      "bootstrap",
      "git/github",
    ],
  },
  hobbies: [
    {
      label: "movies",
      emoji: "🎥",
    },
    {
      label: "cricket",
      emoji: "🏏",
    },
    {
      label: "music",
      emoji: "🎧",
    },
    // Same as above, change the emojis to match / relate to your hobbies or interests.
    // You can also remove the emojis if you'd like, I just think they look cute :P
  ],
  portfolio: [
    // This is where your portfolio projects will be detailed
    {
      title: "MGC Derma",
      live: "https://uk.mgcderma.com/", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it. // this should be a link to the **repository** of the project, where the code is hosted.
      image: "https://img001.prntscr.com/file/img001/h-rj-93rRMyeFrDBjbe0SA.png",
    },
    {
      title: "the fragrance warehouse",
      live: "https://thefragrancewarehouse.co.uk/",
      image: "https://img001.prntscr.com/file/img001/LqSTP0FcQEudPG6ZtZBa-Q.png",
    },
    {
      title: "delixirs",
      live: "https://delixirs.in/products/face-serum",
      image: "https://img001.prntscr.com/file/img001/uHVoD7kiSeqdrJ1RmgrbAw.png",
    },
    {
      title: "bahati collective",
      live: "https://bahaticollective.com/products/marble-top-new-gold-coffee-table",
      image: "https://img001.prntscr.com/file/img001/tagMvnSFRwmPw4TnAaVJBA.png",
    },
  ],
};
