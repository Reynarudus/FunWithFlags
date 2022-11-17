<html>
<head>
<title>Zabawy z Flagami</title> 
<meta charset="UTF-8">
<link rel="stylesheet" href="css/styl.css">
</head>
<body>

</body>

</html>
<?php
    $connect = @new mysqli('localhost', 'root', '', 'funwithflags');
    if (mysqli_connect_errno() != 0){
        echo '<p class="error">A connection error has occurred: ' . mysqli_connect_error() . '</p>';
        exit;
    }
    else if(empty($_POST["newname"])||empty($_POST["time"])||empty($_POST["score"])||empty($_POST["quizName"])){
        echo '<p class="error">You should not be here... </p>';
        header('Location: index.php');
    }
    else {
        $new_name = $_POST["newname"];
        $new_time = $_POST["time"];
        $new_score = $_POST["score"];
        $set_name  = $_POST["quizName"];
        $query = mysqli_query($connect,"INSERT INTO `results` (`Id`, `Name`, `Score`, `Time`, `Date`) VALUES (NULL, '$new_name', '$new_score', '$new_time', current_timestamp(),$set_name)");
        mysqli_close ($connect);
        header('Location: index.php');
}
?>