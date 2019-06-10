<?php include 'config.php';?>
<!DOCTYPE html>
<html lang="en">
<head>
    <title><?=$title?></title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="robots" content="noindex,nofollow" />
    <meta name="description" content="Kids Clay Class">
	<meta name="keywords" content="clay,cool,clay is cool,clay's cool, clay class,kids,art,ceramic,1-5,after school,mercer island,island park,pta,pottery,ceramics for kids,childrens activities">
    <meta charset="utf-8">
    <link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/themes/eggplant/jquery-ui.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay" crossorigin="anonymous">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" /><!--needed for social media plug-in -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Black+And+White+Picture">
    <link rel="stylesheet" href="assets/cool-share/plugin.css" media="all"  />
    <link rel="stylesheet" href="css/form.css" />
    <link rel="stylesheet" href="css/flex.css" />
    <link rel="stylesheet" href="css/sidebar.css" />
    <link rel="stylesheet" href="css/override.css" />
    <link rel="stylesheet" href="css/lightslider.css" type="text/css" />                  
</head>
<body>
<!-- Content -->
<header>
    <div class="logo">
        <a href="index.php"><img src="images/pmdbutton.gif" width="45" height="45" alt="logoimage"></a>
    </div>
    <div class="heading">
        <h1><?=$pageHeading?></h1>
        <p>An after school program by Purple Moon Design LLC in partnership with Island Park PTA</p>
    </div>
</header>
<main>
    <!-- Sidebar -->
    <div class="sidebar">
          <a class="sidebar-trigger" href="#0">
             <i class="fa fa-bars"></i>
          </a>
          <nav class="sidebar-nav">
            <ul><?=makeLinks($nav1)?></ul>
          </nav>      
    </div>
<!-- header2 ends here -->