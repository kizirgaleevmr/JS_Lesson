<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
</head>
<body>
<?php
$dt = Date('Y-m-d_hms');
$tm = getdate();
?>	
<fieldset>
		<legend>Заявка</legend>
		<form action="ins.php" method="GET">
	<label>Дата
	<input type="text" disabled name="nomerdate" value="<?php echo $dt; ?> "></label>
	<label>Устройство
	<input type="text" name="insustr"></label>
	<button type='submit'>Отправить</button>
	</form>
	</fieldset>
</body>
</html>