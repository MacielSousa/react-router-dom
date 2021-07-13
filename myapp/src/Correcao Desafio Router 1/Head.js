import  React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

const  Head = (props) => {
React.useEffect(() => {
    document.title = props.title;
    document
    .querySelector('meta[name="description"]')
    .setAttribute('content', props.description);
},[props])
  return <></>

}

export default Head;