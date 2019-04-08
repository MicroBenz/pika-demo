import { Component } from '../web_modules/preact.js'
import { html } from '../web_modules/htm/preact.js'
import dayjs from '../web_modules/dayjs.js';
import { css } from '../web_modules/emotion.js';

const style = css `
  color: red;
  @media(max-width: 768px) {
    color: blue;
  }
`;

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: Date.now()
    }
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ date: Date.now() })
    }, 1000);
  }

  render(props, state) {
    return html`
      <div>
        <h2 class="${style}">Current date time</h2>
        <p>${dayjs(state.date).format('DD/MM/YYYY HH:mm:ss')}</p>
      </div>
    `
  }
}
