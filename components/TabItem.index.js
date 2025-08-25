// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, isActive, onClickTab} = props
  const {tabId, displayText} = tabDetails

  const activeClassName = isActive ? 'active-tab' : ''

  const onClickTabItem = () => {
    onClickTab(tabId)
  }

  return (
    <li className="tab-item">
      <button
        type="button"
        className={`tab-btn ${activeClassName}`}
        onClick={onClickTabItem}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
