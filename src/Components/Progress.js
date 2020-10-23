import React from 'react'
import './Progress.css'
import {ProgressBar} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CodeIcon from '@material-ui/icons/Code';

function Progress() {
    const pb2Content = (
        <div className="pb2Content">
            <div className="pb2Left">
                <CheckCircleIcon className="pb2Check" />
                <CodeIcon className="pb2Code" />
                <p className="pb2Text">Development</p>
            </div>
            <p className="pb2Text">30%</p>
        </div>
    )
    return (
        <div className="progress">
            <h2>Overall progress</h2>
            <ProgressBar className="">
                <ProgressBar className='pb1' now={10} label="10%"></ProgressBar>
                <ProgressBar className='pb2' now={30} label={pb2Content}></ProgressBar>
                <ProgressBar className='pb3' now={40} label="40%"></ProgressBar>
                <ProgressBar className='pb4' now={30} label="30%"></ProgressBar>
            </ProgressBar>
        </div>
    )
}

export default Progress
