<?php
class Solution {

    /**
     * @param String $s
     * @return Integer
     */
    function romanToInt($s) {
       $assocArray = [
            "I" => 1,
            "V" => 5,
            "X" => 10,
            "L" => 50,
            "C" => 100,
            "D" => 500,
            "M" => 1000
        ];
        
        $arr = str_split($s);
        $result = 0;
        foreach($arr as $key => $num) {
            if($assocArray[$num] < $assocArray[$arr[$key+1]]) {
                $result -= $assocArray[$num];
            } else {
                $result += $assocArray[$num];
            }
        }
        return $result;
    }
}