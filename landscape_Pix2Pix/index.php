<!DOCTYPE HTML>
<!--
	Snapshot by TEMPLATED
	templated.co @templatedco
	Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
-->
<html lang="en">
 <head>
  <meta charset="UTF-8">
  <meta name="Generator" content="EditPlus®">
  <meta name="Author" content="">
  <meta name="Keywords" content="">
  <meta name="Description" content="">
	
	 <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
    <link href="./cropper.css" rel="stylesheet">
    <link rel="stylesheet" href="./ImgCropping.css">
    <script src="./cropper.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@1.1.2"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.6.1/p5.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.6.1/addons/p5.dom.min.js"></script>
    <script src="./utils.js"></script>
    <script src="./pix2pix.js"></script>
    <script src="./index.js"> </script>
	
  <title>Use Pix2Pix Generative Adversarial Network Generate Landscape Painting</title>
  <meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		 <link rel="stylesheet" href="assets/css/main.css" />
		
 </head>
 <body style="background: rgb(238, 238, 238);">
 <div class="page-wrap">
 
			<!-- Nav -->
				<nav id="nav">
					<ul>
						<li><a href="index.html" class="active"><span class="icon fa-home"></span></a></li>
						<li><a href="gallery.html"><span class="icon fa-camera-retro"></span></a></li>
						<li><a href="generic.html"><span class="icon fa-file-text-o"></span></a></li>
					</ul>
				</nav>

			<!-- Main -->
				<section id="main">

					<!-- Banner -->
						<section id="banner">
							<div class="inner">
								<h1>以生成對抗網路實現中華文化之藝術畫作</h1>
								<p>by <a href="https://www.facebook.com/profile.php?id=100002345932403">Johnny Chen</a></p>
								<ul class="actions">
									<li><a href="#galleries" class="button alt scrolly big">Continue</a></li>
								</ul>
							</div>
						</section>

					<!-- Gallery -->
						<section id="galleries">

							<!-- Photo Galleries -->
								<div class="gallery">
									<header class="special">
										<h1>
										<span style="font-family:sans-serif;">What's New</span>
										</h1>
									</header>
									<div class="content">
										<div class="media">
											<a href="images/fulls/15.jpg"><img src="images/thumbs/15.jpg" width="590" height="590" alt="" title="This right here is a caption." /></a>
										</div>
										<div class="media">
											<a href="images/fulls/16.jpg"><img src="images/thumbs/16.jpg" width="590" height="590" alt="" title="This right here is a caption." /></a>
										</div>
										<div class="media">
											<a href="images/fulls/17.jpg"><img src="images/thumbs/17.jpg" width="590" height="590" alt="" title="This right here is a caption." /></a>
										</div>
										<div class="media">
											<a href="images/fulls/18.jpg"><img src="images/thumbs/18.jpg" width="590" height="590" alt="" title="This right here is a caption." /></a>
										</div>
										<div class="media">
											<a href="images/fulls/06.jpg"><img src="images/thumbs/19.jpg" width="590" height="590" alt="" title="This right here is a caption." /></a>
										</div>
										<div class="media">
											<a href="images/fulls/10.jpg"><img src="images/thumbs/20.jpg" width="590" height="590" alt="" title="This right here is a caption." /></a>
										</div>
										<div class="media">
											<a href="images/fulls/03.jpg"><img src="images/thumbs/21.jpg" width="590" height="590" alt="" title="This right here is a caption." /></a>
										</div>
										<div class="media">
											<a href="images/fulls/07.jpg"><img src="images/thumbs/22.jpg" width="590" height="590" alt="" title="This right here is a caption." /></a>
										</div>
									</div>
									<footer>
										<a href="gallery.html" class="button big">Full Gallery</a>
									</footer>
								</div>
						</section>
						<!-- Contact -->
						<section id="contact">
							<!-- Social -->
								 <div class="social column" style="text-align: center";>
								 <h3>Draw your pic!</h3>
								 
	 <img id="finalImg" src="" width="256px" height="256px" style="display:none">
	
    <canvas id="myCanvas" width="500" height="500" style="border:1px solid #b4b4b4" style="text-align: center" >
    </canvas>
	
	<button id="replaceImg" class="l-btn">更換圖片</button>
    <div id="toolContainer" class="flex flex-space-between">
        <button onClick="thick()" >
            <label>
			<span style="font-family:fantasy;">粗筆</span>
			</label>
        </button>
        <button onClick="thin()" >
            <label>細筆</label>
        </button>
        <button onClick="clean()" >
            <label>清除</label>
        </button>
    </div>
	 <br>
    <div>
        <button value="sun" onclick="changecolor(this.value)" >
            <label>太陽</label>
        </button>
        <button value="sunset" onclick="changecolor(this.value)" >
            <label>夕陽天空</label>
        </button>
        <button value="mountain" onclick="changecolor(this.value)" >
            <label>山</label>
        </button>
        <button value="lightgreen" onclick="changecolor(this.value)" >
            <label>淺綠葉</label>
        </button>
        <button value="green" onclick="changecolor(this.value)" >
            <label>綠葉</label>
        </button>
        <button value="darkgreen" onclick="changecolor(this.value)" >
            <label>深綠葉</label>
        </button>
        <button value="cloud" onclick="changecolor(this.value)" >
            <label>雲</label>
        </button>
        <button value="rock" onclick="changecolor(this.value)" >
            <label>石頭</label>
        </button>
		
		<div>
		<br>
        <button value="waterfall" onclick="changecolor(this.value)" >
            <label>瀑布</label>
        </button>
        <button value="lake" onclick="changecolor(this.value)" >
            <label>湖</label>
        </button>
        </div>
       <br>
		<button value="house" onclick="changecolor(this.value)" >
            <label>房子</label>
		</button>
        <button value="street" onclick="changecolor(this.value)" >
            <label>路</label>
        </button>
		<button value="grass" onclick="changecolor(this.value)">
            <label>草地</label>
        </button>
		
    </div>
    </div>
	
	
									<div  id="transferContainer" class="column" >
										
										<div class="like-table" style="text-align: center">
											<center><button id="transferBtn" onClick="transfer()" >Transfer &darr;</button></center>
											<p id="status">Loading Model...</p>
											</div>
											
										<div class="like-table" style="text-align: center">
											<img id="outimg" name="outimg" src="" width="500px" height="500px"><!--右邊畫布-->
										</div>
										
										<!--<input type="submit" name="button" value="存入資料庫" />-->
<form method="post" action="index.php" enctype="multipart/form-data">
<input type="file" name="img"><br>
<input type="submit" name="sub" value="送出">
</form>

<?php

/*$img = isset($_FILES['outimg']) ? $_FILES['outimg'] : "";
if($img){
    if($img['error'] > 0){
        echo "Error : ".$img['error'];
    }else{
        $name = $img['name'];
		$size = $img['size'];
        $type = $img['type'];
        $tmp = $img['tmp_name'];
        if(move_uploaded_file($img['tmp_name'], "./imgtest/".$name)){
            echo "ok" . "<br/>";
		echo $name ."<br/>" ;
		echo $size ."<br/>";
        echo $type ."<br/>" ;
        echo $tmp ."<br/>" ;
        }else{
            echo "error";
        }
    }
}*/
?>
									
								</div>
       
						</section>
    
	
								
			 <!--图片裁剪框 start-->
    <div style="display: none" class="tailoring-container">
        <div class="black-cloth" onclick="closeTailor(this)"></div>
        <div class="tailoring-content" style="top: 71px; left: 65.5px;">
            <div class="tailoring-content-one">
                <label title="上傳圖片" for="chooseImg" class="l-btn choose-btn">
                    <input type="file" accept="image/jpg,image/jpeg,image/png" name="file" id="chooseImg" class="hidden" onchange="selectImg(this)"> 選擇圖片
                </label>
                <div class="close-tailoring" onclick="closeTailor(this)">×</div>
            </div>
            <div class="tailoring-content-two">
                <div class="tailoring-box-parcel">
                    <img id="tailoringImg">
                </div>
                <div class="preview-box-parcel">
                    <p>圖片預覽：</p>
                    <div class="square previewImg"></div>
                </div>
            </div>
            <div class="tailoring-content-three">
                <button class="l-btn cropper-reset-btn">回復</button>
                <button class="l-btn cropper-rotate-btn">旋轉</button>
                <button class="l-btn cropper-scaleX-btn">轉向</button>
                <button class="l-btn sureCut" id="sureCut">確定</button>
            </div>
        </div>
    </div>
    <!--图片裁剪框 end-->
		
		<script type="text/javascript">

        //弹出框水平垂直居中
        (window.onresize = function () {
            var win_height = $(window).height();
            var win_width = $(window).width();
            if (win_width <= 768) {
                $(".tailoring-content").css({
                    "top": (win_height - $(".tailoring-content").outerHeight()) / 2,
                    "left": 0
                });
            } else {
                $(".tailoring-content").css({
                    "top": (win_height - $(".tailoring-content").outerHeight()) / 2,
                    "left": (win_width - $(".tailoring-content").outerWidth()) / 2
                });
            }
        })();

        //弹出图片裁剪框
        $("#replaceImg").on("click", function () {
            $(".tailoring-container").toggle();
        });
        //图像上传
        function selectImg(file) {
            if (!file.files || !file.files[0]) {
                return;
            }
            var reader = new FileReader();
            reader.onload = function (evt) {
                var replaceSrc = evt.target.result;
                //更换cropper的图片
                $('#tailoringImg').cropper('replace', replaceSrc, false);//默认false，适应高度，不失真
            }
            reader.readAsDataURL(file.files[0]);
        }
        //cropper图片裁剪
        $('#tailoringImg').cropper({
            aspectRatio: 1 / 1,//默认比例
            preview: '.previewImg',//预览视图
            guides: false,  //裁剪框的虚线(九宫格)
            autoCropArea: 0.5,  //0-1之间的数值，定义自动剪裁区域的大小，默认0.8
            movable: false, //是否允许移动图片
            dragCrop: true,  //是否允许移除当前的剪裁框，并通过拖动来新建一个剪裁框区域
            movable: true,  //是否允许移动剪裁框
            resizable: true,  //是否允许改变裁剪框的大小
            zoomable: false,  //是否允许缩放图片大小
            mouseWheelZoom: false,  //是否允许通过鼠标滚轮来缩放图片
            touchDragZoom: true,  //是否允许通过触摸移动来缩放图片
            rotatable: true,  //是否允许旋转图片
            crop: function (e) {
                // 输出结果数据裁剪图像。
            }
        });
        //旋转
        $(".cropper-rotate-btn").on("click", function () {
            $('#tailoringImg').cropper("rotate", 45);
        });
        //复位
        $(".cropper-reset-btn").on("click", function () {
            $('#tailoringImg').cropper("reset");
        });
        //换向
        var flagX = true;
        $(".cropper-scaleX-btn").on("click", function () {
            if (flagX) {
                $('#tailoringImg').cropper("scaleX", -1);
                flagX = false;
            } else {
                $('#tailoringImg').cropper("scaleX", 1);
                flagX = true;
            }
            flagX != flagX;
        });

        //裁剪后的处理
        var cvs = document.getElementById("myCanvas");
        var ctx = cvs.getContext('2d');
        $("#sureCut").on("click", function () {
            if ($("#tailoringImg").attr("src") == null) {
                return false;
            } else {
                var cas = $('#tailoringImg').cropper('getCroppedCanvas');//获取被裁剪后的canvas
                var base64url = cas.toDataURL('image/png'); //转换为base64地址形式
                $("#finalImg").prop("src", base64url);//显示为图片的形式
                var imgObj = document.getElementById("finalImg");
                imgObj.onload = function () {
                    ctx.drawImage(this, 0, 0, 500, 500);//改变图片的大小到500*500
                }
                //关闭裁剪框
                closeTailor();
            }
        });
        //关闭裁剪框
        function closeTailor() {
            $(".tailoring-container").toggle();
        }

        //起始點座標
        let x1 = 0
        let y1 = 0

        // 終點座標
        let x2 = 0
        let y2 = 0

        // 宣告一個 hasTouchEvent 變數，來檢查是否有 touch 的事件存在
        const hasTouchEvent = 'ontouchstart' in window ? true : false

        // 透過上方的 hasTouchEvent 來決定要監聽的是 mouse 還是 touch 的事件
        const downEvent = hasTouchEvent ? 'ontouchstart' : 'mousedown'
        const moveEvent = hasTouchEvent ? 'ontouchmove' : 'mousemove'
        const upEvent = hasTouchEvent ? 'touchend' : 'mouseup'

        // 宣告 isMouseActive 為滑鼠點擊的狀態，因為我們需要滑鼠在 mousedown 的狀態時，才會監聽 mousemove 的狀態
        let isMouseActive = false

        cvs.addEventListener(downEvent, function (e) {
            isMouseActive = true
        })

        cvs.addEventListener(downEvent, function (e) {
            isMouseActive = true
            x1 = e.offsetX
            y1 = e.offsetY
            ctx.lineCap = 'round'
            ctx.lineJoin = 'round'
        })

        cvs.addEventListener(moveEvent, function (e) {
            if (!isMouseActive) {
                return
            }
            // 取得終點座標
            x2 = e.offsetX
            y2 = e.offsetY

            // 開始繪圖
            ctx.beginPath()
            ctx.moveTo(x1, y1)
            ctx.lineTo(x2, y2)
            ctx.stroke()

            // 更新起始點座標
            x1 = x2
            y1 = y2
        })

        cvs.addEventListener(upEvent, function (e) {
            isMouseActive = false
        })

        ctx.fillStyle = "rgb(243,215,82)";
        ctx.fillRect(0, 0, 500, 500);
        ctx.strokeStyle = "#bdc2be";
        ctx.lineWidth = 5
        function thick() {
            ctx.lineWidth = 20
        }
        function thin() {
            ctx.lineWidth = 5
        }
        function clean() {
            ctx.fillStyle = "rgb(243,215,82)";
            ctx.fillRect(0, 0, 500, 500);
        }
        function changecolor(obj){
            if(obj=="sun"){
                ctx.strokeStyle = "#a12f25";
            }
            else if(obj=="sunset"){
                ctx.strokeStyle = "#f3d752";
            }
            else if(obj=="mountain"){
                ctx.strokeStyle = " #454634";
            }
            else if(obj=="lightgreen"){
                ctx.strokeStyle = "#93aa66";
            }
            else if(obj=="green"){
                ctx.strokeStyle = "#6fa068";
            }
            else if(obj=="darkgreen"){
                ctx.strokeStyle = "#45594d";
            }
            else if(obj=="cloud"){
                ctx.strokeStyle = "#bdc2be";
            }
            else if(obj=="rock"){
                ctx.strokeStyle = "#000000";
            }
            else if(obj=="waterfall"){
                ctx.strokeStyle = "#f4f8f9";
            }
            else if(obj=="lake"){
                ctx.strokeStyle = "#6f8885";
            }
            else if(obj=="grass"){
                ctx.strokeStyle = "#ab9c3d";
            }
            else if(obj=="house"){
                ctx.strokeStyle = "#a28247";
            }
            else if(obj=="street"){
                ctx.strokeStyle = "#a19c7c";
            }
			else if(obj=="trunk"){
                ctx.strokeStyle = "#79340a";
            }
        }

    </script>
	
	
								<!-- Form -->
								<div class="column">
								<table border="0" cellpadding="0" cellspacing="0">  
									
									
									
								</div>
										
								</div>
								
 </body>
</html>
