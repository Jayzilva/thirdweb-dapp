// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;


contract Example {
    uint256 number;
    function store(uint256 num) public{
        number = num;
    }

    function retireve() public view returns (uint256){
        return number;
    }
}