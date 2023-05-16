const obs_low = "ATENTE-SE! - Os índices ligeiramente abaixo de 18.5 não são saudáveis segundo a OMS (Organização Mundial da Saúde), entretanto, você pode apresentar um biotipo ligeiramente fora do índice e ser saudável. Fique atento!"
const obs_very_low = "ATENTE-SE! Você está muito abaixo do peso recomendável. É importante verificar se não há alguma patologia por trás do peso baixo, principalmente se o emagrecimento aconteceu de maneira repentina. Procure um médico e cuide-se!"

const info = {

    "magrezagrave" : {
        "diagnostic" : "Magreza grave",
        "description": "A magreza grave (IMC abaixo de 16) é uma condição que pode ser causada por desnutrição severa. Recomentamos procurar um médico, no entanto, não se desespere, algumas pessoas têm um baixo peso por características do seu organismo e tudo bem. Outras podem estar enfrentando problemas, como a desnutrição. É preciso saber qual é o caso.",
        "risk": "Risco Alto",
        "obs": obs_very_low
    },

    "magrezamoderada" : {
        "diagnostic" : "Magreza moderada",
        "description": "Indicamos consultar um médico para ter certeza de que não tem nada de errado.",
        "risk": "Risco moderado",
        "obs": obs_low
    },

    "magrezaleve" : {
        "diagnostic" : "Magreza leve",
        "description": "No geral não é preocupante. Um IMC acima de 17 não fica muito longe do saudável. Atente-se!",
        "risk": "Risco baixo",
        "obs": obs_low
    },

    "saudavel" : {
        "diagnostic" : "Saudável 👋",
        "description": "Que bom que você está com o peso normal! E o melhor jeito de continuar assim é mantendo um estilo de vida ativo e uma alimentação equilibrada.",
        "risk": "Risco Muito baixo",
        "obs": ""
    },


    "sobrepeso" : {
        "diagnostic" : "Sobrepeso",
        "description": "Não precisa se desesperar! Se o IMC estiver pouco acima de 25, não é preocupante. Há pessoas que seu peso normal passa um pouco do índice do IMC, no entanto, recomendamos sempre ter uma consulta com nutricionista para entender seu caso e manter-te mais saudável possivel.",
        "risk": "Risco aumentado",
        "obs": ""
    }, 

    "obeso1" : {
        "diagnostic" : "Obesidade grau 1",
        "description": "Chegou na hora de se cuidar mais, mesmo que seus exames sejam normais. Vamos dar início a mudanças hoje! Cuide de sua alimentação. Você precisa iniciar um acompanhamento com nutricionista e/ou endocrinologista.",
        "risk": "Risco moderado",
        "obs": ""
    },

    "obeso2" : {
        "diagnostic" : "Obesidade grau 2",
        "description": "Estar com obesidade grau II é ter riscos elevados de diabetes, hipertensão, além de infarto e outras doenças. Mesmo que seus exames aparentem estar normais, é hora de se cuidar, iniciando mudanças no estilo de vida com o acompanhamento próximo de profissionais de saúde. Procure um médico para lidar com a situação!",
        "risk": "Risco grave",
        "obs": ""
    },

    "obeso3" : {
        "diagnostic" : "Obesidade grau 3",
        "description": "Aqui o sinal é vermelho, Procure um médico ou nutricionista omamis rápido possível para dar início a um tratamento a fim de melhorar sua qualidade de vida. O tratamento deve ser ainda mais urgente. Não deixe para o amanhã o que pode ser feito hoje!",
        "risk": "Risco muito grave",
        "obs": ""
    }
}

export default info