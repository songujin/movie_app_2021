import React from "react";
import PropTypes from "prop-types";

/*
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
*/

/*
class App extends React.Component{
  constructor(props) {
    super(props);
    console.log("constructor");
  }
  state = {
    count: 0
  };
  add = () => {
    //this.setState({count: this.state.count + 1});
    this.setState(current => ({count: current.count + 1}));
  };
  minus = () => {
    this.setState(current => ({count: current.count - 1}));
  };
  componentDidMount() {
    console.log("componentDidMount");
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  componentWillMount() {
    console.log("componentWillMount");
  }
  render() {
    console.log("render");
    return (
    <div>
      <h1>The number is: {this.state.count}</h1>
      <button onClick={this.add}>Add</button>
      <button onClick={this.minus}>Minus</button>
    </div>
    );
  }
}*/

class App extends React.Component{
  state = {
    isLoading: true,
    movie: []
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({isLoading: false});
    }, 6000);
  }
  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loading..." : "We are ready"}</div>;
  }
}
export default App;
