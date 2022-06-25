import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {inputPhrase: ''}

  onChangeInputPhrase = event => {
    this.setState({inputPhrase: event.target.value})
  }

  render() {
    const {inputPhrase} = this.state
    return (
      <div className="app-container">
        <div className="letters-calculator-container">
          <div className="calculator-container">
            <h1 className="heading">Calculate the Letters you enter</h1>
            <div className="input-phrase-container">
              <label className="phrased-text" htmlFor="phraseText">
                Enter the phrase"
              </label>
              <input
                type="text"
                id="phraseText"
                className="input-letter"
                placeholder="Enter the phrase"
                value={inputPhrase}
                onChange={this.onChangeInputPhrase}
              />
            </div>
            <p className="letter-count">No.of letters: {inputPhrase.length}</p>
          </div>
          <img
            className="image"
            alt="letters calculator"
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
