<!DOCTYPE html>

<!--Description: Login Page-->
<!--Date: 15/5/21-->

<html lang="en">
 
<head>
<meta charset="utf-8"/>
<meta name="description" content="ELite Furniture"/>
<meta name="keywords" content="furniture, elite, shop, office, living, room, dining, bedroom"/>
<meta name="author" content="Noor"/>
  
<title> ELite Furniture </title>
  
<link rel="stylesheet" type="text/css" href="CSSfile/style.css"/>
<!-- browser tab icon -->
<link rel="shortcut icon" type="image/x-icon" href="images/favicon.ico"/>
<script src="script/enhancements.js"></script>
<script src="script/script.js"></script>

</head>

<body>

<header id="aboutheader">	

	<div class="logo" id="JLogo">
		<a href="index.html">
			<img src="images/logo.png" alt="Elite"/>
		</a>
	</div>

	<nav id="JNav">
		<ul>
			<li><a href="enquiry.html">Enquiry</a></li>
			<li><a href="login.php">Login</a></li>
			<li><a href="register.php">Register</a></li>
		</ul>
	</nav>
	
</header>
	
	<?php
	session_start();
	if(isset($_POST['submit_btn'])){
		$original_name= $_SESSION['username'];
		$original_email= $_SESSION['e-mail'];
		$new_email=$_POST['new_email_add'];
		$new_name=$_POST['new_username'];
		$password= $_SESSION['pass'];
		$confirm_pw= $_POST['confirm_pass'];
		$allOK = true;
		$errorMessage = "";
		$userInfo = file_get_contents($_SESSION['e-mail'].'.txt');

		if($new_email!=null){
			if($new_email != $_POST['conf_email_add']){
				$allOK = false;
				$errorMessage.="E-mail address does not match!\n";
			}
		} else{
			$new_email = $original_email;
		}

		if($new_name!=null){
			if($new_name != $_POST['conf_username']){
				$allOK = false;
				$errorMessage.="Username does not match!\n";
			}
		}else{
			$new_name = $original_name;
		}



		if($password!=$confirm_pw){
			$allOK = false;
			$errorMessage.="Password does not match!\n";
		}
		

		if($allOK){
			$info = $new_name . "," . $new_email . "," . $password . "\n";
			file_put_contents($new_email . '.txt', $info);
			echo("<script>window.location = 'thankyou_page.html';</script>");
		}	
		else{
			echo "<script type='text/javascript'>alert('$errorMessage');</script>";
		}

	}
	?>

	<!--Banner-->
	<div class="b_container">

		<figure class="page_banner">
			<img src="images/enquiry_banner.jpg"  alt="enquiry" class="banner_img"/>
			<p id="banner_text"> Account Editing </p>
			
		</figure>
	</div>

	<h1 class="registerh"> Edit Account Details Here </h1>


	<p class="center"> Please fill in the detail(s) you wish to change in the following fields below: </p>


	<form action="editAccount.php" method="post">
		
		<fieldset>
		
		<legend class="registeruser"> New User </legend>
		
		<p>
		<label for="username">  Username: </label> <br/>
		<input type="text" name="username" id="username" value="<?php echo $_SESSION['username']?>">
		</input>
		</p>

		<p>
		<label for="username">  New Username: </label> <br/>
		<input type="text" name="new_username" id="new_username">
			
		</input>
		</p>	

		<p>
		<label for="username">  Confirm Username: </label> <br/>
		<input type="text" name="conf_username" id="conf_username">
			
		</input>
		</p>		
		
		<p>
		<label for="email_add">  Email Address: </label> <br/>
		<input type="text" placeholder="Email Address" name="email_add" id="email_add" value="<?php echo $_SESSION['e-mail']?>">
		</input>
		</p>
		
		<p>
		<label for="email_add">  New Email Address: </label> <br/>
		<input type="text" placeholder="Email Address" name="new_email_add" id="new_email_add"/>
		</p>

		<p>
		<label for="email_add">  Confirm Email Address: </label> <br/>
		<input type="text" placeholder="Email Address" name="conf_email_add" id="conf_email_add"/>
		</p>

		<p>
		<label for="pass">  Password: </label> <br/>
		<input type="password" name="pass" id="pass" size="75">
		</input>
		</p>

		<p>
		<label for="confirmpass">  Confirm Password: </label> <br/>
		<input type="password" name="confirm_pass" id="confirm_pass" size="75">
		</input>
		</p>
		

		<div class="registerbttns">
	<button type="submit" name="submit_btn" value="Submit" class="zoom"> Confirm</button>
	<button type="reset" value="reset" class="zoom"> Cancel</button>
</div>
		
		</fieldset>
				

	</form>
		
		
  
<footer>
    <hr/>
    <hr/>
	
	<div class="logo">
		<a href="index.html">
			<img src="images/logo.png" alt="elite"/>
		</a>
	</div>
	
	<div class="footer_menu">
		<ul>
			<li><strong>Products</strong></li>
			<li><a href="product1.html" class="flinks">Dining Room</a></li>
			<li><a href="product2.html" class="flinks">Living Room</a></li>
			<li><a href="product3.html" class="flinks">Bedroom</a></li>
			<li><a href="product4.html" class="flinks">Office</a></li>
		</ul>
		
		<ul>
			<li><strong>ELite</strong></li>
			<li><a href="index.html" class="flinks">Home Page</a></li>
			<li><a href="enquiry.html" class="flinks">Enquiries</a></li>
			<li><a href="disclaimer.html" class="flinks">Disclaimer</a></li>
		</ul>
		
		
	</div>
	
	<div class="footer_socials">
		<h3> Our Socials </h3>
		<a href="https://www.instagram.com/" target="new_window"><img src="images/instagram_icon.png" alt="Instagram Icon" title="Instagram" class="socials"/></a>
		<a href="https://www.facebook.com/" target="new_window"><img src="images/facebook_icon.png" alt="Facebook Icon" title="Facebook" class="socials"/></a>
		<a href="https://twitter.com/Twitter" target="new_window"><img src="images/twitter_icon.png" alt="Twitter Icon" title="Twitter" class="socials"/></a>
		<a href="tel:+60179099750"><img src="images/whatsapp_icon.png" alt="Whatsapp Icon" title="Whatsapp" class="socials"/></a>
	</div>
	
	<div class="footer_credits">
		<h3> Acknowledgements </h3>
		<p> ELite Furniture would like to acknowledge the use of images from </p>
		<a href="https://www.luluandgeorgia.com/" target="new_window" title="Click to visit their website" class="flinks"> Lulu and Georgia</a> |
		<a href="https://www.potterybarn.com/" target="new_window" title="Click to visit their website" class="flinks"> Pottery Barn</a> |
		<a href="https://www.pexels.com/" target="new_window" title="Click to visit their website" class="flinks">Pexels</a> |
		<a href="https://icons8.com/icons" target="new_window" title="Click to visit their website" class="flinks"> Icons</a> 
	</div>
	
	<p class="footer_bottom">  Est. 2020 | Copyright &#169; ELite Furniture Co. | 
	Email: <a href="mailto:102763334@students.swinburne.edu.my" class="ext_link" title="Email Noor"> 102763334@students.swinburne.edu.my</a> </p>
</footer>


</body>
</html>


