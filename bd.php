<?php
$servername= 'localhost';
$database = 'nomerzayavki';
$username = 'root';
$password = 'mysql';

$conn = mysqli_connect($servername, $username, $password, $database);
if (!$conn) {
	die("Connection failed: " . mysqli_connect_error());
}
echo "Connected successfully";
// mysqli_close($conn);

echo '<br>';
$sql = mysqli_query($conn, 'SELECT `id`, `nomer`, `ustroistvo` FROM `zayavki`');
while ($result = mysqli_fetch_array($sql)) {
	echo "{$result['id']}: {$result['nomer']} {$result['ustroistvo']}<br>";
}
echo '<hr>';

$s1 = mysqli_query($conn, "SELECT * FROM `zayavki`", MYSQLI_USE_RESULT);

echo '<table style="text-align:left; border: 1px solid green; width: 800px">';
echo '<tr style="border: 1px solid green">';
echo '<th>' . 'id' . '</th>';
echo '<th>' . 'номер' . '</th>';
echo '<th>' . 'устройство' . '</th>';

echo '</tr>';

foreach ($s1 as $key => $val) {
	if (2>1) {
		echo '<tr>';
		echo '<td>' . $val['id'] . '</td>';
		echo '<td>' . $val['nomer'] . '</td>';
		echo '<td>' . $val['ustroistvo'] . '</td>';
		echo '</tr>';
	}
};
echo '</table>';
?>


