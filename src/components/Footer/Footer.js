import React from 'react'

const Footer = () => {
    return (
       <footer className='footer'>
           <div className='container'>
               <div className='row align-items-center'>
                   <div className='col-4'>
                       <div className='footer-logo'>
                           <h2 className='footer-logo__title'>Новостник</h2>
                           <div className='footer-logo__added'>Single Page Application</div>
                       </div>
                   </div>
                   <div className='col-4 text-center'>
                       <div className='footer-name'>Дипломный проект</div>
                   </div>
                   <div className='col-4 text-right'>
                       <div className='footer-author'>
                           <div className='footer-author__by'>Made by</div>
                           <h2 className='footer-author__name'>Иван Петров</h2>
                       </div>
                   </div>
               </div>
           </div>
       </footer>
    )
}

export default Footer;