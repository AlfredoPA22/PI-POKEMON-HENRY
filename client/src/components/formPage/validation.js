const validation=(formData)=>{
    let response={error:true};
    //validacion de nombre
    const name = /\d/;
    const imageRegex = /\.(jpg|jpeg|png|gif|bmp)$/i;
    if(formData.Nombre=='')response={...response,name:'Ingrese un Nombre'}
    if(name.test(formData.Nombre)) response={...response,name:'El nombre no puede Contener Numeros'}
    if(formData.Vida<=0) response={...response,hp:'La vida no puede ser 0'}
    if(formData.Ataque<=0) response={...response,atack:'El ataque no puede ser 0'}
    if(formData.Defensa<=0) response={...response,defense:'La defensa no puede ser 0'}
    if(formData.Tipo.length == 0) response={...response,type:'debe seleccionar almenos 1 tipo'}
    if(formData.Imagen !== ''){
        if(!imageRegex.test(formData.Imagen)) response={...response,image:'debe ingresar una url de imagen valida'}
    }
    if(Object.keys(response).length==1) response.error=false; 
    return response
}
export default validation;