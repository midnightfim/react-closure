import React from 'react';


class ClosureCounter extends React.Component {

    // заводим state для динамического отображения на экране
    state = {
        num: 0
    }

    componentDidMount() {
        // счетчик 
        this.counter = () => {
            // объявляем переменную для счетчика
            let count = 0;
            return () => {
                count++;
                // в state записываем текущее значение count
                this.setState({
                    num: count
                  })
                }
        }
        /* 
        после того, как мы присвоим closureCounter значение вызванной функции counter, 
        она сохранит переменную count и будет иметь доступ к ней
        */
        this.closureCounter = this.counter();
    }

    render() {
        return (
            <div style={{margin: "200px"}}>
                {/* 
                    счетчик будет увеличиваться, 
                    потому что переменная count ЗАМЫКАЕТСЯ
                */}
                Счетчик из замыкания: {this.state.num}
                <br/>
                <button onClick={()=>{this.closureCounter()}}> INC </button>
            </div>
    )
  }
}

export default ClosureCounter;
