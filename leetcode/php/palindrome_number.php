<?php
class Solution {

    /**
     * @param Integer $x
     * @return Boolean
     */
    function isPalindrome($x) {
        $strrev = strrev($x);

        return $strrev == $x;
    }
}