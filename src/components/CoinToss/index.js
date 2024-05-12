// Write your code here
// import {Component} from 'react'
import {useState} from 'react'

import './index.css'

const HEADS_IMG_URL = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const TAILS_IMG_URL = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

// class CoinToss extends Component {
//   state = {
//     tossResultImage: HEADS_IMG_URL,
//     headsCount: 0,
//     tailsCount: 0,
//   }

//   onTossCoin = () => {
//     const {headsCount, tailsCount} = this.state
//     const toss = Math.floor(Math.random() * 2)
//     let tossImage = ' '
//     let latestHeadCount = headsCount
//     let latestTailsCount = tailsCount

//     if (toss === 0) {
//       tossImage = HEADS_IMG_URL
//       latestHeadCount += 1
//     } else {
//       tossImage = TAILS_IMG_URL
//       latestTailsCount += 1
//     }

//     this.setState({
//       tossResultImage: tossImage,
//       headsCount: latestHeadCount,
//       tailsCount: latestTailsCount,
//     })
//   }

//   render() {
//     const {tossResultImage, headsCount, tailsCount} = this.state
//     const totalCount = headsCount + tailsCount

//     return (
//   <div className="background">
//     <div className="card-container">
//       <div className="heading-container">
//         <h1 className="heading">Coin Toss Game</h1>
//         <p className="para">Heads (or) Tails</p>
//       </div>
//       <div className="img-container">
//         <img src={tossResultImage} alt="toss result" className="img-coin" />
//       </div>
//       <button type="button" className="btn" onClick={this.onTossCoin}>
//         Toss Coin
//       </button>
//       <div className="content">
//         <p className="count">Total:{totalCount}</p>
//         <p className="count">Heads:{headsCount}</p>
//         <p className="count">Tails:{tailsCount}</p>
//       </div>
//     </div>
//   </div>
//     )
//   }
// }

const CoinToss = () => {
  const [headsCount, setHeadsCount] = useState(0)
  const [tailsCount, setTailsCount] = useState(0)
  const [tossResultImage, setTossResultImage] = useState(HEADS_IMG_URL)
  const totalCount = headsCount + tailsCount

  const onTossCoin = () => {
    const toss = Math.floor(Math.random() * 2)
    let tossImage = ''
    let latestHeadsCount = headsCount
    let latestTailsCount = tailsCount
    if (toss === 0) {
      tossImage = HEADS_IMG_URL
      latestHeadsCount += 1
    } else {
      tossImage = TAILS_IMG_URL
      latestTailsCount += 1
    }

    setHeadsCount(latestHeadsCount)
    setTailsCount(latestTailsCount)
    setTossResultImage(tossImage)
  }

  return (
    <div className="background">
      <div className="card-container">
        <div className="heading-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="para">Heads (or) Tails</p>
        </div>
        <div className="img-container">
          <img src={tossResultImage} alt="toss result" className="img-coin" />
        </div>
        <button type="button" className="btn" onClick={onTossCoin}>
          Toss Coin
        </button>
        <div className="content">
          <p className="count">Total:{totalCount}</p>
          <p className="count">Heads:{headsCount}</p>
          <p className="count">Tails:{tailsCount}</p>
        </div>
      </div>
    </div>
  )
}
export default CoinToss
