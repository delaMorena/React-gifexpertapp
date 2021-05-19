import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

function GifExpertApp() {


    const [categories, setCategories] = useState(['Marvel'])

    return (
        <>
            <div className="header">
                <h2>GifExpertApp</h2>
                <h3>Encuentra el gif perfecto: </h3>
                <AddCategory setCategories={setCategories} />
                <hr />
            </div>
            <ol>
                {categories.map(category =>
                    <GifGrid
                        key={category}
                        category={category}
                    />
                )}
            </ol>
        </>
    )
}

export default GifExpertApp

