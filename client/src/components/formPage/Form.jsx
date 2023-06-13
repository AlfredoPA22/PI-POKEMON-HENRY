import style from './Form.module.css'
const Form=({validations,handlerForm,handlerType,handlerSubmit,data,types})=>{
    return(
        <div className={style.container}>
                <h1>Create Pokemon</h1>
                
                <form className={style.form}  onSubmit={handlerSubmit}>
                    <label htmlFor="Nombre">Name: </label>
                    <div className={style.span}>
                    {validations.name?<><span className={style.spanValidation}>{validations.name}</span></>:''}
                    <input className={style.inpName} onChange={handlerForm} value={data.Nombre} name='Nombre' type="text" />
                    </div>
                    
                    <label htmlFor="Imagen">Image: </label>
                    <div className={style.span}>
                    {validations.image?<><span className={style.spanValidation}>{validations.image}</span></>:''}
                    <input className={style.inpName} onChange={handlerForm} value={data.Imagen} name='Imagen' type="text" />
                    </div>
                    
                    <label  htmlFor="Vida">HP: </label>
                    <div className={style.span}>
                        {validations.hp?<><span className={style.spanValidation}>{validations.hp}</span></>:''}
                        <div className={style.containerRange}>
                            <input className={style.inpRange} onChange={handlerForm} min='0' max='100' value={data.Vida} type="range" name="Vida" id="Vida" />
                            <span>{data.Vida}</span>
                        </div>
                    </div>
                    <label  htmlFor="Ataque">Atack: </label>
                    <div className={style.span}>
                        {validations.atack?<><span className={style.spanValidation}>{validations.atack}</span></>:''}
                        <div className={style.containerRange}>
                            <input className={style.inpRange} onChange={handlerForm} min='0' max='100' value={data.Ataque} type="range" name="Ataque" id="Ataque" />
                            <span>{data.Ataque}</span>
                        </div>
                    </div>
                    
                    <label  htmlFor="Defensa">Defense: </label>
                    <div className={style.span}>
                        {validations.defense?<><span className={style.spanValidation}>{validations.defense}</span></>:''}
                        <div className={style.containerRange}>
                            <input className={style.inpRange} onChange={handlerForm} min='0' max='100' value={data.Defensa} type="range" name="Defensa" id="Defensa" />
                            <span>{data.Defensa}</span>
                        </div>
                    </div>
                    

                    <label htmlFor="Velocidad">Speed: </label>
                    <div className={style.containerRange}>
                    <input className={style.inpRange} onChange={handlerForm} min='0' max='100' value={data.Velocidad} type="range" name="Velocidad" id="Velocidad" />
                    <span>{data.Velocidad}</span>
                    </div>

                    <label htmlFor="Altura">Height: </label>
                    <div className={style.containerRange}>
                    <input className={style.inpRange} onChange={handlerForm} min='0' max='100' value={data.Altura} type="range" name="Altura" id="Altura" />
                    <span>{data.Altura}</span>
                    </div>

                    <label htmlFor="Peso">Weight: </label>
                    <div className={style.containerRange}>
                    <input className={style.inpRange} onChange={handlerForm} min='0' max='100' value={data.Peso} type="range" name="Peso" id="Peso" />
                    <span>{data.Peso}</span>
                    </div>
                
                    <label htmlFor="Tipo">Type: </label>
                    <div className={style.span}>
                    {validations.type?<><span className={style.spanValidation}>{validations.type}</span></>:''}
                    <div className={style.containerSelects}>
                        {
                            types.map((elem)=>{
                                return(
                                    <button type='button' name={elem.Nombre} value={elem.ID} onClick={handlerType} className={data.Tipo.includes(elem.ID)?style.typeSelected:style.notSelected} key={elem.ID}>{elem.Nombre}</button>
                                )
                                
                            })
                        }
                    </div>
                    </div>
                    
                    <div></div>
                    <button type='submit' className={style.btnSubmit} disabled={validations.error?true:false} >Create</button>
                </form>
        </div>
    )
}
export default Form;