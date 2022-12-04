//html
const header = ReactDOM.createRoot(document.querySelector('header'));
const main = ReactDOM.createRoot(document.querySelector('main'));
const footer = ReactDOM.createRoot(document.querySelector('footer'));


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




 function landerboardRender() {
         main.render(
         <div className='mainbutton'> landerboard </div>
             )
           }
    
  function backToMenu() {
    let viewport = document.querySelector("meta[name=viewport]");
    viewport.setAttribute( 'content', 'initial-scale=0.5, maximum-scale=2.0,' );  
    main.render(mainMenu);
    document.querySelector("body").style.gridTemplateRows="15% 60% 15%"

  }


//other
const headerName =  <div id='headercontener'><h1>Fun with flags</h1> <img src='img/icons/home.png' className='homeicons' onClick={(e) =>{backToMenu()}}/> </div>; //;)
const mainMenu = <Mainoptions/>;
const author = <div id='author'> &copy;	Mateusz Szulc </div>;


//encyclopedia and landerboard
function SelectContinet (props) {
    return(
      <div className='continentSelection'> 
      <div id='Europa' className='continentToChoose'onClick={() => props.functionName("1")}> <img src={'img/continents/Europe.png'}/></div>
      <div id='NorthAmerica' className='continentToChoose'onClick={() => props.functionName("2")}> <img src={'img/continents/NorthAmercia.png'}/></div>
      <div id='Africa' className='continentToChoose'onClick={() => props.functionName("3")}> <img src={'img/continents/Africa.png'}/></div>
      <div id='Asia' className='continentToChoose'onClick={() => props.functionName("4")}> <img src={'img/continents/Asia.png'}/></div>
      <div id='Oceania' className='continentToChoose'onClick={() => props.functionName("5")}> <img src={'img/continents/Oceania.png'}/></div>
      <div id='SouthAmerica' className='continentToChoose'onClick={() => props.functionName("6")}> <img src={'img/continents/SouthAmerica.png'}/></div>
      <div id='Fiction' className='continentToChoose'onClick={() => props.functionName("7")}> <img src={'img/continents/Fiction.png'}/></div>
      {props.bonusdiv1}
      {props.bonusdiv2}
      </div>
      
    )
  
}


//redner
header.render(headerName);
main.render(mainMenu);
footer.render(author);