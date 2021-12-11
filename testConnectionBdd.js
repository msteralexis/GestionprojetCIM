var mysql = require('mysql');
         var con = mysql.createConnection({
            host: "localhost",
            user: "zaza",
            password: "zaza",
            database: 'country'
            });

            con.connect(function(err) {
            if (err) throw err;
                console.log("connecter")
            });



            con.query('SELECT * FROM user', (err,rows) => {
              if(err) throw err;
              console.log(rows);
            });


            con.query(' insert into user(nom,prenom,email,mdp) value("za","za","za","za");', (err,rows) => {
              if(err) throw err;
              console.log(rows);
            });
           