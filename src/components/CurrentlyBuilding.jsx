import { currentlyBuilding } from '../data'
import { Reveal } from './Reveal'

function CurrentlyBuilding() {
  return (
    <div className="building">
      <div className="container">
        <Reveal>
          <div className="building-inner">
            <span className="building-label">
              <span className="building-dot" aria-hidden="true" />
              Currently exploring
            </span>
            <div className="building-list">
              {currentlyBuilding.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  )
}

export default CurrentlyBuilding
