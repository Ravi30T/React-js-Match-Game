import './index.css'

const GameResult = props => {
  const {score, onClickRestart} = props

  const onClickRestartBtn = () => {
    onClickRestart()
  }

  return (
    <div className="smGameResult">
      <div className="smResultImgContainer">
        <div className="trophyContainer">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
            className="trophyImg"
            alt="trophy"
          />
          <p className="yourScoreHeading"> YOUR SCORE </p>
          <p className="score"> {score} </p>
          <button
            className="resetBtn"
            onClick={onClickRestartBtn}
            type="button"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
              className="resetImg"
              alt="reset"
            />
            PLAY AGAIN
          </button>
        </div>
      </div>
    </div>
  )
}

export default GameResult
