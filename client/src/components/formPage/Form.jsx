import style from './Form.module.css'
const Form=({handlerForm,handlerType,handlerImage,handlerSubmit,data,types})=>{
    return(
        <div className={style.container}>
                <h1>Create Pokemon</h1>
                
                <form className={style.form} onSubmit={handlerSubmit}>
                    <label htmlFor="Nombre">Name: </label>
                    <input className={style.inpName} onChange={handlerForm} value={data.Nombre} name='Nombre' type="text" />

                    <label htmlFor="Imagen">Image: </label>
                    <input className={style.inpImagen} onChange={handlerImage} type="file" name="Imagen" id="Imagen" />
                    
                    <label  htmlFor="Vida">HP: </label>
                    <div className={style.containerRange}>
                        <input className={style.inpRange} onChange={handlerForm} min='0' max='100' value={data.Vida} type="range" name="Vida" id="Vida" />
                        <span>{data.Vida}</span>
                    </div>

                    <label  htmlFor="Ataque">Atack: </label>
                    <div className={style.containerRange}>
                        <input className={style.inpRange} onChange={handlerForm} min='0' max='100' value={data.Ataque} type="range" name="Ataque" id="Ataque" />
                        <span>{data.Ataque}</span>
                    </div>
                    

                    <label  htmlFor="Defensa">Defense: </label>
                    <div className={style.containerRange}>
                    <input className={style.inpRange} onChange={handlerForm} min='0' max='100' value={data.Defensa} type="range" name="Defensa" id="Defensa" />
                    <span>{data.Defensa}</span>
                    </div>

                    <label htmlFor="Velocidad">Speed: </label>
                    <div className={style.containerRange}>
                    <input className={style.inpRange} onChange={handlerForm} min='0' max='100' value={data.Velocidad} type="range" name="Velocidad" id="Velocidad" />
                    <span>{data.Velocidad}</span>
                    </div>

                    <label tmlFor="Altura">Height: </label>
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
                    <div className={style.containerSelects}>
                        {
                            types.map((elem)=>{
                                return(
                                    <button name={elem.Nombre} value={elem.ID} onClick={handlerType} className={data.Tipo.includes(elem.ID)?style.typeSelected:style.notSelected} key={elem.ID}>{elem.Nombre}</button>
                                )
                                
                            })
                        }
                    </div>
                    {/* <select className={style.selectType} onChange={handlerForm} name="Tipo" id="Tipos">
                        <option defaultChecked>Seleccione el Tipo</option>
                        {
                            types.map((type)=>{
                                return(
                                    <option key={type.ID} value={type.ID}>{type.Nombre}</option>
                                )
                            })
                        }
                    </select> */}
                    

                    <div></div>
                    <button className={style.btnSubmit} type='submit'>Create</button>
                </form>
        </div>
    )
}
export default Form;