import React from 'react'

export default function Footer() {
    return (
        <div className='flex bg-slate-800 h-64 '>
            <div className='text-white w-1/4 ml-10'>
                <h1 className='py-6'>contacts</h1>

                <ul>+38 (067) 374 36 92</ul>
                <ul>info@rubydecor.com.ua</ul>
                <ul>Opening hours:Mon-Fri 10:00-19:00</ul>
                <ul>Sat 10: 00-18: 00; Sun - day off</ul>
            </div>
            <div className='text-white w-1/4'>
                <h1 className='py-6'>information</h1>
                <ul>Vacancies</ul>
                <ul>Public offer agreement</ul>
                <ul>Terms of exchange & return of goods</ul>
            </div>
            <div className='text-white w-1/4'>
                <h1 className='py-6'>menu
                </h1>
                <ul>About us</ul>
                <ul> Payment and delivery</ul>
                <ul>Store</ul>
                <ul>Contact us</ul>
            </div>
            <div className='text-white w-1/4'>
                <h1 className='py-6'>We are in social networks
                </h1>
                <ul>Instagram</ul>
                <ul>Facebook</ul>
                <ul>Telegram</ul>
                <ul>Pinterest</ul>

            </div>
            
            
        </div>
    )
}
