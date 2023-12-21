

<?php

// L'URL de l'API externe que vous souhaitez interroger
$api_url = 'https://10.119.20.100:8080';

// Initialiser une session cURL
$ch = curl_init($api_url);

// Configurer les options cURL
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

// Exécuter la requête cURL et récupérer les données
$data = curl_exec($ch);

// Vérifier s'il y a des erreurs
if (curl_errno($ch)) {
    echo 'Erreur cURL : ' . curl_error($ch);
} else {
    // Convertir les données JSON en tableau associatif
    $result = json_decode($data, true);

    // Vérifier si la conversion a réussi
    if ($result !== null) {
        // Les données sont maintenant disponibles dans le tableau $result
        print_r($result);
    } else {
        // La conversion JSON a échoué
        echo 'Erreur lors de la conversion JSON';
    }
}

// Fermer la session cURL
curl_close($ch);



?>