function landerboardRender() {
    let Component = <Landerboard/>;
    main.render(Component);
     }
 
class Landerboard extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        ResultsArray: [],
        ResultsRender: [],
      }
            this.ResultSelector = this.ResultSelector.bind(this);
    }
  
  
  ResultSelector(SelectContinet){
  this.setState(prevState =>({ResultsRender:[],ResultsArray: []}));
  this.state.ResultsRender.push(<div className='firstResultsRows' key='FirstRow1'>Name</div>,<div key='FirstRow2' className='firstResultsRows'>Score</div>,<div key='FirstRow3' className='firstResultsRows'>Time</div>,<div key='FirstRow4' className='firstResultsRows'>Date</div>,)

    for (let index = 0; index+6 <= Results.length; index=index+6) {
      if(Results[index+5]==SelectContinet)
      this.state.ResultsArray.push(Results[index+1],Results[index+2],Results[index+3],Results[index+4])
      console.log(index)
    }
    console.log(this.state.ResultsArray)

  
  let Component = [];
  Component.push(<Landerboard/>);
  
  for (let index = 0; index+4 <= this.state.ResultsArray.length; index=index+4) {
    this.state.ResultsRender.push(<div key={index+'1'}>{this.state.ResultsArray[index]}</div>,<div key={index+'2'}>{this.state.ResultsArray[index+1]}</div>,<div key={index+'3'}>{this.state.ResultsArray[index+2]}</div>,<div key={index+'4'}>{this.state.ResultsArray[index+3]}</div>,)
  }

  let resposible  = window.matchMedia("(max-width: 914px)")
  let mainheight  = this.state.ResultsArray.length;
  let landerheight = "5rem"
  let ResultConteinerheight = 8
  if(mainheight<1){mainheight=mainheight+1}
  



if(resposible.matches){

  for (let i = 0; i < mainheight/4; i++) {
    landerheight+=" 3rem"
    ResultConteinerheight+=4
   }



  if(ResultConteinerheight+10>50) 
  { document.querySelector("body").style.gridTemplateRows="15% "+(ResultConteinerheight+10)+"rem 15%"}
 else   { document.querySelector("body").style.gridTemplateRows="15% 60% 15%";}

  }



else{

  for (let i = 0; i < mainheight/4; i++) {
    landerheight+=" 5rem"
    ResultConteinerheight+=8
   }



  if(ResultConteinerheight+18>40) 
 { document.querySelector("body").style.gridTemplateRows="15% "+(ResultConteinerheight+18)+"rem 15%"}
else   { document.querySelector("body").style.gridTemplateRows="15% 60% 15%";   ResultConteinerheight = 20}
}





  
  Component.push(<div id='ResultConteiner' style={{height:ResultConteinerheight+"rem",gridTemplateRows:landerheight}}>{this.state.ResultsRender}</div>)
  main.render(Component)
    }
    render(){
      return (
    <SelectContinet functionName={this.ResultSelector}
    bonusdiv1={
    <div id='ModernWorld' className='continentToChoose'onClick={() => this.ResultSelector("8")}> <img src={'img/continents/Earth.png'}/></div>
    }
    bonusdiv2={
      <div id='ModernWorld' className='continentToChoose'onClick={() => this.ResultSelector("9")}> <img src={'img/continents/All.png'}/></div>
      }
      />
      )
     }
         }