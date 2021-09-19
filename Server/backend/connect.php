<?php
$db= "jar";
$host = "localhost";
$port = 4200;

$link = mysqli_init();
$success = mysqli_connect(
    $db,
    $host,
    $port,
);

?>