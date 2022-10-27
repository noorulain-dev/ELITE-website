<?php
namespace drmonkeyninja;
class Average
{
    public function namevalid(string $name)
    {
		$namepattern = "/[a-zA-Z]+$/";
        if ((strlen($name)> 0) && (preg_match($namepattern, $name))){
	    		return "name_valid";
	    	}		
		    else{
	    		return "name_invalid";
	    	}
    }
	
	public function emailvalid(string $email){
		$emailpattern = "/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9]+\.[a-zA-Z0-9.-]{1,4}$/";
		
		if (strlen($email)>0 && preg_match($emailpattern, $email)){
			    return "email_valid";
		    } else{
			    if (strlen($email)==0){
			    	return "email not entered";
			    }
			    elseif (!preg_match($emailpattern, $email)){
			    	return "email_invalid";
			    }
		    }
	}
	
	public function passwordvalid(string $password, string $confirm_password){
		if ((strlen($password) > 0) && ($password == $confirm_password)){
			    return "passwords_match";
		    } elseif ($password != $confirm_password){
		    	return "passwords do not match";
		    } else{
		    	return "password not entered";
		    }
	}
}
?>
