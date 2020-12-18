import React ,{ Component} from 'react';
import css from './App.css';

class App extends Component{

    state = {
        active:true,
        className : 'color1',
    }

    changColor = ()=>{

    };

    render() {
        // const myStyle = {
        //     backgroundColor:'red'
        // }
        let classes = [];
        if (true)
            classes.push('cherki-1')
        if (true)
            classes.push('cherki-2')
        if (true)
            classes.push('cherki-3')
        return (
            <div className="App">
                <div className={"container my-5"}>
                    <div className={'row'}>
                        <div className={'col-md-6'}>
                            <div className={'card my-3'}>
                              <h1 className={this.state.active ? 'color1' : 'color2' }>cherki hamza</h1>

                            </div>
                        </div>
                        <div className={'col-md-6'}>
                            <div className={'card my-3'}>
                                <h1 className={classes.join(' ')}>right content</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default App;
