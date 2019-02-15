import {Component, Element, Prop, State} from '@stencil/core';
import '@polymer/iron-icon/iron-icon.js';
import '@polymer/iron-icons/iron-icons.js';

@Component({
  tag: 'fill-button',
  styleUrl: 'fill-button.scss',
  shadow: true
})
export class FillButton {
  @State() hover: boolean = false;
  @Prop() title: string = 'Hover me!';
  @Prop() color: string = '#9880ff';
  @Element() private element: HTMLElement;

  constructor(){
    this.onClick = this.onClick.bind(this);
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
  }

  componentDidLoad(){
    this.element.shadowRoot.getElementById("fill-button")
      .style.setProperty('--color', this.color);
  }

  onClick(){
    console.log('click');
  }

  onMouseEnter(){
    this.hover = true;
  }

  onMouseLeave(){
    this.hover = false;
  }

  render() {
    return (
      <div class="fill-button" id="fill-button">
        <h1>{this.title}</h1>
        <div class="wrapper" onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
          <a href="#" onClick={this.onClick}>
            <iron-icon icon="close" class={"icon " + ( this.hover ? "bg" : "bg-switch" )}/>
          </a>
        </div>
        <div class={"fill " + ( this.hover ? "scale" : "shrink" )}/>
      </div>
    );
  }
}
