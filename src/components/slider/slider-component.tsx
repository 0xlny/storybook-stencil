import {Component, Element, Prop} from '@stencil/core';

let rangeSlider;
let rangeBullet;

@Component({
  tag: 'slider-component',
  styleUrl: 'slider-component.scss',
  shadow: true
})
export class WelcomeComponent {
  @Prop() min: number;
  @Prop() max: number;
  @Element() private element: HTMLElement;

  componentDidLoad() {
    rangeSlider = this.element.shadowRoot.getElementById("rs-range-line");
    rangeBullet = this.element.shadowRoot.getElementById("rs-bullet");
    rangeSlider.addEventListener("input", this.showSliderValue, false);
  }


  showSliderValue() {
    rangeBullet.innerHTML = rangeSlider.value;
    let bulletPosition = (rangeSlider.value / this.max);
    rangeBullet.style.left = (bulletPosition * 580) + "px";
  }

  render() {
    return (
      <div class="slider-component">
        <div class="range-slider">
          <span id="rs-bullet" class="rs-label">0</span>
          <input id="rs-range-line" class="rs-range" type="range" value="0" min={this.min} max={this.max}/>
        </div>
        <div class="box-minmax">
          <span>{this.min}</span><span>{this.max}</span>
        </div>
      </div>
    );
  }
}
