function Encyclopediarender() {
    let Component = <Encyclopedia/>;
    main.render(Component);
     }

 
class Encyclopedia extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        FlagsArray: [],
        flagsRender: [],
      }
            this.ResultSelector = this.ResultSelector.bind(this);
    }
    ResultSelector(SelectContinet){
  
  this.setState(prevState =>({flagsRender:[],FlagsArray: []}));
  switch(SelectContinet){
  case "1":
    for (let index = 0; index < EuropeNameList.length; index++) {
      this.state.FlagsArray.push(EuropeNameList[index])
    }
  break
  
  case "2":
    for (let index = 0; index < NamerciaNameList.length; index++) {
      this.state.FlagsArray.push(NamerciaNameList[index])
    }
  
  break
  case "3":
    for (let index = 0; index < AfricaNameList.length; index++) {
      this.state.FlagsArray.push(AfricaNameList[index])
    }
  
  break

  case "4":
    for (let index = 0; index < AsiaNameList.length; index++) {
      this.state.FlagsArray.push(AsiaNameList[index])
    }
  
  break
  case "5":
    for (let index = 0; index < OceaniaNameList.length; index++) {
      this.state.FlagsArray.push(OceaniaNameList[index])
    }
  
  break
  case "6":
    for (let index = 0; index < SamerciaNameList.length; index++) {
      this.state.FlagsArray.push(SamerciaNameList[index])
    }
  
  break
  case "7":
    for (let index = 0; index < FantasyNameList.length; index++) {
      this.state.FlagsArray.push(FantasyNameList[index])
    }
  
  break
  }
  for (let index = 0; index < this.state.FlagsArray.length; index++) {
    this.state.flagsRender.push(<div><img src={'img/flags/'+this.state.FlagsArray[index]+'.jpg'}/><p><span>{this.state.FlagsArray[index]}</span></p></div>)
  }
  
  
  let Component = [];
  Component.push(<Encyclopedia/>);
  
  
  let mainheight  = this.state.FlagsArray.length

  let resposible  = window.matchMedia("(max-width: 914px)")
  if(resposible.matches){
    mainheight = mainheight*6
  }
  else{
    mainheight = mainheight*8

  }
  while  (mainheight%3!=0){
    mainheight++;
  }
  let encyclopediaflagsheight = mainheight-30
  
  if (mainheight<75){mainheight=75;encyclopediaflagsheight=50}
  
  
  console.log (mainheight)
  console.log (encyclopediaflagsheight)
  {document.querySelector('body').style.gridTemplateRows=("15% "+mainheight+'rem'+" 15%");}
  Component.push(<div className='EncyclopediaFlags' style={{height:encyclopediaflagsheight+'rem'}}>{this.state.flagsRender}</div>);
  main.render(Component)
    }
       render(){
        return (
      <SelectContinet functionName={this.ResultSelector}/>
        )
       }
         }
   