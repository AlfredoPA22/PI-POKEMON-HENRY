import style from './ButtonLink.module.css'
const ButtonLink=({text})=>{
    return(
        <button className={style.button}>{text}</button>
    )
}
export default ButtonLink;