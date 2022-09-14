import './Fish.css';
import { ACContext } from '../../../context/context';
import { useContext , useState , useEffect } from 'react';


const Fish = ( ) => {
  
  const { MainObject } = useContext(ACContext);

  const searchPanel  = document.querySelector('.search-panel__input'); 
  const iconFishImg  = document.querySelectorAll('.icon-fish-img');
  const fishCard     = document.querySelectorAll('.card');
  const fishInfoExp  = document.querySelectorAll('.info-expanded');
  const months       = document.querySelectorAll('.months'); 
  // const nameFish     = document.querySelectorAll('.name-fish'); 
  // const rarityFish   = document.querySelectorAll('.rarity-fish'); 
  // const locationFish = document.querySelectorAll('.location-fish'); 
  const priceFish    = document.querySelectorAll('.price-fish'); 
  const priceCjFish  = document.querySelectorAll('.price-cj-fish'); 
  const shadowFish   = document.querySelectorAll('.shadow-fish'); 
  
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

    if (mouseX >= iconX ) {
      fishImage.style.transform = `rotate( ${ angle }rad ) rotateY( 180deg )`;
    } else {
      fishImage.style.transform = `rotate( ${ angle }rad ) rotateY( 0deg )`;
    };

    fishImage.style.translate = ` ${ movX }px  ${ movY }px `;
    fishImage.style.backgroundColor = 'transparent';    
  };
  
  const backFish = ( event, i ) => {
    const fishImage = iconFishImg[ i - 1 ];
    const card      = fishCard[ i - 1 ];

    let cardW  = card.getBoundingClientRect().width,
        cardH  = card.getBoundingClientRect().height;

    fishImage.style.boxShadow  = 'inset 0 0 1rem var(--normal), 0 0 0 .5rem var(--background)';
    fishImage.style.translate  = ` ${cardW/2 - 32}px  ${cardH - 32}px `;
    fishImage.style.transform  = 'rotate( 0deg ) ';
    fishImage.style.backgroundColor = 'var(--background)';
  };

  const expandCard = (event, i) => {
    const fishImage = iconFishImg[ i - 1 ];
    const card      = fishCard[ i - 1 ];
    const infoExp   = fishInfoExp[ i - 1 ];

    let cardW  = card.getBoundingClientRect().width;
    if (isExpand) {
      card.style.height         = '250px';
      fishImage.style.translate = `${cardW/2 - 32}px 218px`;
      infoExp.style.visibility  = 'hidden';
      infoExp.style.position    = 'absolute';
    } else {
      card.style.height         = '400px';
      fishImage.style.translate = `${cardW/2 - 32}px 368px`;
      infoExp.style.visibility  = 'visible';
      infoExp.style.position    = 'relative';
    }
  };

  const searchFilter = f => f.name['name-USen'].includes(searchPanel.value.toLowerCase());

  const rarityFilter  = [
    f => f,
    f => f.availability.rarity === 'Common',
    f => f.availability.rarity === 'Uncommon',
    f => f.availability.rarity === 'Rare',
    f => f.availability.rarity === 'Ultra-rare',
  ];
  
  const locationFilter  = [
    f => f,
    f => f.availability.location.includes('Pond'),
    f => f.availability.location.includes('River'),
    f => f.availability.location.includes('Pier'),
    f => f.availability.location.includes('Sea'),
  ];

  const priceSorter  = [
    (a,b) => a / b,
    (a,b) => a.price - b.price,
    (a,b) => b.price - a.price,
  ];

  const shadowSorter  = [
    (a,b) => a / b,
    (a,b) => +a.shadow.match( /[0-9]+/g ) - +b.shadow.match( /[0-9]+/g ),
    (a,b) => +b.shadow.match( /[0-9]+/g ) - +a.shadow.match( /[0-9]+/g ),
  ];

  const [ zonaNorte      , setZonaNorte ]       = useState(true);
  const [ sortPrice      , setSortPrice ]       = useState(0);
  const [ filterRarity   , setFilterRarity ]    = useState(0);
  const [ filterLocation , setFilterLocation ]  = useState(0);
  const [ sortShadow     , setSortShadow ]      = useState(0);
  const [ isSearch       , setIsSearch ]        = useState(false);
  const [ isExpand       , setIsExpand ]        = useState(false);

  useEffect(() => {
    months.forEach(v => v.style.backgroundColor = '#7e775e' );
    setTimeout(() => months.forEach(v => v.style.backgroundColor = 'transparent' )
    , 800);
  }, [zonaNorte]);

  useEffect(() => {
    priceFish.forEach(v => v.style.backgroundColor = '#7e775e' );
    priceCjFish.forEach(v => v.style.backgroundColor = '#7e775e' );
    setTimeout(() => {
      priceFish.forEach(v => v.style.backgroundColor = 'transparent' );
      priceCjFish.forEach(v => v.style.backgroundColor = 'transparent' );
  }, 800);
  }, [sortPrice]);

//   useEffect(() => {
//     rarityFish.forEach(v => v.style.backgroundColor = '#7e775e' );
//     setTimeout(() => rarityFish.forEach(v => v.style.backgroundColor = 'transparent' )
//     , 800);
// }, [filterRarity]);

//   useEffect(() => {
//     locationFish.forEach(v => v.style.backgroundColor = '#7e775e' );
//     setTimeout(() => locationFish.forEach(v => v.style.backgroundColor = 'transparent' )
//     , 800);
// }, [filterLocation]);

  useEffect(() => {
    shadowFish.forEach(v => v.style.backgroundColor = '#7e775e' );
    setTimeout(() => shadowFish.forEach(v => v.style.backgroundColor = 'transparent' )
    , 800);
  }, [sortShadow]);

  const rarityState = [
    'All',
    'Common',
    'Uncommon',
    'Rare',
    'Ultra-rare' ];

  const locationState = [
    'All',
    'Pond',
    'River',
    'Pier',
    'Sea' ];


  return (

    <div className='table'>

    <div className="search-panel">
      <input className="search-panel__input" type="text" onKeyUp={ () => setIsSearch( isSearch ? false : true ) }/> 
      <button className="search-panel__button" onClick={ () => setIsSearch( isSearch ? false : true ) } >🔍</button>
    </div>

    <div className="all-buttons">

        <b>Sort by:  </b>
      <div className='sorting'>
        
        <button className='sortBtn' 
          onClick={ () => setSortPrice( sortPrice < 2 ? sortPrice + 1 : 0 )} 
        >Price</button>

        <button className='sortBtn' 
          onClick={ () => setFilterRarity( filterRarity < 4 ? filterRarity + 1 : 0 )} 
          >Rarity
          <div className="rarity-state">({ rarityState[filterRarity] })</div>
          </button>

        <button className='sortBtn' 
          onClick={ () => setFilterLocation( filterLocation < 4 ? filterLocation + 1 : 0 )} 
        >Location
        <div className="location-state">({ locationState[filterLocation] })</div>
        </button>

        <button className='sortBtn' 
          onClick={ () => setSortShadow( sortShadow < 2 ? sortShadow + 1 : 0 )} 
        >Shadow size</button>

      </div>

        <div className='buttons'>
          <button className='btn' onClick={ () => setZonaNorte(true) } >Northern</button>
          <h3 className='zone' >{ zonaNorte ? 'Northern' : 'Southern' }</h3>
          <button className='btn' onClick={ () => setZonaNorte(false) } >Southern</button>
        </div>

      </div>

      { (MainObject.length > 0) ?

        ( isSearch || !isSearch) && MainObject

        .filter( searchFilter )

        .filter( locationFilter[filterLocation] )
        .filter( rarityFilter[filterRarity] )
        
        .sort( priceSorter[ sortPrice ] )
        .sort( shadowSorter[ sortShadow ] )

        .map( (  fish  ) => (

        <div className="gallery" key={fish.id}>
          <button className='exp_card' 
          onClick={ () => expandCard(event, fish.id) || setIsExpand( isExpand ? false : true ) }></button>
          <figure className='card'  
          onMouseMove={ () => followFish( event, fish.id ) }
          onMouseLeave={ () => backFish( event, fish.id ) }
          >
            <h1 className='name-fish' >{ fish.name['name-USen'] }</h1>
            
            <ul className='info-fish' >
              <li>
                <p>Price - <b className='price-fish' >{ fish.price } bayas</b></p>
                <p>Price(CJ) - <b className='price-cj-fish' >{ fish['price-cj'] } bayas</b></p>
              </li>
              <li>
                {/* <p>Rarity - <b className='rarity-fish' >{ fish.availability.rarity }</b></p> */}
                <p>Rarity - <b >{ fish.availability.rarity }</b></p>
                <p>Time - <b>{ fish.availability.isAllDay? 'All day' : fish.availability.time }</b></p>
              </li>
              <li>
                {/* <p>Location - <b className='location-fish' >{ fish.availability.location }</b></p> */}
                <p>Location - <b >{ fish.availability.location }</b></p>
                <p>Shadow size - <b className='shadow-fish' >{ fish.shadow }</b></p>
              </li>
            </ul>
              <div className="info-expanded">
                <p>Catch phrase - <b>{ fish['catch-phrase'] }</b></p>
                <p>Museum description - <b>{ fish['museum-phrase'] }</b></p>
              </div>
                
            <div className='calendar' > 
              <p>Disponibility:</p>
              <ul className='months' >
                { fish.availability.isAllYear  ? 'All Year' : ( zonaNorte 
                ? fish.availability['month-array-northern'] : fish.availability['month-array-southern'])
                .map( (v , i , a) => {
                  // let arrMonths = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'  ];
                  
                  (i === (a.length - 1 ) || i === 0 ? (
                    v === 1 &&  (v = 'Jan') || 
                    v === 2 &&  (v = 'Feb') || 
                    v === 3 &&  (v = 'Mar') ||
                    v === 4 &&  (v = 'Apr') ||
                    v === 5 &&  (v = 'May') ||
                    v === 6 &&  (v = 'Jun') ||
                    v === 7 &&  (v = 'Jul') ||
                    v === 8 &&  (v = 'Aug') ||
                    v === 9 &&  (v = 'Sep') ||
                    v === 10 && (v = 'Oct') ||
                    v === 11 && (v = 'Nov') ||
                    v === 12 && (v = 'Dec')
                    ) : v = ''
                  ); 
                  return v;

                  } ).join( ' ' ).replace(/\s+/g, ' - ') }
              </ul>
            </div>

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