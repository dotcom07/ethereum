// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract CalldataOperation {
    function getCalldataSize() public pure returns (uint) {
        return msg.data.length;
    }

    function getCalldataAtIndex(uint index) public pure returns (bytes1) {
        require(index < msg.data.length, "Index out of bounds");
        return msg.data[index];
    }
}
