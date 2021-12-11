<?php
// La classe db_connection assure une connection avec la base de donnée
// MySQL, elle permet également de réaliser des opérations comme récupérer
// des données et en poster.
class db_connection {

    private $mysql_connection; // objet PDO

    private $user = "lolo";
    private $pass = "lolo";
    private $host = "localhost";
    private $dbname = "gestionProjet";
    


    // Constructeur 
    public function __construct() {
        // Connection bdd 
        try {
            $this->mysql_connection = new PDO('mysql:host=' . $this->host . ';dbname=' . $this->dbname . ';charset=utf8', $this->user, $this->pass);
        } catch (Exception $e) {
            die('Erreur connexion MySQL : ' . $e->getMessage());  //On définit le mode d'erreur de PDO sur Exception
        }
    }



    // affichage du json
    private function affichageJson($responseJson) {
        header('Content-Type: application/json');
        echo json_encode($responseJson, JSON_PRETTY_PRINT);
    }



    /***********************************
     * 
     * Pa Bessoin de vérifier le token 
     * 
     */

    // A revoir 
    public function testInscription( $nom, $password) {
        $result = true; 
      
        return $result;
    }
    
    public function inscriptionsUsers($nom, $prenom, $mail, $telephone, $datenaissance, $mdp){
        $resultat = " Erreur dans l'injection de donner. ";
        if( $this->testInscription( $nom, $mdp) ) { 
            $resultat = " Utilisateur déja existant. ";
            if(! $this->compteExistant($mail) ) {
                $mdp =  md5($mdp);
                $request_prepared = $this->mysql_connection->prepare("INSERT INTO users(nom, prenom, telephone, datenaissance, mail, mdp )  VALUES(?,?,?,?,?,?)");
                if ($request_prepared->execute(array($nom, $prenom, $telephone, $datenaissance, $mail, $mdp ) )) { 
                    $resultat = " Utilisateur Ajouter. ";
                } 
            }  

        }
        $resultat= array("retour" => $resultat);
        $this->affichageJson( $resultat ); 
    }

     // Grace au nom passer en paramètre on vérifie si il n'existe pas déja en bdd.
     public function compteExistant($mail){
        $request_prepared = $this->mysql_connection->prepare("SELECT count(mail) from users where mail = '$mail' ");
        if ($request_prepared->execute( )) { 
            $request_row = $request_prepared->fetch();
            if( $request_row[0] > 0 ){ return true; }
        } 
        return false;
    }


    // On vérifie si le mot de pass et le nom utilisateur renseigner sont correcte.
    public function verificationConnectionUsers( $mail, $mdp ){
        $result = "Probleme dans execution de la requete connection utilisateur";
        $mdp =  md5($mdp);
        $request_prepared = $this->mysql_connection->prepare("SELECT count(nom) from users where mail = '$mail' and mdp ='$mdp' ");
        if ($request_prepared->execute( )) { 
            $request_row = $request_prepared->fetch();
            if( $request_row[0] > 0 )
                $result = $this->creationTokenUtilisateur( $mail, $mdp );
            else
                $result = "Mot de passe / login incorrect" ;
        } 
        $this->affichageJson($result);
    }

    // Création d'un token utilisateur
    public function creationTokenUtilisateur( $mail, $mdp ) {
        include_once('tokenJwt.php');
        $token = new TokenService;
        return $token->generatejwtToken($mail, $mdp ) ;
    }



    /***********************************
     * 
     * Bessoin vérification token 
     * 
     */




    // Récupère toutes les occurrences de la table users
    // et affiche le JSON des occurrences 
    public function getListUsers($tokenUser){
        include_once('tokenJwt.php');
        $token = new TokenService;
        if( $token->checkjwtTokenSignature( $tokenUser ) ){
            $request = "SELECT * FROM users";
            $responseJson = array();
            $request_prepared = $this->mysql_connection->prepare($request);
            $request_prepared->execute();
    
            while ($request_row = $request_prepared->fetch()) {
                $currentRowArray = array('id' => $request_row["id"], 'nom' => $request_row['nom'], 'prenom' => $request_row["prenom"], 'mail' => $request_row["mail"], 'telephone' => $request_row["telephone"], 'datenaissance' => $request_row["datenaissance"] );
                array_push($responseJson, $currentRowArray);        
            }
            $this->affichageJson($responseJson);
        }else {
            $this->affichageJson( "erreur token");
        }
    }


    // Récupère l'occurrences de la table “users” avec $id
    // et affiche le JSON de cette occurrence
    public function getUsersById($tokenUser ,$id)  {
        include_once('tokenJwt.php');
        $token = new TokenService;
        if( $token->checkjwtTokenSignature( $tokenUser ) ){
            $request = "SELECT * FROM users WHERE id = ?";
            $responseJson = array();
            $request_prepared = $this->mysql_connection->prepare($request);
            $request_prepared->execute(array($id));

            // select 1 ligne 
            if($request_prepared->rowCount() > 0){
                $request_row = $request_prepared->fetch();
                $responseJson = array('id' => $request_row["id"], 'nom' => $request_row['nom'], 'prenom' => $request_row["prenom"], 'mail' => $request_row["mail"], 'telephone' => $request_row["telephone"], 'datenaissance' => $request_row["datenaissance"] );    
            }
            // select 0 ligne (donc aucun resultat)
            else{
                $responseJson = array('status' => 'ID Users inconnue');
            }
            $this->affichageJson($responseJson);
        }else {
            $this->affichageJson( "erreur token");
        } 
    }




    public function getHotelById($tokenUser ,$id)  {
        include_once('tokenJwt.php');
        $token = new TokenService;
        if( $token->checkjwtTokenSignature( $tokenUser ) ){
            $request = "SELECT * FROM hotel WHERE id = ?";
            $responseJson = array();
            $request_prepared = $this->mysql_connection->prepare($request);
            $request_prepared->execute(array($id));

            // select 1 ligne 
            if($request_prepared->rowCount() > 0){
                $request_row = $request_prepared->fetch();
                $responseJson = array('id' => $request_row["id"], 'nom' => $request_row['nom'], 'prenom' => $request_row["prenom"], 'cp' => $request_row["cp"], 'ville' => $request_row["ville"], 'adresse' => $request_row["adresse"] , 'longitude' => $request_row["longitude"], 'latitude' => $request_row["latitude"] );    
            }
            // select 0 ligne (donc aucun resultat)
            else{
                $responseJson = array('status' => 'ID Hotel inconnue');
            }
            $this->affichageJson($responseJson);
        }else {
            $this->affichageJson( "erreur token");
        } 
    }




    public function insertionHotel($tokenUser, $nom, $prenom, $cp, $ville, $adresse, $longitude, $latitude){

        include_once('tokenJwt.php');
        $token = new TokenService;
        if( $token->checkjwtTokenSignature( $tokenUser ) ){
            $resultat = " Erreur dans l'injection de donner. ";
       
            $request_prepared = $this->mysql_connection->prepare("INSERT INTO hotel(nom, prenom, cp, ville, adresse, longitude, latitude )  VALUES(?,?,?,?,?,?,?)");
            if ($request_prepared->execute(array($nom, $prenom, $cp , $ville, $adresse, $longitude, $latitude ) )) { 
                $resultat = " Hotel Ajouter. ";
            }   
            
            $resultat= array("retour" => $resultat);
            $this->affichageJson( $resultat ); 
        }else{
            $this->affichageJson( "Erreur Token" ); 
        }
        
    }


    

    public function getHotelByNom($tokenUser ,$nom)  {
        include_once('tokenJwt.php');
        $token = new TokenService;
        if( $token->checkjwtTokenSignature( $tokenUser ) ){
            $request = "SELECT * FROM hotel WHERE nom like '%$nom%'  ";
            $responseJson = array();
            $request_prepared = $this->mysql_connection->prepare($request);
            $request_prepared->execute(array());

            // select 1 ligne 
            if($request_prepared->rowCount() > 0){
                $request_row = $request_prepared->fetch();
                $responseJson = array('id' => $request_row["id"], 'nom' => $request_row['nom'], 'prenom' => $request_row["prenom"], 'cp' => $request_row["cp"], 'ville' => $request_row["ville"], 'adresse' => $request_row["adresse"] , 'longitude' => $request_row["longitude"], 'latitude' => $request_row["latitude"] );    
            }
            // select 0 ligne (donc aucun resultat)
            else{
                $responseJson = array('status' => 'ID Hotel inconnue');
            }
            $this->affichageJson($responseJson);
        }else {
            $this->affichageJson( "erreur token");
        } 
    }


    public function getListHotels($tokenUser) {
        include_once('tokenJwt.php');
        $token = new TokenService;
        if( $token->checkjwtTokenSignature( $tokenUser ) ){
            $request = "SELECT * FROM hotel";
            $responseJson = array();
            $request_prepared = $this->mysql_connection->prepare($request);
            $request_prepared->execute();
    
            while ($request_row = $request_prepared->fetch()) {
                $currentRowArray = array('id' => $request_row["id"], 'nom' => $request_row['nom'], 'prenom' => $request_row["prenom"], 'cp' => $request_row["cp"], 'ville' => $request_row["ville"], 'adresse' => $request_row["adresse"] , 'longitude' => $request_row["longitude"], 'latitude' => $request_row["latitude"] );    
                array_push($responseJson, $currentRowArray);        
            }
            $this->affichageJson($responseJson);
        }else {
            $this->affichageJson( "erreur token");
        }
    }






    

  

   



    

}


