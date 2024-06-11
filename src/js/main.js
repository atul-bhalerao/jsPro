// Import our custom CSS
import '../sass/styles.sass'

// Import all of Bootstrap's JS
// import * as bootstrap from 'bootstrap'

var $bodyWidth = document.documentElement.clientWidth;

var $lTablet = 1024;
var $pTablet = 992;

if ( $bodyWidth < $pTablet ) {
    console.log("i m mobile");
} else if ( $bodyWidth >= $lTablet ) {
    console.log("i m Desktop");
} else if ($bodyWidth >= $pTablet) {
    console.log("i m Tablet");
}
