import React, { Component } from 'react'
import '../css/addMenu.css'

export default function IngredientComponent(props) {
    return (
            <div className="ingredientForm">
                <div className="ingredientName">
                    <input placeholder="ส่วนผสม" tabIndex="1" className="ingredientInput" />
                </div>
            </div>
        
    )
}