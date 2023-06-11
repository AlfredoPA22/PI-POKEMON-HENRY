import style from './ButtonAcept.module.css'

const ButtonAcept=({action,value,text})=>{
    return(
        <button onClick={()=>action(value)} className={style.button}>{text}</button>
    )
}
export default ButtonAcept;