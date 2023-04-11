import './index.css'

const FaqItem = props => {
  const {faqitem, show, showans} = props
  const {questionText, answerText, id} = faqitem

  const imgg = show
    ? 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'

  const altt = show ? 'plus' : 'minus'

  const showing = id => {
    showans(id)
  }

  return (
    <li>
      <div className="qdiv">
        <h1 className="ques">{questionText}</h1>
        <button type="button" onClick={showing}>
          <img src={imgg} alt={altt} />
        </button>
      </div>
      <hr />
      {show && <p className="ans">{answerText}</p>}
    </li>
  )
}

export default FaqItem
