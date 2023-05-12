import info from "../locales/info";
import { theme } from "../config/styles/theme";


export function classification( imc: number ){

    var classific = ''
    var colors = ''
    var descript = ''
    var risk = ''
    var obs = ''

    switch(true) {
      case (imc < 16):
        classific = info.magrezagrave.diagnostic
        descript = info.magrezagrave.description
        colors = theme.colors.classification.magrezagrave
        risk = info.magrezagrave.risk
        obs = info.magrezagrave.obs
      break;

      case (imc < 17):
        classific = info.magrezamoderada.diagnostic
        descript = info.magrezamoderada.description
        colors = theme.colors.classification.magrezamoderada
        risk = info.magrezamoderada.risk
        obs = info.magrezamoderada.obs
      break;

      case (imc <= 18.4):
        classific = info.magrezaleve.diagnostic
          descript = info.magrezaleve.description
          colors = theme.colors.classification.magrezaleve
          risk = info.magrezaleve.risk
          obs = info.magrezaleve.obs
        break;
      
      case (imc <= 24.9):
        classific = info.saudavel.diagnostic
          descript = info.saudavel.description
          colors = theme.colors.classification.normal
          risk = info.saudavel.risk
          obs = info.saudavel.obs
        break;

      case (imc <= 29.9):
        classific =  info.sobrepeso.diagnostic
        descript = info.sobrepeso.description
        colors = theme.colors.classification.sobrepeso
        risk = info.sobrepeso.risk
        obs = info.sobrepeso.obs
      break;

      case (imc <= 34.9):
        classific =  info.obeso1.diagnostic
        descript = info.obeso1.description
        colors = theme.colors.classification.obeso1
        risk = info.obeso1.risk
        obs = info.obeso1.obs
      break;

      case (imc <= 39.9):
        classific =  info.obeso2.diagnostic
        descript = info.obeso2.description
        colors = theme.colors.classification.obeso2
        risk = info.obeso2.risk
        obs = info.obeso2.obs
      break;
      
      case ( imc > 39.9 ):
        classific =  info.obeso3.diagnostic
        descript = info.obeso3.description
        colors = theme.colors.classification.obeso2
        risk = info.obeso3.risk
        obs = info.obeso3.obs
      break;
    } 
    return { classific, colors, descript, risk, obs }
  };