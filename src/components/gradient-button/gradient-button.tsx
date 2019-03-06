import {Component, Element, Prop} from '@stencil/core';
import '@polymer/iron-icon/iron-icon.js';
import '@polymer/iron-icons/iron-icons.js';

@Component({
  tag: 'gradient-button',
  styleUrl: 'gradient-button.scss',
  shadow: true
})
export class GradientButton {
  @Prop() color: string = '#4776E6';
  @Prop() colorHover: string = '#e5b2ca';
  @Prop() text: string = 'Sign up';
  @Element() private element: HTMLElement;

  componentDidLoad(){
    const wrapper = this.element.shadowRoot.getElementById("gradient-button");
    wrapper.style.setProperty('--color', this.color);
    wrapper.style.setProperty('--colorHover', this.colorHover);
  }

  render() {
    return (
      <div class="gradient-button" id="gradient-button">
        <button>
          {this.text}
        </button>
      </div>
    );
  }
}
