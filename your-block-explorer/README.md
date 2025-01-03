# 블록 익스플로러 만들기

## 들어가며

이제까지 배운 내용을 바탕으로 간단한 이더리움 블록 익스플로러를 만들어보겠다. 블록 익스플로러는 블록체인에 대한 다양한 데이터를 보여주는 도구다. 예를 들어, 다음과 같은 데이터를 확인할 수 있다.

- 블록체인 네트워크 정보
- 블록 내역
- 블록 내의 트랜잭션
- 계정들
- 그 외 다양한 데이터

[이더스캔(Etherscan)](https://etherscan.io/)은 대표적인 이더리움 블록 익스플로러다. 이번 실습에서는 자유롭게 원하는 기능을 추가해보는 방식으로 진행하려고 한다. 

## 사전 준비

1. GitHub에서 본 레포지토리를 포크한다.
2. 포크한 레포지토리를 클론하여 실습 코드를 다운로드 받는다.
3. 터미널을 열어 프로젝트 최상단 경로에서 다음 명령어를 실행한다.

```bash
# 필요한 패키지 설치
npm install
```

실습 샘플 코드는 리액트(React)를 기반으로 작성되었다.

이더리움 네트워크와 통신하기 위해 샘플 코드에서는 [AlchemySDK](https://docs.alchemy.com/reference/alchemy-sdk-quickstart?a=eth-bootcamp)를 사용합니다. 이 SDK에는 대부분의 `ethers.js` 기능을 포함하고 있어 편리하다.

예를 들어, `ethers.js`의 이런 코드를

```js
// ethers.js 예시
const blockNumber = await provider.getBlockNumber();
```

이 코드는 AlchemySDK를 사용하면 이렇게 작성할 수 있다.

```js
// AlchemySDK 예시
const blockNumber = await alchemy.core.getBlockNumber();
```

```js
// ethers.js 예시
const transcations = await provider.getBlockWithTransactions(SOME_BLOCK_NUMBER);
```

```js
// AlchemySDK 예시
const transactions = await alchemy.core.getBlockWithTransactions(SOME_BLOCK_NUMBER);
```

`ethers.js`의 일부 함수들은 `alchemy.core`에 포함되어 있지 않을 수도 있다. ethers에서 제공하는 모든 함수를 사용하고 싶다면, 아래와 같이 선언하면 된다.

```js
const ethersProvider = await alchemy.config.getProvider();
```

AlchemySDK에 관한 보다 자세한 정보가 궁금하다면 아래 링크를 참고하자.

- [API Quickstart](https://docs.alchemy.com/reference/alchemy-sdk-quickstart?a=eth-bootcamp)
- [API Overview](https://docs.alchemy.com/reference/api-overview?a=eth-bootcamp)

## 1. Alchemy API 키 생성

[링크](https://docs.alchemy.com/reference/api-overview?a=eth-bootcamp)를 참고하여 Alchemy API 메인넷 키를 만들자.

## 2. 만든 API 키를 프로젝트의 환경 변수에 추가

프로젝트 최상단 경로에 .env 파일을 만들고, 다음 코드를 복사하여 붙여넣기 한다. `YOUR_ALCHEMY_API_KEY`에는 발급받은 API 키를 입력한다. 추가할 환경 변수가 있다면, `REACT_APP_`으로 시작하도록 작성한다. 작성 방식은 `.env.example` 파일을 참고한다.

```sh
REACT_APP_ALCHEMY_API_KEY=YOUR_ALCHEMY_API_KEY
```

## 3. 웹 서버 시작

개발 모드로 앱을 실행한다. 터미널을 열고, 프로젝트 최상단 경로에서 다음 명령어를 실행한다.

```sh
# 앱 개발 모드로 실행
npm start
```

터미널에 아래와 같이 "~compiled successfully"가 표시된다면 정상적으로 구동된 것이다.

<img width="680" alt="터미널_화면" src="https://github.com/user-attachments/assets/c6e3be82-e27f-4df5-9acd-330ce0071d23">

앱이 구동되었다면, 웹 브라우저에서 [http://localhost:3000](http://localhost:3000)를 열어 확인한다. 아래와 같이 초기화면이 표시된다.

<img width="1680" alt="앱_초기화면" src="https://github.com/user-attachments/assets/c17cd54c-7d98-463f-a46b-378cc831e02d">

코드에 변경 사항이 생기면 웹페이지가 자동으로 새로 고침 된다.

## 4. 블록 익스플로러 개선

- 블록 정보 활용

  실습 샘플 코드에서는 현재 블록 번호만 표시된다. 블록에 관한 더 많은 정보를 가져와 페이지에 표시할 수 있을까? [`alchemy.core.getBlock()`](https://docs.alchemy.com/reference/sdk-getblock)를 확인해보자.

- 블록의 트랜잭션 목록 활용

  블록에는 트랜잭션이 포함되어 있다. 주어진 블록의 트랜잭션 목록을 가져올 수 있을까? [`alchemy.core.getBlockWithTransactions()`](https://docs.alchemy.com/reference/sdk-getblockwithtransactions)를 확인해보자.

- 개별 트랜잭션에 대한 세부 정보 활용

  개별 트랜잭션에 대한 세부 정보를 가져오는 것은 어떨까? [`alchemy.core.getTransactionReceipt()`](https://docs.alchemy.com/reference/sdk-gettransactionreceipt)를 확인해보자.

## 5. 추가 아이디어

추가로 활용해 볼만한 아이디어는 다음과 같다.

- 클릭 가능한 블록 목록: 사용자가 블록을 클릭하면 해당 블록의 세부 정보와 트랜잭션 목록을 표시
- 계정 페이지: 사용자가 자신의 잔액 또는 다른 계정의 잔액을 조회할 수 있는 기능
- [Alchemy SDK의 다른 기능](https://docs.alchemy.com/reference/alchemy-sdk-api-surface-overview?a=eth-bootcamp) 활용: NFT, WebSocket, Transact API 등 여러 가지 기능 활용
