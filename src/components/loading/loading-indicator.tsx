import {Component, Element, Prop} from '@stencil/core';

@Component({
  tag: 'loading-indicator',
  styleUrl: 'loading-indicator.scss',
  shadow: true
})
export class LoadingIndicator {
  loadingElement: HTMLElement;

  @Prop() color: string = '#9880ff';
  @Prop() text: string = 'Loading...';
  @Element() private element: HTMLElement;

  componentDidLoad() {
      this.loadingElement = this.element.shadowRoot.getElementById('loading-indicator');
      this.loadingElement.style.setProperty('--color', this.color);
  }

  render() {
    return (
      <div class="loading-indicator" id="loading-indicator">
        <div class="wrapper">
          <div>
            <div class="dot"/>
          </div>
        </div>
        <span class="text">{this.text}</span>
      </div>
    );
  }
}
