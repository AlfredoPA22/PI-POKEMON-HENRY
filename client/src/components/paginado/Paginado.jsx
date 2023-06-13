import style from './Paginado.module.css'
const Paginado=({nextPage,previusPage,nroPublics,totalPosts,changePage,currentPage})=>{
    const pageNumbers=[];
    for(let i=1;i <= Math.ceil(totalPosts / nroPublics);i++){
        pageNumbers.push(i)
    }
    return(
        <div className={style.container}>
            <button className={style.pag} onClick={()=>previusPage()} >🡸</button>
            {
                
                pageNumbers.map((elem,index)=>{
                    if(elem==currentPage){
                        return(
                            <button key={index} className={style.pagSelected} onClick={()=>changePage(elem)}>{elem}</button>
                        ) 
                    }
                    return(
                        <button key={index} className={style.pag} onClick={()=>changePage(elem)}>{elem}</button>
                    )
                })
            }
            <button className={style.pag} onClick={()=>nextPage() }>🡺</button>
        </div>
    )
}

export default Paginado;