import { Box } from '@mui/system'
import React from 'react'
import CrimeCaseForm from './CrimeCaseForm'
import VictimForm from './VictimForm'
import CriminalForm from './CriminalForm'
import PoliceForm from './PoliceForm';
import HandlerForm from './HandlerForm'
import PoliceStationForm from './PoliceStationForm'
import PrisonForm from './PrisonForm'
import TypeForm from './TypeForm'
import CrimeTypeForm from './CrimeTypeForm'
import InvestigateForm from './Investigate'
import CriminalVictimCaseForm from './CiminalVictimCaseForm'


const CustomForm = ({tbname}: {tbname: string}) => {
  const table = (name: string) => {
    const dataColumns: { [key: string]: any } = {
        'criminal': <CriminalForm />,
        'victim': <VictimForm />,
        'police': <PoliceForm /> ,
        'policestation': <PoliceStationForm /> ,
        'prison': <PrisonForm />,
        'crimecase': <CrimeCaseForm /> ,
        'investigate': <InvestigateForm />,
        'crimetype': <CrimeTypeForm />,
        'type': <TypeForm />,
        'criminalvictimcase': <CriminalVictimCaseForm />,
        'handler': <HandlerForm />,
        "": null

    }
    return dataColumns[name]
}

  return (
    <Box sx={{width:"80%",}}>
        {table(tbname)}
    </Box>
  )
}

export default CustomForm