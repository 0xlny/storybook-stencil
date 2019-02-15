import {Component, Element, Prop, State} from '@stencil/core';
import '@polymer/iron-icon/iron-icon.js';
import '@polymer/iron-icons/iron-icons.js';

@Component({
  tag: 'bubble-checkbox',
  styleUrl: 'bubble-checkbox.scss',
  shadow: true
})
export class BubbleCheckbox {
  @Prop() color: string = '#9880ff';
  @Prop() onText: string = 'ON';
  @Prop() offText: string = 'OFF';
  @State() status: boolean = false;

  @Element() private element: HTMLElement;

  constructor(){
    this.onClick = this.onClick.bind(this);
  }

  componentDidLoad(){
    this.element.shadowRoot.getElementById("bubble-checkbox")
      .style.setProperty('--color', this.color);
  }

  onClick(){
    console.log("coucou");
  }

  render() {
    return (
      <div class="bubble-checkbox" id="bubble_checkbox">
        <input type="checkbox" id="bubble"/>
        <label class="bubble" htmlFor="bubble"></label>
      </div>
    );
  }
}
