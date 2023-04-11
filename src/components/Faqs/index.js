import {Component} from 'react'

import FaqItem from '../FaqItem'

import './index.css'

class Faqs extends Component {
  state = {show: true}

  showans = () => {
    this.setState(prevState => ({
      show: !prevState.show,
    }))
  }

  render() {
    const {faqsList} = this.props
    const {show} = this.state

    return (
      <div className="bg">
        <div className="card">
          <h1 className="faqs">FAQs</h1>
          <ul>
            {faqsList.map(each => (
              <FaqItem
                faqitem={each}
                key={each.id}
                show={show}
                onClick={this.showans}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
