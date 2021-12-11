
<?php



/* 
initiation projet
composer require rmccue/requests
composer require mikecao/flight
*/
require "vendor/autoload.php";


include_once('db_connect.php');
include_once('tokenJwt.php');


//header('Content-Type', '*');
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

if($_SERVER["REQUEST_METHOD"] == "OPTIONS") {
    // header('Content-Type', '*');
    header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
   // header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization');
    header("Access-Control-Allow-Origin: *");
     header("Access-Control-Allow-Headers: *");
    echo json_encode( 'ok ok ' , JSON_PRETTY_PRINT);
}


// retour sous format json
function jsonRetour( $valeurRetour) {
    echo json_encode( $valeurRetour, JSON_PRETTY_PRINT);
}


$mysql_connection = new db_connection();
$token = new TokenService();

// décryptage des éléments en passer sous format JSON
$_POST = json_decode(file_get_contents('php://input'), true);


if( isset($_POST['insertionsuser'] ) ) {
    $mysql_connection->inscriptionsUsers( $_POST['nom'] , $_POST['prenom']  , $_POST['mail'] , $_POST['telephone'] , $_POST['datenaissance']  , $_POST['mdp']  );
}

// Connection utilisateur
if( isset( $_POST['connectionUser'])  && isset($_POST['mail']) && isset($_POST['mdp']) ) {
    $mysql_connection->verificationConnectionUsers( $_POST['mail'] , $_POST['mdp'] );
}




/*****************
 * Control avec token 
 */


// list utilisateur
if( isset( $_POST['getListUsers']) &&  isset( $_POST['token'])   ) {
    $mysql_connection->getListUsers( $_POST['token'] );
}



if( isset( $_POST['getUsersById']) &&  isset( $_POST['token'])  &&  isset( $_POST['id']) ) {
    $mysql_connection->getUsersById( $_POST['token'] , $_POST['id'] );
}


if( isset( $_POST['getHotelById']) &&  isset( $_POST['token'])  &&  isset( $_POST['id']) ) {
    $mysql_connection->getHotelById( $_POST['token'] , $_POST['id'] );
}


if( isset( $_POST['getHotelByNom']) &&  isset( $_POST['token'])  &&  isset( $_POST['nom']) ) {
    $mysql_connection->getHotelByNom( $_POST['token'] , $_POST['nom'] );
}


if( isset( $_POST['getListHotels']) &&  isset( $_POST['token'])  ) {
    $mysql_connection->getListHotels( $_POST['token'] );
}



if( isset( $_POST['insertionHotel']) &&  isset( $_POST['token']) &&  isset( $_POST['nom'])  &&  isset( $_POST['prenom']) &&  isset( $_POST['ville']) &&  isset( $_POST['cp'])     ) {
    $mysql_connection->insertionHotel( $_POST['token'] , $_POST['nom'] , $_POST['prenom']  , $_POST['cp'] , $_POST['ville'] , $_POST['adresse'] , $_POST['longitude'] , $_POST['latitude'] ) ;
}

