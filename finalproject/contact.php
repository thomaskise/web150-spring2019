<?php include 'includes/header.php';
/**
 *************************************************************************
 *
 *  contact.php
 *
 *************************************************************************
 *
 *
 * @package Clay's Cool
 * @subpackage Public Site
 * @author Thom Harrington
 * @version 0.1 March 23, 2019
 * @link https://clayiscool.com (when launched)
 * @license http://www.apache.org/licenses/LICENSE-2.0
 * @todo none
 **/
?>
<!-- Content -->
    <div class="content">
        <section>
            <h2 id="emailheading" class="pageID"><?=$sectionHeading?></h2>
            <form method="get" action="" id="emailform">
                <div>
                    <label for="name"> </label>
                    <input id="name" type="text" name="name" title="Please enter your name as you would like us to address you." placeholder="Full Name (required)" tabindex="10" size="44" autofocus />
                    <br />
                </div>
                <div>	
                    <label for="email"> </label>
                    <input id="email" type="email" name="email" placeholder="Email (required)" tabindex="20" size="44" />
                    <br />
                </div>
                <div>	
                    <fieldset>
                        <!-- <legend>Purpose of today's contact:  </legend> -->
                        <!-- Use label instead of legend for toolTip functionality -->
                        <label for="other" title="Please share your comments when selecting other.">Purpose of today's contact:  </label><br />
                        <input type="checkbox" name="Interested_In[]" value="Current Class"tabindex="30"  /> Current Class <br />
                        <input type="checkbox" name="Interested_In[]" value="Upcoming Classes" tabindex="40" /> Upcoming Classes <br />
                        <input id = "other" type="checkbox" name="Interested_In[]" value="Other" tabindex="50"  /> Other (enter comment) <br />
                    </fieldset>
                </div>
                <div>	
                    <label for="comments"></label>
                    <textarea id="comments" name="comments" placeholder="Let us know your thoughts!" cols="44" rows="5" tabindex="60"></textarea>
                    <br />
                    </label>
                </div>	
                <input type="submit" value="send Email" tabindex="70"  />
            </form>
            <span> </span>
        </section>
        <?php include 'includes/aside.php';?>
    </div>

</main>
<?php include 'includes/footer.php';?>
