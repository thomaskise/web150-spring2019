<?php include 'config.php';?>
<!DOCTYPE html>
<html lang="en">
<head>
    <title><?=$title?></title>
    <meta name="viewport" content="width=device-width" />
    <meta name="robots" content="noindex,nofollow" />
    <meta name="description" content="Kids Clay Class">
	<meta name="keywords" content="clay,cool,clay is cool,clay's cool, clay class,kids,art,ceramic,1-5,after school,mercer island,island park,pta,pottery,ceramics for kids,childrens activities">
    <meta charset="utf-8">
    <script src="https://use.fontawesome.com/f91d5068d3.js"></script>
    <script src="https://code.jquery.com/jquery-latest.min.js"></script>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Black+And+White+Picture">
    <link rel="stylesheet" href="https://use.fontawesome.com/875675983c.css">
    <link rel="stylesheet" href="css/form.css" />
<!--    <link rel="stylesheet" href="<?php echo CSS_PATH; ?>flex.css" />-->
<!--    <link rel="stylesheet" href="<?php echo CSS_PATH; ?>sidebar.css" />-->
    <link rel="stylesheet" href="css/flex-contact.css" />
    <link rel="stylesheet" href="css/sidebar.css" />
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