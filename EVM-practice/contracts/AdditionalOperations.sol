// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract AdditionalOperations {
    // MOD: 두 숫자의 나머지를 구하는 함수
    function modExample(uint256 a, uint256 b) public pure returns (uint256) {
        require(b != 0, "Divider cannot be zero");
        return a % b;
    }

    // LT: 두 숫자를 비교하는 함수
    function ltExample(uint256 a, uint256 b) public pure returns (bool) {
        return a < b;
    }

    // BYTE: 주어진 바이트 배열에서 특정 바이트를 추출하는 함수
    function byteExample(bytes1[] memory data, uint256 index) public pure returns (bytes1) {
        require(index < data.length, "Index out of bounds");
        return data[index];
    }
}
