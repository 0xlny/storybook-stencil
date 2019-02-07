import {Component, Element, Prop, State} from '@stencil/core';
import '@polymer/iron-icon/iron-icon.js';
import '@polymer/iron-icons/iron-icons.js';

@Component({
  tag: 'input-tag',
  styleUrl: 'input-tag.scss',
  shadow: true
})
export class InputTag {
  private input: any;
  private inputValue: string;

  @State() tags: string[] = [];
  @Prop() color: string = '#9880ff';
  @Prop() placeholder: string = 'Tags...';
  @Element() private element: HTMLElement;

  constructor(){
    this.valueChanged = this.valueChanged.bind(this);
    this.onKeyPress = this.onKeyPress.bind(this);
    this.removeTag = this.removeTag.bind(this);
  }

  componentDidLoad(){
    this.input = this.element.shadowRoot.getElementById("input");
    this.element.shadowRoot.getElementById("input-tag")
      .style.setProperty('--color', this.color);
  }

  valueChanged(){
    this.inputValue = this.input.value;
  }

  removeTag(index){
    this.tags.splice(index, 1);
    this.tags = [
      ...this.tags
    ];
  }

  onKeyPress(event){
    if(event.key === "Enter"){
      if(this.inputValue.length > 0){
        this.tags = [
          ...this.tags,
          this.inputValue
        ];
        this.inputValue = "";
      }
    }
  }

  render() {
    return (
      <div class="input-tag" id="input-tag">
        <div class="wrapper">
          <div class="tags">
            {
              this.tags.map((tag, i) => {
                return <div class="tag">
                          <span>{tag.toUpperCase()}</span>
                          <iron-icon icon="close" class="icon" onClick={() => this.removeTag(i)}/>
                        </div>
              })
            }
          </div>
          <input type="text" id="input" placeholder={this.tags.length === 0 ? this.placeholder : ''} onKeyPress={this.onKeyPress} onInput={this.valueChanged} value={this.inputValue} autoFocus/>
        </div>
      </div>
    );
  }
}
