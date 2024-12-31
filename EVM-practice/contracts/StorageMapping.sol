// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract StorageMapping {
    // 저장된 데이터의 값을 저장하는 uint256 변수
    uint256 public storedData;

    // uint256 키와 uint256 값을 갖는 매핑
    mapping(uint256 => uint256) public dataMap;

    // storedData 변수를 설정하는 함수
    function setStoredData(uint256 _data) public {
        // 인자로 받은 _data 값을 storedData에 저장
        storedData = _data;
    }

    // dataMap 매핑에 키-값 쌍을 설정하는 함수
    function setDataMap(uint256 _key, uint256 _value) public {
        // 인자로 받은 _key를 사용해 매핑된 위치에 _value를 저장
        dataMap[_key] = _value;
    }

    // storedData 변수의 값을 반환하는 뷰 함수
    function getStoredData() public view returns (uint256) {
        // storedData에 저장된 값을 반환
        return storedData;
    }

    // dataMap 매핑에서 특정 키에 대한 값을 반환하는 뷰 함수
    function getDataMap(uint256 _key) public view returns (uint256) {
        // 인자로 받은 _key를 사용해 매핑된 값을 반환
        return dataMap[_key];
    }
}
