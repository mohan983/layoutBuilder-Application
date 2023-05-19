// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value

      const Content = () => (
        <div className="content">
          <h1 className="content-heading">Content</h1>
          <p className="content-paragraph">
            Lorem ipsum India, officially the Republic of India (ISO:
            Bhārat),[25] is a country in South Asia. It is the seventh-largest
            country by area, the most populous country as of 1 May 2023, and the
            most populous democracy in the world.[26][27] Bounded by the Indian
            Ocean on the south, the Arabian Sea on the southwest, and the Bay of
            Bengal on the southeast, it shares land borders with Pakistan to the
            west;
          </p>
        </div>
      )

      const LeftNavbar = () => (
        <div className="left-navbar">
          <h1 className="navbar-heading">Left Navbar Menu</h1>
          <ul>
            <p className="navbar-paragraph">Item 1</p>
            <p className="navbar-paragraph">Item 2</p>
            <p className="navbar-paragraph">Item 3</p>
            <p className="navbar-paragraph">Item 4</p>
          </ul>
        </div>
      )

      const RightNavbar = () => (
        <div className="right-navbar">
          <h1 className="navbar-heading">Right Navbar</h1>
          <p className="navbar-paragraph border">Ad 1</p>
          <p className="navbar-paragraph border">Ad 2</p>
        </div>
      )

      return (
        <div className="body">
          {showLeftNavbar ? LeftNavbar() : ''}
          {showContent ? Content() : ''}
          {showRightNavbar ? RightNavbar() : ''}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
