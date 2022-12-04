function quizList() {
    let Component = <QuizListCompoment/>;
    main.render(Component);
     }

     class QuizListCompoment extends React.Component {   

        constructor(props) {
        super(props);
        this.state = {
          image: "noneflag",
          description: "",
          buttoncolor: "rgb(31, 31, 31)",
          buttonbacground: "rgb(192, 192, 192)",
          continentsID: '',
          quizSelect: this.noQuizGame,
        }
        this.changeState = this.changeState.bind(this);
        this.Renderitemtable = this.Renderitemtable.bind(this);
        
        }
        
        
        quizGame(continents) {
        let viewport = document.querySelector("meta[name=viewport]");
        viewport.setAttribute( 'content', 'initial-scale=0.5, maximum-scale=0.5,' );  
        window.quizGamelist(continents);
        let Component = <Game/>;
        yourAnswerAndMenu = [];
        yourAnswer = [];
        main.render(Component);
         }
         noQuizGame() {
          alert("You must first select quiz")
           }
        
        
        changeState(newImage,newDescription,continents,NewName) {
          this.setState(prevState =>({image: newImage}));
          this.setState(prevState =>({description: newDescription}));
          this.setState(prevState =>({buttonbacground: "rgb(31, 180, 31)"}));
          this.setState(prevState =>({buttoncolor: "rgb(10, 255, 10)"}));
          this.setState(prevState =>({continentsID: continents}));
          this.setState(prevState =>({quizSelect: this.quizGame}));

          {EndName = NewName};
        
        }
        
        Renderitemtable() {
          let Itemtable = [];
          for (let index = 0; index+1 < (quizSelectItemTable.length); index=index+11)  {
            Itemtable.push(
            <div id={quizSelectItemTable[index]} 
            className='item_table'   onClick={this.changeState.bind(this,quizSelectItemTable[index+3], //Image
            quizSelectItemTable[index+2], //Description
           /* continents */ quizSelectItemTable[index+4]+quizSelectItemTable[index+5]+quizSelectItemTable[index+6]+quizSelectItemTable[index+7]+quizSelectItemTable[index+8]+quizSelectItemTable[index+9]+quizSelectItemTable[index+10],
           quizSelectItemTable[index]) //ID
            }key={[index]}> {quizSelectItemTable[index+1]} </div>
            )
          }
        
          return Itemtable;
        }
        render (){
          return (
        <div id='quizConteiner'> 
        <div className='quizSelect'>
        <this.Renderitemtable/>
        </div>
        <div id='quizBackground' style={{
        backgroundImage:"url(img/"+this.state.image+".jpg)"}}> </div>
        <div id='DescriptionANDButtonconteiner'>
        <div id='quizDescription'>
        {this.state.description}
        </div>
        <div id='quizButton' className='quizButton' onClick={(e) => this.state.quizSelect(this.state.continentsID,e)} style={{backgroundColor:this.state.buttonbacground,color:this.state.buttoncolor}}>
        Start
        </div>
        </div>
        
        
        </div>
        
         )
          }
        }
        
        
  
class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        time:60,
        colorTimer:'white',
        NumFlags:1,
        MaxFlags:10,
        score:0,
        Flag:ActualFlag,
        valueYourName:'',
        }
        this.nextFlag = this.nextFlag.bind(this);
        this.endRender = this.endRender.bind(this);

      }
    componentDidMount(){
        this.timerState = setInterval(
        () => this.changeTimerState(),1000);
}
    componentWillUnmount() {
        clearInterval(this.timerState);
              }
    
  changeTimerState(){
    if(this.state.time==0){
      EndTime =  -1
      this.endRender()

    }
       else {
        this.setState(prevState =>({time: this.state.time-'1'}));
            }
    if(this.state.time<20&&this.state.colorTimer!='red'){
              this.setState(prevState =>({colorTimer: 'red'}))
   }
  }
  nextFlag (TrueFalse,SelectOption) {
    CheckOptions.splice(0, CheckOptions.length);
    for (let index = 0; index < 4; index++) {
      if (index==trueoptions){
        CheckOptions.push('trueAnswer')
      }
      else if (index==SelectOption) {
        CheckOptions.push('wrongAnswer')
      }
    else {
      CheckOptions.push('standardAnswer')
    }
  }
  yourAnswer.push(<div className='YourQuestion'>
  <div className='YourQuestionFlag'> <img src={"img/flags/"+ActualFlag+".jpg"}           key={ActualFlag}/> </div> 
  <div className='YourAnswers'>
  <div className={CheckOptions[0]} key={ActualFlag+1}> {gameOptions[0]}   </div> 
  <div className={CheckOptions[1]} key={ActualFlag+2}> {gameOptions[1]}  </div> 
  <div className={CheckOptions[2]} key={ActualFlag+3}> {gameOptions[2]}  </div> 
  <div className={CheckOptions[3]} key={ActualFlag+4}> {gameOptions[3]}  </div> 
  </div>
  </div>)
           
    if (this.state.NumFlags<this.state.MaxFlags){
      this.setState(prevState =>({score:this.state.score+TrueFalse}))
        this.setState(prevState =>({NumFlags:this.state.NumFlags+1}))
        window.NextQuestion()
      }
    else {
    EndScore =  this.state.score+TrueFalse
    EndTime =  60-this.state.time
    this.endRender()
    }
  }
  endRender() {
  let viewport = document.querySelector("meta[name=viewport]");
  viewport.setAttribute( 'content', 'initial-scale=0.5, maximum-scale=2.0,' );  

  yourAnswerAndMenu.push(<input type="button" id="viewAnswerButton" value='View your answers' onClick={(e) =>viewYourAnswers()}/>)
  yourAnswerAndMenu.push(yourAnswer)
      main.render(<TheEnd 
        ends={EndScore}
        endt={EndTime}
        viewA={<input type="button" id="viewAnswerButton" value='View your answers' onClick={(e) =>viewYourAnswers()}/>}
      />) 
}




    render(){
      return (
    <div id='gameflexconteiner'>
    <div id='gamegrid'>
    <div id='gameflag'>
      <div id='leftGameFlex'>
    <h1>{this.state.NumFlags}/{this.state.MaxFlags}</h1>
    <h1>Score: {this.state.score}/{this.state.MaxFlags}</h1>
</div>
      <div id='ActualFlagPhoto'> <img src={"img/flags/"+ActualFlag+".jpg"}/></div>
      </div>
    <div id='timmer' >
<h1 style={{color:this.state.colorTimer}}>        {this.state.time}s  </h1>
      </div>
    <div id='optionsgrid'>
    
    <div className="optionsquiz" onClick={(e) => this.nextFlag(gameOptionsTrueFalse[0],0,e)}>{gameOptions[0]}</div>
    <div className="optionsquiz" onClick={(e) => this.nextFlag(gameOptionsTrueFalse[1],1,e)}>{gameOptions[1]}</div>
    <div className="optionsquiz" onClick={(e) => this.nextFlag(gameOptionsTrueFalse[2],2,e)}> {gameOptions[2]}</div>
    <div className="optionsquiz" onClick={(e) => this.nextFlag(gameOptionsTrueFalse[3],3,e)}>{gameOptions[3]}</div>
    </div>
    </div>
    </div>)
    
    
    }


   }




   function viewYourAnswers() {
    if (ActiveView==0){
      ActiveView=1
      let resposible  = window.matchMedia("(max-width: 914px)")
      let mainheight  = yourAnswer.length
      if(mainheight<1){mainheight=mainheight+1}
      console.log(mainheight)
      if(resposible.matches){
        if((mainheight*13.5+35)>70)
        {document.querySelector("body").style.gridTemplateRows="15% "+(mainheight*13.5+35)+"rem 15%"}
        document.querySelector("#EndGame").style.gridTemplateRows="6rem 6rem 6rem "+ mainheight*13.5+"rem 6rem"
      }
    else{
      document.querySelector("body").style.gridTemplateRows="15% "+(mainheight*14+36)+"rem 15%"
      document.querySelector("#EndGame").style.gridTemplateRows="6rem 6rem 6rem "+ mainheight*14.5+"rem 6rem"

    }
      document.querySelector("#viewAnswerButton").style.height='6rem'

      main.render( 
        <TheEnd 
        ends={EndScore}
        endt={EndTime}
      viewA={yourAnswerAndMenu}
    />)
    }
    else{
      ActiveView=0
      document.querySelector("body").style.gridTemplateRows="15% 60% 15%"
      document.querySelector("#EndGame").style.gridTemplateRows="6rem 6rem 6rem 6rem 6rem"
      main.render(<TheEnd 
        ends={EndScore}
        endt={EndTime}
        viewA={<input type="button" id="viewAnswerButton" value='View your answers'  onClick={(e) =>viewYourAnswers()}/>}
      />)
    
    }
    
    }



   class TheEnd extends React.Component{
    constructor(props) {
      super(props);
      this.state = {
      valueYourName: '',
      viewAnswerButtonState:'',

    };
    this.enterYourName = this.enterYourName.bind(this)
    }
    enterYourName(event) {
      this.setState({valueYourName: event.target.value});
    }
    static getDerivedStateFromProps(props, state) {
        return {
          viewAnswerButtonState: props.viewA,
        }
    }
    
    saveTheResult(name,event) {
      
      if(name>20){
   alert("Your name "+name+"it is too long!");
   event.preventDefault();

} 
else if (name<5) {
alert("Your name "+name+"it is too short!");
event.preventDefault();

}
else {
}
}



    render(){

      return(
<form method='post' action='result.php' onSubmit={(e) => this.saveTheResult(this.state.valueYourName,e)}>
<div id='EndGame'>
<div>You score: {EndScore}/10</div>
<div>You time : {EndTime}s</div>
<input type="hidden" name="score" value={EndScore}/>
<input type="hidden" name="time" value={EndTime}/>
<input type="hidden" name="quizName" value={EndName}/>
<input type="text" name='newname' placeholder='Enter your name(min 5, max 20 characters)' value={this.state.valueYourName} onChange={this.enterYourName}/>
<div id='AnswerConteinerFlex'>
{this.state.viewAnswerButtonState}
</div>
<input type='submit' id='GoToScoreTable'  value='Save results'/>
</div>
</form>
        )


  }

}


function SavedAnswer(props) {

  return (
<div className=''>
    <div className='YourQuestionFlag'> <img src={"img/flags/"+props.flag+".jpg"}/> </div> 
    <div className='YourAnswers'>
    <div className={CheckOptions[props.CheckOptions0+props.num]}> {props.gameOptions0+props.num} </div> 
    <div className={CheckOptions[props.CheckOptions1+props.num]}> {props.gameOptions1+props.num} </div> 
    <div className={CheckOptions[props.CheckOptions2+props.num]}> {props.gameOptions2+props.num} </div> 
    <div className={CheckOptions[props.CheckOptions3+props.num]}> {props.gameOptions3+props.num} </div> 
    </div>
</div>
);
}