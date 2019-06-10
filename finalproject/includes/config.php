<?php
/*
config.php for fp

stores configuration information for our web application
 * config.php provides a place to store configuration info, 
 * such as your reCAPTCHA site keys
*/

//removes header already sent errors
ob_start();

include 'credentials.php';//my credentials are here for security
    
define('SECURE',true); #force secure, https, for all site pages

header("Cache-Control: no-cache");header("Expires: -1");#Helps stop browser & proxy caching

define('DEBUG',true); #we want to see all errors 

//define the parent folder of the current page as a constant - save for later use
define('PAGE_PARENT',basename(dirname($_SERVER['PHP_SELF'])));

//define the current page name as a constant
define('THIS_PAGE',basename($_SERVER['PHP_SELF']));

//set sub_folder when site is not in root folder - be sure to add trailing slash!

    $sub_folder = 'web120/';

//force secure website
    if (SECURE && $_SERVER['SERVER_PORT'] != 443) {#force HTTPS
        header("Location: https://".$_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI']);
        $protocol = 'https://';
    }else{//adjust protocol
        $protocol = (SECURE==true ? 'https://' : 'http://'); // returns true
    }
//$protocol = https://
//$_SERVER["HTTP_HOST"] = kiseharrington.com
//$_SERVER["DOCUMENT_ROOT"] = /home/thohar69/kiseharrington.com

//set virtual path to web root in site subfolder
    $virtual_path = $protocol . $_SERVER["HTTP_HOST"] . '/' . $sub_folder;

//will add sub-folder if not loaded to root:
    $physical_path = 'www' . $_SERVER["DOCUMENT_ROOT"] . '/' . $sub_folder;

//define subfolder paths
    define('CLASS_PAGE_PATH', $virtual_path . 'class-pages/');
    define('CSS_PATH', $virtual_path . 'css/');
    define('IMAGE_PATH', $virtual_path . 'images/');
    define('INCLUDE_PATH', $virtual_path  . 'includes/');
    define('JS_PATH', $virtual_path  . 'js/');

switch(THIS_PAGE){
    case "index.php":
        $title="Clay's Cool Home";
        $pageHeading="Clay's Cool";
        $sectionHeading="YAY! Clay's Cool!";
        $formAutoFocus="autofocus";
        $logo="fa fa-fw fa-home";
        $pageImage="home.png";
        $imagetitle="Zany and Comical Creatures ~ Fall 2017";
        $imagelabel="Island Park Student Work";
        $altText="image of Island Park student work";
        break;
                
    case "classes.php":
        $title="Cool Classes";
        $pageHeading="Cool Classes";
        $sectionHeading="Classes: ";
        $formAutoFocus="autofocus";
        $logo="fa fa-fw fa-home";
        $pageImage="classes.png";
        $imagetitle="Zany and Comical Creatures ~ Fall 2017";
        $imagelabel="Island Park Student Work";
        $altText="image of Island Park student work";
        break;

        
    case "about.php":
        $title="About Clay's Cool";
        $pageHeading="About Clay's Cool";
        $sectionHeading="Clay's Cool - Art & Perspective";
        $formAutoFocus="autofocus";
        $logo="fa fa-fw fa-home";
        $pageImage="tempimage.jpg";
        $imagetitle="Zany and Comical Creatures ~ Fall 2017";
        $imagelabel="Island Park Student Work";
        $altText="image of Island Park student work";
        break;

    
    case "contact.php":
        $title="Clay's Cool Contact";
        $pageHeading="Clay's Cool: Get in touch!";
        $sectionHeading="Send us a note!";
        $formAutoFocus="autofocus";
        $logo="fa fa-fw fa-home";
        $pageImage="tempimage.jpg";
        $imagetitle="Zany and Comical Creatures ~ Fall 2017";
        $imagelabel="Island Park Student Work";
        $altText="image of Island Park student work";
        break;
    
    case "template2.php":
        $title="Template";
        $pageHeading="Template";
        $sectionHeading="";
        $formAutoFocus="autofocus";
        $logo="fa fa-fw fa-home";
        $pageImage="tempimage.jpg";
        $imagelabel="Template Placeholder Image";
        $altText="Template Placeholder Image";
        break;
        
        
    case "template.php":
        $title="Template";
        $pageHeading="Template";
        $sectionHeading="";
        $formAutoFocus="autofocus";
        $logo="fa fa-fw fa-home";
        $pageImage="tempimage.jpg";
        $imagelabel="Template Placeholder Image";
        $altText="Template Placeholder Image";
        break;
        
    default:
        $title="Contact Clay's Cool";
        $pageHeading="Clay's Cool: Get in touch!";
        $sectionHeading="Cool stuff coming soon!";
        $formAutoFocus="";
        $logo="fa fa-hammer";
        break;
}


//prevents date errors
    date_default_timezone_set('America/Los_Angeles');


/*
 * creates navigation links wrapped in <ul> & <li> tags
 *
 *
 * returns [text] fully formatted nav element tags
 */

//set nav array for makelinks function
    $nav1["index.php"] = '<i class="fa fa-home"></i><em>Home';
    $nav1["classes.php"] = '<i class="fa fa-asterisk"></i><em>Classes Offered';
    $nav1["about.php"] = '<i class="fa fa-question"></i><em>About Clay\'s Cool';
    $nav1["contact.php"] = '<i class="fa fa-envelope"></i><em>Contact Clay\'s Cool';
    $nav1['https://www.purplemoondesign.com/pages/aboutTheArtist.htm" target="_blank'] = '<i class="fa fa-user"></i><em>Instructor Bio';

function makeLinks($linkArray)
{
    $myReturn = '';
    
    foreach($linkArray as $url => $text)
    {

        if($url == THIS_PAGE)
        {//selected page - add class reference
	    	$myReturn .= '<li> <a class="sidebar-nav-link sidebar-nav-link-selected" href="' . $url . '">' . $text . '</em></a></li>'  . PHP_EOL;
    	}else{
	    	$myReturn .= '<li> <a class="sidebar-nav-link" href="' . $url . '">' . $text . '</em></a></li>'  . PHP_EOL;
    	} 
        
    }
    return $myReturn;    
}

?>