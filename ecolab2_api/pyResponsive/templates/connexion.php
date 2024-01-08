<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
    <title>Document</title>
    
</head>

<style>
    .form {
        width: 40%;
    }

    .body {
        text-align: center;
    }
    .sub {
        margin-top: 5%;
    }
    .form-label-space , .form-input-space{
        margin-bottom: 10px; /* Ajustez la marge inférieure selon vos besoins */
    }
</style>

<body>
    <div class="form mx-auto my-5">
        
        <form action="http://localhost:4000/traitement" method="post">

            
        <div class="form-group">
                <label for="login" class="form-label-space">Login</label>
                <input type="text" name="login" class="form-control form-input-space" id="login" placeholder="Identifiant">
                <small id="emailHelp" class="form-text text-muted"></small>
            </div>
            <div class="form-group">
                <label for="password" class="form-label-space">Mot de passe</label>
                <input type="password" name="password" class="form-control form-input-space" id="password" placeholder="mdp">
            </div>
            
            <button type="submit" class="btn btn-primary sub">Submit</button>
        </form>
    </div>
</body>
</html>
