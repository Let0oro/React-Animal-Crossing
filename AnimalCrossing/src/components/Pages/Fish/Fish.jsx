import './Fish.css';
import { ACContext } from '../../../context/context';
import { useContext , useState , useEffect } from 'react';


const Fish = ( ) => {
  
  const { MainObject } = useContext(ACContext);

  const iconFishImg = document.querySelectorAll('.icon-fish-img');
  const fishCard = document.querySelectorAll('.card');
  const months = document.querySelectorAll('.months');
  
  
  const followFish = ( event, i ) => {
    const fishImage = iconFishImg[ i - 1 ];
    const card      = fishCard[ i - 1 ];


    fishImage.style.left = 0;
    fishImage.style.top = 0;
    fishImage.style.boxShadow = 'none';


    let mouseX = event.clientX,        
        mouseY = event.clientY,
        iconX  = fishImage.getBoundingClientRect().left + 16, // +2rem 
        iconY  = fishImage.getBoundingClientRect().top  + 16, // +2rem
        baseX  = mouseX - iconX,
        laterY = mouseY - iconY,
        cardX  = card.getBoundingClientRect().left,
        cardY  = card.getBoundingClientRect().top,
        movX   = mouseX - cardX,
        movY   = mouseY - cardY,
        angle  = Math.atan(laterY / baseX);

    const translate = ` ${ movX }px  ${ movY }px `;
        
    if (mouseX >= iconX ) {
      fishImage.style.transform = `rotate( ${ angle }rad ) rotateY( 180deg )`;
    } else {
      fishImage.style.transform = `rotate( ${ angle }rad ) rotateY( 0deg )`;
    };

    fishImage.style.translate = `${translate}`;
    fishImage.style.backgroundColor = 'transparent';    
  };
  
  const backFish = ( event, i ) => {
    const fishImage = iconFishImg[ i - 1 ];
    const card      = fishCard[ i - 1 ];

    let cardW  = card.getBoundingClientRect().width,
        cardH  = card.getBoundingClientRect().height;

    fishImage.style.boxShadow  = 'inset 0 0 1rem var(--normal)';
    fishImage.style.translate  = ` ${cardW/2 - 32}px  ${cardH - 32}px `;
    fishImage.style.transform  = 'rotate( 0deg ) '
  };


  useEffect(() => {
      months.forEach(v => v.style.backgroundColor = '#7e775e' );
      setTimeout(() => months.forEach(v => v.style.backgroundColor = 'transparent' )
      , 800);
  }, [months]);

  const [ zonaNorte, setZonaNorte ] = useState(true);


  return (

    <div className='table'>

    <div className='buttons'>
      <button className='btn' onClick={ () => setZonaNorte(true) } >Northern</button>
      <button className='btn' onClick={ () => setZonaNorte(false) } >Southern</button>
    </div>

    <h3 className='zone' >{ zonaNorte ? 'Northern' : 'Southern' }</h3>

    <div className='sorting'>
      <b>Sort by:  </b>
      <button className='sortBtn' >Price</button>
      <button className='sortBtn' >Rarity</button>
      <button className='sortBtn' >Location</button>
      <button className='sortBtn' >Shadow size</button>

    </div>

        { (MainObject.length > 0) ?
        MainObject
        .map( (  fish  ) => (

        <div className="gallery" key={fish.id}>
          <figure className='card'  
          onMouseMove={ () => followFish( event, fish.id ) }
          onMouseLeave={ () => backFish( event, fish.id ) }
          >
            <h1 className='name-fish' >{ fish.name['name-USen'] }</h1>
            
            <ul className='info-fish' >
              <li>
                <p>Price - <b>{ fish.price } bayas</b></p>
                <p>Price(CJ) - <b>{ fish['price-cj'] } bayas</b></p>
              </li>
              <li>
                <p>Rarity - <b>{ fish.availability.rarity }</b></p>
                <p>Time - <b>{ fish.availability.isAllDay? 'All day' : fish.availability.time }</b></p>
              </li>
              <li>
                <p>Location - <b>{ fish.availability.location }</b></p>
                <p>Shadow size - <b>{ fish.shadow }</b></p>
              </li>
            </ul>

            <div className='calendar' > 
              <p>Disponibility:</p>
              <ul className='months' >
                { fish.availability.isAllYear  ? 'All Year' : ( zonaNorte 
                ? fish.availability['month-array-northern'] : fish.availability['month-array-southern'])
                .map( (v , i , a) => {
                  
                  (i === (a.length - 1 ) || i === 0 ? (

                    v === 1 && (v = 'Jan') ||
                    v === 2 && (v = 'Feb') || 
                    v === 3 && (v = 'Mar') ||
                    v === 4 && (v = 'Apr') ||
                    v === 5 && (v = 'May') ||
                    v === 6 && (v = 'Jun') ||
                    v === 7 && (v = 'Jul') ||
                    v === 8 && (v = 'Ago') ||
                    v === 9 && (v = 'Sep') ||
                    v === 10 && (v = 'Oct') ||
                    v === 11 && (v = 'Nov') ||
                    v === 12 && (v = 'Dec')
                    ) : v = ''
                  ); 

                  return v;

                  } ).join( ' ' ).replace(/\s+/g, ' - ') }
              </ul>
            </div>

            {/* <img className="icon-fish" src={fish.icon_uri} alt={`icon of ${ fish.name['name-USen']}`} ></img> */}
            <img className='icon-fish-img' src={ fish.icon_uri } alt={`icon of ${ fish.name['name-USen']}`} />
          </figure>
        </div>


      )) 
      : (
        <h2 className='charge' >Cargando...</h2> 
      )}
    </div>

  )
}

export default Fish;