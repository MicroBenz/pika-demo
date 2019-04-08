import { render, Component } from './web_modules/preact.js'
import { html } from './web_modules/htm/preact.js'

import Counter from './components/Counter.js';
import Now from './components/Now.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }

  incrementCount = () => {
    this.setState(state => ({ count: state.count + 1}))
  }

  render(props, state) {
    return html`
      <div class="app">
        <${Counter} />
        <${Now} />
      </div>
    `
  }
}

render(html`<${App} />`, document.getElementById('root'))