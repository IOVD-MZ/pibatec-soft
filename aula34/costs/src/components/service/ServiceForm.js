import { useState } from 'react'

import Input from '../form/Input'
import SubmitButton from '../form/SubmitButton'

     
import styles from '../project/ProjectForm.module.css'
function ServiceForm( {handleSubmit,btnText,projectData}){
    
    const [service, setService] = useState({})
    
    function submit(e){ 
        //evitar que ele submita o project
        e.preventDefault()
        
        //jogar serviço dentro de serviço-Alterando meu objecto original do projecto
        projectData.service.push(service)
        // //Manipular o objecto adicionando o servico ao project o jogo o projecto todo ao metodo  project->createService
        handleSubmit(projectData)
         

    } 

    function handleChange(e){
        //pegar o objecto actual e colocar  preencher o service
        //alert(service.name)
        setService({...service, [e.target.name]: e.target.value})
    }

    return (
        <form onSubmit={submit} className={styles.form}>
            <Input 
                type="text"
                text="Nome do serviço"
                name ="name"
                placeholder="Insira o nome do serviço"
                handleOnChange={handleChange}
            />

            <Input 
                type="number"
                text="Custo do serviço"
                name ="cost"
                placeholder="Insira o valor total"
                handleOnChange={handleChange}
            />

            <Input 
                type="text"
                text="Descrição do serviço"
                name ="description"
                placeholder="Descreva o serviço"
                handleOnChange={handleChange}
            />

            <SubmitButton
                text={btnText}
            />
        </form>
        )
}
export default ServiceForm