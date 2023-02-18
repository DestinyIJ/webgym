import React from 'react'
import { Typography, Stack, Button } from '@mui/material'

import BodyPartImage from '../../assets/icons/body-part.png'
import TargetImage from '../../assets/icons/target.png'
import EquipmentImage from '../../assets/icons/equipment.png'

const ExerciseDetails = ({exerciseDetail}) => {
    const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail
    const extraDetail = [
        {
            icon: BodyPartImage,
            name: bodyPart
        },
        {
            icon: TargetImage,
            name: target
        },
        {
            icon: EquipmentImage,
            name: equipment
        }
    ]

    return (
        <Stack gap="60px" sx={{ flexDirection: { lg: 'row'}, p:'20px', alignItems: 'center'}}>
            <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
            <Stack sx={{ gap: { lg: '35px', xs: '20px' }}}>
                <Typography variant='h3'>
                    {name}
                </Typography>
                <Typography variant='h6'>
                    Exercises keep you strong and healthy. Do <b style={{ color: '#FF2625'}}>{name}</b> to target your <b style={{ color: '#FF2625'}}>{target}</b>. 
                    Overall, it will help to improve your strength, clear your mind, boolster your confidence, and ultimately elevate your quality of life. 
                </Typography>
                {
                    extraDetail.map((item, index) => (
                        <Stack key={index} direction="row" gap="24px" alignItems="center">
                            <Button sx={{ background: '#fff2db', borderRadius: '50%', widht: '100px', height: '100px'}}>
                                <img src={item?.icon} alt={bodyPart} style={{ width: '50px', height: '50px '}} />
                            </Button>
                            <Typography variant='h4' textTransform='capitalize'>
                                {item?.name}
                            </Typography>
                        </Stack>
                    ))
                }
            </Stack>
        </Stack>
    )
}

export default ExerciseDetails