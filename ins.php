<?php
include 'bd.php';


$date = $_GET['nomerdate'];
$opisanie = $_GET['insustr'];

echo $date;

$sql = mysqli_query($conn, "INSERT INTO `zayavki` (`nomer`,`ustroistvo`)VALUES ('".$date."', '".$opisanie."')");


if ($conn->query($sql) === TRUE) {
   echo "Успешно создана новая запись";
} else {
   echo "Ошибка: " . $sql . "<br>" . $conn->error;
}
?>