import React from 'react'
import { motion } from 'framer-motion'
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreSharpIcon from '@mui/icons-material/ExpandMoreSharp';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import { styled } from '@mui/material/styles';
import data from '../dataForWedding.json'
import bca from '../image/BCA.png'
import Clipboard from '../components/Clipboard';

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(() => ({
    border: `1px solid #fff`,
    backgroundColor: 'transparent',
    borderRadius: '10px',
    color: '#fff',
    '&::before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor: 'transparent',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(-90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
    ...theme.applyStyles('dark', {
        backgroundColor: 'transparent',
    }),
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
}));

export default function BankSection() {
    return (
        <section className='h-full p-4'>
            <motion.div 
                initial={{ opacity: 0, translateX: 100 }}
                whileInView={{ opacity: 1, translateX: 1 }}
                transition={{ duration: 1 }}
                className='p-8 m-4 bg-white/20 text-white rounded-2xl'
            >
                <p className='text-xl'>Wedding Gift</p>
                <p className='text-sm my-4'>Kehadiran Bapak/Ibu/Om/Tante/Saudara/i merupakan suatu kebahagiaan dan tanda kasih bagi kami. Apabila ingin memberi tanda kasih / hadiah dalam bentuk lain bisa melalui:</p>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreSharpIcon className='text-white' />}
                        aria-controls='panel1-content'
                        id="panel1-header"
                    >
                        Kado Digital
                    </AccordionSummary>
                    <AccordionDetails>
                        <div className='text-center flex flex-col justify-center items-center'>
                            <div className='my-4 flex flex-col justify-center items-center'>
                                <img src={bca} alt="BCA logo" width={100} height={100} />
                                <p>{data.men.fullname}</p>
                                <p>{data.men.bankname}</p>
                                <p>{data.men.nobank}</p>
                                <Clipboard textcopy={data.men.nobank} />
                            </div>
                            <hr className='text-white w-full' />
                            <div className='my-4 flex flex-col justify-center items-center'>
                                <img src={bca} alt="BCA logo" width={100} height={100} />
                                <p>{data.women.fullname}</p>
                                <p>{data.women.bankname}</p>
                                <p>{data.women.nobank}</p>
                                <Clipboard textcopy={data.women.nobank} />
                            </div>
                        </div>
                    </AccordionDetails>
                </Accordion>
            </motion.div>
        </section>
    )
}
