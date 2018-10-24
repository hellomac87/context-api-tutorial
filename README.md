# 리액트 16.3 에 소개된 새로워진 Context API 파헤치기

> [velopert 블로그 포스트](https://velopert.com/3606)

> [블로그 포스트 github repository](https://github.com/vlpt-playground/react-context-sample)

## `Context API`는 주로 어떤 용도로 사용될까?

애플리케이션으로 전역적으로 데이터가 사용되야 할 때 사용.

사용자 로그인 정보, 애플리케이션 설정, 테마, 등.

redux, react-router, styled-components 등이 기존에 이 Context API 를 기반으로 구현이 되어있었음.

Context API 가 이번에, 단순히 그런 라이브러리에서 사용되는 용도가 아니라, 일반적인 용도로도 사용하기 용이하게끔 업그레이드됨.

