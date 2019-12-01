<?php

require 'Slim/Slim.php';

\Slim\Slim::registerAutoloader();

use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Message\ResponseInterface;


$app = new \Slim\Slim();
$body = $app->request->getBody();


//connect to database
function getConnection() {
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "enered_db";

    // Create connection
    $conn = mysqli_connect($servername, $username, $password);

    // Check connection
    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }
    mysqli_select_db($conn, $dbname);
    return $conn;
}

$dbh = getConnection();


$app->get('/test', function () use ($app, $dbh) {
    echo 'This is a test';
});

// // POST route
// $app->post('/login', function () use ($app, $dbh) {
//     $json = $app->request->getBody();
//     $result = json_decode($json, true);
//     $query = "SELECT * FROM `users` WHERE `password`='".$result['password']."' AND (`username`='".$result['username']."' OR `email`='".$result['username']."')";
//     $result = mysqli_query($dbh, $query); 
//     $info = mysqli_fetch_assoc($result);
//     if($info != NULL) {
//         $token = generateRandomString();
//         $queryUpdate = "UPDATE `users` SET `loginToken`='".$token."' WHERE (`username`='".$result['username']."' OR `email`='".$result['username']."')";
//         $result = mysqli_query($dbh, $query);
//         if($result != NULL) {
//             echo "{token:".$token."}";
//         } else {
//             echo "Try again!";
//         }
//     } else {
//         echo "Try again!";
//     }

// });

// //CREATE USER 
// $app->post('/register', function () use ($app, $dbh) {
//     $json = $app->request->getBody();
//     $result = json_decode($json, true);
//     $query = "SELECT * FROM `users` WHERE `username`='".$result['username']."' OR  `email`='".$result['email']."'";
//     $resultQuery = mysqli_query($dbh, $query);
//     $infoQuery = mysqli_fetch_assoc($resultQuery);
//     if($infoQuery == NULL) {
//         $queryUpdate = "INSERT INTO `users` (`username`, `email`, `password`) VALUES ('".$result['username']."', '".$result['email']."', '".$result['password']."')";
//         $result = mysqli_query($dbh, $queryUpdate);
//         if($result != NULL) {
//             echo "{result : true}";
//         } else {
//             echo "{result : false}";
//         }
//     } else {
//         echo "{result : false}";
//     }

// });
// // CREATE
// $app->post('/profile', function () use ($app, $dbh) {
//     $json = $app->request->getBody();
//     $result = json_decode($json, true);
//     // validate user
//     $user_id = validateUser($result["token"], $dbh);
//     if($user_id) {
//         // do something with data
//         $id = validateUserProfileCreation($user_id, $dbh); 
//         if($id) {
//             $query = "UPDATE `user_profile` SET `username`='".$result["username"]."', `firstname`='".$result["firstname"]."', `lastname``='".$result["lastname`"]."', `email`='".$result["email"]."', `profession`='".$result["profession"]."', `address`='".$result["address"]."'";
//             $result = mysqli_query($dbh, $query);
//             if($result) {
//                 echo '{result: true}';        
//             } else {
//                 echo '{result: false}';
//             }
//         } else {
//             $query = "INSERT INTO `user_profile` (`user_id`, `username`, `firstname`, `lastname`, `email`, `profession`, `address`) VALUES ('".$user_id."', '".$result['username']."', '".$result['firstname']."', '".$result['lastname']."', '".$result['email']."', '".$result['profession']."', '".$result['address']."')";
//             $result = mysqli_query($dbh, $query);
//             if($result) {
//                 echo '{result: true}';        
//             } else {
//                 echo '{result: false}';
//             }   
//         }
//     }
// });

// function validateUserProfileCreation($user_id, $dbh) {
//     $query = "SELECT * FROM `user_profile` WHERE `user_id`='".$user_id."'";
//     $result = mysqli_query($dbh, $query);
//     if($result) {
//         $info = mysqli_fetch_assoc($result);
//         return $info["id"];
//     } else {
//         return false;
//     }
// }

// function validateUser($token, $dbh) {
//     $query = "SELECT * FROM `users` WHERE `loginToken`='".$token."'";
//     $result = mysqli_query($dbh, $query);
//     if($result) {
//         $info = mysqli_fetch_assoc($result);
//         return $info["id"];
//     } else {
//         return false;
//     }
// }


// function generateRandomString($length = 50) {
//     $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
//     $charactersLength = strlen($characters);
//     $randomString = '';
//     for ($i = 0; $i < $length; $i++) {
//         $randomString .= $characters[rand(0, $charactersLength - 1)];
//     }
//     return $randomString;
// }



/**
 * Step 4: $Run the Slim application
 *
 * This method should be called last. This executes the Slim application
 * and returns the HTTP response to the HTTP client.
 */
$app->run();
