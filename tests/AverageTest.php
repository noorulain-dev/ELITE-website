<?php

use drmonkeyninja\Average;
use PHPUnit\Framework\TestCase;

class AverageTest extends TestCase
{
    protected $Valid;

    public function setUp()
    {
        $this->Average = new Average();
    }

    public function testNameValid(){
        $name = "noorulain";
		$this ->assertEquals("name_valid", $this->Average->namevalid($name));
		
		$name0= "";
		$this ->assertEquals("name_invalid", $this->Average->namevalid($name0));
    }
	
	public function testEmailValid(){
		$email= "noor_ua@yahoo.com";
		$this->assertEquals("email_valid", $this->Average->emailvalid($email));
		
		$email0="";
		$this->assertEquals("email not entered", $this->Average->emailvalid($email0));
		
		$email1= "noorulain";
		$this->assertEquals("email_invalid", $this->Average->emailvalid($email1));
	}
	
	public function testPasswordValid(){
		$password = "123january";
		$confirm_pw = "123january";
		$this->assertEquals("passwords_match", $this->Average->passwordvalid($password, $confirm_pw));
		
		$password0="";
		$confirm_pw0="";
		$this->assertEquals("password not entered", $this->Average->passwordvalid($password0, $confirm_pw0));
		
		$password1 = "17january";
		$confirm_pw1="00january";
		$this->assertEquals("passwords do not match", $this->Average->passwordvalid($password1, $confirm_pw1));	
	}
}
?>
