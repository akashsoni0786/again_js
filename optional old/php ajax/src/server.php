<?php
session_start();
if(isset($_POST['title'])){
    $title = $_POST['title'];
    $rate = $_POST['rate'];
    $_SESSION['movie'][$title] = $rate;
    echo json_encode($_SESSION['movie']);

}
if(isset($_POST['showtable'])){
    echo json_encode($_SESSION['movie']);
}
if(isset($_POST['destroy'])){
    // session_unset();
    // session_destroy();
    unset($_SESSION['movie']);
    echo json_encode($_SESSION['movie']);
}
if(isset($_POST['deleterow'])){
    $movie = $_POST['deleterow'];
    unset($_SESSION['movie'][$movie]);
    echo json_encode($_SESSION['movie']);  
}
if(isset($_POST["ratingass"])){
    asort($_SESSION['movie']);
    echo json_encode($_SESSION['movie']);
}

if(isset($_POST["ratingdes"])){
    arsort($_SESSION['movie']);
    echo json_encode($_SESSION['movie']);
}

if(isset($_POST["titleass"])){
    ksort($_SESSION['movie']);
    echo json_encode($_SESSION['movie']);
}

if(isset($_POST["titledes"])){
    krsort($_SESSION['movie']);
    echo json_encode($_SESSION['movie']);
}
?>