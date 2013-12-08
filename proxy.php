<?php
header('Content-type: application/xml');

$url = 'http://www.emploi-e-commerce.com/index.php/page/adv_rss/command/getfeed/feed/137609cb692888197a87fef33506751c';

$handle = fopen($url, "r");

if ($handle) {
    while (!feof($handle)) {
        $buffer = fgets($handle, 4096);
        echo $buffer;
    }
    fclose($handle);
}
?>