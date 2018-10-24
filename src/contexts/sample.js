import React, { Component, createContext } from 'react';

const Context = createContext(); // Context 를 만든다.

// Context 안에는 Provider 와 Consumer 라는 컴포넌트가 존재한다.
// 이 둘은, Context 를 이용하기 위해 필요한 컴포넌트들이다.
// Consumer 는 나중에 내보낼 때 편하도록 SampleConsumer 라고 설정.
const { Provider, Consumer : SampleConsumer } = Context;

class SampleProvider extends Component {
    state = {
        value: '기본값입니다.'
    }

    // actions 객체는 임의로 설정하는 객체이다.
    // 나중에 변화를 일으키는 함수(event handler)를 전달해줄 떄, 함수 하나하나 일일이 전달하는 것이 아니라
    // 객체 하나로 한꺼번에 전달하기 위함
    actions = {
        setValue : (value) => {
            this.setState({
                value
            });
        }
    }

    render() {
        const { state, actions } = this;
        const value = { state, actions };
        return (
            <Provider value={value}>
                {this.props.children}
            </Provider>
        );
    }
}

// :: HoC 를 사용
function useSample(WrappedComponent){
    return function UseSample(props){
        return (
            <SampleConsumer>
                {
                    ({ state, actions }) => (
                        <WrappedComponent 
                            value={state.value}
                            setValue={actions.setValue}
                        />
                    )
                }
            </SampleConsumer>
        )
    }
}

// 내보내줍니다.
export {
    SampleProvider,
    SampleConsumer,
    useSample
};