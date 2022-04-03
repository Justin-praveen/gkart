{d !== 0 ? (<div>{d.map((ar,k)=>{
    <div key={k}>
      <h1>{ar.name}</h1>
      <h1>{ar.price}</h1>
      </div>
  })}</div>) :(<div>loding....</div>)}s