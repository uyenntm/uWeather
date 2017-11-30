//import _ from 'lodash';
import React, {Component} from 'react'
//import PropTypes from 'prop-types';
import {Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines';

export default class Chart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
        //for dynamic chart
        setInterval(() => this.setState({
            data: this
                .state
                .data
                .concat([this.boxMullerRandom()])
        }), 1000);

        this.boxMullerRandom = this
            .boxMullerRandom
            .bind(this);
        this.randomData = this
            .randomData
            .bind(this);
        this.average = this.average.bind(this);

    }
    //for dynamic chart
    boxMullerRandom() {
        let phase = false,
            x1,
            x2,
            w,
            z;

        return (function () {

            if (phase = !phase) {
                do {
                    x1 = 2.0 * Math.random() - 1.0;
                    x2 = 2.0 * Math.random() - 1.0;
                    w = x1 * x1 + x2 * x2;
                } while (w >= 1.0);

                w = Math.sqrt((-2.0 * Math.log(w)) / w);
                return x1 * w;
            } else {
                return x2 * w;
            }
        })();
    }

    randomData(n = 30) {
        return Array
            .apply(0, Array(n))
            .map(this.boxMullerRandom);
    }
    average(data){
        // const sum = data.reduce((s,i)=> s+i);
        // //console.log("sum", sum);
        // const avg = sum/ data.length;
        // //console.log("avg:",avg);
       
        return parseFloat(data.reduce((s,i)=> s+i)/data.length).toFixed(2);
//return _.round(_.sum(data)/data.length,2);
    }

    render() {
        return (
            <div>
                <Sparklines width={180} height={120} data={this.props.data}>
                    <SparklinesLine color={this.props.color}/>
                    <SparklinesReferenceLine type="avg"/>
                </Sparklines>
                <div>{this.average(this.props.data)} ({this.props.unit})</div>
            </div>

        )
    }
}
