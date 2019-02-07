import {Component, Element, Prop} from '@stencil/core';
import datepicker from 'js-datepicker/dist/datepicker.min';

@Component({
  tag: 'date-picker',
  styleUrl: 'date-picker.scss',
  shadow: true
})
export class DatePicker {
  private picker: any;
  private shown : boolean = false;

  @Prop() day: number = 0;
  @Prop() month: number = 0;
  @Prop() year: number = 0;
  @Element() private element: HTMLElement;

  constructor(){
    this.pickerClick = this.pickerClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidLoad() {
    this.picker = datepicker(this.element.shadowRoot.getElementById("picker"), {
      onMonthChange: function(instance) {
        // Show which date was selected.
        console.log(instance.dateSelected);
      },
    });
  }

  pickerClick(event){
    if(!this.shown){
      event.stopPropagation();
      this.picker.show();
    }
    this.shown = !this.shown;
  }

  handleChange(){
    console.log('change');
  }

  render() {
    return (
      <div class="date-picker" onClick={this.pickerClick}>
        <div class="input-wrapper">
          <span class="text">From</span>
          <input type="text" id="picker"/>
        </div>
      </div>
    );
  }
}
