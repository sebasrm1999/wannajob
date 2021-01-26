<?php 
class BackEnd extends CI_Controller{

	public function __construct(){
		parent::__construct();
		$this->load->helper('url');
	}

	public function index(){
		$this->load->view('index');
	}

	public function registro(){
		
		$this->load->view('registro-empresa.php');

	}

	public function empresa(){
		
		$this->load->view('principal-empresa');

	}

	public function empleado(){
		
		$this->load->view('principal-empleado');

	}

	public function login(){
		
		$this->load->view('login');

	}

	public function empleos(){
		
		$this->load->view('empleos');

	}

	public function perfilEmpresa(){
		
		$this->load->view('new-post-empresa');

	}

	public function perfilEmpleado(){
		
		$this->load->view('new-post-empleado');

	}

	public function chatEmpresa(){
		
		$this->load->view('chat-empresa');

	}

	public function chatEmpleado(){
		
		$this->load->view('chat-empleado');

	}

	public function postulaciones(){
		
		$this->load->view('postulaciones');

	}

}
?>