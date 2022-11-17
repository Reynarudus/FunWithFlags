//html
const header = ReactDOM.createRoot(document.querySelector('header'));
const main = ReactDOM.createRoot(document.querySelector('main'));
const footer = ReactDOM.createRoot(document.querySelector('footer'));

////function-events
function quizList() {
  let Component = <QuizListCompoment/>;
  main.render(Component);
   }
function Encyclopediarender() {
    let Component = <Encyclopedia/>;
    main.render(Component);
     }


//Flags List 

 
 class Encyclopedia extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      FlagsArray: [],
      flagsRender: [],
    }
          this.SelectorContinet = this.SelectorContinet.bind(this);
  }
   SelectorContinet(SelectContinet){

this.setState(prevState =>({flagsRender:[],FlagsArray: []}));
switch(SelectContinet){
case "Europe":
  for (let index = 0; index < EuropeNameList.length; index++) {
    this.state.FlagsArray.push(EuropeNameList[index])
  }
break

case "NAmerica":
  for (let index = 0; index < EuropeNameList.length; index++) {
    this.state.FlagsArray.push(EuropeNameList[index])
  }
break
}
for (let index = 0; index < this.state.FlagsArray.length; index++) {
  this.state.flagsRender.push(<div><img src={'img/flags/'+this.state.FlagsArray[index]+'.jpg'}/><p><span>{this.state.FlagsArray[index]}</span></p></div>)
}


let Component = [];
Component.push(<Encyclopedia/>);

let mainheight = this.state.FlagsArray.length*12+'%'
let encyclopediaflagsheight = this.state.FlagsArray.length*3.5+'%'
console.log (mainheight)
{document.querySelector('body').style.gridTemplateRows=("15% "+mainheight+" 15%");}
Component.push(<div className='EncyclopediaFlags' style={{height:encyclopediaflagsheight}}>{this.state.flagsRender}</div>);
main.render(Component)
  }
     render(){
      return (

     <div className='continentSelection'> 
     <div id='Europa' className='continentToChoose'onClick={() => this.SelectorContinet("Europe")}> <img src={'img/continents/Europe.png'}/></div>
     <div id='NorthAmerica' className='continentToChoose'onClick={() => this.SelectorContinet("NAmerica")}> <img src={'img/continents/NorthAmercia.png'}/></div>
     {this.state.flagsRender}
    </div>
      )
     }
       }
 
 function landerboardRender() {
         main.render(
         <div className='mainbutton'> landerboard </div>
             )
           }

           class Game extends React.Component {
            constructor(props) {
                super(props);
                this.state = {
                time:60,
                colorTimer:'white',
                NumFlags:0,
                MaxFlags:10,
                score:0,
                Flag:ActualFlag,
                valueYourName:'',
                }
                this.nextFlag = this.nextFlag.bind(this);

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
              main.render(mainMenu)
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
              if (this.state.NumFlags<this.state.MaxFlags){
                this.setState(prevState =>({NumFlags:this.state.NumFlags+1}))
                // 0:flag 1-4:CheckOptions 5-8:gameOptions
                this.setState(prevState =>({score:this.state.score+TrueFalse}))
                window.NextQuestion()
                }
              }
            
            else {
            EndScore =  this.state.score
            EndTime =  60-this.state.time
  yourAnswerAndMenu.push(<input type="button" id="viewAnswerButton" value='View your answers' onClick={(e) =>viewYourAnswers()}/>)
  yourAnswerAndMenu.push(yourAnswer)
              main.render(<TheEnd 
                ends={EndScore}
                endt={EndTime}
                viewA={<input type="button" id="viewAnswerButton" value='View your answers' onClick={(e) =>viewYourAnswers()}/>}
              />)
            }
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
              document.querySelector("body").style.gridTemplateRows="15% 340% 15%"
              document.querySelector("#EndGame").style.gridTemplateRows="6rem 6rem 6rem 160rem 6rem"
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


 
 //function
 function Mainbutton(props) {
   
       return (
         <div id={props.idName} className='mainbutton' onClick={props.functionName}>
         {props.name}
          </div>
 );
 }
 class Mainoptions extends React.Component  {
     render (){
     return (
     <div id='mainButtonConteiner'>
     <Mainbutton idName='Mainbutton1' name='New Quiz' functionName={quizList} />
     <Mainbutton idName='Mainbutton2' name='Encyclopedia' functionName={Encyclopediarender}/>
     <Mainbutton idName='Mainbutton3' name='Laderboard' functionName={landerboardRender}/>
     </div>
     )
     }
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
        }
        this.changeState = this.changeState.bind(this);
        this.Renderitemtable = this.Renderitemtable.bind(this);
       
      }


       quizGame(continents) {
        window.quizGamelist(continents);
        let Component = <Game/>;
        main.render(Component);
         }


      changeState(newImage,newDescription,continents,NewName) {
          this.setState(prevState =>({image: newImage}));
          this.setState(prevState =>({description: newDescription}));
          this.setState(prevState =>({buttonbacground: "rgb(31, 180, 31)"}));
          this.setState(prevState =>({buttoncolor: "rgb(10, 255, 10)"}));
          this.setState(prevState =>({continentsID: continents}));
          {EndName = NewName};

        }

        Renderitemtable() {
          let Itemtable = [];
          for (let index = 0; index <= (quizSelectItemTable.length)/2; index=index+11)  {
            Itemtable.push(
            <div id={quizSelectItemTable[index]} 
            className='item_table'   onClick={this.changeState.bind(this,quizSelectItemTable[index+3], //Image
            quizSelectItemTable[index+2], //Description
           /* continents */ quizSelectItemTable[index+4]+quizSelectItemTable[index+5]+quizSelectItemTable[index+6]+quizSelectItemTable[index+7]+quizSelectItemTable[index+8]+quizSelectItemTable[index+9]+quizSelectItemTable[index+10],
           quizSelectItemTable[index+1]) //Name
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
  <div id='quizButton' className='quizButton' onClick={(e) => this.quizGame(this.state.continentsID,e)} style={{backgroundColor:this.state.buttonbacground,color:this.state.buttoncolor}}>
  Start
  </div>
 </div>

 
 </div>

         )
          }
    }


    


//other
const headerName = <h1>Fun with flags</h1>; //;)
const mainMenu = <Mainoptions/>;
const author = <div id='author'> &copy;	Mateusz Szulc </div>;


//redner
header.render(headerName);
main.render(mainMenu);
footer.render(author);