<?php
header('Content-type: application/xml');

$url = 'http://www.emploi-e-commerce.com/index.php/page/rss_getfeed/p/92570adae8c7f0af ';

$handle = fopen($url, "r");

if ($handle) {
    while (!feof($handle)) {
        $buffer = fgets($handle, 4096);
        echo $buffer;
    }
    fclose($handle);
}
?>