import React from 'react';
import './A_TarotCardImage.scss';

export default class A_TarotCardImage extends React.Component {
    render() {
        const { image: imageName } = this.props;

        return (
            <img src={require(`../../data/${imageName}`)} className='A_TarotCardImage'/>
        );
    }
}
