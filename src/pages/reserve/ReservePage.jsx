import React from 'react';

export function ReservePage(){
    return <div className='content'>
       <OnlyList />
    </div>
}

const reservationType = [
    {
        title: 'MEDICINSKA MASAZA',
        info: [
            'Ova masaža izvodi se pomoću kombinacije pokreta te pritisaka rukama uz korištenje domaceg ulja od gospine trave,',
            'a njome ciljano tretiramo bolna područja ili cijelo tijelo. Intenzitet masaže ovisi o klijentu i toleranciji za bol.',
            'Takoder takvom masazom "razbijamo" miogeloze koje su zapravo nakupine mliječnih kiselina i ne razgrađenih proteina,',
            'koje se stvaraju oko mišića, pritišću krvne žile i živce, te tako uzrokuju nelagodu, glavobolje, ukočenost i bolove',
        ],
        duration: 30,
        price: 15,
        image: 'some img'
    },
    {
        title: 'MEDICINSKA MASAZA - CIJELO TIJELO',
        info: [
            'Specijalna tehnika rješavanja ukočenosti i napetosti u mišićno-koštanom sustavu.',
            'Učinkovitost i uspješnost ove tehnike leže u spajanju tri metode koje i pojedinačno, a pogotovo zajedno postižu sjajne rezultate. ',
            'To su manualna terapija, kiropraktika i sektoralna osteopatija.',
            'Ortokoncept je 3u1 terapija tj. terapija koja uključuje obradu mekih struktura, manipulacije zglobnih struktura te održavanje postignutog stanja kroz ciljane vježbe.'
        ],
        duration: 60,
        price: 25,
        image: 'some img'
    },
    {
        title: 'SPORTSKA MASAZA',
        info: [
            'Sastoji se od uzimanja anamneze (odgovori na pitanja o problemu, uzroku i težini problema,',
            'općem zdravstvenom stanju, itd.) koja je potrebna za izradu individualnog plana terapije kako bi se postigli optimalni rezultati.',
            'Tijekom pregleda fizioterapeut određuje funkcionalno ograničenje i nesposobnost pacijenta,',
            'mjeri opseg pokreta i snagu mišića te u skladu s tim donosi odluku o daljnjem tijeku terapije.'
        ],
        duration: 30,
        price: 15,
        image: 'some img'
    },
    {
        title: 'SPORTSKA MASAZA - CIJELO TIJELO',
        info: [
            'Sastoji se od uzimanja anamneze (odgovori na pitanja o problemu, uzroku i težini problema,',
            'općem zdravstvenom stanju, itd.) koja je potrebna za izradu individualnog plana terapije kako bi se postigli optimalni rezultati.',
            'Tijekom pregleda fizioterapeut određuje funkcionalno ograničenje i nesposobnost pacijenta,',
            'mjeri opseg pokreta i snagu mišića te u skladu s tim donosi odluku o daljnjem tijeku terapije.'
        ],
        duration: 60,
        price: 25,
        image: 'some img'
    },
    {
        title: 'OPUSTAJUCA MASAZA',
        info: [
            'Na online konzultacijama možete saznati više o svom problemu/stanju i mogućim rješenjima',
            'te lakšem načinu nošenja s tegobama u svakodnevici.',
            'Online konzultacije uključuju i dodatnu podršku u obliku programa vježbanja i savjeta.',
        ],
        duration: 30,
        price: 15,
        image: 'some img'
    },
    {
        title: 'COMBO',
        info: [
            'Masaža koju izvodi stručno i obrazovano medicinsko osoblje kao niz sustavnih pokreta na tijelu s ciljem manipuliranja tjelesnim tkivima (kožom, potkožjem, mišićima i mišićnom fascijom)',
            'Ovakva masaža izvodi se u svrhu djelovanja na mišićni i živčani sustav te cirkulaciju krvi i limfe.',
            'Odličan je način pripreme tkiva za primjenu tehnika mobilizacije i manipulacije.',
            'Za razliku od drugih vrsta masaže usmjerena je na otkrivanje i rješavanje uzroka problema, pa postiže dugotrajnije rezultate.'
        ],
        duration: 60,
        price: 25,
        image: 'some img'
    },
    {
        title: 'DOLAZAK NA VASU ADRESU',
        info: [
            'Masaža koju izvodi stručno i obrazovano medicinsko osoblje kao niz sustavnih pokreta na tijelu s ciljem manipuliranja tjelesnim tkivima (kožom, potkožjem, mišićima i mišićnom fascijom)',
            'Ovakva masaža izvodi se u svrhu djelovanja na mišićni i živčani sustav te cirkulaciju krvi i limfe.',
            'Odličan je način pripreme tkiva za primjenu tehnika mobilizacije i manipulacije.',
            'Za razliku od drugih vrsta masaže usmjerena je na otkrivanje i rješavanje uzroka problema, pa postiže dugotrajnije rezultate.'
        ],
        duration: 30-60,
        price: 30,
        image: 'some img'
    }
]

function OnlyList(){
   return (
    <div> 
        {reservationType.map((reservation, i) => 
            <OnlyCard key={i} reservation={reservation}/>
        )}
        <a href='https://www.facebook.com/profile.php?id=61552767607711' style={{backgroundColor: '#426782'}}>
            <img alt="facebook sharing button" src="facebook-icon.png"/>
            Rezerviraj svoj termin
        </a>
        </div>
    )
}

function OnlyCard({ reservation: { title, info, image, price, duration}}){
    return <div>
        <label>
            <h1>{title}</h1>
            <div>
                {info.map((infos, i) => 
                    <p key={i}>{infos}</p>
                )}
                <p>{image}</p>
                <p>Trajanje: <b>{duration} min</b></p>
                <p>Cijena: <b>{price} €</b></p>
            </div>
        </label>
    </div>
}

// function StepWrapper({currentStep, setCurrentStep, setFormState}){
//     switch(currentStep){
//         case 0:
//             return <ReserveInfoSection setCurrentStep={setCurrentStep}/>
//         case 1:
//             return <ReserveList setCurrentStep={setCurrentStep} setFormState={setFormState}/>
//         case 2:
//             return <ReservationTimeSection setCurrentStep={setCurrentStep} setFormState={setFormState} />
//         case 3:
//             return <PersonalInfoSection setCurrentStep={setCurrentStep} setFormState={setFormState} />
//         default:
//             return <ReserveInfoSection setCurrentStep={setCurrentStep}/>
//     }
// }

// function ReserveInfoSection({setCurrentStep}){
//     return <div>
//         <h1>Reserve your appointment today</h1>
//         <div>
//             <p>Lorem ipsumn sadkjasd</p>
//             <p>Lorem ipsumn sadkjasd</p>
//             <p>Lorem ipsumn sadkjasd</p>
//             <p>Lorem ipsumn sadkjasd</p>
//         </div>
//         <button onClick={() => setCurrentStep(1)}>Next</button>
//     </div>
// }

// function ReserveList({setCurrentStep, setFormState}){

//     const { handleSubmit } = useFormContext(); 

//     const addToFormData = (formData) => {
//         setCurrentStep(2);
//         setFormState((oldData => { 
//             return {...oldData, formData}
//         }))
//     }

//     return (
//         <form onSubmit={handleSubmit(addToFormData)}>
//             {reservationType.map((reservation, i) => 
//                 <ReserveCard key={i} index={i} reservation={reservation} />
//             )}
//             <button 
//                 type='submit'
//             >
//                 Next
//             </button>
//         </form>
//     )
// }

// function ReserveCard({index, reservation: { title, info, image}}){

//     const { register } = useFormContext();

//     return <div>
//         <input {...register('reserve-card')} id={`reserve-card-${index}`} type='radio' value={`${index}`}/>
//         <label htmlFor={`reserve-card-${index}`}>
//             <h1>{title}</h1>
//             <div>
//                 {info.map((infos, i) => 
//                     <p key={i}>{infos}</p>
//                 )}
//                 <p>{image}</p>
//             </div>
//         </label>
//     </div>
// }

// function ReservationTimeSection({setCurrentStep, setFormState}){

//     const { handleSubmit, register } = useFormContext();

//     const addToFormData = (formData) => {
//         setCurrentStep(3);
//         setFormState((oldData => { 
//             return {...oldData, formData}
//         }))
//     }

//     return <form onSubmit={handleSubmit(addToFormData)}>
//         <div>
//             <h1>Datum termina:</h1>
//             <input {...register('date')}/>
//         </div>
//         <div>
//             <h1>Vrijeme termina:</h1>
//             <input {...register('time')}/>
//         </div>
//         <button 
//             type='submit'
//         >
//             Next
//         </button>
//     </form>

// }

// function PersonalInfoSection({setCurrentStep, setFormState}){
    
//     const { register, handleSubmit } = useFormContext();

//     const addToFormData = (formData) => {
//         setCurrentStep(4);
//         setFormState((oldData => { 
//             return {...oldData, formData}
//         }))
//     }
    
//     return <form onSubmit={handleSubmit(addToFormData)}>
//         <div>
//             <label>Ime i Prezime</label>
//             <input {...register('name')} placeholder='Ime i Prezime'/>
//         </div>
//         <div>
//             <label>E-posta</label>
//             <input {...register('email')} placeholder='E-posta'/>
//         </div>
//         <div>
//             <label>Telefonski broj</label>
//             <input {...register('phoneNumber')} placeholder='Telefonski broj'/>
//         </div>
//         <div>
//             <label>Napomene</label>
//             <input {...register('notes')} placeholder='Posebni zahtjevi'/>
//         </div>
//         <button type='submit'>Rezerviraj</button>
//     </form>
// }

// function SuccessfulReservation(){
//     return <div>
//         Rezervali ste termin 12.5 u 13:00 za x y z .
//         Adresa:
//         Kontakt broj
//         Kartu:
//         Price:
//     </div>
// }