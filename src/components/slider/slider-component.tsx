import { Component, Element } from '@stencil/core';

let rangeSlider;
let rangeBullet;

@Component({
  tag: 'slider-component',
  styleUrl: 'slider-component.scss',
  shadow: true
})
export class WelcomeComponent {
  @Element() private element: HTMLElement;

  componentDidLoad() {
    rangeSlider = this.element.shadowRoot.getElementById("rs-range-line");
    rangeBullet = this.element.shadowRoot.getElementById("rs-bullet");

    rangeSlider.addEventListener("input", this.showSliderValue, false);
  }


  showSliderValue() {
    rangeBullet.innerHTML = rangeSlider.value;
    var bulletPosition = (rangeSlider.value /rangeSlider.max);
    rangeBullet.style.left = (bulletPosition * 580) + "px";
  }

  render() {
    return (
      <div class="slider-component">
        <div class="range-slider">
          <span id="rs-bullet" class="rs-label">0</span>
          <input id="rs-range-line" class="rs-range" type="range" value="0" min="0" max="100"/>
        </div>
        <div class="box-minmax">
          <span>0</span><span>100</span>
        </div>
      </div>
    );
  }
}
