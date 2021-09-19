<?php
require_once 'connect.php';

$text = $_REQUEST['text'];
$date = $_REQUEST['date'];

$sql = "INSERT INTO jar (jar_text, jar_date) VALUES ";
$sql .= "('" . $text . "',";
$sql .= "'" .$date . "')";

if(mysqli_query($link, $sql)){
    print ("Stored");
} else {
    print("Failed");
}

echo "<script>location.href='index.php'</script>";
?>