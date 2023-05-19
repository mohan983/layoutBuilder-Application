import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
        showContent,
        showLeftNavbar,
        showRightNavbar,
      } = value

      const onToggleContent = e => {
        onToggleShowContent(e.target.checked)
      }

      const onToggleLeftNavbar = e => {
        onToggleShowLeftNavbar(e.target.checked)
      }

      const onToggleRightNavbar = e => {
        onToggleShowRightNavbar(e.target.checked)
      }

      return (
        <div className="nav-container">
          <h1 className="nav-heading">Layout</h1>
          <div className="checkbox-container">
            <input
              type="checkbox"
              id="content"
              className="checkbox"
              checked={showContent}
              onChange={onToggleContent}
            />
            <label htmlFor="content" className="label">
              Content
            </label>
            <br />
            <input
              type="checkbox"
              id="leftNavbar"
              className="checkbox"
              checked={showLeftNavbar}
              onChange={onToggleLeftNavbar}
            />
            <label htmlFor="leftNavbar" className="label">
              Left Navbar
            </label>
            <br />
            <input
              type="checkbox"
              id="rightNavbar"
              className="checkbox"
              checked={showRightNavbar}
              onChange={onToggleRightNavbar}
            />
            <label htmlFor="rightNavbar" className="label">
              Right Navbar
            </label>
            <br />
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
