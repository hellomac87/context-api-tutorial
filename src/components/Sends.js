import React, { Component } from 'react';
// import { SampleConsumer } from '../contexts/sample';
import { useSample }from '../contexts/sample';

class Sends extends Component {
    state = {
        input: '',
    }

    componentDidMount(){
        // :: 초기 값 설정
        this.setState({
            input: this.props.value
        })
    }

    handleChange = (e) => {
        this.setState({
            input: e.target.value,
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.setValue(this.state.input);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input value={this.state.input} onChange={this.handleChange}/>
                <button type="submit">설정</button>
            </form>
        );
    }
}

// :: Consumer를 사용하여 context 값을 전달해주는 컨테이너 컴포넌트
/*
const SendsContainer = () => (
    <SampleConsumer>
        {
            ({state, actions}) => (
                <Sends
                    value={state.value}
                    setValue={actions.setValue}
                />
            )
        }
    </SampleConsumer>
)
*/
export default useSample(Sends);