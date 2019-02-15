import {Component, Element, Prop} from '@stencil/core';
import '@polymer/iron-icon/iron-icon.js';
import '@polymer/iron-icons/iron-icons.js';

@Component({
  tag: 'gradient-button',
  styleUrl: 'gradient-button.scss',
  shadow: true
})
export class GradientButton {

  @Prop() height: string = '50px';
  @Prop() width: string = '100px';
  @Prop() color: string = '#9880ff';
  @Prop() text: string = 'Follow';
  @Element() private element: HTMLElement;


  componentDidLoad(){
    const wrapper = this.element.shadowRoot.getElementById("gradient-button");
    wrapper.style.setProperty('--button-height', this.height);
    wrapper.style.setProperty('--button-width', this.width);
    wrapper.style.setProperty('--color', this.color);
  }

  render() {
    return (
      <div class="gradient-button">
        <button>
          {this.text}
        </button>
      </div>
    );
  }
}
