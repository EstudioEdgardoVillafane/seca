<?php 
class Seca{
	public function ExecuteSql($sql){
		$conex = New Connect();
		$conex -> CreateConnection();
		return $conex -> Execute($sql);
		$conex -> CloseConnection();
	}	  
	public function Search($sql){
		$conex = New Connect();
		$conex -> CreateConnection();
		return $conex -> Search($sql);
		$conex -> CloseConnection();
	}	
	public function CreateJson($sql){
		$con = New Connect();
		$con -> CreateConnection();
		$result = $con -> Execute($sql);
		$i=0;
		$ArrayJson= array();
		while($fila=mysqli_fetch_assoc($result)){
			$ArrayJson[$i] = $fila;
	        $i++;
		}
		echo json_encode($ArrayJson);
		return json_encode($ArrayJson);
		$con -> CloseConnection();		
	}
	public function Borrar($sql){
			$con = new Connect();
			$con->CreateConnection();
			$con->Execute($sql);
			$con->CloseConnection();
	}
	public function SaveJson($varJson){
		$file = 'productos.json';
		file_put_contents($file, $varJson);
	}
	public function ReadJson(){
		echo $dataProduct = file_get_contents("productos.json");
	}
}

?>