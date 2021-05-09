import React from "react";
import PropTypes from "prop-types";

const foodILike = [
  {
   id: 1,
   name: "Kimchi",
   image: "https://contents.sixshop.com/uploadedFiles/72878/product/image_1540176020065.jpg" ,
   rating: 5
  },
  {
    id: 2,
    name: "Samgyeopsal",
    image: "https://mp-seoul-image-production-s3.mangoplate.com/mango_pick/uker6u9xhkr1m8.jpg" ,
    rating: 4.9
   },
   {
     id: 3,
    name: "Bibimbap",
    image: "http://cfile209.uf.daum.net/image/273F6A4A525360691E7708",
    rating: 4.8
   },
   {
     id: 4,
    name: "Doncasu",
    image: "https://en.pimg.jp/032/008/108/1/32008108.jpg" ,
    rating: 4.5
   },
   {
     id: 5,
    name: "Kimbap",
    image: "https://s3.ap-northeast-2.amazonaws.com/event-localnaeil/FileData/Article/201806/a8d34579-3939-498b-9254-6e3cfac4bfda.jpg",
    rating: 4.7
   },
];  

function Food({name, picture, rating}) {
  //console.log(props);
  return <div>
    <h2>I like { name }</h2>
    <h4>{rating}/5.0</h4>
    <img src={picture} alt={name}/>
  </div>
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number
};

function App() {
  return (
    <div>
      {foodILike.map(dish => (<Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating}/>))}
    </div>
  );
}

export default App;
