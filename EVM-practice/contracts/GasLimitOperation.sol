// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract GasLimitOperation {
    function getBlockGasLimit() public view returns (uint) {
        return block.gaslimit;
    }
}
