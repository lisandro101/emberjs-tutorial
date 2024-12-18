import Component from '@glimmer/component';

export default class Product extends Component {
  // productImage = this.args.product.colors[0].image;

  get productImage() {
    // console.log(this.args);
    console.log(this.args.product.colors[0].image);
    return this.args.product.colors[0].image;
  }
}
