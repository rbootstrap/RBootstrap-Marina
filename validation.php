<?php

		/*
* RBootstrap - Marina (https://rbootstrap.com/marina-construction-and-builder-template/)
* Copyright 2023 RBootstrap
*/

$full_name = $_GET['full_name'];
$email = $_GET['email'];
$phone = $_GET['phone'];
$subject = $_GET['subject'];
$message = $_GET['message'];

$flag=1;
if((empty($full_name)) || (empty($email)) || (empty($phone)) || (empty($subject)) || (empty($message)))
{
	$flag=1;	
}
else
{
	$flag=0;
}

if($flag==1)
{
 echo "<h2 class='text-danger'>Please enter valid details</h2>";	
}
else if($flag==0)
{
	$content = "From: $full_name \nEmail: $email \nPhone: $phone \nSubject: $subject \nMessage: $message";
	//Set the Recipient Email Address
	$recipient = "contact@yourwebsite.com";
	$mailheader = "From: $email \r\n";
	mail($recipient, $subject, $content, $mailheader) or die("Error!");
	
	echo "<h2 class='text-success'>Email Sent</h2>";
}

?>