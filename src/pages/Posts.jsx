import React from 'react'

function Posts() {
    const lol = [2, 3, 4, 3,4,4,3,34]
    return (
<>
<div class="grid grid-cols-1 sm:grid-cols-3 gap-7  m-11 items-center  ">
            {lol.map((x) => (
                <div className="card card-compact w-full bg-base-100 shadow-xl">
                    <figure><img src="https://via.placeholder.com/300/09f/fff.png " alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>

{/* 

<div className="btn-group">
  <button className="btn">«</button>
  <button className="btn">Page 22</button>
  <button className="btn">»</button>
</div> */}

</>
  


    )
}

export default Posts