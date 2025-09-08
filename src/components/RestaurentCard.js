

const RestaurentCard= (props)=>{
  const {resData} = props
  
    return(
        <div className="res-card">
            <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+resData?.info?.cloudinaryImageId}alt="" />
            <h3>{resData?.info?.name}</h3>
            
            <h4>{resData?.info?.avgRating} star</h4>
            <h4>{resData?.info?.cuisines?.join(", ")}</h4>
            <h4>{resData?.info?.locality}</h4>
           
            <h4>{resData?.info?.costForTwo}</h4>
        </div>
    )
}

export default RestaurentCard;