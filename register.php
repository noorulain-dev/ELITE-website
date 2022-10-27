<!DOCTYPE html>

<!--Description: registration Page-->
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
	

	<!--Banner-->
	<div class="b_container">

		<figure class="page_banner">
			<img src="images/enquiry_banner.jpg"  alt="enquiry" class="banner_img"/>
			<p id="banner_text"> Registration </p>
			
		</figure>
	</div>

	<h1 class="registerh"> Register Here </h1>


	<p class="center"> Please fill in your details in the following fields below: </p>


	<form method="post">
		
		<fieldset>
		
		<legend class="registeruser"> New User </legend>
		
		<p>
		<label for="username">  Name: </label> <br/>
		<input type="text" name="username" id="username" required="required"/>
		</p>	
		
		<p>
		<label for="email_add">  Email Address: </label> <br/>
		<input type="text" placeholder="Email Address" name="email_add" id="email_add" required="required"/>
		</p>
		
		<p>
		<label for="pass">  Password: </label> <br/>
		<input type="password" name="pass" id="pass" size="75" required="required"/>
		</p>
		
    	<p>
	    <label for="confirm_pass">  Confirm Password: </label> <br/>
	    <input type="password" name="confirm_pass" id="confirm_pass" size="75"/>
	    </p>
		
		<p>
		<?php if(isset($_POST['submit_btn'])){
		$name= $_POST['username'];
		$email= $_POST['email_add'];
		$password= $_POST['pass'];
		$confirm_pw= $_POST['confirm_pass'];
		$namepattern = "/[a-zA-Z]+$/";
		$emailpattern = "/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9]+\.[a-zA-Z0-9.-]{1,4}$/";
		
		$errors = "";
		
	    $namevalid = false;
	    $emailvalid = false;
	    $passwordvalid = false;
		
	    if (isset($name)){
	    	if ((strlen($name)> 0) && (preg_match($namepattern, $name))){
	    		$namevalid = true;
	    	}		
		    else{
	    		$errors .= "<p> Invalid name </p>";
	    	}
	    }
		
		if (isset($email)){
		    if (strlen($email)>0 && preg_match($emailpattern, $email)){
			    $emailvalid = true;
		    } else{
			    if (strlen($email)==0){
			    	$errors .= "<p> Enter an email address </p>";
			    }
			    elseif (!preg_match($emailpattern, $email)){
			    	$errors .= "<p> Please enter a valid email address</p>";
			    }
		    }
	    }
		
	    if (isset($password)){
		    if ((strlen($password) > 0) && ($password == $confirm_pw)){
			    $passwordvalid = true;
		    } elseif ($password != $confirm_pw){
		    	$errors .= "<p> Password does not match</p>";
		    } else{
		    	$errors .= "<p> Enter a password </p>";
		    }
	    }
		
		$info = $name . "," . $email . "," . $password . "\n";
        if($namevalid && $emailvalid && $passwordvalid){
			if (file_exists($_POST['email_add'] . '.txt')) {
                echo "<script>window.location = 'already_reg.html';</script>";
                    } else {
			file_put_contents($_POST['email_add'] . '.txt', $info);
		        echo("<script>window.location = 'thankyou_page.html';</script>");
			    }
            } else {
                echo $errors;
            }
		}
	?> </p>

	<div class="registerbttns">
	<button type="submit" name="submit_btn" value="Submit" class="zoom"> Register</button>
	<button type="reset" value="reset" class="zoom"> Cancel</button>
</div>

		<p> Already have an account? Login <a href="login.php" class="ext_link"> here </a> </p>
		
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
