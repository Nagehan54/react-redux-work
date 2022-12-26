function ItemBox(props) {
console.log('>>PROPS', props)

return(

    <div className="col">
    <div className="card mb-4 rounded-3 shadow-sm border-primary">
        <div className="card-header py-3 text-bg-primary border-primary">
            <h4 className="my-0 fw-normal">{props.name}</h4>
        </div>
        <div className="card-body">
            <img src={props.image} style={{width:'90%', alignItems:'center', margin:'10px 0px 30px 0px'}}></img>
            <a href={'#/category/' + props.slog} className='w-100' btn btn-lg btn-primary></a>
            <button type="button" className="w-100 btn btn-lg btn-primary">Contact us</button>
        </div>
    </div>
</div>
)

}

export default ItemBox