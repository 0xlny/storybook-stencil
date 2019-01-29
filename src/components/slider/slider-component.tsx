import {Component, Element, Prop, State} from '@stencil/core';

@Component({
  tag: 'slider-component',
  styleUrl: 'slider-component.scss',
  shadow: true
})
export class SliderComponent {
  private rangeSlider: any;
  private rangeBullet: any;

  @Prop() color: string = '#9880ff';
  @Prop() min: number = 0;
  @Prop() max: number = 100;
  @State() value: number;
  @Element() private element: HTMLElement;

  constructor(){
    this.redrawValue = this.redrawValue.bind(this);
    this.valueChanged = this.valueChanged.bind(this);
  }

  componentDidLoad() {
    this.value = 0;
    this.rangeSlider = this.element.shadowRoot.getElementById("rs-range-line");
    this.rangeBullet = this.element.shadowRoot.getElementById("rs-bullet");
    this.element.shadowRoot.getElementById('slider-component')
      .style.setProperty('--color', this.color);
    this.redrawValue();
  }

  valueChanged(){
    this.value = this.rangeSlider.value;
    this.redrawValue();
  }

  redrawValue(){
    let bulletPosition = (this.value / this.max);
    this.rangeBullet.style.left = (bulletPosition * 580) + "px";
  }

  render() {
    return (
      <div class="slider-component" id="slider-component">
        <div class="range-slider">
          <span id="rs-bullet" class="rs-label">{this.value}</span>
          <input id="rs-range-line" class="rs-range" type="range" value={this.value} min={this.min} max={this.max} onInput={this.valueChanged}/>
        </div>
        <div class="box-minmax">
          <span>{this.min}</span><span>{this.max}</span>
        </div>
      </div>
    );
  }
}
