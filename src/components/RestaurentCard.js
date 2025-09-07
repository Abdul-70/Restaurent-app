

const RestaurentCard= (props)=>{
  const {resData} = props
    return(
        <div className="res-card">
            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/54917f6195b689d18ede93cf86403eff" alt="" />
            <h3>{resData.name}</h3>
            <h4>{resData.cuisine}</h4>
            <h4>{resData.rating} star</h4>
            <h4>{resData.address}</h4>
        </div>
    )
}

export default RestaurentCard;