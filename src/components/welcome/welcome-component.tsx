import { Component } from '@stencil/core';

@Component({
  tag: 'welcome-component',
  styleUrl: 'welcome-component.css',
  shadow: true
})
export class WelcomeComponent {
  render() {
    return (
      <div class="welcome-component">
        <h1>Welcome to lenny.codes storybook</h1>
        <p>
          You'll find here all the codes posted on my Instagram
        </p>

        <p>
          Feel free to check my page: <a href="https://www.instagram.com/lenny.codes/" target="_blank">lenny.codes</a>
        </p>
      </div>
    );
  }
}
