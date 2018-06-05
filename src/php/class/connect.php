<?php 
class Connect{
	
	private $host;
	private $user;
	private $password;
	private $database;
	private $conn;
	 
	public function __construct(){ 

	include_once("config.php");
	
	$this->host=HOST;
	$this->user=USER; 
	$this->password=PASSWORD;
	$this->database=DATABASE;
	   
	}
	public function CreateConnection(){
		$this->conn = new mysqli($this->host, $this->user, $this->password, $this->database);
	}	  
	public function CloseConnection(){
		$this->conn->close();
	}
	public function Execute($sql){
		$result = $this->conn->query($sql);
		return $result;
	}
	public function ExecuteDos($sql){
		$result = $this->conn->query($sql);
		return $result;
	}
	public function ExecuteTr($sql){
		$this->conn->query($sql);
		return mysqli_insert_id($this->conn);
	}
	public function Search($sql){
		$result = $this->conn->query($sql);
		return mysqli_num_rows($result);
	}
}

?>