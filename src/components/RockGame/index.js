import {Component} from 'react'
import Popup from 'reactjs-popup'
import {
  Div,
  Heading,
  Para,
  Ul,
  Li,
  Image,
  DivGame,
  Button,
  BtnDiv,
  PopupDiv,
  RiCloseLineIcon,
} from './styledComponents'
class RockGame extends Component {
  state = {
    randomNumber: 0,
    resultView: false,
    score: 0,
    you: '',
    opponent: '',
    result: '',
  }
  onClickItem = id => {
    const randomNum = Math.floor(Math.random() * this.props.choicesList.length)
    const firstItem = this.props.choicesList.filter(each => each.id === id)
    const secondItem = this.props.choicesList[randomNum].imageUrl
    const secondItemid = this.props.choicesList[randomNum].id
    let me = firstItem[0].id
    let op = secondItemid
    if (me !== '' && op !== '') {
      if (me === op) {
        let result = 'IT IS DRAW'
        this.setState({result: result})
      } else if (me === 'ROCK' && op === 'SCISSORS') {
        let result = 'YOU WON'
        this.setState(pervState => ({
          score: pervState.score + 1,
          result: result,
        }))
      } else if (me === 'SCISSORS' && op === 'PAPER') {
        let result = 'YOU WON'
        this.setState(pervState => ({
          score: pervState.score + 1,
          result: result,
        }))
      } else if (me === 'PAPER' && op === 'ROCK') {
        let result = 'YOU WON'
        this.setState(pervState => ({
          score: pervState.score + 1,
          result: result,
        }))
      } else {
        let result = 'YOU LOSE'
        this.setState(pervState => ({
          score: pervState.score - 1,
          result: result,
        }))
      }
    }

    this.setState({
      randomNumber: randomNum,
      resultView: true,
      you: firstItem[0].imageUrl,
      opponent: secondItem,
    })
  }
  onClickPlayAgain = () => {
    this.setState({resultView: false})
  }
  render() {
    const {choicesList} = this.props
    const {resultView, you, opponent, result, score} = this.state
    console.log(you, opponent)
    return (
      <Div height="130vh" bgColor="#223a5f" p="100px" pt="20px">
        <Div
          display="flex"
          jc="space-between"
          height=""
          bc="white"
          bw="2"
          br="5"
          bs="solid"
          p="10px"
          pl="50px"
          pr="50px"
        >
          <Div>
            <Heading pb="0px" mb="0px" color="white">
              ROCK
              <br />
              PAPER
              <br />
              SCISSORS
            </Heading>
          </Div>
          <Div ai="center" as="center" bgColor="white" br="5" width="100px">
            <Para fw="600" color="#223a5f">
              Score
            </Para>
            <Para fw="600" ff="Roboto" font-size="30px" color="#223a5f">
              {score}
            </Para>
          </Div>
        </Div>
        <DivGame>
          {resultView === false && (
            <Ul>
              <Li>
                <Button
                  bgColor="transparent"
                  bw="0px"
                  data-testid="rockButton"
                  onClick={() => this.onClickItem(choicesList[0].id)}
                >
                  <Image
                    height="150px"
                    alt={choicesList[0].id}
                    src={choicesList[0].imageUrl}
                  />
                </Button>
              </Li>
              <Li>
                <Button
                  bgColor="transparent"
                  bw="0px"
                  data-testid="paperButton"
                  onClick={() => this.onClickItem(choicesList[1].id)}
                >
                  <Image
                    height="150px"
                    alt={choicesList[1].id}
                    src={choicesList[1].imageUrl}
                  />
                </Button>
              </Li>
              <Li>
                <Button
                  bgColor="transparent"
                  bw="0px"
                  data-testid="scissorsButton"
                  onClick={() => this.onClickItem(choicesList[2].id)}
                >
                  <Image
                    height="150px"
                    alt={choicesList[2].id}
                    src={choicesList[2].imageUrl}
                  />
                </Button>
              </Li>
            </Ul>
          )}
          {resultView && (
            <Div
              mt="200px"
              height="10vh"
              width="80vh"
              display="flex"
              fd="column"
              jc="center"
              ai="center"
            >
              <Div display="flex" jc="space-between" height="100%" width="100%">
                <Div>
                  <Para as="center" fw="600" color="white">
                    YOU
                  </Para>
                  <Image height="150px" alt="your choice" src={you} />
                </Div>
                <Div>
                  <Para as="center" fw="600" color="white">
                    OPPONENT
                  </Para>
                  <Image height="150px" alt="opponent choice" src={opponent} />
                </Div>
              </Div>
              <Div mt="100px" as="center">
                <Para color="white">{result}</Para>
                <Button onClick={this.onClickPlayAgain}>PLAY AGAIN</Button>
              </Div>
            </Div>
          )}
        </DivGame>
        <BtnDiv>
          <Popup modal trigger={<Button>RULES</Button>}>
            {close => (
              <>
                <PopupDiv>
                  <Button bw="0px" onClick={() => close()}>
                    <RiCloseLineIcon />
                  </Button>
                  <Image
                    alt="rules"
                    height="500px"
                    src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                  />
                </PopupDiv>
              </>
            )}
          </Popup>
        </BtnDiv>
      </Div>
    )
  }
}

export default RockGame
