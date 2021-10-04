<html>
<head><title>imgtest</title></head>
<body>
<form method="post" action="img.php" enctype="multipart/form-data">
<input type="file" name="img"><br>
<input type="submit" name="sub" value="送出">
</form>
<?php
$img = isset($_FILES['img']) ? $_FILES['img'] : "";
if($img){
    if($img['error'] > 0){
        echo "Error : ".$img['error'];
    }else{
        $name = $img['name'];
		$size = $img['size'];
        $type = $img['type'];
        $tmp = $img['tmp_name'];
        if(move_uploaded_file($img['tmp_name'], "./imgtest/".$name)){
            echo "ok";
		echo $name ."<br/>" ;
		echo $size ."<br/>";
        echo $type ."<br/>" ;
        echo $tmp ."<br/>" ;
        }else{
            echo "error";
        }
    }
}
?>
</body>
</html>