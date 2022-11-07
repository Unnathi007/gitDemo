import React, { Component } from "react";


class Product extends Component {
  state = {};

  styling={
    card:{
        border: 10
    },
    img:{
        width: 250,
        height: 400
    }
}

  render() {
    return (
      <div class="card" >
        <img class="card-img-top" alt="..." style={this.styling.img} src="data:image/jpeg;base64,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"/>
        <div class="card-img-overlay">50% OFF</div>
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" class="btn btn-primary">
            Go somewhere
          </a>
        </div>

        <img src="" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" class="btn btn-primary">
            Go somewhere
          </a>
        </div>

        <img src="" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" class="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    );
  }
}

export default Product;
