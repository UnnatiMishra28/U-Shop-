<?php
$servername="localhost";
$username="root";
$password="";
$database="";
$con=mysqli_connect($servername,$username,$password,$database);
//$con=mysqli_connect("localhost","root","","u-shop");
if(!$con)
{
    die("error detected".mysqli_error($con));
}
?>