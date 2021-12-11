


<h2>  Connection pour obtenir token </h2>

<form action="https://www.alexisescudero.info/gestionprojetApi/index.php" method="post"  >
  
  <div >  <input type="hidden" name="connectionUser" value="connectionUser" > </div>

  <div  >
    <label for="mail">Enter your name: </label>
    <input type="text" name="mail" id="mail" required>
  </div>
  
  <div  >
    <label for="mdp">Enter your email: </label>
    <input type="mdp" name="mdp" id="mdp" required>
  </div>

  <div  >
    <input type="submit" value="Subscribe!">
  </div>

</form>




<h2> Inscriptions Users  </h2>

<form action="https://www.alexisescudero.info/gestionprojetApi/index.php" method="post"  >

 

  <div >  <input type="hidden" name="insertionUser" value="insertionUser" > </div>


    <div >
      <label for="nom"> nom </label>
      <input type="text" name="nom" id="nom" >
    </div>

    <div  >
      <label for="prenom"> prenom </label>
      <input type="text" name="prenom" id="prenom" >
    </div>

    <div  >
      <label for="datenaissance"> date naissance</label>
      <input type="text" name="datenaissance" id="datenaissance" >
    </div>
    
    <div  >
      <label for="telephone"> telephone </label>
      <input type="text" name="telephone" id="telephone" >
    </div>
    
    <div  >
      <label for="mail"> MAIL</label>
      <input type="text" name="mail" id="mail" >
    </div>

    <div  >
      <label for="mdp"> MDP </label>
      <input type="mdp" name="mdp" id="mdp" >
    </div>

    <div  >
      <input type="submit" value="Subscribe!">
    </div>

  </form>
  



<h2>  Lister Users avec token </h2>

<form action="https://www.alexisescudero.info/gestionprojetApi/index.php" method="post"  >



  <div >  <input type="hidden" name="getListUsers" value="getListUsers" > </div>


  <div  >
    <label for="token"> toek for list users </label>
    <input type="token" name="token" required>
  </div>

  <div  >
    <input type="submit" value="Subscribe!">
  </div>

</form>

<h2>  details users avec token </h2>

<form action="https://www.alexisescudero.info/gestionprojetApi/index.php" method="post"  >

  <div >  <input type="hidden" name="getUsersById" value="getUsersById" > </div>

  <div  >
    <label for="token"> token for details users  </label>
    <input type="token" name="token" >
  </div>

  <div  >
    <label for="id"> id  </label>
    <input type="id" name="id" >
  </div>

  <div  >
    <input type="submit" value="Subscribe!">
  </div>

</form>





<h2>  details hotel avec token </h2>

<form action="https://www.alexisescudero.info/gestionprojetApi/index.php" method="post"  >


  <div >  <input type="hidden" name="getHotelById" value="getHotelById" > </div>


  <div  >
    <label for="token"> token for details hotel </label>
    <input type="token" name="token" >
  </div>

  <div  >
    <label for="id"> id </label>
    <input type="id" name="id" >
  </div>

  <div  >
    <input type="submit" value="Subscribe!">
  </div>

</form>



<h2>  details hotel avec token </h2>

<form action="https://www.alexisescudero.info/gestionprojetApi/index.php" method="post"  >



  <div >  <input type="hidden" name="getHotelByNom" value="getHotelByNom" > </div>



  <div  >
    <label for="token"> token + nom => details hotel  </label>
    <input type="token" name="token" >
  </div>

  <div  >
    <label for="nom"> nom </label>
    <input type="nom" name="nom" >
  </div>

  <div  >
    <input type="submit" value="Subscribe!">
  </div>

</form>





<h2> Inscriptions Hotel </h2>

<form action="https://www.alexisescudero.info/gestionprojetApi/index.php" method="post"  >



  <div >  <input type="hidden" name="insertionHotel" value="insertionHotel" > </div>


  <div  >
    <label for="token"> token   </label>
    <input type="token" name="token" >
  </div>


    <div >
      <label for="nom"> nom </label>
      <input type="text" name="nom" id="nom" >
    </div>

    <div  >
      <label for="prenom"> prenom </label>
      <input type="text" name="prenom" id="prenom" >
    </div>

    <div  >
      <label for="cp"> cp </label>
      <input type="text" name="cp" id="cp" >
    </div>
    
    <div  >
      <label for="ville"> ville </label>
      <input type="text" name="ville" id="ville" >
    </div>
    
    <div  >
      <label for="adresse"> adresse </label>
      <input type="text" name="adresse" id="adresse" >
    </div>

    <div  >
      <label for="longitude"> longitude </label>
      <input type="text" name="longitude" >
    </div>

    <div  >
      <label for="latitude"> latitude </label>
      <input type="text" name="latitude" >
    </div>

    <div  >
      <input type="submit" value="Subscribe!">
    </div>

  </form>






  <h2> liste Hotels </h2>

  <form action="https://www.alexisescudero.info/gestionprojetApi/index.php" method="post"  >


  <div >  <input type="hidden" name="getListHotels" value="getListHotels" > </div>


    <div  > <label for="token"> token   </label>     <input type="token" name="token" > </div>
    <div  > <input type="submit" value="Subscribe!"> </div>
  </form>
  
  


  

<?php
