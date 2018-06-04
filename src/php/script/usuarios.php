<?php
session_start();

	include '../class/abacor.php';
	include '../class/connect.php';

	$NewConnect = new Abacor();
	
	if($_GET["data"]==1){
		
		$AuxVar;
		$AuxVar = md5($_GET["u_contrasena"]);
		$SQL = "SELECT * FROM usuarios WHERE u_usuario = '".$_GET["u_usuario"]."' AND u_contrasena = '".$AuxVar."' AND u_status=1";	
		$Row = $NewConnect->Search($SQL);
		if($Row == 1){
			$_SESSION["usuario"] = $_GET["u_usuario"];
			echo $Row;
		}else{
			echo 0;
		}
	}elseif($_GET["data"]==8){
		$AuxVar;
		$AuxVar = md5($_GET["Password"]);
		$SQL = "SELECT * FROM usuarios WHERE u_id = '".$_GET["u_id"]."' AND u_contrasena = '".$AuxVar."' AND u_status=1";	
		$Row = $NewConnect->Search($SQL);
		if($Row == 1){
			echo $Row;
		}else{
			echo 0;
		}
	}elseif($_GET["data"]==2){
		$sqld = "UPDATE usuarios SET u_status = 0 WHERE u_id = '".$_GET["u_id"]."'";
		$NewConnect->Borrar($sqld);
	}elseif($_GET["data"]==3){
		$sql = "INSERT INTO usuarios (u_usuario,u_mail,u_contrasena,u_status) 
		VALUES ('".$_GET["u_usuario"]."','".$_GET["u_mail"]."','".md5($_GET["u_contrasena"])."','1')";
		$NewConnect->ExecuteSql($sql);
	}elseif($_GET["data"]==4){
		$sql="UPDATE usuarios SET
        u_usuario = '".$_GET["u_usuario"]."',
        u_mail = '".$_GET["u_mail"]."',
        u_contrasena = '".md5($_GET["u_contrasena"])."'
         WHERE u_id = '".$_GET["u_id"]."'";
		$NewConnect->ExecuteSql($sql);
	}elseif($_GET["data"]==7){
		$sql="UPDATE usuarios SET
        u_usuario = '".$_GET["u_usuario"]."',
        u_mail = '".$_GET["u_mail"]."'
         WHERE u_id = '".$_GET["u_id"]."'";
		$NewConnect->ExecuteSql($sql);
	}elseif($_GET["data"]==5){
			$SQL = "SELECT * FROM usuarios WHERE u_status=1";	
			$NewConnect->CreateJson($SQL);			
	}elseif($_GET["data"]==6){
		echo $_SESSION["usuario"];
	}

?>