// Write your code here
import './index.css'
import {Component} from 'react'

class ReviewsCarousel extends Component {
  state = {activeIndex: 0}

  onChangeLeftReview = () => {
    const {activeIndex} = this.state
    if (activeIndex > 0) {
      this.setState(prevState => ({activeIndex: prevState.activeIndex - 1}))
    }
  }

  onChangeRightReview = () => {
    const {activeIndex} = this.state
    const {reviewsList} = this.props
    if (activeIndex < reviewsList.length - 1) {
      this.setState(prevState => ({activeIndex: prevState.activeIndex + 1}))
    }
  }

  renderCurrentReview = review => {
    const {imgUrl, username, companyName, description} = review
    return (
      <div className="reviews-card">
        <img src={imgUrl} className="image" alt={username} />
        <p className="user-name">{username}</p>
        <p className="company-name">{companyName}</p>
        <p className="company-name">{description}</p>
      </div>
    )
  }
  render() {
    const {activeIndex} = this.state
    const {reviewsList} = this.props
    const currentReview = reviewsList[activeIndex]
    return (
      <div className="bg-container">
        <h1 className="heading">Reviews</h1>
        <div className="review-container">
          <button
            type="button"
            onClick={this.onChangeLeftReview}
            data-testId="leftArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              className="left-arrow"
              alt="left arrow"
            />
          </button>
          {this.renderReviewList(currentReview)}
          <button
            type="button"
            onClick={this.onChangeRightReview}
            data-testId="rightArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              className="left-arrow"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}
export default ReviewsCarousel
