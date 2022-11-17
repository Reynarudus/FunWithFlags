<html>
<head>
<title>Zabawy z Flagami</title> 
<meta charset="UTF-8">

<link rel="stylesheet" href="css/styl.css">
<script src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
</head>


<body>
<!--  Downloading data from the database and converting data to js --> 

    <?php
    $connect = @new mysqli('localhost', 'root', '', 'funwithflags');
    if (mysqli_connect_errno() != 0){
        echo '<p class="error">A connection error has occurred: ' . mysqli_connect_error() . '</p>';
        exit;
    }
    else {
       // Flags
        $query = mysqli_query($connect,"SELECT * FROM quizzes");
        $quizSelectItemValues = "";
        while ( $row = mysqli_fetch_assoc($query) ) {
        $quizSelectItemValues .= $row['Id'].';'.$row['Name'].';'.$row['Description'].';'.$row['Image'].';'.$row['EuropeFlags'].';'.$row['AsiaFlags'].';'.$row['AfricaFlags'].';'.$row['NAmericaFlags'].';'.$row['SAmericaFlags'].';'.$row['OceaniaAndAustraliaFlags'].';'.$row['FictionalFlags'].';';
        }
        $quizSelectItemTable = explode(";", $quizSelectItemValues);

        // landerboard       
        $query = mysqli_query($connect,"SELECT * FROM quizzes");
        $quizSelectItemValues = "";
        while ( $row = mysqli_fetch_assoc($query) ) {
        $quizSelectItemValues .= $row['Id'].';'.$row['Name'].';'.$row['Description'].';'.$row['Image'].';'.$row['EuropeFlags'].';'.$row['AsiaFlags'].';'.$row['AfricaFlags'].';'.$row['NAmericaFlags'].';'.$row['SAmericaFlags'].';'.$row['OceaniaAndAustraliaFlags'].';'.$row['FictionalFlags'].';';
        }
    }
    ?>

<script type='text/javascript'>
const quizSelectItemTable = <?php echo json_encode($quizSelectItemTable); ?>;
</script>

<?php
$query = mysqli_query($connect,"SELECT * FROM `flags` WHERE `Continent`='Europe'OR`Continent2`='Europe'");
$europe = '';
while ( $row = mysqli_fetch_assoc($query) ) {
    $europe .= $row['Country'].';';
}

    $europe = substr($europe, 0, -1);
    $europe = explode(";", $europe);

mysqli_close ($connect);
?>



<script type='text/javascript'>
const EuropeNameList = <?php echo json_encode($europe); ?>;
let FlagsList = []
let Flaglistcopy = []
let ActualFlag = ''
let RandomFlaglist = []
let gameOptions = []
let gameOptionsTrueFalse = []
let trueoptions = ''
let yourAnswer = []
let yourAnswerAndMenu = []
let CheckOptions = []
let ActiveView = 0
let EndScore = 0
let EndTime = 0
let EndName = ''
//first flag

function quizGamelist(continents){
    gameOptions = [];
    FlagsList = [];
    RandomFlaglist = [];

//select 
if (continents[0]==1){
for (let index = 0; index < EuropeNameList.length; index++) {
    FlagsList.push (EuropeNameList[index]);
    Flaglistcopy = FlagsList.slice()
}
}
    for (let index = 0; index <= 10; index++) {
random = Math.floor(Math.random()*Flaglistcopy.length);
RandomFlaglist.push (Flaglistcopy[random]);
Flaglistcopy.splice(random, 1);
}

random = Math.floor(Math.random()*RandomFlaglist.length);
ActualFlag = RandomFlaglist[random]
RandomFlaglist.splice(random,1)
Options()

}

function Options(){
trueoptions = Math.floor(Math.random()*4)
Flaglistcopy = FlagsList.slice()
gameOptions = []
gameOptionsTrueFalse = []
for (let index = 0; index < 4; index++) {
    if (trueoptions==index){
        gameOptions.push(ActualFlag);
        gameOptionsTrueFalse.push(1)
    }
    else {
        random = Math.floor(Math.random()*(Flaglistcopy.length));
        if(Flaglistcopy[random]==ActualFlag){
            if(random>1){random = random-1}
            else {random = random+1}
        }
        gameOptions.push(Flaglistcopy[random]);
        gameOptionsTrueFalse.push(0)
        Flaglistcopy.splice(random,1);
    }
}

}

function NextQuestion() {
random = Math.floor(Math.random()*RandomFlaglist.length);
ActualFlag = RandomFlaglist[random]
RandomFlaglist.splice(random, 1)
Options()
}





</script>

<!-- Babel -->
<script type='text/babel' src='react/main.js'></script>


<!-- semantic tags -->
<header></header>
<main id='main'></main>
<footer></footer>

</body>


</html>