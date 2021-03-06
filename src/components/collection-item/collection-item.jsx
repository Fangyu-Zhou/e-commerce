import React from 'react';
import {connect} from 'react-redux';

import CustomButton from "../wigets/custom-button/custom-button";

import {addItem} from "../../redux/cart/cart.action";

import './collection-item.scss';

const CollectionItem = ({item, addItem}) => {
    const {imageUrl, name, price} = item;

    return (
        <div className='collection-item'>
            <div
                className='image'
                style={{backgroundImage: `url(${imageUrl})`}}
            />

            <div className='collection-footer'>
                <div className='name'>{name}</div>
                <div className='price'>${price}</div>
            </div>

            <CustomButton onClick={() => addItem(item)} inverted>
                ADD TO CART
            </CustomButton>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);